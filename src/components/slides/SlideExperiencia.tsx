import React from 'react';
import { Heart, Smartphone, Trophy, MessageSquareHeart, ShieldCheck } from 'lucide-react';

export const SlideExperiencia: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <Heart className="w-4 h-4 text-yellow-400" />
          <span>SLIDE 10 • PILAR 3: EXPERIÊNCIA & RETENÇÃO</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
          Fidelização, Engajamento & Extensão de LTV
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          Aceleração da jornada de hábito nos primeiros 30 dias para reduzir drasticamente o cancelamento precoce.
        </p>
      </div>

      {/* Grid of 3 Major Pillars of Student Experience */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
        {/* Card 1: Portal do Aluno */}
        <div className="p-5 bg-zinc-900 border border-yellow-500/40 space-y-3">
          <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400 flex items-center justify-center text-yellow-400">
            <Smartphone className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-yellow-400 uppercase">01. Portal do Aluno Digital</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Aplicativo móvel leve com acesso a treinos digitalizados prescritos por instrutores, reserva de vagas em aulas coletivas com 1-clique e histórico de frequência.
          </p>
          <div className="pt-2 border-t border-zinc-800 text-[11px] font-mono text-zinc-400">
            Fim das fichas de papel rasgadas na musculação.
          </div>
        </div>

        {/* Card 2: Gamificação */}
        <div className="p-5 bg-zinc-900 border border-yellow-500/40 space-y-3">
          <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400 flex items-center justify-center text-yellow-400">
            <Trophy className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-yellow-400 uppercase">02. Gamificação de Frequência</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Programa de metas de treino mensal ("Desafio Lotus 12 Treinos/Mês"). Alunos atingindo a meta ganham pontos para trocar por produtos no balcão e descontos na mensalidade.
          </p>
          <div className="pt-2 border-t border-zinc-800 text-[11px] font-mono text-zinc-400">
            Aumento direto de frequência e retenção de hábito.
          </div>
        </div>

        {/* Card 3: NPS Continuado */}
        <div className="p-5 bg-zinc-900 border border-yellow-500/40 space-y-3">
          <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400 flex items-center justify-center text-yellow-400">
            <MessageSquareHeart className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-yellow-400 uppercase">03. Pesquisa NPS Automática</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Coleta automática de nota de satisfação aos 15, 45 e 90 dias de matrícula via WhatsApp. Críticas de detratores disparam alerta imediato para o gerente intervir.
          </p>
          <div className="pt-2 border-t border-zinc-800 text-[11px] font-mono text-zinc-400">
            Correção de insatisfação antes do pedido de cancelamento.
          </div>
        </div>
      </div>

      {/* Onboarding Rule Banner */}
      <div className="p-4 bg-zinc-900 border-2 border-yellow-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-yellow-400 shrink-0" />
          <div>
            <span className="text-[10px] font-mono font-bold text-yellow-400 uppercase block">RÉGUA DOS PRIMEIRA 30 DIAS</span>
            <p className="text-xs md:text-sm font-bold text-white">
              "Aluno que realiza pelo menos 10 treinos nos primeiros 30 dias reduz a probabilidade de churn em 78%."
            </p>
          </div>
        </div>
        <span className="px-3 py-1 bg-yellow-400 text-black font-mono font-bold text-xs shrink-0 uppercase">
          LTV METAS: 14+ MESES
        </span>
      </div>
    </div>
  );
};
