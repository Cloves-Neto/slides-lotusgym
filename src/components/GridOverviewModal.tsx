import React, { useState } from 'react';
import { X, Search, Grid, CheckCircle2 } from 'lucide-react';
import { SLIDES } from '../data/slidesData';
import { SlideCategory } from '../types';

interface GridOverviewModalProps {
  currentSlide: number;
  onSelectSlide: (slideNumber: number) => void;
  onClose: () => void;
  isDarkMode: boolean;
}

const CATEGORIES: ('Todos' | SlideCategory)[] = [
  'Todos',
  'Estratégia',
  'Diagnóstico',
  'Pilares',
  'Comercial & Mkt',
  'Tecnologia & IA',
  'Financeiro & ROI'
];

export const GridOverviewModal: React.FC<GridOverviewModalProps> = ({
  currentSlide,
  onSelectSlide,
  onClose,
  isDarkMode
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'Todos' | SlideCategory>('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSlides = SLIDES.filter(slide => {
    const matchesCategory = selectedCategory === 'Todos' || slide.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      slide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (slide.subtitle && slide.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      slide.id.toString() === searchQuery;
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-6 overflow-hidden">
      <div className="w-full max-w-6xl max-h-[90vh] flex flex-col border border-[#333333] shadow-2xl bg-[#000000] text-white">
        {/* Header Bar */}
        <div className="p-4 border-b border-[#333333] flex items-center justify-between gap-4 bg-[#111111]">
          <div className="flex items-center gap-2">
            <Grid className="w-5 h-5 text-[#FFD700]" />
            <h2 className="text-sm font-bold text-white tracking-widest uppercase">
              MOSAICO DE SLIDES DE APRESENTAÇÃO
            </h2>
            <span className="text-xs font-mono text-[#FFD700] bg-[#000000] px-2 py-0.5 border border-[#333333] font-bold">
              23 SLIDES
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 bg-[#000000] hover:bg-[#222222] text-zinc-300 hover:text-white border border-[#333333] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters & Search */}
        <div className="p-4 border-b border-[#333333] bg-[#0A0A0A] flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-[#FFD700] text-black border-[#FFD700] font-bold'
                    : 'bg-[#111111] text-zinc-300 border-[#333333] hover:bg-[#222222]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Buscar título ou slide..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#000000] border border-[#333333] text-xs text-white pl-9 pr-3 py-1.5 focus:outline-none focus:border-[#FFD700] font-mono placeholder:text-zinc-500"
            />
          </div>
        </div>

        {/* Slide Thumbnails Grid */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-1 bg-[#000000]">
          {filteredSlides.map((slide) => {
            const isCurrent = slide.id === currentSlide;

            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(slide.id);
                  onClose();
                }}
                className={`group text-left flex flex-col justify-between p-3.5 border transition-all relative aspect-[16/10] cursor-pointer ${
                  isCurrent
                    ? 'bg-[#111111] border-l-4 border-l-[#FFD700] border-[#FFD700]'
                    : 'bg-[#111111] hover:bg-[#1a1a1a] border-[#333333] hover:border-[#FFD700]'
                }`}
              >
                {/* Slide Number Badge */}
                <div className="flex items-center justify-between w-full mb-2">
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 border ${
                    isCurrent 
                      ? 'bg-[#FFD700] text-black border-[#FFD700]' 
                      : 'bg-[#000000] text-zinc-300 border-[#333333] group-hover:text-[#FFD700]'
                  }`}>
                    SLIDE {String(slide.id).padStart(2, '0')}
                  </span>
                  
                  <span className="text-[10px] font-mono text-zinc-400 uppercase truncate max-w-[120px]">
                    {slide.category}
                  </span>
                </div>

                {/* Title */}
                <div className="my-auto">
                  <h3 className={`text-xs font-bold leading-snug line-clamp-2 uppercase ${
                    isCurrent ? 'text-[#FFD700]' : 'text-zinc-200 group-hover:text-[#FFD700]'
                  }`}>
                    {slide.title}
                  </h3>
                  {slide.subtitle && (
                    <p className="text-[11px] text-zinc-400 line-clamp-1 mt-1 font-normal">
                      {slide.subtitle}
                    </p>
                  )}
                </div>

                {/* Bottom Bar */}
                <div className="mt-2 pt-2 border-t border-[#222222] flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                  <span className="truncate max-w-[160px]">"{slide.keyTakeaway}"</span>
                  {isCurrent && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700] shrink-0 ml-1" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
