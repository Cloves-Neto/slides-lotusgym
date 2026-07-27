import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Clock, ArrowRight, MessageSquare, AlertCircle, Eye } from 'lucide-react';
import { SlideData } from '../types';

interface PresenterModePanelProps {
  currentSlideData: SlideData;
  nextSlideData?: SlideData;
  onClose: () => void;
  onNextSlide: () => void;
  isDarkMode: boolean;
}

export const PresenterModePanel: React.FC<PresenterModePanelProps> = ({
  currentSlideData,
  nextSlideData,
  onClose,
  onNextSlide,
  isDarkMode
}) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleResetTimer = () => {
    setSeconds(0);
    setIsActive(true);
  };

  return (
    <aside className="w-full lg:w-80 shrink-0 border-l border-[#333333] flex flex-col h-full overflow-y-auto transition-colors bg-[#000000] text-white">
      {/* Header / Timer Bar */}
      <div className="p-4 border-b border-[#333333] bg-[#111111] flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#FFD700] font-mono text-sm font-bold">
          <Clock className="w-4 h-4 text-[#FFD700]" />
          <span>{formatTime(seconds)}</span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsActive(!isActive)}
            className="p-1 hover:bg-[#222222] text-zinc-300 hover:text-white transition-colors cursor-pointer"
            title={isActive ? 'Pausar Cronômetro' : 'Iniciar Cronômetro'}
          >
            {isActive ? <Pause className="w-4 h-4 text-[#FFD700]" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={handleResetTimer}
            className="p-1 hover:bg-[#222222] text-zinc-400 hover:text-white transition-colors cursor-pointer"
            title="Reiniciar Cronômetro"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="p-4 space-y-5 flex-1 overflow-y-auto">
        {/* Current Slide Summary */}
        <div className="p-3.5 bg-[#111111] border-l-4 border-[#FFD700] border-t border-r border-b border-[#333333]">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-mono uppercase font-bold text-[#FFD700]">
              SLIDE {currentSlideData.id} • {currentSlideData.category}
            </span>
          </div>
          <h3 className="text-sm font-bold text-white line-clamp-2 uppercase tracking-wide">
            {currentSlideData.title}
          </h3>
        </div>

        {/* Key Takeaway Box */}
        <div className="p-3.5 bg-[#111111] border-l-4 border-[#FF0000] border-t border-r border-b border-[#333333]">
          <div className="flex items-center gap-1.5 text-[#FF0000] font-bold text-xs uppercase mb-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Ponto Central da Mensagem</span>
          </div>
          <p className="text-xs text-zinc-200 font-medium leading-relaxed">
            "{currentSlideData.keyTakeaway}"
          </p>
        </div>

        {/* Presenter Speech Notes */}
        <div>
          <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs uppercase font-bold mb-2">
            <MessageSquare className="w-3.5 h-3.5 text-[#FFD700]" />
            <span>Roteiro de Fala / Dicas do Consultor</span>
          </div>
          <div className="p-3 bg-[#111111] border border-[#333333] text-xs text-zinc-300 leading-relaxed space-y-2">
            <p className="whitespace-pre-line">
              {currentSlideData.presenterNotes}
            </p>
          </div>
        </div>

        {/* Next Slide Preview */}
        {nextSlideData && (
          <div className="pt-2 border-t border-[#333333]">
            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono uppercase font-bold mb-2">
              <span className="flex items-center gap-1">
                <Eye className="w-3.5 h-3.5 text-[#FFD700]" /> Próximo Slide
              </span>
              <span>Slide {nextSlideData.id}</span>
            </div>
            
            <button
              onClick={onNextSlide}
              className="w-full text-left p-3 bg-[#111111] hover:bg-[#1a1a1a] border border-[#333333] hover:border-[#FFD700] transition-all group cursor-pointer"
            >
              <p className="text-xs font-bold text-zinc-200 group-hover:text-[#FFD700] line-clamp-2 uppercase">
                {nextSlideData.title}
              </p>
              <div className="mt-2 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span>{nextSlideData.category}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFD700] transform group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="p-3 border-t border-[#333333] bg-[#111111] text-[11px] text-zinc-400 text-center font-mono uppercase tracking-wider">
        Controles: ←/→ Navegar • Espaço Avançar • G Mosaico
      </div>
    </aside>
  );
};
