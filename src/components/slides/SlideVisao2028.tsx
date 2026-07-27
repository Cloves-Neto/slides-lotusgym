import React from 'react';
import { Rocket, Award, Network, ShieldCheck, Zap } from 'lucide-react';

export const SlideVisao2028: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <Rocket className="w-4 h-4 text-yellow-400" />
          <span>SLIDE 22 • VISÃO DE LONGO PRAZO</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
          Visão LotusGym 2028 (O Futuro)
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          A consolidação da LotusGym como uma plataforma fitness escalável, tecnológica e pronta para replicação.
        </p>
      </div>

      {/* 3 Pillars of Future Vision */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
        {/* Pillar 1: Regional Leadership */}
        <div className="p-5 bg-zinc-900 border border-yellow-500/40 space-y-3">
          <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400 flex items-center justify-center text-yellow-400">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-yellow-400 uppercase">01. Líder de Mercado Regional</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Consolidação como a academia número 1 em satisfação de alunos, faturamento por metro quadrado e inovação tecnológica na região.
          </p>
          <div className="p-2 bg-black/60 border border-zinc-800 text-[11px] font-mono text-zinc-400">
            Marca forte com valor intangível de mercado (Valuation).
          </div>
        </div>

        {/* Pillar 2: Tech Platform */}
        <div className="p-5 bg-zinc-900 border border-yellow-500/40 space-y-3">
          <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400 flex items-center justify-center text-yellow-400">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-yellow-400 uppercase">02. Operação 100% Data-Driven</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Eliminação total do "achismo" gerencial. Processos automáticos de retenção, precificação dinâmica por horário e copilotos de IA em todas as etapas.
          </p>
          <div className="p-2 bg-black/60 border border-zinc-800 text-[11px] font-mono text-zinc-400">
            Margem de Ebitda acima de 32%.
          </div>
        </div>

        {/* Pillar 3: Multi-Unit / Franchise Model */}
        <div className="p-5 bg-zinc-900 border border-yellow-500/40 space-y-3">
          <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400 flex items-center justify-center text-yellow-400">
            <Network className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-yellow-400 uppercase">03. Modelo Multi-unidade Franqueável</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Manualização de processos e ecossistema digital plug-and-play prontos para expansão de novas unidades próprias ou formato de franquias fitness.
          </p>
          <div className="p-2 bg-black/60 border border-zinc-800 text-[11px] font-mono text-zinc-400">
            Ativo replicável e altamente escalável.
          </div>
        </div>
      </div>

      {/* Inspiring Footer */}
      <div className="p-4 bg-zinc-900 border-2 border-yellow-400 flex items-center justify-between font-mono text-xs">
        <span className="text-yellow-400 font-bold uppercase">
          METAMORFOSE LOTUSGYM: DE ACADEMIA TRADICIONAL PARA PLATAFORMA DIGITAL DE PERFORMANCE
        </span>
        <span className="text-white font-bold hidden sm:inline">VISÃO 2028</span>
      </div>
    </div>
  );
};
