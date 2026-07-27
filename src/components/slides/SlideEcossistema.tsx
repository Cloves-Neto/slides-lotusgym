import React from 'react';
import { Cpu, Globe, Database, Smartphone, ArrowRight, ShieldCheck } from 'lucide-react';

export const SlideEcossistema: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <Cpu className="w-4 h-4 text-yellow-400" />
          <span>SLIDE 14 • ARQUITETURA TÉCNICA</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
          Ecossistema Tecnológico Integrado
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          Integração total via API sem re-digitação de dados entre vendas, catraca e relatórios.
        </p>
      </div>

      {/* Integration Diagram Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-auto relative">
        {/* Node 1: Website */}
        <div className="p-4 bg-zinc-900 border-2 border-yellow-400 space-y-2 text-center relative group">
          <div className="w-10 h-10 bg-yellow-400 text-black font-bold mx-auto flex items-center justify-center">
            <Globe className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono text-yellow-400 font-bold block uppercase">01. CAPTAÇÃO</span>
          <h3 className="text-sm font-black text-white uppercase">Novo Site & LPs</h3>
          <p className="text-[11px] text-zinc-400">Captura de Leads 24h via Formulário e Botão WhatsApp</p>
        </div>

        {/* Node 2: CRM & AI */}
        <div className="p-4 bg-zinc-900 border-2 border-yellow-400 space-y-2 text-center relative group">
          <div className="w-10 h-10 bg-yellow-400 text-black font-bold mx-auto flex items-center justify-center">
            <Smartphone className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono text-yellow-400 font-bold block uppercase">02. CONVERSÃO</span>
          <h3 className="text-sm font-black text-white uppercase">CRM & WhatsApp IA</h3>
          <p className="text-[11px] text-zinc-400">Atendimento 24/7, Triagem e Cadência Comercial</p>
        </div>

        {/* Node 3: ERP / Catraca (ABCEVO) */}
        <div className="p-4 bg-zinc-900 border-2 border-yellow-400 space-y-2 text-center relative group">
          <div className="w-10 h-10 bg-yellow-400 text-black font-bold mx-auto flex items-center justify-center">
            <Database className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono text-yellow-400 font-bold block uppercase">03. GESTÃO & ACESSO</span>
          <h3 className="text-sm font-black text-white uppercase">Sistema ABCEVO / Catraca</h3>
          <p className="text-[11px] text-zinc-400">Contratos, Cobrança Recorrente e Liberação de Catracas</p>
        </div>

        {/* Node 4: BI Dashboard */}
        <div className="p-4 bg-zinc-900 border-2 border-yellow-400 space-y-2 text-center relative group">
          <div className="w-10 h-10 bg-yellow-400 text-black font-bold mx-auto flex items-center justify-center">
            <Cpu className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono text-yellow-400 font-bold block uppercase">04. DECISÃO</span>
          <h3 className="text-sm font-black text-white uppercase">BI & Analytics Live</h3>
          <p className="text-[11px] text-zinc-400">Painéis de Vendas, Retenção e DRE em tempo real</p>
        </div>
      </div>

      {/* Integration Technical Highlights */}
      <div className="p-4 bg-zinc-900 border border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-yellow-400 shrink-0" />
          <span className="text-zinc-300">Webhooks para sincronização de matrículas em milissegundos.</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-yellow-400 shrink-0" />
          <span className="text-zinc-300">Sem retrabalho da equipe de recepção digitando dados em dois locais.</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-yellow-400 shrink-0" />
          <span className="text-zinc-300">Segurança de dados com conformidade à LGPD e criptografia de ponta.</span>
        </div>
      </div>
    </div>
  );
};
