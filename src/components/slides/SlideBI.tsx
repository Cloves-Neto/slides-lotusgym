import React from 'react';
import { BarChart3, ShieldAlert, Users, TrendingUp, Search, Sparkles } from 'lucide-react';

export const SlideBI: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <BarChart3 className="w-4 h-4 text-yellow-400" />
          <span>SLIDE 16 • INTELIGÊNCIA DE NEGÓCIO</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
          Business Intelligence (BI) & Preditividade
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          Análises avançadas para identificar consultores top performers, retenção por plano e risco antecipado de churn.
        </p>
      </div>

      {/* 3 Core BI Engines */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
        {/* Engine 1: Sales Performance */}
        <div className="p-5 bg-zinc-900 border border-yellow-500/40 space-y-3">
          <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400 flex items-center justify-center text-yellow-400">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-yellow-400 uppercase">01. Análise Comercial de Consultores</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Ranking em tempo real do volume de matrículas fechadas por atendente da recepção, taxa de conversão individual e tempo médio de resposta no WhatsApp.
          </p>
          <div className="p-2 bg-black/60 border border-zinc-800 text-[11px] font-mono text-zinc-400">
            Remuneração variável ajustada com precisão cirúrgica.
          </div>
        </div>

        {/* Engine 2: Plan Retention Efficiency */}
        <div className="p-5 bg-zinc-900 border border-yellow-500/40 space-y-3">
          <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400 flex items-center justify-center text-yellow-400">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-yellow-400 uppercase">02. Matriz de Retenção por Plano</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Mapeamento analítico de qual modelo de plano (Anual Recorrente vs. Mensal Avulso vs. Trimestral) apresenta a maior taxa de renovação e menor índice de inadimplência.
          </p>
          <div className="p-2 bg-black/60 border border-zinc-800 text-[11px] font-mono text-zinc-400">
            Ajuste de mix de produtos focado em maior LTV.
          </div>
        </div>

        {/* Engine 3: Churn Prediction */}
        <div className="p-5 bg-zinc-900 border border-red-600/80 space-y-3">
          <div className="w-10 h-10 bg-red-600/10 border border-red-500 flex items-center justify-center text-red-500">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-red-400 uppercase">03. Algoritmo Preditivo de Churn</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Sistema de alerta precoce: se o aluno zera a frequência na catraca por 10 dias seguidos, o BI rotula a conta como "Em Risco" e dispara tarefa de resgate no CRM.
          </p>
          <div className="p-2 bg-black/60 border border-zinc-800 text-[11px] font-mono text-red-400">
            Ação humana preventiva 21 dias antes do cancelamento.
          </div>
        </div>
      </div>

      {/* Summary Banner */}
      <div className="p-4 bg-zinc-900 border-2 border-yellow-400 flex items-center justify-between font-mono text-xs">
        <span className="flex items-center gap-2 text-yellow-400 font-bold">
          <Sparkles className="w-4 h-4" /> BI INTEGRADO DIRECT AO WHATSAPP DA DIRETORIA
        </span>
        <span className="text-white font-bold hidden sm:inline">RELATÓRIOS DIÁRIOS AUTOMÁTICOS ÀS 20:00</span>
      </div>
    </div>
  );
};
