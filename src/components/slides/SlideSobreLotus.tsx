import React from 'react';
import { Dumbbell, Users, Award, HeartPulse, Building2, Flame } from 'lucide-react';

export const SlideSobreLotus: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <span>SLIDE 03 • POSICIONAMENTO DA MARCA</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
          Sobre a LotusGym
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          História de solidez física, infraestrutura completa e autoridade no mercado regional fitness.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
        {/* Card 1: História & Solidez */}
        <div className="p-5 bg-zinc-900 border border-zinc-800 space-y-3">
          <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400 flex items-center justify-center text-yellow-400">
            <Building2 className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-yellow-400 uppercase">01. História & Marca</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Fundada com a missão de transformar vidas através da atividade física. Reconhecida localmente pelo ambiente acolhedor, corpo docente qualificado e equipamentos de primeira linha.
          </p>
        </div>

        {/* Card 2: Estrutura Física */}
        <div className="p-5 bg-zinc-900 border border-zinc-800 space-y-3">
          <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400 flex items-center justify-center text-yellow-400">
            <Dumbbell className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-yellow-400 uppercase">02. Infraestrutura Completa</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Amplo espaço biomecanicamente planejado, salas climatizadas para modalidades coletivas, estacionamento próprio, vestiários premium e espaço lounge para convivência.
          </p>
        </div>

        {/* Card 3: Diferenciais */}
        <div className="p-5 bg-zinc-900 border border-zinc-800 space-y-3">
          <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400 flex items-center justify-center text-yellow-400">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-yellow-400 uppercase">03. Diferenciais Competitivos</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Acompanhamento profissional humanizado, grade variada de aulas coletivas de alta energia, forte comunidade de alunos engajados e localização estratégica.
          </p>
        </div>
      </div>

      {/* Modalities Band (Yellow Icons) */}
      <div className="p-4 bg-zinc-900/90 border border-yellow-500/30">
        <span className="text-[10px] font-mono font-bold text-yellow-400 uppercase block mb-3">
          MODALIDADES E ÁREAS DE ATUAÇÃO LOTUSGYM:
        </span>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="flex items-center gap-2.5 p-2 bg-black border border-zinc-800">
            <Dumbbell className="w-5 h-5 text-yellow-400 shrink-0" />
            <div>
              <span className="text-xs font-bold text-white block">Musculação</span>
              <span className="text-[10px] text-zinc-400">Cardio & Biomecânica</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2 bg-black border border-zinc-800">
            <Flame className="w-5 h-5 text-yellow-400 shrink-0" />
            <div>
              <span className="text-xs font-bold text-white block">Aulas Coletivas</span>
              <span className="text-[10px] text-zinc-400">Spinning, Pilates, Dança</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2 bg-black border border-zinc-800">
            <Users className="w-5 h-5 text-yellow-400 shrink-0" />
            <div>
              <span className="text-xs font-bold text-white block">Personal Training</span>
              <span className="text-[10px] text-zinc-400">Treino Individualizado</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2 bg-black border border-zinc-800">
            <HeartPulse className="w-5 h-5 text-yellow-400 shrink-0" />
            <div>
              <span className="text-xs font-bold text-white block">Wellness & Nutrition</span>
              <span className="text-[10px] text-zinc-400">Avaliação & Recovery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
