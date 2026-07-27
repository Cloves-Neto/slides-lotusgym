import React from 'react';
import { Bot, MessageSquare, Clock, Zap, CheckCircle2, UserCheck } from 'lucide-react';

export const SlideIA: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <Bot className="w-4 h-4 text-yellow-400" />
          <span>SLIDE 17 • AUTOMAÇÃO AVANÇADA</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
          Inteligência Artificial & Atendimento Copiloto
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          Agente de IA customizado para a LotusGym atuando 24/7 na atração, qualificação e agendamento.
        </p>
      </div>

      {/* Main Grid: AI Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-auto">
        {/* Capability 1: 24/7 WhatsApp Agent */}
        <div className="p-5 bg-zinc-900 border border-yellow-500/40 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-yellow-400 uppercase flex items-center gap-2">
              <Clock className="w-4 h-4" /> ATENDIMENTO 24 HORAS
            </span>
            <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-mono">
              RESPOSTA EM &lt; 5 SEG
            </span>
          </div>
          <h3 className="text-base font-bold text-white">Agente Virtual LotusGym no WhatsApp</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Treinado com todo o conhecimento de modalidades, horários de funcionamento, regras de estacionamento e opções de planos da academia. Responde dúvidas com tom acolhedor e natural.
          </p>
          <div className="p-2.5 bg-black border border-zinc-800 text-[11px] font-mono text-zinc-400">
            Captura de leads mesmo de madrugada, domingos e feriados.
          </div>
        </div>

        {/* Capability 2: Lead Qualification & Booking */}
        <div className="p-5 bg-zinc-900 border border-yellow-500/40 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-yellow-400 uppercase flex items-center gap-2">
              <Zap className="w-4 h-4" /> TRIAGEM & AGENDAMENTO
            </span>
            <span className="px-2 py-0.5 bg-yellow-400/20 text-yellow-400 border border-yellow-500/40 text-[10px] font-mono">
              INTEGRADO AO GOOGLE CALENDAR
            </span>
          </div>
          <h3 className="text-base font-bold text-white">Agendamento Automático de Visitas</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            A IA conduz a conversa, entende o objetivo do aluno (ex: musculação no período da manhã) e oferece horários disponíveis para a aula experimental, inserindo o compromisso direto no CRM.
          </p>
          <div className="p-2.5 bg-black border border-zinc-800 text-[11px] font-mono text-zinc-400">
            Lembrete inteligente 2 horas antes da visita reduz no-show em 60%.
          </div>
        </div>
      </div>

      {/* Workflow Step Banner */}
      <div className="p-4 bg-zinc-900 border-2 border-yellow-400 space-y-2">
        <span className="text-[10px] font-mono font-bold text-yellow-400 uppercase block">
          FLUXO DE FUNCIONAMENTO DO AGENTE IA LOTUSGYM:
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs font-mono">
          <div className="p-2 bg-black border border-zinc-800">
            <span className="text-yellow-400 font-bold block">1. Clique no Anúncio</span>
            <span className="text-[10px] text-zinc-400">Lead manda "Oi" no WhatsApp</span>
          </div>
          <div className="p-2 bg-black border border-zinc-800">
            <span className="text-yellow-400 font-bold block">2. Triagem Instantânea</span>
            <span className="text-[10px] text-zinc-400">IA qualifica objetivo & perfil</span>
          </div>
          <div className="p-2 bg-black border border-zinc-800">
            <span className="text-yellow-400 font-bold block">3. Passe Livre Agendado</span>
            <span className="text-[10px] text-zinc-400">Confirmação de data/hora</span>
          </div>
          <div className="p-2 bg-black border border-zinc-800">
            <span className="text-yellow-400 font-bold block">4. Recepção Notificada</span>
            <span className="text-[10px] text-zinc-400">Consultor assume presencialmente</span>
          </div>
        </div>
      </div>
    </div>
  );
};
