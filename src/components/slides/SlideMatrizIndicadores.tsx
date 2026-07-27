import React from 'react';
import { GymMetrics } from '../../types';
import { BarChart3, Users, Clock, ArrowRight, ShieldCheck, Database } from 'lucide-react';

interface SlideMatrizIndicadoresProps {
  gymMetrics: GymMetrics;
}

export const SlideMatrizIndicadores: React.FC<SlideMatrizIndicadoresProps> = ({ gymMetrics }) => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <BarChart3 className="w-4 h-4 text-yellow-400" />
          <span>SLIDE 21 • GOVERNANÇA & MONITORAMENTO</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
          Matriz de Indicadores de Gestão
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          Estrutura de monitoramento pronta para alimentação de dados da operação LotusGym.
        </p>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto">
        {/* Main Base Card - Confirmed 5,404 Clients */}
        <div className="lg:col-span-5 p-6 bg-zinc-900 border-2 border-yellow-400 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-zinc-400 font-mono text-xs mb-2">
              <span className="uppercase font-bold text-yellow-400">BASE OFICIAL CONFIRMADA</span>
              <ShieldCheck className="w-5 h-5 text-yellow-400" />
            </div>

            <div className="text-5xl md:text-6xl font-black text-yellow-400 font-mono tracking-tight my-2">
              {gymMetrics.activeMembers.toLocaleString('pt-BR')}
            </div>

            <div className="text-sm font-bold text-white uppercase tracking-wider">
              CLIENTES ATIVOS LOTUSGYM
            </div>

            <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
              Base oficial consolidada. Serve como o pilar principal para cálculo de todas as projeções de LTV, faturamento por m² e taxa de ocupação.
            </p>
          </div>

          <div className="mt-6 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
            <span className="text-zinc-400">FONTE DADOS:</span>
            <span className="text-yellow-400 font-bold uppercase">SISTEMA DA ACADEMIA</span>
          </div>
        </div>

        {/* Metrics Status Grid - All other metrics set to 0 / A preencher */}
        <div className="lg:col-span-7 p-6 bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-zinc-400 font-mono text-xs mb-3 border-b border-zinc-800 pb-2">
              <span className="uppercase font-bold text-white flex items-center gap-2">
                <Database className="w-4 h-4 text-yellow-400" />
                INDICADORES ADICIONAIS (ESTRUTURA A PREENCHER)
              </span>
              <span className="text-[10px] font-mono bg-zinc-800 text-yellow-400 px-2 py-0.5 border border-zinc-700">
                PADRÃO: A PREENCHER
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 bg-black border border-zinc-800">
                <span className="text-zinc-400 text-[10px] block uppercase">CHURN MENSAL (%)</span>
                <div className="text-lg font-bold text-yellow-400 mt-1">
                  {gymMetrics.monthlyChurn > 0 ? `${gymMetrics.monthlyChurn}%` : 'A Preencher'}
                </div>
              </div>

              <div className="p-3 bg-black border border-zinc-800">
                <span className="text-zinc-400 text-[10px] block uppercase">TICKET MÉDIO (R$)</span>
                <div className="text-lg font-bold text-yellow-400 mt-1">
                  {gymMetrics.avgTicket > 0 ? `R$ ${gymMetrics.avgTicket}` : 'A Preencher'}
                </div>
              </div>

              <div className="p-3 bg-black border border-zinc-800">
                <span className="text-zinc-400 text-[10px] block uppercase">LEADS MENSAL</span>
                <div className="text-lg font-bold text-yellow-400 mt-1">
                  {gymMetrics.monthlyLeads > 0 ? gymMetrics.monthlyLeads : 'A Preencher'}
                </div>
              </div>

              <div className="p-3 bg-black border border-zinc-800">
                <span className="text-zinc-400 text-[10px] block uppercase">TAXA DE CONVERSÃO</span>
                <div className="text-lg font-bold text-yellow-400 mt-1">
                  {gymMetrics.conversionRate > 0 ? `${gymMetrics.conversionRate}%` : 'A Preencher'}
                </div>
              </div>

              <div className="p-3 bg-black border border-zinc-800">
                <span className="text-zinc-400 text-[10px] block uppercase">INADIMPLÊNCIA (%)</span>
                <div className="text-lg font-bold text-yellow-400 mt-1">
                  {gymMetrics.unpaidRate > 0 ? `${gymMetrics.unpaidRate}%` : 'A Preencher'}
                </div>
              </div>

              <div className="p-3 bg-black border border-zinc-800">
                <span className="text-zinc-400 text-[10px] block uppercase">NPS SATISFAÇÃO</span>
                <div className="text-lg font-bold text-yellow-400 mt-1">
                  {gymMetrics.npsScore > 0 ? `${gymMetrics.npsScore}/100` : 'A Preencher'}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400 font-mono">
            <span className="flex items-center gap-1.5 text-yellow-400">
              <Clock className="w-3.5 h-3.5" /> Próximo passo: Alimentação dos dados no menu de configurações
            </span>
            <ArrowRight className="w-4 h-4 text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Bottom Callout */}
      <div className="p-3.5 bg-zinc-900 border-l-4 border-yellow-400 border-t border-r border-b border-zinc-800 flex items-center justify-between text-xs font-mono">
        <span className="text-white font-bold uppercase">
          MODELO GOVERNÁVEL: Os campos permanecem abertos para atualização assim que os dados financeiros forem extraídos.
        </span>
        <span className="text-yellow-400 font-bold hidden sm:inline">
          ALIMENTAÇÃO DINÂMICA
        </span>
      </div>
    </div>
  );
};
