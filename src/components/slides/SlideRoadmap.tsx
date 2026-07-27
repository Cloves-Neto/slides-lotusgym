import React from 'react';
import { Calendar, CheckCircle2, Zap, Clock, ShieldCheck, Flag } from 'lucide-react';

export const SlideRoadmap: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-10 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <Calendar className="w-4 h-4 text-yellow-400" />
          <span>SLIDE 18 • CRONOGRAMA DE EXECUÇÃO (AGOSTO A DEZEMBRO)</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-yellow-400 uppercase tracking-tight">
          Roadmap de Implementação — 5 Meses Táticos
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          Cronograma alinhado às novas ações de conveniência (Refil & Massagem), ideias comerciais de Jéssica e Joceli e sprints.
        </p>
      </div>

      {/* Horizontal Timeline (5 Months: Agosto to Dezembro) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 my-auto relative">
        {/* Month 1 - Agosto */}
        <div className="p-3.5 bg-zinc-900 border-2 border-yellow-400 flex flex-col justify-between space-y-2 relative group">
          <div className="space-y-2">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5">
              <span className="text-[10px] font-mono font-black text-black bg-yellow-400 px-1.5 py-0.5 uppercase">
                AGOSTO
              </span>
              <span className="text-[9px] font-mono font-bold text-yellow-400 uppercase">
                SPRINT 01
              </span>
            </div>

            <h3 className="text-xs font-black text-white uppercase tracking-tight">Estruturação & Cotações SBC</h3>

            <ul className="space-y-1.5 text-[11px] text-zinc-300 font-mono">
              <li className="flex items-start gap-1">
                <CheckCircle2 className="w-3 h-3 text-yellow-400 shrink-0 mt-0.5" />
                <span>Cotação & Contrato de Locação Refil Isotônico em SBC.</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                <span>Definição de Comodato/Aluguel Cadeira de Massagem.</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                <span>Setup do quadro de Sprints no Monday / ClickUp.</span>
              </li>
            </ul>
          </div>

          <div className="pt-1.5 border-t border-zinc-800 text-[9px] font-mono text-yellow-400 font-bold">
            • ENTREGÁVEL: Fornecedores contratados.
          </div>
        </div>

        {/* Month 2 - Setembro */}
        <div className="p-3.5 bg-zinc-900 border-2 border-yellow-400 flex flex-col justify-between space-y-2 relative group">
          <div className="space-y-2">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5">
              <span className="text-[10px] font-mono font-black text-black bg-yellow-400 px-1.5 py-0.5 uppercase">
                SETEMBRO
              </span>
              <span className="text-[9px] font-mono font-bold text-yellow-400 uppercase">
                SPRINT 02
              </span>
            </div>

            <h3 className="text-xs font-black text-white uppercase tracking-tight">Instalação & Ativação Balcão</h3>

            <ul className="space-y-1.5 text-[11px] text-zinc-300 font-mono">
              <li className="flex items-start gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                <span>Instalação física do Refil e Cadeira na LotusGym.</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                <span>Venda de Doses Diárias prontas e geladas (Joceli).</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                <span>Primeiro evento interno de degustação Whey/Pré-treino.</span>
              </li>
            </ul>
          </div>

          <div className="pt-1.5 border-t border-zinc-800 text-[9px] font-mono text-yellow-400 font-bold">
            • ENTREGÁVEL: Início do faturamento direto.
          </div>
        </div>

        {/* Month 3 - Outubro */}
        <div className="p-3.5 bg-zinc-900 border-2 border-yellow-400 flex flex-col justify-between space-y-2 relative group">
          <div className="space-y-2">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5">
              <span className="text-[10px] font-mono font-black text-black bg-yellow-400 px-1.5 py-0.5 uppercase">
                OUTUBRO
              </span>
              <span className="text-[9px] font-mono font-bold text-yellow-400 uppercase">
                SPRINT 03
              </span>
            </div>

            <h3 className="text-xs font-black text-white uppercase tracking-tight">Linha Fitness & Eventos</h3>

            <ul className="space-y-1.5 text-[11px] text-zinc-300 font-mono">
              <li className="flex items-start gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                <span>Lançamento da Linha Fitness (Roupas & Acessórios).</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                <span>Estande LotusGym em campeonatos e corridas (Jéssica).</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                <span>Estruturação do Espaço Cafeteria & Chás Naturais.</span>
              </li>
            </ul>
          </div>

          <div className="pt-1.5 border-t border-zinc-800 text-[9px] font-mono text-yellow-400 font-bold">
            • ENTREGÁVEL: Expansão do mix de vestuário.
          </div>
        </div>

        {/* Month 4 - Novembro */}
        <div className="p-3.5 bg-zinc-900 border-2 border-yellow-400 flex flex-col justify-between space-y-2 relative group">
          <div className="space-y-2">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5">
              <span className="text-[10px] font-mono font-black text-black bg-yellow-400 px-1.5 py-0.5 uppercase">
                NOVEMBRO
              </span>
              <span className="text-[9px] font-mono font-bold text-yellow-400 uppercase">
                SPRINT 04
              </span>
            </div>

            <h3 className="text-xs font-black text-white uppercase tracking-tight">Black Friday & Combos</h3>

            <ul className="space-y-1.5 text-[11px] text-zinc-300 font-mono">
              <li className="flex items-start gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                <span>Campanha Black Performance (Anual + Refil Pass).</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                <span>Automação WhatsApp & Régua de Retenção.</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                <span>Ativação B2B de Convênios Empresariais.</span>
              </li>
            </ul>
          </div>

          <div className="pt-1.5 border-t border-zinc-800 text-[9px] font-mono text-yellow-400 font-bold">
            • ENTREGÁVEL: Pico de vendas de fim de ano.
          </div>
        </div>

        {/* Month 5 - Dezembro */}
        <div className="p-3.5 bg-zinc-900 border-2 border-yellow-400 flex flex-col justify-between space-y-2 relative group">
          <div className="space-y-2">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5">
              <span className="text-[10px] font-mono font-black text-black bg-yellow-400 px-1.5 py-0.5 uppercase">
                DEZEMBRO
              </span>
              <span className="text-[9px] font-mono font-bold text-yellow-400 uppercase">
                AVALIAÇÃO
              </span>
            </div>

            <h3 className="text-xs font-black text-white uppercase tracking-tight">Consolidação & Meta 6.3k</h3>

            <ul className="space-y-1.5 text-[11px] text-zinc-300 font-mono">
              <li className="flex items-start gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                <span>Atingimento da marca de 6.300 alunos ativos.</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                <span>Apurado de ROI do Refil de Isotônico & Massagem.</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                <span>Planejamento de expansão de unidades para 2025.</span>
              </li>
            </ul>
          </div>

          <div className="pt-1.5 border-t border-zinc-800 text-[9px] font-mono text-yellow-400 font-bold">
            • ENTREGÁVEL: Recorde histórico de faturamento.
          </div>
        </div>
      </div>

      {/* Execution Guarantee Banner */}
      <div className="p-3 bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center justify-between">
        <span className="flex items-center gap-2 text-yellow-400 font-bold">
          <Zap className="w-4 h-4" /> GESTÃO CONTÍNUA VIA BOARD MONDAY / CLICKUP
        </span>
        <span className="text-white font-bold">MONITORAMENTO SEMANAL DE SPRINT</span>
      </div>
    </div>
  );
};
