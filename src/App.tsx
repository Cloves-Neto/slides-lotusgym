import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/Header';
import { SlideRenderer } from './components/SlideRenderer';
import { GridOverviewModal } from './components/GridOverviewModal';
import { EditConfigModal } from './components/EditConfigModal';
import { SLIDES } from './data/slidesData';
import { PresenterConfig, GymMetrics } from './types';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [showGridModal, setShowGridModal] = useState<boolean>(false);
  const [showConfigModal, setShowConfigModal] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Presenter Config State
  const [presenterConfig, setPresenterConfig] = useState<PresenterConfig>({
    presenterName: 'Cloves Neto',
    presenterTitle: 'CONSULTOR LOTUSGYM',
    year: '2024',
    contactEmail: 'clovesneto@lotusgym.com.br',
    contactPhone: '11967338685'
  });

  // Gym Baseline Metrics State
  const [gymMetrics, setGymMetrics] = useState<GymMetrics>({
    activeMembers: 5404,
    monthlyChurn: 0,
    avgTicket: 0,
    monthlyLeads: 0,
    conversionRate: 0,
    npsScore: 0,
    unpaidRate: 0
  });

  // Slide Navigation Handlers
  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => Math.max(1, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(SLIDES.length, prev + 1));
  }, []);

  const handleSelectSlide = (slideNum: number) => {
    setCurrentSlide(slideNum);
  };

  // Keyboard Shortcuts Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore keybindings if user is typing in an input or textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlide(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlide(SLIDES.length);
      } else if (e.key.toLowerCase() === 'g') {
        e.preventDefault();
        setShowGridModal((prev) => !prev);
      } else if (e.key.toLowerCase() === 'f') {
        e.preventDefault();
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Fullscreen Handler
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {
        setIsFullscreen(true);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        }).catch(() => {
          setIsFullscreen(false);
        });
      }
    }
  };

  return (
    <div className={`w-screen h-screen flex flex-col overflow-hidden select-none ${
      isDarkMode ? 'bg-black text-white' : 'bg-zinc-950 text-white'
    }`}>
      {/* Header Controls */}
      <Header
        currentSlide={currentSlide}
        totalSlides={SLIDES.length}
        onPrev={handlePrev}
        onNext={handleNext}
        onOpenGrid={() => setShowGridModal(true)}
        onOpenConfig={() => setShowConfigModal(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        presenterConfig={presenterConfig}
      />

      {/* Main Slide Stage */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Active Slide Viewer Stage */}
        <main className="flex-1 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 overflow-hidden relative bg-[#000000]">
          <div className="w-full h-full max-w-6xl max-h-[88vh] aspect-[16/9] shadow-2xl relative flex flex-col overflow-hidden rounded-none border border-[#333333]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.22, ease: 'easeInOut' }}
                className="w-full h-full flex flex-col"
              >
                <SlideRenderer
                  slideId={currentSlide}
                  presenterConfig={presenterConfig}
                  gymMetrics={gymMetrics}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* Grid Mosaic Modal */}
      {showGridModal && (
        <GridOverviewModal
          currentSlide={currentSlide}
          onSelectSlide={handleSelectSlide}
          onClose={() => setShowGridModal(false)}
          isDarkMode={isDarkMode}
        />
      )}

      {/* Edit Config Modal */}
      {showConfigModal && (
        <EditConfigModal
          presenterConfig={presenterConfig}
          gymMetrics={gymMetrics}
          onSaveConfig={(newConfig, newMetrics) => {
            setPresenterConfig(newConfig);
            setGymMetrics(newMetrics);
          }}
          onClose={() => setShowConfigModal(false)}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
}
