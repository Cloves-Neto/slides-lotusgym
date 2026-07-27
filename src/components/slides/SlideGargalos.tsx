import React from 'react';
import { XCircle, AlertTriangle } from 'lucide-react';

export const SlideGargalos: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-500 uppercase tracking-widest mb-1">
          <AlertTriangle className="w-4 h-4 text-red-500" />
          <span>SLIDE 05 • DIAGNÓSTICO ESTRUTURAL</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
          Gargalos Operacionais (Pontos de Atrito)
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          Identificação das perdas invisíveis no funil de vendas e na retenção de alunos.
        </p>
      </div>

      {/* 2 Columns Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
        {/* Left Column: Marketing / Comercial */}
        <div className="p-5 bg-zinc-900 border border-red-900/60 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
            <h3 className="text-sm font-extrabold text-red-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              MARKETING & COMERCIAL
            </h3>
            <span className="text-[10px] font-mono text-zinc-400">GARGALOS DE AQUISIÇÃO</span>
          </div>

          <ul className="space-y-3 text-xs text-zinc-200">
            <li className="flex items-start gap-2.5 p-2 bg-black/60 border border-zinc-800">
              <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Leads Esquecidos e Demora na Resposta:</span>
                <span className="text-zinc-400">Contatos de redes sociais demoram horas para receber retorno inicial.</span>
              </div>
            </li>

            <li className="flex items-start gap-2.5 p-2 bg-black/60 border border-zinc-800">
              <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Site Estático sem Agendamento Online:</span>
                <span className="text-zinc-400">Ausência de landing page focada em conversão para passe livre / aula experimental.</span>
              </div>
            </li>

            <li className="flex items-start gap-2.5 p-2 bg-black/60 border border-zinc-800">
              <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Ausência de Régua de Relacionamento Comercial:</span>
                <span className="text-zinc-400">Falta de follow-up pós-visita para fechar matrículas não realizadas no dia.</span>
              </div>
            </li>

            <li className="flex items-start gap-2.5 p-2 bg-black/60 border border-zinc-800">
              <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Dependência Exclusiva do Fluxo Orgânico:</span>
                <span className="text-zinc-400">Sem campanhas de tráfego pago geolocalizado ativas de forma consistente.</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Column: Gestão / Operação */}
        <div className="p-5 bg-zinc-900 border border-red-900/60 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
            <h3 className="text-sm font-extrabold text-red-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              GESTÃO & OPERAÇÃO
            </h3>
            <span className="text-[10px] font-mono text-zinc-400">GARGALOS DE RETENÇÃO</span>
          </div>

          <ul className="space-y-3 text-xs text-zinc-200">
            <li className="flex items-start gap-2.5 p-2 bg-black/60 border border-zinc-800">
              <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Excesso de WhatsApp Manual na Recepção:</span>
                <span className="text-zinc-400">Atendentes gastam horas respondendo mensagens repetitivas sobre preços e horários.</span>
              </div>
            </li>

            <li className="flex items-start gap-2.5 p-2 bg-black/60 border border-zinc-800">
              <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Falta de Dashboards em Tempo Real:</span>
                <span className="text-zinc-400">Diretoria descobre o faturamento e churn do mês apenas no fim do período.</span>
              </div>
            </li>

            <li className="flex items-start gap-2.5 p-2 bg-black/60 border border-zinc-800">
              <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Cancelamentos sem Motivo Mapeado:</span>
                <span className="text-zinc-400">Alunos deixam de frequentar por 15 dias sem disparo automatizado de alerta de resgate.</span>
              </div>
            </li>

            <li className="flex items-start gap-2.5 p-2 bg-black/60 border border-zinc-800">
              <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Sistemas de Gestão Isolados (Silos):</span>
                <span className="text-zinc-400">O sistema de catraca não se comunica nativamente com o marketing ou ferramentas de venda.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="p-3 bg-red-950/30 border border-red-800 text-xs font-mono text-red-300 flex items-center justify-between">
        <span>IMPACTO TOTAL: Perda estimada de R$ 15.000 a R$ 25.000 por mês em oportunidades não convertidas e churn evitável.</span>
        <span className="font-bold underline uppercase shrink-0">SOLUÇÃO: AUTOMAÇÃO + CRM</span>
      </div>
    </div>
  );
};
