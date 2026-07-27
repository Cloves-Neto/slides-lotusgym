import React from 'react';
import { XCircle, AlertTriangle, DollarSign, TrendingDown } from 'lucide-react';

export const SlideGargalos: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-10 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-500 uppercase tracking-widest mb-1">
          <AlertTriangle className="w-4 h-4 text-red-500" />
          <span>SLIDE 04 • DIAGNÓSTICO DE PERDAS & GARGALOS OPERACIONAIS</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-yellow-400 uppercase tracking-tight">
          Gargalos Operacionais & Perdas Financeiras Mapeadas
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          Análise quantitativa de perdas invisíveis no funil de vendas, cancelamentos e consumo de balcão.
        </p>
      </div>

      {/* Top Highlight Metric Box - Exact requested numbers */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-2">
        <div className="p-3 bg-zinc-950 border border-red-900/80">
          <span className="text-[10px] font-mono text-zinc-400 block uppercase">CANCELAMENTOS ESTIMADOS</span>
          <span className="text-xl font-black text-red-400 font-mono">10 Alunos</span>
          <span className="text-[10px] text-zinc-400 block">por mês (Churn)</span>
        </div>

        <div className="p-3 bg-zinc-950 border border-zinc-800">
          <span className="text-[10px] font-mono text-zinc-400 block uppercase">MENSALIDADE MÉDIA</span>
          <span className="text-xl font-black text-white font-mono">R$ 139,90</span>
          <span className="text-[10px] text-zinc-400 block">por aluno/mês</span>
        </div>

        <div className="p-3 bg-zinc-950 border border-zinc-800">
          <span className="text-[10px] font-mono text-zinc-400 block uppercase">CONSUMO MÉDIO DE BALCÃO</span>
          <span className="text-xl font-black text-yellow-400 font-mono">R$ 35,00</span>
          <span className="text-[10px] text-zinc-400 block">doses/suplementos/conveniência</span>
        </div>

        <div className="p-3 bg-zinc-950 border border-red-900/80">
          <span className="text-[10px] font-mono text-zinc-400 block uppercase">LEADS PERDIDOS</span>
          <span className="text-xl font-black text-red-400 font-mono">120 Leads</span>
          <span className="text-[10px] text-zinc-400 block">não convertidos/mês</span>
        </div>
      </div>

      {/* 2 Columns Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto">
        {/* Left Column: Marketing / Comercial */}
        <div className="p-4 bg-zinc-900 border border-red-900/60 space-y-3">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
            <h3 className="text-xs font-extrabold text-red-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              GARGALOS DE FUNIL & ATENDIMENTO
            </h3>
            <span className="text-[10px] font-mono text-zinc-400">120 LEADS PERDIDOS</span>
          </div>

          <ul className="space-y-2 text-xs text-zinc-200">
            <li className="flex items-start gap-2 p-2 bg-black/60 border border-zinc-800">
              <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Demora no Retorno e Leads Esquecidos:</span>
                <span className="text-zinc-400">Contatos do WhatsApp e Instagram sem resposta rápida geram perda de 120 leads em potencial por mês.</span>
              </div>
            </li>

            <li className="flex items-start gap-2 p-2 bg-black/60 border border-zinc-800">
              <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Perda de Conversão em Planos Anuais:</span>
                <span className="text-zinc-400">Sem apresentação ativa das conveniências (Refil & Massagem) na visita presencial.</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Column: Retenção / Cancelamentos */}
        <div className="p-4 bg-zinc-900 border border-red-900/60 space-y-3">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
            <h3 className="text-xs font-extrabold text-red-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              GARGALOS DE RETENÇÃO & CHURN
            </h3>
            <span className="text-[10px] font-mono text-zinc-400">10 CANCELAMENTOS</span>
          </div>

          <ul className="space-y-2 text-xs text-zinc-200">
            <li className="flex items-start gap-2 p-2 bg-black/60 border border-zinc-800">
              <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Cancelamento Invisível (10 Alunos/mês):</span>
                <span className="text-zinc-400">Cada cancelamento representa perda direta de R$ 139,90 (mensalidade) + R$ 35,00 (consumo de balcão) = R$ 174,90/aluno.</span>
              </div>
            </li>

            <li className="flex items-start gap-2 p-2 bg-black/60 border border-zinc-800">
              <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Ausência de Alerta Preditivo de Frequência:</span>
                <span className="text-zinc-400">Falta de disparo automatizado ao completar 10 a 15 dias sem passar na catraca.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Banner - Total Impact Calculation */}
      <div className="p-3 bg-red-950/40 border border-red-800 text-xs font-mono text-red-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <TrendingDown className="w-4 h-4 text-red-400 shrink-0" />
          <span>
            <strong>IMPACTO MENSAL MAPEADO:</strong> (10 cancelados + 120 leads) × R$ 174,90 = <strong className="text-red-400 text-sm">R$ 22.737,00 / mês</strong> em receita não realizada.
          </span>
        </div>
        <span className="font-bold underline uppercase shrink-0 text-yellow-400">
          RECUPERAÇÃO VIA AUTOMATIZAÇÃO & CONVENIÊNCIA
        </span>
      </div>
    </div>
  );
};
