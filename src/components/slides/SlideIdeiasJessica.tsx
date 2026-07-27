import React from 'react';
import { Calendar, Zap, Shirt, CheckCircle2, Tag } from 'lucide-react';

export const SlideIdeiasJessica: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <Tag className="w-4 h-4 text-yellow-400" />
          <span>SLIDE 19 • PROPOSTAS DE EXPANSÃO & PRODUTOS</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
          Ideias Comerciais — Jéssica
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          Ações estratégicas de promoção de produtos em eventos, incentivo ao consumo e ampliação do catálogo.
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
              <Calendar className="w-5 h-5 text-yellow-400" />
            </div>

            <h3 className="text-lg font-black text-yellow-400 uppercase tracking-wide">
              Promoção em Eventos
            </h3>

            <p className="text-xs font-bold text-white uppercase border-l-2 border-yellow-400 pl-2">
              Eventos Internos & Externos
            </p>

            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>Estande da LotusGym em campeonatos locais, corridas de rua e feiras esportivas.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>Ativações em eventos internos (desafios de alunos, aulões e campeonatos).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>Degustações promovidas para atletas e novos visitantes.</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-2 border-t border-zinc-800 text-[10px] font-mono text-yellow-400 uppercase font-bold">
            • Visibilidade de Marca e Experiência
          </div>
        </div>

        {/* Topic 2 */}
        <div className="p-5 bg-zinc-900 border-2 border-yellow-400/80 flex flex-col justify-between relative group hover:border-yellow-400 transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-[10px] font-mono font-bold bg-yellow-400 text-black px-2 py-0.5 uppercase">
                TÓPICO 02
              </span>
              <Zap className="w-5 h-5 text-yellow-400" />
            </div>

            <h3 className="text-lg font-black text-yellow-400 uppercase tracking-wide">
              Suplementação Integrada
            </h3>

            <p className="text-xs font-bold text-white uppercase border-l-2 border-yellow-400 pl-2">
              Uso e Divulgação de Whey & Pré-Treino
            </p>

            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>Divulgação e incentivo ao consumo de Whey Protein, Pré-Treino e Creatina.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>Combos de treino + suplementação recomendada pelos professores.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>Ações educativas sobre hipertrofia e energia na rotina de treinos.</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-2 border-t border-zinc-800 text-[10px] font-mono text-yellow-400 uppercase font-bold">
            • Performance & Aumento do Consumo
          </div>
        </div>

        {/* Topic 3 */}
        <div className="p-5 bg-zinc-900 border-2 border-yellow-400/80 flex flex-col justify-between relative group hover:border-yellow-400 transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-[10px] font-mono font-bold bg-yellow-400 text-black px-2 py-0.5 uppercase">
                TÓPICO 03
              </span>
              <Shirt className="w-5 h-5 text-yellow-400" />
            </div>

            <h3 className="text-lg font-black text-yellow-400 uppercase tracking-wide">
              Variedade de Produtos Fitness
            </h3>

            <p className="text-xs font-bold text-white uppercase border-l-2 border-yellow-400 pl-2">
              Catálogo Expandido de Produtos
            </p>

            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>Ampliar o mix de produtos com maior variedade para os alunos.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>Roupas e vestuário fitness exclusivos com a marca LotusGym.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>Acessórios: garrafas térmicas, toalhas, straps, luvas e mochilas.</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-2 border-t border-zinc-800 text-[10px] font-mono text-yellow-400 uppercase font-bold">
            • Diversificação de Linha e Pertencimento
          </div>
        </div>
      </div>

      {/* Bottom Summary Callout */}
      <div className="p-3.5 bg-zinc-900 border-l-4 border-yellow-400 border-t border-r border-b border-zinc-800 flex items-center justify-between text-xs font-mono">
        <span className="text-white font-bold uppercase">
          DIRETRIZ JÉSSICA: Posicionar a marca em novos públicos e diversificar a oferta de produtos fitness.
        </span>
        <span className="text-yellow-400 font-bold hidden sm:inline">
          PRODUTOS & EVENTOS
        </span>
      </div>
    </div>
  );
};
