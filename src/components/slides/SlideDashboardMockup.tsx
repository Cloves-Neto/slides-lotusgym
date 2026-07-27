import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  CartesianGrid,
  AreaChart,
  Area 
} from 'recharts';
import { LayoutDashboard, TrendingUp, Users, DollarSign, AlertCircle, Sparkles } from 'lucide-react';
import { GymMetrics } from '../../types';

interface SlideDashboardMockupProps {
  gymMetrics: GymMetrics;
}

export const SlideDashboardMockup: React.FC<SlideDashboardMockupProps> = ({ gymMetrics }) => {
  const [timeframe, setTimeframe] = useState<'3M' | '6M' | '12M'>('6M');

  // Simulated live trend data matching LotusGym
  const monthlyData = [
    { mes: 'Jan', faturamento: 108, churn: 9.2, alunos: 760, leads: 180 },
    { mes: 'Fev', faturamento: 112, churn: 8.8, alunos: 785, leads: 210 },
    { mes: 'Mar', faturamento: 114, churn: 8.5, alunos: 820, leads: 240 },
    { mes: 'Abr (Proj)', faturamento: 128, churn: 6.2, alunos: 890, leads: 320 },
    { mes: 'Mai (Proj)', faturamento: 145, churn: 4.8, alunos: 970, leads: 410 },
    { mes: 'Jun (Proj)', faturamento: 168, churn: 3.9, alunos: 1080, leads: 480 },
  ];

  const currentMRR = (gymMetrics.activeMembers * gymMetrics.avgTicket) / 1000;

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <LayoutDashboard className="w-4 h-4 text-yellow-400" />
          <span>SLIDE 15 • MOCKUP OPERACIONAL LIVE</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
            Dashboard Gerencial em Tempo Real
          </h2>
          <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 p-1 text-xs font-mono">
            <span className="text-zinc-500 px-2">FILTRO:</span>
            <button 
              onClick={() => setTimeframe('3M')}
              className={`px-2 py-0.5 ${timeframe === '3M' ? 'bg-yellow-400 text-black font-bold' : 'text-zinc-400'}`}
            >
              3M
            </button>
            <button 
              onClick={() => setTimeframe('6M')}
              className={`px-2 py-0.5 ${timeframe === '6M' ? 'bg-yellow-400 text-black font-bold' : 'text-zinc-400'}`}
            >
              6M
            </button>
            <button 
              onClick={() => setTimeframe('12M')}
              className={`px-2 py-0.5 ${timeframe === '12M' ? 'bg-yellow-400 text-black font-bold' : 'text-zinc-400'}`}
            >
              12M
            </button>
          </div>
        </div>
      </div>

      {/* Mockup Container (Black Canvas with Yellow & Red Charts) */}
      <div className="p-4 bg-zinc-950 border-2 border-yellow-400 my-auto space-y-4">
        {/* KPI Mini Header Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-2.5 bg-zinc-900 border border-zinc-800">
            <span className="text-[10px] font-mono text-zinc-400 uppercase block">FATURAMENTO RECORRENTE</span>
            <div className="text-xl font-mono font-black text-yellow-400">R$ {currentMRR.toFixed(1)}k/mês</div>
            <span className="text-[10px] text-emerald-400 font-mono">+18% com projeto</span>
          </div>

          <div className="p-2.5 bg-zinc-900 border border-zinc-800">
            <span className="text-[10px] font-mono text-zinc-400 uppercase block">BASE ATIVA</span>
            <div className="text-xl font-mono font-black text-white">{gymMetrics.activeMembers} Alunos</div>
            <span className="text-[10px] text-yellow-400 font-mono">Meta 1.100 alunos</span>
          </div>

          <div className="p-2.5 bg-zinc-900 border border-zinc-800">
            <span className="text-[10px] font-mono text-zinc-400 uppercase block">CHURN MENSAL</span>
            <div className="text-xl font-mono font-black text-red-500">{gymMetrics.monthlyChurn}%</div>
            <span className="text-[10px] text-red-400 font-mono">Queda projetada para 3.9%</span>
          </div>

          <div className="p-2.5 bg-zinc-900 border border-zinc-800">
            <span className="text-[10px] font-mono text-zinc-400 uppercase block">LEADS CAPTADOS</span>
            <div className="text-xl font-mono font-black text-yellow-400">{gymMetrics.monthlyLeads}/mês</div>
            <span className="text-[10px] text-emerald-400 font-mono">Conversão 28%</span>
          </div>
        </div>

        {/* Recharts Live Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          {/* Revenue & Growth Bar Chart (8 cols) */}
          <div className="lg:col-span-8 bg-zinc-900 p-3 border border-zinc-800">
            <div className="flex items-center justify-between mb-2 text-xs font-mono">
              <span className="text-yellow-400 font-bold uppercase">PROJEÇÃO DE FATURAMENTO (R$ K) E CRSCIMENTO</span>
              <span className="text-zinc-500 text-[10px]">BARRAS AMARALAS SÓLIDAS</span>
            </div>
            
            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                  <XAxis dataKey="mes" stroke="#a1a1aa" fontSize={11} tickLine={false} />
                  <YAxis stroke="#a1a1aa" fontSize={11} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#09090b', borderColor: '#eab308', color: '#fff', fontSize: '12px' }}
                    formatter={(value: any) => [`R$ ${value}k`, 'Faturamento']}
                  />
                  <Bar dataKey="faturamento" fill="#eab308" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Churn Reduction Line/Area Chart (4 cols - Red Highlights) */}
          <div className="lg:col-span-4 bg-zinc-900 p-3 border border-zinc-800">
            <div className="flex items-center justify-between mb-2 text-xs font-mono">
              <span className="text-red-400 font-bold uppercase">QUEDA DRÁSTICA DE CHURN (%)</span>
              <span className="text-zinc-500 text-[10px]">VERMELHO</span>
            </div>

            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                  <XAxis dataKey="mes" stroke="#a1a1aa" fontSize={11} tickLine={false} />
                  <YAxis stroke="#a1a1aa" fontSize={11} tickLine={false} domain={[0, 12]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#09090b', borderColor: '#ef4444', color: '#fff', fontSize: '12px' }}
                    formatter={(value: any) => [`${value}%`, 'Churn Mensal']}
                  />
                  <Area type="monotone" dataKey="churn" stroke="#ef4444" fill="#ef4444" fillOpacity={0.2} strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Red Highlight Quote Box as specified in prompt */}
      <div className="p-3.5 bg-red-950/40 border-2 border-red-600 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-red-600 text-white font-black flex items-center justify-center text-xs shrink-0">
            !
          </div>
          <span className="text-xs md:text-sm font-black text-white uppercase tracking-wider">
            LEGENDA ESTRATÉGICA: "Decisões baseadas em dados, não em palpites."
          </span>
        </div>
        <span className="text-[10px] font-mono text-red-400 hidden sm:inline uppercase">
          PAINEL DE CONTROLE EXECUTIVO
        </span>
      </div>
    </div>
  );
};
