import React, { useState } from 'react';
import { ShoppingCart, Users, PhoneCall, CalendarCheck, CheckCircle2, ArrowDown, Sparkles } from 'lucide-react';

interface FunnelStep {
  id: number;
  stage: string;
  count: number;
  conversion: string;
  desc: string;
  action: string;
}

const FUNNEL_STEPS: FunnelStep[] = [
  {
    id: 1,
    stage: '1. ATRAÇÃO (LEADS BRUTOS)',
    count: 450,
    conversion: '100%',
    desc: 'Contatos oriundos de Anúncios Meta/Google, Instagram Orgânico e Formulário do Site.',
    action: 'Disparo de mensagem de boas-vindas instantânea via WhatsApp Inteligente.'
  },
  {
    id: 2,
    stage: '2. QUALIFICAÇÃO & TRIAGEM',
    count: 360,
    conversion: '80%',
    desc: 'Triagem automatizada via Agente IA entendendo objetivo (emagrecimento, hipertrofia) e horário.',
    action: 'Encaminhamento do Passe Livre de 3 dias para validação presencial.'
  },
  {
    id: 3,
    stage: '3. AGENDAMENTO DA VISITA',
    count: 250,
    conversion: '69%',
    desc: 'Agendamento confirmado no calendário do consultor de vendas com lembrete 2h antes.',
    action: 'Lembrete automático com localização, estacionamento e nome do consultor.'
  },
  {
    id: 4,
    stage: '4. VISITA GUIADA & EXPERIÊNCIA',
    count: 180,
    conversion: '72%',
    desc: 'Tour presencial na academia + aula experimental conduzida com roteiro de alta percepção de valor.',
    action: 'Apresentação dos Planos Padrão e Lotus Performance Club.'
  },
  {
    id: 5,
    stage: '5. MATRÍCULA EFETIVADA',
    count: 126,
    conversion: '70% (28% do total)',
    desc: 'Fechamento do contrato anual no cartão recorrente ou PIX com entrada imediata.',
    action: 'Cadastro no sistema, liberação de catraca e Onboarding no App LotusGym.'
  }
];

export const SlideFunilComercial: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(3);

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <ShoppingCart className="w-4 h-4 text-yellow-400" />
          <span>SLIDE 09 • PILAR 2: MAQUINA DE VENDAS</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
          Estrutura do Funil Comercial de Alta Conversão
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          Processo estruturado de CRM, cadência de atendimento e conversão previsível de leads.
        </p>
      </div>

      {/* Main Content: Funnel Visual + Inspector Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto items-center">
        {/* Left Side: Visual Funnel Bars (7 cols) */}
        <div className="lg:col-span-7 space-y-2">
          <div className="text-[10px] font-mono text-zinc-400 uppercase flex items-center justify-between mb-1">
            <span>ETAPAS DO FUNNEL COMERCIAL (CLIQUE PARA VER DETALHES)</span>
            <span className="text-yellow-400 font-bold">META CONVERSÃO: 28%</span>
          </div>

          {FUNNEL_STEPS.map((step, idx) => {
            const isSelected = selectedStep === step.id;
            // Calculate width width percentage for funnel shape
            const widthPercent = 100 - (idx * 14);

            return (
              <div key={step.id} className="relative">
                <button
                  onClick={() => setSelectedStep(step.id)}
                  style={{ width: `${widthPercent}%` }}
                  className={`p-2.5 mx-auto flex items-center justify-between transition-all border cursor-pointer font-mono text-xs ${
                    isSelected
                      ? 'bg-yellow-400 text-black border-yellow-300 font-bold shadow-lg scale-[1.02] z-10'
                      : 'bg-zinc-900 text-zinc-200 border-zinc-700 hover:bg-zinc-800 hover:border-yellow-500/60'
                  }`}
                >
                  <span className="truncate">{step.stage}</span>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className={`px-2 py-0.5 text-[10px] ${
                      isSelected ? 'bg-black text-yellow-400' : 'bg-zinc-800 text-yellow-400'
                    }`}>
                      {step.count} LEADS
                    </span>
                    <span className="text-[10px] opacity-80">{step.conversion}</span>
                  </div>
                </button>

                {idx < FUNNEL_STEPS.length - 1 && (
                  <div className="flex justify-center my-0.5">
                    <ArrowDown className="w-3 h-3 text-yellow-500/50" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Side: Step Inspector Card (5 cols) */}
        <div className="lg:col-span-5 p-5 bg-zinc-900 border-2 border-yellow-400 space-y-3">
          {(() => {
            const active = FUNNEL_STEPS.find(s => s.id === selectedStep) || FUNNEL_STEPS[0];
            return (
              <>
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                  <span className="text-xs font-mono font-bold text-yellow-400 uppercase">
                    DETALHAMENTO DA ETAPA {active.id}
                  </span>
                  <span className="text-xs font-mono text-zinc-400 font-bold">
                    RETENÇÃO ETAPA: {active.conversion}
                  </span>
                </div>

                <h3 className="text-base font-black text-white uppercase">
                  {active.stage}
                </h3>

                <div className="p-3 bg-black/70 border border-zinc-800 text-xs space-y-2">
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 block uppercase">DESCRIÇÃO DA ETAPA:</span>
                    <p className="text-zinc-200">{active.desc}</p>
                  </div>

                  <div className="pt-2 border-t border-zinc-800">
                    <span className="text-[10px] font-mono text-yellow-400 block uppercase font-bold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> AÇÃO DE AUTOMAÇÃO NO CRM:
                    </span>
                    <p className="text-zinc-300 font-light italic">{active.action}</p>
                  </div>
                </div>

                <div className="p-2.5 bg-yellow-400/10 border border-yellow-500/40 text-[11px] text-yellow-300 font-mono flex items-center justify-between">
                  <span>VOLUME DE CONVERSÃO MENSAL:</span>
                  <span className="font-extrabold text-white">{active.count} ALUNOS</span>
                </div>
              </>
            );
          })()}
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="p-3 bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center justify-between">
        <span className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-yellow-400" />
          RECUPERAÇÃO DE EX-ALUNOS: Disparo de ofertas para base inativa atinge até 8% de reconversão extra.
        </span>
        <span className="text-yellow-400 font-bold">CRM 100% OPERACIONAL</span>
      </div>
    </div>
  );
};
