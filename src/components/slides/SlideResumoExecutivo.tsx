import React from 'react';
import { AlertTriangle, CheckCircle, Target, Zap, ArrowUpRight } from 'lucide-react';

export const SlideResumoExecutivo: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <span>SLIDE 02 • RESUMO EXECUTIVO</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
          Visão Geral da Transformação
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          A fotografia sintetizada do diagnóstico e a proposta de valor do ecossistema LotusGym.
        </p>
      </div>

      {/* 4 Quadrants Grid (Yellow Bordered Boxes) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto">
        {/* Box 1 */}
        <div className="p-5 bg-zinc-900 border-2 border-yellow-400 relative group hover:bg-zinc-850 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono font-bold text-yellow-400 uppercase">01. Onde Estamos</span>
            <AlertTriangle className="w-4 h-4 text-yellow-400" />
          </div>
          <h3 className="text-base font-bold text-white mb-1">Operação Tradicional & Dados Descentralizados</h3>
          <p className="text-xs text-zinc-300 leading-relaxed font-light">
            Dependência de ações presenciais, cadastros em planilhas dispersas, WhatsApp manual sem CRM e ausência de relatórios integrados em tempo real.
          </p>
        </div>

        {/* Box 2 */}
        <div className="p-5 bg-zinc-900 border-2 border-yellow-400 relative group hover:bg-zinc-850 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono font-bold text-yellow-400 uppercase">02. A Oportunidade</span>
            <Target className="w-4 h-4 text-yellow-400" />
          </div>
          <h3 className="text-base font-bold text-white mb-1">Escala via Tecnologia & Processo Comercial</h3>
          <p className="text-xs text-zinc-300 leading-relaxed font-light">
            Mercado fitness em franca expansão. Potencial de capturar leads digitais e profissionalizar o atendimento 24/7 com inteligência de vendas.
          </p>
        </div>

        {/* Box 3 */}
        <div className="p-5 bg-zinc-900 border-2 border-yellow-400 relative group hover:bg-zinc-850 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono font-bold text-yellow-400 uppercase">03. Ação Estratégica</span>
            <Zap className="w-4 h-4 text-yellow-400" />
          </div>
          <h3 className="text-base font-bold text-white mb-1">Ecossistema Digital & Business Intelligence</h3>
          <p className="text-xs text-zinc-300 leading-relaxed font-light">
            Conexão total via APIs: Site de Alta Conversão + CRM de Atendimento + Catracas ABCEVO + Agente de IA para suporte instantâneo.
          </p>
        </div>

        {/* Box 4 */}
        <div className="p-5 bg-zinc-900 border-2 border-yellow-400 relative group hover:bg-zinc-850 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono font-bold text-yellow-400 uppercase">04. Resultado Esperado</span>
            <CheckCircle className="w-4 h-4 text-yellow-400" />
          </div>
          <h3 className="text-base font-bold text-white mb-1">Aumento de LTV & Receita Recorrente</h3>
          <p className="text-xs text-zinc-300 leading-relaxed font-light">
            Aumento do tempo de permanência do aluno (+40% retenção), redução de cancelamentos e criação da linha de produtos add-on Lotus Club.
          </p>
        </div>
      </div>

      {/* Red Highlight Box */}
      <div className="p-4 bg-red-950/40 border-2 border-red-600 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-red-600 text-white font-black flex items-center justify-center text-sm shrink-0">
            !
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold text-red-400 uppercase block">DIRETRIZ MESTRA DO PROJETO</span>
            <p className="text-sm md:text-base font-extrabold text-white tracking-wide uppercase">
              "A tecnologia é a ferramenta para aumentar faturamento e eficiência."
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1 text-xs font-mono text-red-400 shrink-0">
          <span>FOCO EM RESULTADO</span>
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
