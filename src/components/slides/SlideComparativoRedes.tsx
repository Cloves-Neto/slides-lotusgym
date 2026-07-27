import React from 'react';
import { Target, TrendingUp, ShieldCheck, Zap, Layers, CheckCircle2, XCircle } from 'lucide-react';

export const SlideComparativoRedes: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-10 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <Target className="w-4 h-4 text-yellow-400" />
          <span>SLIDE 03 • ANÁLISE COMPETITIVA DE MERCADO</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-yellow-400 uppercase tracking-tight">
          Comparativo com Grandes Redes & Oportunidade de Expansão
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          Análise de posicionamento: SmartFit, Panobianco, Evoque vs. A Vantagem Competitiva da LotusGym.
        </p>
      </div>

      {/* Main Grid: 4 Cards Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5 my-auto">
        {/* SmartFit */}
        <div className="p-4 bg-zinc-950 border border-zinc-800 flex flex-col justify-between relative">
          <div>
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3">
              <span className="text-xs font-black text-zinc-300 tracking-wider uppercase">
                SMARTFIT
              </span>
              <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-1.5 py-0.5 border border-zinc-800">
                Low-Cost
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">Foco da Operação</span>
                <span className="text-zinc-200 font-medium">Escala massiva e autosserviço sem suporte próximo.</span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">Relacionamento</span>
                <span className="text-zinc-400 flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" /> Impessoal e automatizado
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">Pontos Fracos</span>
                <span className="text-zinc-400">Superlotação nos horários de pico e altíssimo Churn rotativo.</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-zinc-800 text-[10px] font-mono text-zinc-500">
            • Modelo Volume Massivo
          </div>
        </div>

        {/* Panobianco */}
        <div className="p-4 bg-zinc-950 border border-zinc-800 flex flex-col justify-between relative">
          <div>
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3">
              <span className="text-xs font-black text-zinc-300 tracking-wider uppercase">
                PANOBIANCO
              </span>
              <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-1.5 py-0.5 border border-zinc-800">
                Franquias
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">Foco da Operação</span>
                <span className="text-zinc-200 font-medium">Expansão rápida via franqueados em bairros.</span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">Relacionamento</span>
                <span className="text-zinc-400 flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" /> Padrão oscilante por unidade
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">Pontos Fracos</span>
                <span className="text-zinc-400">Baixa monetização de serviços extras/cafeteria/suplementos.</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-zinc-800 text-[10px] font-mono text-zinc-500">
            • Modelo Franquia Bairros
          </div>
        </div>

        {/* Evoque */}
        <div className="p-4 bg-zinc-950 border border-zinc-800 flex flex-col justify-between relative">
          <div>
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3">
              <span className="text-xs font-black text-zinc-300 tracking-wider uppercase">
                EVOQUE
              </span>
              <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-1.5 py-0.5 border border-zinc-800">
                Mid-Premium
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">Foco da Operação</span>
                <span className="text-zinc-200 font-medium">Design visual moderno e infraestrutura atraente.</span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">Relacionamento</span>
                <span className="text-zinc-400 flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5 text-yellow-500 shrink-0" /> Foco na atração inicial
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">Pontos Fracos</span>
                <span className="text-zinc-400">Menor flexibilidade para ativações locais e retenção contínua.</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-zinc-800 text-[10px] font-mono text-zinc-500">
            • Modelo Estético Regional
          </div>
        </div>

        {/* LOTUSGYM - Winner Position */}
        <div className="p-4 bg-zinc-900 border-2 border-yellow-400 flex flex-col justify-between relative shadow-lg shadow-yellow-500/5">
          <div className="absolute -top-2.5 left-4 bg-yellow-400 text-black text-[9px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider">
            NOSSO DIFERENCIAL
          </div>

          <div className="mt-1">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3">
              <span className="text-xs font-black text-yellow-400 tracking-widest uppercase">
                LOTUSGYM
              </span>
              <span className="text-[10px] font-mono text-yellow-400 bg-black px-1.5 py-0.5 border border-yellow-400 font-bold">
                5.404 CLIENTES
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div>
                <span className="text-[10px] font-mono text-yellow-400 uppercase block font-bold">Pilar Principal</span>
                <span className="text-white font-bold">Comunidade engajada + Tecnologia e Inteligência Preditiva.</span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-yellow-400 uppercase block font-bold">Atendimento</span>
                <span className="text-zinc-200 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0" /> Acolhedor, próximo e ativo
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-yellow-400 uppercase block font-bold">Receita Adicional</span>
                <span className="text-zinc-200 font-medium">Monetização de suplementos, doses diárias e eventos.</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-zinc-800 text-[10px] font-mono text-yellow-400 font-bold uppercase">
            ★ Liderança e Fidelização
          </div>
        </div>
      </div>

      {/* Strategic Opportunity Box */}
      <div className="p-4 bg-zinc-900 border-l-4 border-yellow-400 border-t border-r border-b border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-yellow-400 font-mono text-xs font-bold uppercase">
            <TrendingUp className="w-4 h-4" />
            <span>OPORTUNIDADE DE EXPANSÃO LOTUSGYM</span>
          </div>
          <p className="text-xs text-zinc-200 max-w-4xl leading-relaxed">
            As grandes redes focam em <strong className="text-white">volume sem conexão</strong>, gerando alto churn. A LotusGym possui a maior fortaleza: <strong className="text-yellow-400">uma base de 5.404 clientes leais</strong>. Ao combinar essa proximidade com tecnologia de retenção e vendas de conveniência (doses, suplementos e vestuário), criamos um modelo imbatível de expansão regional.
          </p>
        </div>

        <div className="shrink-0 bg-black p-2.5 border border-zinc-800 text-right">
          <span className="text-[10px] font-mono text-zinc-400 uppercase block">POTENCIAL</span>
          <span className="text-xs font-mono font-bold text-yellow-400 uppercase">OCEANO AZUL REGIONAL</span>
        </div>
      </div>
    </div>
  );
};
