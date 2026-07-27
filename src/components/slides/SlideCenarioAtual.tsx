import React from 'react';
import { GymMetrics } from '../../types';
import { ArrowDownRight, TrendingUp, Users, DollarSign, Activity, AlertOctagon } from 'lucide-react';

interface SlideCenarioAtualProps {
  gymMetrics: GymMetrics;
}

export const SlideCenarioAtual: React.FC<SlideCenarioAtualProps> = ({ gymMetrics }) => {
  const currentMRR = gymMetrics.activeMembers * gymMetrics.avgTicket;
  const annualRevenue = currentMRR * 12;
  const lostChurnMonthly = Math.round(gymMetrics.activeMembers * (gymMetrics.monthlyChurn / 100));

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <span>SLIDE 04 • DIAGNÓSTICO QUANTITATIVO</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
          Cenário Atual (O Raio-X)
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          Análise analítica dos indicadores operacionais e financeiros da LotusGym hoje.
        </p>
      </div>

      {/* Top Key Numbers (Huge Fonts as requested) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-auto">
        {/* Metric 1 */}
        <div className="p-4 bg-zinc-900 border border-yellow-500/40 relative">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-1">
            <span>ALUNOS ATIVOS</span>
            <Users className="w-4 h-4 text-yellow-400" />
          </div>
          <div className="text-3xl md:text-5xl font-black text-yellow-400 font-mono tracking-tight">
            {gymMetrics.activeMembers.toLocaleString('pt-BR')}
          </div>
          <div className="mt-2 text-[11px] text-zinc-400">
            Capacidade ocupada: <span className="text-white font-bold">~68%</span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="p-4 bg-zinc-900 border border-red-600/60 relative">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-1">
            <span>CHURN MENSAL</span>
            <AlertOctagon className="w-4 h-4 text-red-500" />
          </div>
          <div className="text-3xl md:text-5xl font-black text-red-500 font-mono tracking-tight">
            {gymMetrics.monthlyChurn.toFixed(1)}%
          </div>
          <div className="mt-2 text-[11px] text-red-400 flex items-center gap-1">
            <ArrowDownRight className="w-3.5 h-3.5" />
            <span>~{lostChurnMonthly} cancelamentos/mês</span>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="p-4 bg-zinc-900 border border-yellow-500/40 relative">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-1">
            <span>TICKET MÉDIO</span>
            <DollarSign className="w-4 h-4 text-yellow-400" />
          </div>
          <div className="text-3xl md:text-5xl font-black text-yellow-400 font-mono tracking-tight">
            R$ {gymMetrics.avgTicket.toFixed(0)}
          </div>
          <div className="mt-2 text-[11px] text-zinc-400">
            Plano Padrão sem Add-ons
          </div>
        </div>

        {/* Metric 4 */}
        <div className="p-4 bg-zinc-900 border border-yellow-500/40 relative">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-1">
            <span>MRR ATUAL</span>
            <Activity className="w-4 h-4 text-yellow-400" />
          </div>
          <div className="text-3xl md:text-5xl font-black text-yellow-400 font-mono tracking-tight">
            R$ {(currentMRR / 1000).toFixed(1)}k
          </div>
          <div className="mt-2 text-[11px] text-zinc-400">
            Faturamento Mensal Recorrente
          </div>
        </div>
      </div>

      {/* Diagnostic Data Table */}
      <div className="border border-zinc-800 bg-zinc-900/80 overflow-hidden">
        <div className="bg-zinc-800 px-4 py-2 border-b border-zinc-700 flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-yellow-400 uppercase">
            TABELA DE DIAGNÓSTICO OPERACIONAL DETALHADA
          </span>
          <span className="text-[10px] font-mono text-zinc-400">STATUS DA BASE: AUDITADA</span>
        </div>

        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          <div className="space-y-2">
            <div className="flex justify-between border-b border-zinc-800 pb-1">
              <span className="text-zinc-400">Leads Recebidos/mês:</span>
              <span className="text-white font-bold">{gymMetrics.monthlyLeads}</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800 pb-1">
              <span className="text-zinc-400">Taxa de Conversão Vendas:</span>
              <span className="text-red-400 font-bold">{gymMetrics.conversionRate}% (Baixo)</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between border-b border-zinc-800 pb-1">
              <span className="text-zinc-400">Inadimplência Atual:</span>
              <span className="text-red-400 font-bold">{gymMetrics.unpaidRate}%</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800 pb-1">
              <span className="text-zinc-400">NPS Score (Satisfação):</span>
              <span className="text-yellow-400 font-bold">{gymMetrics.npsScore} / 100</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between border-b border-zinc-800 pb-1">
              <span className="text-zinc-400">Perda Anual por Churn:</span>
              <span className="text-red-500 font-bold">~R$ {((lostChurnMonthly * gymMetrics.avgTicket) * 12 / 1000).toFixed(0)}k/ano</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800 pb-1">
              <span className="text-zinc-400">Projeção Receita Anual:</span>
              <span className="text-white font-bold">R$ {(annualRevenue / 1000).toFixed(0)}k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
