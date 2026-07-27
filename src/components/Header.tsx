import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Grid, 
  MessageSquare, 
  Settings, 
  Maximize, 
  Minimize, 
  Sun, 
  Moon,
  Play,
  RotateCcw
} from 'lucide-react';
import { PresenterConfig } from '../types';

interface HeaderProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onOpenGrid: () => void;
  onToggleNotes: () => void;
  showNotes: boolean;
  onOpenConfig: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  presenterConfig: PresenterConfig;
}

export const Header: React.FC<HeaderProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onOpenGrid,
  onToggleNotes,
  showNotes,
  onOpenConfig,
  isDarkMode,
  onToggleTheme,
  isFullscreen,
  onToggleFullscreen,
  presenterConfig
}) => {
  const progressPercent = ((currentSlide) / totalSlides) * 100;

  return (
    <header className="w-full select-none z-30 transition-colors duration-200 border-b bg-[#000000] text-white border-[#333333]">
      {/* Top Progress Bar */}
      <div className="w-full bg-[#111111] h-1 relative overflow-hidden">
        <div 
          className="h-full bg-[#FFD700] transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        {/* Brand & Title */}
        <div className="flex items-center gap-3">
          <div className="flex items-baseline gap-1">
            <div className="text-[#FFD700] text-lg font-black tracking-tighter uppercase">
              LOTUS<span className="text-[#FF0000]">GYM</span>
            </div>
          </div>
          <div className="hidden sm:block border-l border-[#333333] pl-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#FFD700] text-[11px] tracking-widest uppercase">
                Estratégia de Expansão
              </span>
              <span className="text-zinc-600 text-xs">|</span>
              <span className="text-zinc-400 text-xs font-mono">
                {presenterConfig.presenterName} ({presenterConfig.year})
              </span>
            </div>
            <h1 className="text-xs font-semibold text-zinc-300 truncate max-w-xs md:max-w-md uppercase tracking-wider">
              Plano Estratégico & Transformação Digital
            </h1>
          </div>
        </div>

        {/* Central Navigation */}
        <div className="flex items-center gap-2 bg-[#111111] p-1 border border-[#333333]">
          <button
            onClick={onPrev}
            disabled={currentSlide === 1}
            title="Slide Anterior (Seta Esquerda)"
            className="p-1.5 hover:bg-[#222222] text-zinc-200 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenGrid}
            className="px-2.5 py-1 text-xs font-mono font-bold text-[#FFD700] hover:bg-[#222222] transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Abrir Mosaico de Slides (G)"
          >
            <span>SLIDE {String(currentSlide).padStart(2, '0')}</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400">{String(totalSlides).padStart(2, '0')}</span>
            <Grid className="w-3.5 h-3.5 ml-1 text-zinc-400" />
          </button>

          <button
            onClick={onNext}
            disabled={currentSlide === totalSlides}
            title="Próximo Slide (Seta Direita / Espaço)"
            className="p-1.5 hover:bg-[#222222] text-zinc-200 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Tools & Mode Toggles */}
        <div className="flex items-center gap-2">
          {/* Presenter Notes Toggle */}
          <button
            onClick={onToggleNotes}
            className={`px-2.5 py-1.5 text-xs font-medium flex items-center gap-1.5 transition-colors border cursor-pointer ${
              showNotes
                ? 'bg-[#FFD700] text-black border-[#FFD700] font-bold'
                : 'bg-[#111111] text-zinc-300 border-[#333333] hover:bg-[#222222]'
            }`}
            title="Modo Apresentador / Notas do Consultor (N)"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Notas</span>
          </button>

          {/* Config Modal Toggle */}
          <button
            onClick={onOpenConfig}
            className="p-1.5 bg-[#111111] text-zinc-300 border border-[#333333] hover:bg-[#222222] transition-colors cursor-pointer"
            title="Configurar Dados do Apresentador & Métricas"
          >
            <Settings className="w-4 h-4" />
          </button>

          {/* Dark / Light Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-1.5 bg-[#111111] text-zinc-300 border border-[#333333] hover:bg-[#222222] transition-colors cursor-pointer"
            title={isDarkMode ? 'Mudar para Fundo Claro' : 'Mudar para Fundo Escuro'}
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-[#FFD700]" /> : <Moon className="w-4 h-4 text-zinc-300" />}
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={onToggleFullscreen}
            className="p-1.5 bg-[#111111] text-zinc-300 border border-[#333333] hover:bg-[#222222] transition-colors cursor-pointer"
            title={isFullscreen ? 'Sair da Tela Cheia (Esc)' : 'Tela Cheia (F)'}
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
