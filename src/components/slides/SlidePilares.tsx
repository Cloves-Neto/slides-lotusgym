import React, { useState } from 'react';
import { Megaphone, ShoppingCart, Cpu, Heart, BarChart3, ChevronRight } from 'lucide-react';

interface PillarDetail {
  id: number;
  title: string;
  sub: string;
  icon: any;
  items: string[];
}

const PILARES: PillarDetail[] = [
  {
    id: 1,
    title: 'MARKETING',
    sub: 'Aquisição & Tráfego',
    icon: Megaphone,
    items: [
      'Site Institucional e LPs',
      'SEO Local & Google Maps',
      'Anúncios Pagos Meta/Google',
      'Presença Digital de Impacto'
    ]
  },
  {
    id: 2,
    title: 'COMERCIAL',
    sub: 'Máquina de Vendas',
    icon: ShoppingCart,
    items: [
      'CRM de Vendas Dedicado',
      'Agendamento de Visitas',
      'Régua de Recuperação',
      'Scripting da Recepção'
    ]
  },
  {
    id: 3,
    title: 'TECNOLOGIA',
    sub: 'Infraestrutura & IA',
    icon: Cpu,
    items: [
      'Integração via APIs',
      'Agente IA WhatsApp 24/7',
      'Catracas & Acessos Sync',
      'Portal Digital do Aluno'
    ]
  },
  {
    id: 4,
    title: 'EXPERIÊNCIA',
    sub: 'Fidelização & LTV',
    icon: Heart,
    items: [
      'Onboarding nos 30 Dias',
      'Lotus Performance Club',
      'Pesquisa NPS Contínua',
      'Gamificação de Frequência'
    ]
  },
  {
    id: 5,
    title: 'GESTÃO',
    sub: 'BI & Previsibilidade',
    icon: BarChart3,
    items: [
      'Dashboards Gerenciais',
      'Algoritmo Preditivo Churn',
      'DRE e Métricas D2D',
      'Planejamento de Expansão'
    ]
  }
];

export const SlidePilares: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number | null>(null);

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <span>SLIDE 07 • ARQUITETURA DE SUSTENTAÇÃO</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
          Os 5 Pilares da Transformação LotusGym
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          A estrutura integrada de 5 dimensões estratégicas para acelerar faturamento e retenção.
        </p>
      </div>

      {/* 5 Vertical Rectangles (Yellow Theme) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-3 my-auto h-auto md:h-[340px]">
        {PILARES.map((pilar) => {
          const Icon = pilar.icon;
          const isSelected = activePillar === pilar.id;

          return (
            <div
              key={pilar.id}
              onClick={() => setActivePillar(isSelected ? null : pilar.id)}
              className={`p-4 border-2 flex flex-col justify-between transition-all cursor-pointer relative overflow-hidden group ${
                isSelected
                  ? 'bg-yellow-400 text-black border-yellow-300 shadow-xl scale-[1.02] z-10'
                  : 'bg-zinc-900 text-white border-yellow-400 hover:bg-zinc-850 hover:border-yellow-300'
              }`}
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-extrabold ${isSelected ? 'text-black' : 'text-yellow-400'}`}>
                    0{pilar.id}
                  </span>
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-black' : 'text-yellow-400'}`} />
                </div>

                <h3 className={`text-base font-black tracking-wider uppercase mb-1 ${
                  isSelected ? 'text-black' : 'text-yellow-400'
                }`}>
                  {pilar.title}
                </h3>

                <p className={`text-[11px] font-mono mb-3 ${
                  isSelected ? 'text-zinc-800 font-bold' : 'text-zinc-400'
                }`}>
                  {pilar.sub}
                </p>
              </div>

              {/* Items List */}
              <div className="space-y-1.5 my-2">
                {pilar.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[11px]">
                    <ChevronRight className={`w-3 h-3 shrink-0 ${isSelected ? 'text-black' : 'text-yellow-400'}`} />
                    <span className={isSelected ? 'text-black font-semibold' : 'text-zinc-200'}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Tag */}
              <div className={`mt-3 pt-2 border-t text-[10px] font-mono text-center uppercase font-bold ${
                isSelected ? 'border-black/20 text-black' : 'border-zinc-800 text-zinc-500'
              }`}>
                {isSelected ? 'CLIQUE PARA RECOLHER' : 'PILAR ESSENCIAL'}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Banner */}
      <div className="p-3 bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-mono flex items-center justify-between">
        <span>SISTEMA INTEGRADO: Cada pilar retroalimenta o próximo, garantindo fluxo contínuo de caixa.</span>
        <span className="text-yellow-400 font-bold hidden sm:inline">CLIQUE NOS PILARES PARA DESTAQUE</span>
      </div>
    </div>
  );
};
