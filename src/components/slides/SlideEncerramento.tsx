import React from 'react';
import { PresenterConfig } from '../../types';
import { Mail, Phone, CalendarCheck, ShieldCheck, Sparkles, Send } from 'lucide-react';

interface SlideEncerramentoProps {
  presenterConfig: PresenterConfig;
}

export const SlideEncerramento: React.FC<SlideEncerramentoProps> = ({ presenterConfig }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-14 bg-black text-white overflow-hidden select-none border border-zinc-800">
      {/* Background Graphic Accents */}
      <div className="absolute -left-16 -top-16 w-80 h-80 opacity-10 pointer-events-none border-[12px] border-yellow-400 rotate-12" />
      <div className="absolute right-10 bottom-10 w-96 h-96 opacity-5 pointer-events-none bg-yellow-400 rounded-full blur-3xl" />

      {/* Top Header */}
      <div className="flex items-center justify-between z-10 border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-400 text-black font-black text-lg flex items-center justify-center border-2 border-yellow-300">
            LG
          </div>
          <span className="text-yellow-400 font-extrabold text-xs tracking-widest uppercase">
            LOTUSGYM • PLANO DE AÇÃO ESTRATÉGICO
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
          <CalendarCheck className="w-4 h-4 text-yellow-400" />
          <span>INÍCIO IMEDIATO DAS SPRINTS</span>
        </div>
      </div>

      {/* Central Statement Box */}
      <div className="my-auto max-w-4xl mx-auto text-center z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-400/10 border border-yellow-400 text-yellow-400 text-xs font-mono font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>PRÓXIMOS PASSOS & ALINHAMENTO DE DIRETORIA</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-yellow-400 uppercase tracking-tight leading-tight">
          VAMOS TRANSFORMAR A LOTUSGYM JUNTOS?
        </h1>

        <div className="p-6 bg-zinc-900/90 border-2 border-yellow-400 max-w-2xl mx-auto shadow-2xl">
          <p className="text-lg md:text-2xl font-extrabold text-white tracking-wide uppercase leading-snug">
            "Eficiência operacional gera lucro. Experiência gera lealdade."
          </p>
        </div>

        <p className="text-xs md:text-sm text-zinc-300 max-w-xl mx-auto font-light leading-relaxed">
          O futuro da LotusGym como líder de mercado começa com a aprovação do cronograma de Quick Wins. Estamos prontos para iniciar a Sprint 1.
        </p>
      </div>

      {/* Footer Contact Details */}
      <div className="pt-6 border-t border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono text-zinc-300 z-10 items-center">
        <div>
          <span className="text-zinc-400 block uppercase text-[10px]">APRESENTADO POR:</span>
          <span className="font-bold text-white text-sm">{presenterConfig.presenterName}</span>
          <span className="text-zinc-500 block text-[11px]">{presenterConfig.presenterTitle}</span>
        </div>

        <div className="flex flex-col gap-1 justify-center">
          <div className="flex items-center gap-2 text-zinc-200">
            <Mail className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
            <span>{presenterConfig.contactEmail}</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-200">
            <Phone className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
            <span>{presenterConfig.contactPhone}</span>
          </div>
        </div>

        <div className="text-right flex flex-col items-end justify-center">
          <span className="px-3 py-1 bg-yellow-400 text-black font-bold uppercase text-xs">
            LOTUSGYM 2024 • CONFIDENCIAL
          </span>
          <span className="text-[10px] text-zinc-500 mt-1">SÃO PAULO / SP</span>
        </div>
      </div>
    </div>
  );
};
