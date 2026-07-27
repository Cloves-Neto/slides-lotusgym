import React from 'react';
import { PresenterConfig } from '../../types';
import { TrendingUp, Cpu } from 'lucide-react';

interface SlideCapaProps {
  presenterConfig: PresenterConfig;
}

export const SlideCapa: React.FC<SlideCapaProps> = ({ presenterConfig }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-14 bg-black text-white overflow-hidden select-none border border-zinc-800">
      {/* Background Graphic Motif */}
      <div className="absolute -right-16 -bottom-16 w-96 h-96 opacity-10 pointer-events-none border-[12px] border-yellow-400 rotate-45" />
      <div className="absolute right-32 top-10 w-64 h-64 opacity-10 pointer-events-none bg-yellow-400 rounded-full blur-3xl" />

      {/* Top Header Branding with Official Lotus Logo */}
      <div className="flex items-center justify-between z-10 border-b border-zinc-800 pb-6">
        <div className="flex items-center gap-4">
          <img 
            src="/lotus-logo.png" 
            alt="LotusGym Logo Official" 
            referrerPolicy="no-referrer"
            className="w-16 h-16 object-contain"
          />
          <div>
            <span className="text-yellow-400 font-extrabold text-base tracking-widest uppercase block">
              LOTUSGYM PERFORMANCE CLUB
            </span>
            <span className="text-zinc-400 text-xs font-mono block">
              CONSULTORIA ESTRATÉGICA DE EXPANSÃO & PRODUTIVIDADE
            </span>
          </div>
        </div>
      </div>

      {/* Central Title Block */}
      <div className="my-auto max-w-4xl z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400 text-yellow-400 text-xs font-mono font-bold uppercase">
          <span>PLANO MESTRE DE EXPANSÃO & CONVENIÊNCIA</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-yellow-400 tracking-tight leading-[1.08] uppercase">
          PLANO ESTRATÉGICO DE CRESCIMENTO E TRANSFORMAÇÃO DIGITAL
        </h1>

        <p className="text-lg md:text-2xl font-light text-zinc-100 tracking-wide font-sans flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-semibold text-white">Onde Estamos</span>
          <span className="text-yellow-400">•</span>
          <span className="font-semibold text-white">Pilares Estratégicos</span>
          <span className="text-yellow-400">•</span>
          <span className="font-semibold text-white">Posicionamento Estratégico</span>
        </p>

        <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
          <div className="p-2.5 bg-zinc-900/90 border border-zinc-800 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-yellow-400 shrink-0" />
            <span className="text-xs font-mono text-zinc-300">Base 5.404 Alunos</span>
          </div>
          <div className="p-2.5 bg-zinc-900/90 border border-zinc-800 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-yellow-400 shrink-0" />
            <span className="text-xs font-mono text-zinc-300">Meta 6.300 Alunos</span>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-10 text-xs font-mono text-zinc-400">
        <div>
          <span className="text-white font-bold">{presenterConfig.presenterName}</span>
          <span className="mx-2 text-zinc-600">|</span>
          <span>{presenterConfig.presenterTitle}</span>
        </div>

        <div className="flex items-center gap-4">
          <span>SÃO PAULO • {presenterConfig.year}</span>
        </div>
      </div>
    </div>
  );
};
