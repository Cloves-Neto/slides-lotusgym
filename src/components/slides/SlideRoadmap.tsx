import React from 'react';
import { Calendar, CheckCircle2, Rocket, Zap, Clock, ShieldCheck } from 'lucide-react';

export const SlideRoadmap: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <Calendar className="w-4 h-4 text-yellow-400" />
          <span>SLIDE 18 • CRONOGRAMA DE EXECUÇÃO</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
          Roadmap de Implementação (180 Dias)
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          Plano tático por fases focado em entregar Quick Wins nos primeiros 30 dias de projeto.
        </p>
      </div>

      {/* Horizontal Timeline (3 Months / Phases) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto relative">
        {/* Phase 1 */}
        <div className="p-5 bg-zinc-900 border-2 border-yellow-400 space-y-3 relative group">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
            <span className="text-xs font-mono font-black text-black bg-yellow-400 px-2 py-0.5">
              MÊS 01
            </span>
            <span className="text-xs font-mono font-bold text-yellow-400 uppercase">
              QUICK WINS
            </span>
          </div>

          <h3 className="text-base font-extrabold text-white">Ativação & Landing Pages</h3>

          <ul className="space-y-2 text-xs text-zinc-300 font-mono">
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
              <span>Lançamento do Novo Site de Alta Conversão.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
              <span>Campanha de Tráfego Pago (Meta & Google Ads).</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
              <span>Programa "Indique & Ganhe" no Balcão.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
              <span>Semana da Performance (Desmobilização Estoque).</span>
            </li>
          </ul>

          <div className="pt-2 border-t border-zinc-800 text-[10px] font-mono text-yellow-400 font-bold">
            ENTREGA: Primeiro pico de caixa e novos leads.
          </div>
        </div>

        {/* Phase 2 */}
        <div className="p-5 bg-zinc-900 border-2 border-yellow-400 space-y-3 relative group">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
            <span className="text-xs font-mono font-black text-black bg-yellow-400 px-2 py-0.5">
              MÊS 02
            </span>
            <span className="text-xs font-mono font-bold text-yellow-400 uppercase">
              CRM & PROCESSOS
            </span>
          </div>

          <h3 className="text-base font-extrabold text-white">Automação & Vendas</h3>

          <ul className="space-y-2 text-xs text-zinc-300 font-mono">
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
              <span>Integração do CRM com Sistema ABCEVO/Catracas.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
              <span>Treinamento da Recepção em Cadência Comercial.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
              <span>Régua de Recuperação de Ex-alunos Inativos.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
              <span>Lançamento do Lotus Performance Club.</span>
            </li>
          </ul>

          <div className="pt-2 border-t border-zinc-800 text-[10px] font-mono text-yellow-400 font-bold">
            ENTREGA: Conversão de vendas saltando para 20%+.
          </div>
        </div>

        {/* Phase 3 */}
        <div className="p-5 bg-zinc-900 border-2 border-yellow-400 space-y-3 relative group">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
            <span className="text-xs font-mono font-black text-black bg-yellow-400 px-2 py-0.5">
              MESES 03 A 06
            </span>
            <span className="text-xs font-mono font-bold text-yellow-400 uppercase">
              ESCALA & IA
            </span>
          </div>

          <h3 className="text-base font-extrabold text-white">BI, Agente IA & B2B</h3>

          <ul className="space-y-2 text-xs text-zinc-300 font-mono">
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
              <span>Implantação dos Dashboards de BI Gerencial Live.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
              <span>Ativação do Agente de IA no WhatsApp 24/7.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
              <span>Expansão de Convênios Empresariais B2B.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
              <span>Análise de Preditividade de Churn ativa.</span>
            </li>
          </ul>

          <div className="pt-2 border-t border-zinc-800 text-[10px] font-mono text-yellow-400 font-bold">
            ENTREGA: Operação escalável e previsível.
          </div>
        </div>
      </div>

      {/* Execution Guarantee Banner */}
      <div className="p-3 bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center justify-between">
        <span className="flex items-center gap-2 text-yellow-400 font-bold">
          <Zap className="w-4 h-4" /> ACOMPANHAMENTO SEMANAL DE SPRINT COM A DIRETORIA
        </span>
        <span className="text-white font-bold">GARANTIA DE EXECUÇÃO DENTRO DO PRAZO</span>
      </div>
    </div>
  );
};
