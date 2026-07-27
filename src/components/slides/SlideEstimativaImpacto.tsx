import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, AlertCircle, Sparkles, RefreshCw } from 'lucide-react';
import { GymMetrics } from '../../types';

interface SlideEstimativaImpactoProps {
  gymMetrics: GymMetrics;
}

export const SlideEstimativaImpacto: React.FC<SlideEstimativaImpactoProps> = ({ gymMetrics }) => {
  // Simulator State
  const [targetMembers, setTargetMembers] = useState<number>(1050);
  const [targetTicket, setTargetTicket] = useState<number>(175);
  const [targetChurn, setTargetChurn] = useState<number>(4.0);

  // Current baseline
  const currentMRR = gymMetrics.activeMembers * gymMetrics.avgTicket;
  const currentAnnual = currentMRR * 12;

  // Projected baseline
  const projectedMRR = targetMembers * targetTicket;
  const projectedAnnual = projectedMRR * 12;

  // Monthly & Annual Gains
  const monthlyGain = projectedMRR - currentMRR;
  const annualGain = projectedAnnual - currentAnnual;

  // Churn savings calculation (e.g. 8.5% churn reduced to targetChurn%)
  const churnDeltaPercent = Math.max(0, gymMetrics.monthlyChurn - targetChurn);
  const membersSavedPerMonth = Math.round(targetMembers * (churnDeltaPercent / 100));
  const annualChurnValueSaved = membersSavedPerMonth * targetTicket * 12;

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <Calculator className="w-4 h-4 text-yellow-400" />
          <span>SLIDE 20 • SIMULADOR INTERATIVO DE PROJEÇÃO</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
          Estimativa de Impacto Financeiro
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          Simule o incremento de faturamento gerado pela otimização combinada de base, ticket e retenção.
        </p>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto items-center">
        {/* Sliders Control Panel (6 cols) */}
        <div className="lg:col-span-6 p-5 bg-zinc-900 border-2 border-yellow-400 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
            <span className="text-xs font-mono font-bold text-yellow-400 uppercase flex items-center gap-1.5">
              <Calculator className="w-4 h-4" /> AJUSTE AS METAS DE EXPANSÃO
            </span>
            <button
              onClick={() => {
                setTargetMembers(1050);
                setTargetTicket(175);
                setTargetChurn(4.0);
              }}
              className="text-[10px] font-mono text-zinc-400 hover:text-yellow-400 flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" /> Resetar
            </button>
          </div>

          {/* Slider 1: Target Members */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-zinc-300">Base de Alunos Ativos:</span>
              <span className="text-yellow-400 font-extrabold">{targetMembers} Alunos</span>
            </div>
            <input
              type="range"
              min="800"
              max="1500"
              step="25"
              value={targetMembers}
              onChange={(e) => setTargetMembers(Number(e.target.value))}
              className="w-full accent-yellow-400 bg-zinc-800 h-2 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
              <span>Atual: {gymMetrics.activeMembers}</span>
              <span>Meta Máxima: 1.500</span>
            </div>
          </div>

          {/* Slider 2: Target Ticket */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-zinc-300">Ticket Médio (com Add-ons):</span>
              <span className="text-yellow-400 font-extrabold">R$ {targetTicket.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="139"
              max="240"
              step="5"
              value={targetTicket}
              onChange={(e) => setTargetTicket(Number(e.target.value))}
              className="w-full accent-yellow-400 bg-zinc-800 h-2 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
              <span>Atual: R$ {gymMetrics.avgTicket.toFixed(2)}</span>
              <span>Teto com Lotus Club: R$ 240,00</span>
            </div>
          </div>

          {/* Slider 3: Target Churn */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-zinc-300">Meta de Churn Mensal:</span>
              <span className="text-red-400 font-extrabold">{targetChurn.toFixed(1)}% / mês</span>
            </div>
            <input
              type="range"
              min="2.5"
              max="8.5"
              step="0.5"
              value={targetChurn}
              onChange={(e) => setTargetChurn(Number(e.target.value))}
              className="w-full accent-red-500 bg-zinc-800 h-2 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
              <span>Atual: {gymMetrics.monthlyChurn}%</span>
              <span>Meta Excelente: 2.5%</span>
            </div>
          </div>
        </div>

        {/* Live Simulation Results Card (6 cols) */}
        <div className="lg:col-span-6 space-y-3">
          <div className="p-5 bg-zinc-900 border-2 border-yellow-400 space-y-4">
            <span className="text-xs font-mono font-bold text-yellow-400 uppercase block border-b border-zinc-800 pb-2">
              RESULTADO DA PROJEÇÃO SIMULADA
            </span>

            <div className="grid grid-cols-2 gap-3 font-mono">
              <div className="p-3 bg-black border border-zinc-800">
                <span className="text-[10px] text-zinc-400 block uppercase">NOVO MRR ESTIMADO</span>
                <div className="text-2xl font-black text-yellow-400">
                  R$ {(projectedMRR / 1000).toFixed(1)}k/mês
                </div>
                <span className="text-[10px] text-emerald-400">
                  +R$ {(monthlyGain / 1000).toFixed(1)}k/mês de incremento
                </span>
              </div>

              <div className="p-3 bg-black border border-zinc-800">
                <span className="text-[10px] text-zinc-400 block uppercase">VALOR ANUAL ACUMULADO</span>
                <div className="text-2xl font-black text-white">
                  R$ {(projectedAnnual / 1000).toFixed(0)}k/ano
                </div>
                <span className="text-[10px] text-emerald-400 font-bold">
                  +R$ {(annualGain / 1000).toFixed(0)}k novos/ano
                </span>
              </div>
            </div>

            <div className="p-3 bg-red-950/40 border border-red-600 text-xs font-mono space-y-1">
              <div className="text-red-400 font-bold flex items-center justify-between">
                <span>RETENÇÃO DE CAIXA POR REDUÇÃO DE CHURN:</span>
                <span>{membersSavedPerMonth} alunos/mês salvos</span>
              </div>
              <p className="text-zinc-200 text-[11px]">
                Preservação estimada de <span className="text-yellow-400 font-bold">R$ {(annualChurnValueSaved / 1000).toFixed(0)}k por ano</span> apenas estancando o cancelamento com o ecossistema CRM+BI.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Red Highlight Callout as requested in prompt */}
      <div className="p-4 bg-red-950/60 border-2 border-red-600 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-red-600 text-white font-black flex items-center justify-center text-sm shrink-0">
            !
          </div>
          <span className="text-xs md:text-base font-black text-white uppercase tracking-wide">
            EXEMPLO DE IMPACTO: "Redução de 4% no Churn = R$ {(annualChurnValueSaved / 1000).toFixed(0)}.000+ adicionais ao ano."
          </span>
        </div>
        <span className="px-3 py-1 bg-yellow-400 text-black font-mono font-bold text-xs uppercase shrink-0 hidden md:inline">
          RETORNO ALTAMENTE LUCRATIVO
        </span>
      </div>
    </div>
  );
};
