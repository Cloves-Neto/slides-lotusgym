import React from 'react';
import { Megaphone, Globe, Target, Search, BarChart2, CheckCircle2 } from 'lucide-react';

export const SlideMarketing: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <Megaphone className="w-4 h-4 text-yellow-400" />
          <span>SLIDE 08 • PILAR 1: MARKETING & AQUISIÇÃO</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
          Marketing de Performance & Presença Digital
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          Estratégia omnicanal focada em geração contínua de cadastros qualificados ao menor custo.
        </p>
      </div>

      {/* Grid of 4 Strategic Initiatives */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto">
        {/* Initiative 1: High Conversion Website */}
        <div className="p-4 bg-zinc-900 border border-yellow-500/40 space-y-2">
          <div className="flex items-center gap-2 text-yellow-400">
            <Globe className="w-4 h-4" />
            <h3 className="text-sm font-bold uppercase">Novo Website & Landing Pages</h3>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Desenvolvimento de portal responsivo ultra-rápido com páginas de conversão dedicadas para Passe Livre 3 Dias, Aulas Coletivas e Treino Personalizado.
          </p>
          <div className="pt-2 flex items-center gap-1.5 text-[11px] text-yellow-400 font-mono">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Formulários integrados com WhatsApp instantâneo</span>
          </div>
        </div>

        {/* Initiative 2: Paid Ads */}
        <div className="p-4 bg-zinc-900 border border-yellow-500/40 space-y-2">
          <div className="flex items-center gap-2 text-yellow-400">
            <Target className="w-4 h-4" />
            <h3 className="text-sm font-bold uppercase">Tráfego Pago Geolocalizado</h3>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Campanhas hiper-segmentadas no Instagram, Facebook e Google Ads num raio de 5km a 8km da LotusGym atingindo o público-alvo exato de alta renda.
          </p>
          <div className="pt-2 flex items-center gap-1.5 text-[11px] text-yellow-400 font-mono">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Oferta irresistível de entrada com teste guiado</span>
          </div>
        </div>

        {/* Initiative 3: Local SEO */}
        <div className="p-4 bg-zinc-900 border border-yellow-500/40 space-y-2">
          <div className="flex items-center gap-2 text-yellow-400">
            <Search className="w-4 h-4" />
            <h3 className="text-sm font-bold uppercase">SEO Local & Perfil Google Meu Negócio</h3>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Otimização do perfil da empresa no Google Maps para dominar as buscas orgânicas regionais como "academia perto de mim" ou "melhor musculação na região".
          </p>
          <div className="pt-2 flex items-center gap-1.5 text-[11px] text-yellow-400 font-mono">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Coleta sistemática de avaliações 5 estrelas</span>
          </div>
        </div>

        {/* Initiative 4: KPIs */}
        <div className="p-4 bg-zinc-900 border border-yellow-500/40 space-y-2">
          <div className="flex items-center gap-2 text-yellow-400">
            <BarChart2 className="w-4 h-4" />
            <h3 className="text-sm font-bold uppercase">Gestão por Métricas de Atração</h3>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Acompanhamento semanal rígido dos custos de marketing para garantir retorno financeiro real sobre o investimento publicitário.
          </p>
          <div className="pt-2 flex items-center gap-1.5 text-[11px] text-yellow-400 font-mono">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Foco total em CPL (Custo por Lead) e ROAS</span>
          </div>
        </div>
      </div>

      {/* Target KPIs Banner */}
      <div className="p-4 bg-zinc-900 border-2 border-yellow-400 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono">
        <div>
          <span className="text-[10px] text-zinc-400 block uppercase">CPL ALVO</span>
          <span className="text-xl font-black text-yellow-400">R$ 4,50 - 7,00</span>
        </div>
        <div>
          <span className="text-[10px] text-zinc-400 block uppercase">CAC ESTIMADO</span>
          <span className="text-xl font-black text-yellow-400">R$ 38,00</span>
        </div>
        <div>
          <span className="text-[10px] text-zinc-400 block uppercase">LEADS/MÊS METAS</span>
          <span className="text-xl font-black text-yellow-400">450+ LEADS</span>
        </div>
        <div>
          <span className="text-[10px] text-zinc-400 block uppercase">ROI DE MÍDIA</span>
          <span className="text-xl font-black text-yellow-400">4.5x ROAS</span>
        </div>
      </div>
    </div>
  );
};
