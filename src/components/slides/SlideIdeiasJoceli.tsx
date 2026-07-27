import React from 'react';
import { ShoppingBag, Coffee, GlassWater, CheckCircle2, Tag } from 'lucide-react';

export const SlideIdeiasJoceli: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <Tag className="w-4 h-4 text-yellow-400" />
          <span>SLIDE 20 • VENDAS DIÁRIAS & CONVENIÊNCIA</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
          Ideias Comerciais — Joceli
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          Promoção de produtos no balcão, venda de doses diárias fracionadas e linha de bebidas na cafeteria.
        </p>
      </div>

      {/* Main Topics Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
        {/* Topic 1 */}
        <div className="p-5 bg-zinc-900 border-2 border-yellow-400/80 flex flex-col justify-between relative group hover:border-yellow-400 transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-[10px] font-mono font-bold bg-yellow-400 text-black px-2 py-0.5 uppercase">
                TÓPICO 01
              </span>
              <ShoppingBag className="w-5 h-5 text-yellow-400" />
            </div>

            <h3 className="text-lg font-black text-yellow-400 uppercase tracking-wide">
              Promoção no Dia a Dia
            </h3>

            <p className="text-xs font-bold text-white uppercase border-l-2 border-yellow-400 pl-2">
              Divulgação Ativa na Recepção
            </p>

            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>Promover os produtos de forma contínua no espaço físico da academia.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>Exposição em destaque no balcão de atendimento e na entrada.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>Incentivo da equipe de recepção ao ofertar produtos no check-in.</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-2 border-t border-zinc-800 text-[10px] font-mono text-yellow-400 uppercase font-bold">
            • Presença Visual & Treinamento de Balcão
          </div>
        </div>

        {/* Topic 2 */}
        <div className="p-5 bg-zinc-900 border-2 border-yellow-400/80 flex flex-col justify-between relative group hover:border-yellow-400 transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-[10px] font-mono font-bold bg-yellow-400 text-black px-2 py-0.5 uppercase">
                TÓPICO 02
              </span>
              <GlassWater className="w-5 h-5 text-yellow-400" />
            </div>

            <h3 className="text-lg font-black text-yellow-400 uppercase tracking-wide">
              Venda de Doses Diárias
            </h3>

            <p className="text-xs font-bold text-white uppercase border-l-2 border-yellow-400 pl-2">
              Praticidade & Consumo Imediato
            </p>

            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>Venda de doses fracionadas individuais preparadas na hora.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>Dose de Pré-Treino gelado para consumo imediato antes de treinar.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>Dose de Whey Protein pós-treino pronta em coqueteleira.</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-2 border-t border-zinc-800 text-[10px] font-mono text-yellow-400 uppercase font-bold">
            • Conveniência Diária & Ticket Extra
          </div>
        </div>

        {/* Topic 3 */}
        <div className="p-5 bg-zinc-900 border-2 border-yellow-400/80 flex flex-col justify-between relative group hover:border-yellow-400 transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-[10px] font-mono font-bold bg-yellow-400 text-black px-2 py-0.5 uppercase">
                TÓPICO 03
              </span>
              <Coffee className="w-5 h-5 text-yellow-400" />
            </div>

            <h3 className="text-lg font-black text-yellow-400 uppercase tracking-wide">
              Bebidas & Cafeteria
            </h3>

            <p className="text-xs font-bold text-white uppercase border-l-2 border-yellow-400 pl-2">
              Chás, Energéticos & Convivência
            </p>

            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>Oferta de chás funcionais (termogênicos e relaxantes pós-treino).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>Bebidas energéticas naturais e refrescantes na academia.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>Estruturação do espaço de cafeteria para integrar alunos e gerar caixa.</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-2 border-t border-zinc-800 text-[10px] font-mono text-yellow-400 uppercase font-bold">
            • Espaço Social & Faturamento Recorrente
          </div>
        </div>
      </div>

      {/* Bottom Summary Callout */}
      <div className="p-3.5 bg-zinc-900 border-l-4 border-yellow-400 border-t border-r border-b border-zinc-800 flex items-center justify-between text-xs font-mono">
        <span className="text-white font-bold uppercase">
          DIRETRIZ JOCELI: Facilitar o consumo imediato por doses e criar um hábito de compras diárias na academia.
        </span>
        <span className="text-yellow-400 font-bold hidden sm:inline">
          DOSES & CONVENIÊNCIA
        </span>
      </div>
    </div>
  );
};
