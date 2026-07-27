import React from 'react';
import { BarChart2, ArrowRight, ShieldCheck } from 'lucide-react';
import { GymMetrics } from '../../types';

interface SlideKPIsProps {
  gymMetrics: GymMetrics;
}

export const SlideKPIs: React.FC<SlideKPIsProps> = ({ gymMetrics }) => {
  const kpiRows = [
    {
      metric: 'CAC (Custo de Aquisição de Aluno)',
      today: 'Não Mensurado (~R$ 110)',
      tomorrow: 'Mensurado por Canal (Meta R$ 38)',
      impact: '-65% de Custo'
    },
    {
      metric: 'Taxa de Conversão de Vendas',
      today: `${gymMetrics.conversionRate}% dos Atendimentos`,
      tomorrow: '28% das Oportunidades',
      impact: '+133% em Matrículas'
    },
    {
      metric: 'Churn Mensal (Cancelamentos)',
      today: `${gymMetrics.monthlyChurn}% da Base/Mês`,
      tomorrow: '3.9% a 4.5% da Base',
      impact: '+40% no LTV'
    },
    {
      metric: 'Inadimplência de Mensalidades',
      today: `${gymMetrics.unpaidRate}% do Faturamento`,
      tomorrow: 'Abaixo de 2.5%',
      impact: '+R$ 8k/mês Recuperados'
    },
    {
      metric: 'Ticket Médio por Aluno',
      today: `R$ ${gymMetrics.avgTicket.toFixed(2)}`,
      tomorrow: `R$ ${(gymMetrics.avgTicket + 39.10).toFixed(2)} (com Lotus Club)`,
      impact: '+28% na Margem Bruta'
    },
    {
      metric: 'NPS Score (Satisfação)',
      today: `${gymMetrics.npsScore} PONTOS`,
      tomorrow: '75+ PONTOS (Zona de Excelência)',
      impact: 'Indicação Orgânica'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <BarChart2 className="w-4 h-4 text-yellow-400" />
          <span>SLIDE 19 • MATRIZ DE GESTÃO DE PERFORMANCE</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
          Principais KPIs (O Que Mediremos)
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          Evolução da governança de dados: comparativo direto do modelo intuitivo x modelo analítico.
        </p>
      </div>

      {/* KPI Comparative Table */}
      <div className="my-auto border-2 border-yellow-400 bg-zinc-900 overflow-hidden">
        <div className="bg-yellow-400 text-black px-4 py-2 font-mono text-xs font-extrabold grid grid-cols-12 uppercase tracking-wider">
          <div className="col-span-4">MÉTRICA / INDICADOR</div>
          <div className="col-span-3">COMO MEDIMOS HOJE</div>
          <div className="col-span-3">NOVA GOVERNANÇA (META)</div>
          <div className="col-span-2 text-right">IMPACTO DIRETO</div>
        </div>

        <div className="divide-y divide-zinc-800 text-xs font-mono">
          {kpiRows.map((row, idx) => (
            <div key={idx} className="px-4 py-2.5 grid grid-cols-12 items-center hover:bg-zinc-850 transition-colors">
              <div className="col-span-4 font-bold text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full shrink-0" />
                <span className="truncate">{row.metric}</span>
              </div>
              <div className="col-span-3 text-red-400 font-medium">
                {row.today}
              </div>
              <div className="col-span-3 text-yellow-400 font-bold flex items-center gap-1">
                <ArrowRight className="w-3 h-3 shrink-0" />
                <span>{row.tomorrow}</span>
              </div>
              <div className="col-span-2 text-right text-emerald-400 font-black">
                {row.impact}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Governance Footer */}
      <div className="p-3 bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center justify-between">
        <span className="flex items-center gap-2 text-yellow-400 font-bold">
          <ShieldCheck className="w-4 h-4" /> DISCIPLINA DE AUDITORIA: REUNIÃO SEMANAL DE KPIS TODA SEGUNDA-FEIRA ÀS 08:30
        </span>
        <span className="text-white font-bold">GOVERNANÇA FALCONI STYLE</span>
      </div>
    </div>
  );
};
