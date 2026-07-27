import React from 'react';
import { Building2, Users2, Briefcase, FileCheck2, TrendingUp } from 'lucide-react';

export const SlideConvenios: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <Building2 className="w-4 h-4 text-yellow-400" />
          <span>SLIDE 13 • EXPANSÃO B2B REGIONAL</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
          Convênios Empresariais & Parcerias B2B
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          Aceleração de matrículas em lote através do mercado corporativo e condomínios locais.
        </p>
      </div>

      {/* Grid of 3 B2B Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
        {/* Pilar 1: Empresas Locais */}
        <div className="p-5 bg-zinc-900 border border-yellow-500/40 space-y-3">
          <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400 flex items-center justify-center text-yellow-400">
            <Briefcase className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-yellow-400 uppercase">01. Parcerias com PMEs e Comércio</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Acordo comercial direto com empresas do entorno (escritórios, redes de varejo, clínicas) oferecendo desconto subsidiado para colaboradores via desconto em folha ou benefício direto.
          </p>
        </div>

        {/* Pilar 2: Condomínios */}
        <div className="p-5 bg-zinc-900 border border-yellow-500/40 space-y-3">
          <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400 flex items-center justify-center text-yellow-400">
            <Users2 className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-yellow-400 uppercase">02. Condomínios Residenciais</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Acordo com síndicos e administradoras de condomínios da região com benefício exclusivo para moradores ("Parceiro Bairro Saudável") e Isenção de Taxa de Matrícula.
          </p>
        </div>

        {/* Pilar 3: Gympass/TotalPass/Plataformas */}
        <div className="p-5 bg-zinc-900 border border-yellow-500/40 space-y-3">
          <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400 flex items-center justify-center text-yellow-400">
            <FileCheck2 className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-yellow-400 uppercase">03. Plataformas Corporativas</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Integração eficiente das diárias de agregadores (Gympass/TotalPass) com captura de dados no CRM para converter esses usuários casuais em membros recorrentes.
          </p>
        </div>
      </div>

      {/* Target B2B Impact */}
      <div className="p-4 bg-zinc-900 border-2 border-yellow-400 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
        <div>
          <span className="text-[10px] font-bold text-yellow-400 uppercase block">META B2B PARA 90 DIAS</span>
          <p className="text-sm font-bold text-white">
            15 Empresas Conveniadas = <span className="text-yellow-400 font-black">+120 Novos Alunos Recorrentes</span> sem custo de mídia social.
          </p>
        </div>
        <div className="px-3 py-1 bg-yellow-400 text-black text-xs font-bold shrink-0">
          CAC CORPORATIVO: ZERO
        </div>
      </div>
    </div>
  );
};
