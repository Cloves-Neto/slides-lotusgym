import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart,
  Area 
} from 'recharts';
import { LayoutDashboard, TrendingUp, Sparkles } from 'lucide-react';
import { GymMetrics } from '../../types';

interface SlideDashboardMockupProps {
  gymMetrics: GymMetrics;
}

export const SlideDashboardMockup: React.FC<SlideDashboardMockupProps> = ({ gymMetrics }) => {
  // Projected growth data from August to December based on the action plan implementation
  const growthDataAgoDec = [
    { mes: 'Agosto (Base)', alunos: 5404, faturamentoEstimado: 756 },
    { mes: 'Setembro', alunos: 5580, faturamentoEstimado: 781 },
    { mes: 'Outubro', alunos: 5790, faturamentoEstimado: 810 },
    { mes: 'Novembro', alunos: 6020, faturamentoEstimado: 842 },
    { mes: 'Dezembro', alunos: 6300, faturamentoEstimado: 882 },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-10 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <LayoutDashboard className="w-4 h-4 text-yellow-400" />
          <span>SLIDE 15 • PROJEÇÃO ESTRATÉGICA DE CRESCIMENTO</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h2 className="text-2xl md:text-3xl font-black text-yellow-400 uppercase tracking-tight">
            Dashboard — Média Estimada de Crescimento (Ago - Dez)
          </h2>
          <div className="flex items-center gap-2 bg-yellow-400/10 border border-yellow-400 px-3 py-1 text-xs font-mono font-bold text-yellow-400 uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CRONOGRAMA DE IMPLEMENTAÇÃO DAS IDEIAS</span>
          </div>
        </div>
        <p className="text-xs text-zinc-300 mt-1 font-light">
          Evolução média projetada a partir da execução das ações da Jéssica, Joceli, Refil de Isotônico, Cadeiras de Massagem e Sprints.
        </p>
      </div>

      {/* Mockup Container */}
      <div className="p-4 bg-zinc-950 border-2 border-yellow-400 my-auto space-y-4">
        {/* KPI Mini Header Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-2.5 bg-zinc-900 border border-zinc-800">
            <span className="text-[10px] font-mono text-zinc-400 uppercase block">BASE ATUAL (AGOSTO)</span>
            <div className="text-xl font-mono font-black text-yellow-400">5.404 Alunos</div>
            <span className="text-[10px] text-zinc-400 font-mono">Ponto de Partida Auditado</span>
          </div>

          <div className="p-2.5 bg-zinc-900 border border-zinc-800">
            <span className="text-[10px] font-mono text-zinc-400 uppercase block">META DEZEMBRO</span>
            <div className="text-xl font-mono font-black text-white">6.300 Alunos</div>
            <span className="text-[10px] text-yellow-400 font-mono">+896 Novos Alunos (+16,5%)</span>
          </div>

          <div className="p-2.5 bg-zinc-900 border border-zinc-800">
            <span className="text-[10px] font-mono text-zinc-400 uppercase block">INCREMENTO DE RECEITA</span>
            <div className="text-xl font-mono font-black text-yellow-400">+ R$ 126k /mês</div>
            <span className="text-[10px] text-zinc-400 font-mono">Projeção Mensal Recorrente</span>
          </div>

          <div className="p-2.5 bg-zinc-900 border border-zinc-800">
            <span className="text-[10px] font-mono text-zinc-400 uppercase block">ALAVANCAS PRINCIPAIS</span>
            <div className="text-sm font-mono font-bold text-white">Doses, Refil & Eventos</div>
            <span className="text-[10px] text-zinc-400 font-mono">Receita Direta no Balcão</span>
          </div>
        </div>

        {/* Recharts Visualization - Agosto a Dezembro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          {/* Active Members Growth Bar Chart */}
          <div className="lg:col-span-7 bg-zinc-900 p-3 border border-zinc-800">
            <div className="flex items-center justify-between mb-2 text-xs font-mono">
              <span className="text-yellow-400 font-bold uppercase flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" />
                MÉDIA ESTIMADA DE CRESCIMENTO DE ALUNOS (AGOSTO A DEZEMBRO)
              </span>
              <span className="text-zinc-500 text-[10px]">5 MESES DE IMPLEMENTAÇÃO</span>
            </div>
            
            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={growthDataAgoDec} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
                  <XAxis dataKey="mes" stroke="#a1a1aa" fontSize={11} tickLine={false} />
                  <YAxis stroke="#a1a1aa" fontSize={11} tickLine={false} domain={[5000, 6600]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#09090b', borderColor: '#eab308', color: '#fff', fontSize: '12px' }}
                    formatter={(value: any) => [`${value} Alunos`, 'Projeção Média']}
                  />
                  <Bar dataKey="alunos" fill="#eab308" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Revenue Projection Area */}
          <div className="lg:col-span-5 bg-zinc-900 p-3 border border-zinc-800">
            <div className="flex items-center justify-between mb-2 text-xs font-mono">
              <span className="text-yellow-400 font-bold uppercase">PROJEÇÃO DE RECEITA (R$ mil/mês)</span>
              <span className="text-zinc-500 text-[10px]">RECURSOS & PRODUTOS</span>
            </div>

            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={growthDataAgoDec} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
                  <XAxis dataKey="mes" stroke="#a1a1aa" fontSize={11} tickLine={false} />
                  <YAxis stroke="#a1a1aa" fontSize={11} tickLine={false} domain={[700, 920]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#09090b', borderColor: '#eab308', color: '#fff', fontSize: '12px' }}
                    formatter={(value: any) => [`R$ ${value}k`, 'Faturamento Estimado']}
                  />
                  <Area type="monotone" dataKey="faturamentoEstimado" stroke="#eab308" fill="#eab308" fillOpacity={0.25} strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Footer Quote Box */}
      <div className="p-3.5 bg-zinc-900 border-l-4 border-yellow-400 border-t border-r border-b border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-yellow-400 text-black font-black flex items-center justify-center text-xs shrink-0">
            ★
          </div>
          <span className="text-xs md:text-sm font-black text-white uppercase tracking-wider">
            LEGENDA ESTRATÉGICA: "Crescimento sustentável de 5.404 para 6.300 alunos com adição de receita recorrente de conveniência."
          </span>
        </div>
        <span className="text-[10px] font-mono text-yellow-400 hidden sm:inline uppercase font-bold">
          PLANO AGOSTO - DEZEMBRO
        </span>
      </div>
    </div>
  );
};
