import React from 'react';
import { Crown, Sparkles, Plus, CheckCircle, Zap } from 'lucide-react';

export const SlideLotusClub: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <Crown className="w-4 h-4 text-yellow-400" />
          <span>SLIDE 11 • A GRANDE NOVIDADE COMERCIAL</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
          Lotus Performance Club (Nova Receita Recorrente)
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          Upgrade de fidelidade e add-ons de alta margem para transformar o aluno em um "Membro VIP".
        </p>
      </div>

      {/* Main Content: Add-on Perks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-auto">
        {/* Perk 1 */}
        <div className="p-4 bg-zinc-900 border-2 border-yellow-400 space-y-2 relative group hover:bg-zinc-850 transition-colors">
          <div className="w-8 h-8 bg-yellow-400 text-black font-black flex items-center justify-center text-xs uppercase mb-2">
            01
          </div>
          <h3 className="text-sm font-bold text-yellow-400 uppercase">Refil de Isotônico Ilimitado</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Dispenser exclusivo na musculação para hidratação e reposição de eletrólitos durante todo o treino.
          </p>
          <div className="pt-2 text-[10px] font-mono text-zinc-400 border-t border-zinc-800">
            Custo baixo de insumo / Altíssima percepção
          </div>
        </div>

        {/* Perk 2 */}
        <div className="p-4 bg-zinc-900 border-2 border-yellow-400 space-y-2 relative group hover:bg-zinc-850 transition-colors">
          <div className="w-8 h-8 bg-yellow-400 text-black font-black flex items-center justify-center text-xs uppercase mb-2">
            02
          </div>
          <h3 className="text-sm font-bold text-yellow-400 uppercase">Whey Protein Pós-Treino</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Dose diária pré-misturada no balcão da recepção logo ao finalizar a série de exercícios.
          </p>
          <div className="pt-2 text-[10px] font-mono text-zinc-400 border-t border-zinc-800">
            Conveniência total para o aluno
          </div>
        </div>

        {/* Perk 3 */}
        <div className="p-4 bg-zinc-900 border-2 border-yellow-400 space-y-2 relative group hover:bg-zinc-850 transition-colors">
          <div className="w-8 h-8 bg-yellow-400 text-black font-black flex items-center justify-center text-xs uppercase mb-2">
            03
          </div>
          <h3 className="text-sm font-bold text-yellow-400 uppercase">Cadeira de Massagem VIP</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Sessão relaxante de 15 minutos em poltronas de alta tecnologia no espaço lounge antes ou após a aula.
          </p>
          <div className="pt-2 text-[10px] font-mono text-zinc-400 border-t border-zinc-800">
            Efeito "Lounge de Primeira Classe"
          </div>
        </div>

        {/* Perk 4 */}
        <div className="p-4 bg-zinc-900 border-2 border-yellow-400 space-y-2 relative group hover:bg-zinc-850 transition-colors">
          <div className="w-8 h-8 bg-yellow-400 text-black font-black flex items-center justify-center text-xs uppercase mb-2">
            04
          </div>
          <h3 className="text-sm font-bold text-yellow-400 uppercase">Acesso Convidado Fim de Semana</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Direito de trazer 1 amigo aos sábados e domingos para treinar junto sem custo adicional de diária.
          </p>
          <div className="pt-2 text-[10px] font-mono text-zinc-400 border-t border-zinc-800">
            Excelente motor de novos leads
          </div>
        </div>
      </div>

      {/* Financial Simulation Banner */}
      <div className="p-4 bg-zinc-900 border-2 border-yellow-400 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-yellow-400 shrink-0" />
          <div>
            <span className="text-[10px] font-mono font-bold text-yellow-400 uppercase block">SIMULAÇÃO DE IMPACTO NA RECEITA RECORRENTE</span>
            <p className="text-xs md:text-sm font-bold text-white">
              Adesão de apenas 25% da base ao Lotus Club (+R$ 49,90/mês) = <span className="text-yellow-400 font-mono font-black">+R$ 10.200/mês de margem pura</span> (~R$ 122.000/ano adicionais).
            </p>
          </div>
        </div>
        <span className="px-4 py-2 bg-yellow-400 text-black font-mono font-bold text-xs uppercase shrink-0 border border-yellow-300">
          MARGEM BRUTA: ~72%
        </span>
      </div>
    </div>
  );
};
