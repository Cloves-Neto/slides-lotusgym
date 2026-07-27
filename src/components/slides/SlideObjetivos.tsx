import React from 'react';
import { CheckSquare, Target, TrendingUp, ShieldCheck, Zap, Award } from 'lucide-react';

export const SlideObjetivos: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <Target className="w-4 h-4 text-yellow-400" />
          <span>SLIDE 05 • METAS DE ALTO IMPACTO</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
          Onde Queremos Chegar
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          Objetivos estratégicos claros com prazos de execução e metas quantitativas mensuráveis.
        </p>
      </div>

      {/* Checklist Grid with Yellow Icons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-auto">
        {/* Objective 1 */}
        <div className="p-4 bg-zinc-900 border-2 border-yellow-400/80 space-y-2">
          <div className="flex items-center gap-2 text-yellow-400">
            <CheckSquare className="w-5 h-5 shrink-0" />
            <span className="text-xs font-mono font-bold uppercase">METAS DE VENDAS</span>
          </div>
          <h3 className="text-sm font-extrabold text-white">Aumentar Conversão de Matrículas</h3>
          <div className="text-2xl font-black font-mono text-yellow-400">+30%</div>
          <p className="text-xs text-zinc-300">
            Automação comercial imediata com qualificação de leads via WhatsApp e CRM.
          </p>
        </div>

        {/* Objective 2 */}
        <div className="p-4 bg-zinc-900 border-2 border-yellow-400/80 space-y-2">
          <div className="flex items-center gap-2 text-yellow-400">
            <CheckSquare className="w-5 h-5 shrink-0" />
            <span className="text-xs font-mono font-bold uppercase">METAS FINANCEIRAS</span>
          </div>
          <h3 className="text-sm font-extrabold text-white">Reduzir Inadimplência</h3>
          <div className="text-2xl font-black font-mono text-yellow-400">-45% de Inadimplência</div>
          <p className="text-xs text-zinc-300">
            Implantação de régua de cobrança automática via PIX/Cartão recorrente sem fricção.
          </p>
        </div>

        {/* Objective 3 */}
        <div className="p-4 bg-zinc-900 border-2 border-yellow-400/80 space-y-2">
          <div className="flex items-center gap-2 text-yellow-400">
            <CheckSquare className="w-5 h-5 shrink-0" />
            <span className="text-xs font-mono font-bold uppercase">AUTOMAÇÃO OPERACIONAL</span>
          </div>
          <h3 className="text-sm font-extrabold text-white">Automatizar Follow-up Comercial</h3>
          <div className="text-2xl font-black font-mono text-yellow-400">70% Automatizado</div>
          <p className="text-xs text-zinc-300">
            Agentes de IA e mensagens pré-programadas para lembretes de visitas e aulas.
          </p>
        </div>

        {/* Objective 4 */}
        <div className="p-4 bg-zinc-900 border-2 border-yellow-400/80 space-y-2">
          <div className="flex items-center gap-2 text-yellow-400">
            <CheckSquare className="w-5 h-5 shrink-0" />
            <span className="text-xs font-mono font-bold uppercase">TICKET & ADD-ONS</span>
          </div>
          <h3 className="text-sm font-extrabold text-white">Aumentar Ticket Médio</h3>
          <div className="text-2xl font-black font-mono text-yellow-400">+ R$ 35,00 / Aluno</div>
          <p className="text-xs text-zinc-300">
            Lançamento dos planos Lotus Performance Club com benefícios VIP exclusivos.
          </p>
        </div>

        {/* Objective 5 */}
        <div className="p-4 bg-zinc-900 border-2 border-yellow-400/80 space-y-2">
          <div className="flex items-center gap-2 text-yellow-400">
            <CheckSquare className="w-5 h-5 shrink-0" />
            <span className="text-xs font-mono font-bold uppercase">RETENÇÃO & LTV</span>
          </div>
          <h3 className="text-sm font-extrabold text-white">Expansão do Tempo de Permanência</h3>
          <div className="text-2xl font-black font-mono text-yellow-400">LTV de 14 Meses</div>
          <p className="text-xs text-zinc-300">
            Acompanhamento de engajamento nos primeiros 30 dias para eliminar o churn inicial.
          </p>
        </div>

        {/* Objective 6 */}
        <div className="p-4 bg-zinc-900 border-2 border-yellow-400/80 space-y-2">
          <div className="flex items-center gap-2 text-yellow-400">
            <CheckSquare className="w-5 h-5 shrink-0" />
            <span className="text-xs font-mono font-bold uppercase">PREDIÇÃO DE DADOS</span>
          </div>
          <h3 className="text-sm font-extrabold text-white">Decisões orientadas por BI</h3>
          <div className="text-2xl font-black font-mono text-yellow-400">Dashboards 100% Live</div>
          <p className="text-xs text-zinc-300">
            Visão gerencial instantânea no celular dos diretores para ação imediata.
          </p>
        </div>
      </div>

      {/* Summary Footer */}
      <div className="p-3 bg-zinc-900 border border-yellow-500/30 text-xs font-mono text-zinc-300 flex items-center justify-between">
        <span className="flex items-center gap-2 text-yellow-400 font-bold">
          <Zap className="w-4 h-4" /> COMPROMISSO DE RESULTADOS DA TRANSFORMAÇÃO DIGITAL
        </span>
        <span className="text-white font-bold">PRAZO GLOBAL: 180 DIAS</span>
      </div>
    </div>
  );
};
