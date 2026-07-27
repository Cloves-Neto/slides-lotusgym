import React from 'react';
import { ShoppingBag, DollarSign, Calendar, Flame, ArrowRight } from 'lucide-react';

export const SlideEstoque: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <ShoppingBag className="w-4 h-4 text-yellow-400" />
          <span>SLIDE 12 • MONETIZAÇÃO RÁPIDA DE CAIXA</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
          Transformando Estoque Parado em Caixa Imediato
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          Estratégia de desmobilização de produtos físicos travados no depósito para injeção rápida de capital de giro.
        </p>
      </div>

      {/* Campaign Roadmap */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
        {/* Step 1 */}
        <div className="p-5 bg-zinc-900 border border-yellow-500/40 space-y-3">
          <div className="flex items-center justify-between text-yellow-400 font-mono text-xs font-bold">
            <span>FATE 01 • INVENTÁRIO</span>
            <Calendar className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-white uppercase">Mapeamento & Precificação de Oportunidade</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Levantamento de suplementos (Whey, Creatina, Pré-treinos) próximos do vencimento e peças de vestuário LotusGym (camisetas, regatas, squeezes).
          </p>
          <div className="p-2 bg-black/60 border border-zinc-800 text-[11px] font-mono text-zinc-400">
            Estoque auditado estimado: <span className="text-white font-bold">R$ 18.500 em custo</span>
          </div>
        </div>

        {/* Step 2 */}
        <div className="p-5 bg-zinc-900 border border-yellow-500/40 space-y-3">
          <div className="flex items-center justify-between text-yellow-400 font-mono text-xs font-bold">
            <span>FASE 02 • EVENTO</span>
            <Flame className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-white uppercase">"Semana da Performance LotusGym"</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Campanha relâmpago de 5 dias com combos promocionais agressivos no balcão e no WhatsApp para fechar pacotes de suplementação + vestuário.
          </p>
          <div className="p-2 bg-black/60 border border-zinc-800 text-[11px] font-mono text-zinc-400">
            Ofertas com gatilho de escassez e tempo limitado.
          </div>
        </div>

        {/* Step 3 */}
        <div className="p-5 bg-zinc-900 border border-yellow-500/40 space-y-3">
          <div className="flex items-center justify-between text-yellow-400 font-mono text-xs font-bold">
            <span>FASE 03 • BUNDLES</span>
            <DollarSign className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-white uppercase">Kits de Entrada para Novos Alunos</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Inclusão dos itens no plano de renovação anual: "Renove o plano anual hoje e ganhe R$ 150 em produtos do estoque".
          </p>
          <div className="p-2 bg-black/60 border border-zinc-800 text-[11px] font-mono text-zinc-400">
            Aumento imediato de caixa e adesão a planos anuais.
          </div>
        </div>
      </div>

      {/* Target Result Banner */}
      <div className="p-4 bg-zinc-900 border-2 border-yellow-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono font-bold text-yellow-400 uppercase block">INJEÇÃO DE CAPITAL ESTIMADA</span>
          <p className="text-sm font-bold text-white">
            Conversão de 80% do estoque parado em receita líquida em até 21 dias.
          </p>
        </div>
        <div className="flex items-center gap-2 font-mono font-black text-xl text-yellow-400">
          <span>+ R$ 28.000,00 EM CAIXA</span>
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};
