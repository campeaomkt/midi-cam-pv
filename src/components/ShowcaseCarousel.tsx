import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, Sparkles, ArrowRight } from 'lucide-react';

interface ShowcaseCarouselProps {
  onOpenCheckout: () => void;
}

interface ShowcaseItem {
  id: number;
  imageUrl: string;
  title: string;
  badge: string;
  desc: string;
}

export const ShowcaseCarousel: React.FC<ShowcaseCarouselProps> = ({ onOpenCheckout }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // 6 official images in exact sequence 1 to 6
  const showcaseItems: ShowcaseItem[] = [
    {
      id: 1,
      imageUrl: 'https://eliabcamposteclas.com/wp-content/uploads/2026/09/img1.png',
      title: 'Grabación Sincronizada Sin DAW',
      badge: 'Pantalla 01',
      desc: '¡Deja de sufrir sincronizando audio, video y MIDI en programas de edición!',
    },
    {
      id: 2,
      imageUrl: 'https://eliabcamposteclas.com/wp-content/uploads/2026/09/img2.png',
      title: 'Acordes y Notas en Tiempo Real',
      badge: 'Pantalla 02',
      desc: '¡Mira tus acordes y notas en tiempo real en la pantalla mientras tocas!',
    },
    {
      id: 3,
      imageUrl: 'https://eliabcamposteclas.com/wp-content/uploads/2026/09/img3.png',
      title: 'Más Tiempo Creando Música',
      badge: 'Pantalla 03',
      desc: 'Menos edición manual en la computadora. ¡Más tiempo tocando y mejorando!',
    },
    {
      id: 4,
      imageUrl: 'https://eliabcamposteclas.com/wp-content/uploads/2026/09/img4.png',
      title: 'Ajustes de Cámara Pro',
      badge: 'Pantalla 04',
      desc: '¡Configura tu cámara, proporción, lentes y FPS sin salir de la aplicación!',
    },
    {
      id: 5,
      imageUrl: 'https://eliabcamposteclas.com/wp-content/uploads/2026/09/img5.png',
      title: 'Personalización Visual Rápida',
      badge: 'Pantalla 05',
      desc: '¡Personaliza el aspecto del teclado, colores de las notas activas e interfaz con rapidez!',
    },
    {
      id: 6,
      imageUrl: 'https://eliabcamposteclas.com/wp-content/uploads/2026/09/img6.png',
      title: 'Conexión Inalámbrica & YouTube Sync',
      badge: 'Pantalla 06',
      desc: '¡Conéctate sin cables a la computadora vía Código QR y sincroniza videos de YouTube!',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const isMobile = window.innerWidth < 640;
      const scrollAmount = isMobile ? 160 : 250;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handlePrevModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + showcaseItems.length) % showcaseItems.length);
    }
  };

  const handleNextModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % showcaseItems.length);
    }
  };

  return (
    <section id="demonstracao" className="w-full pt-2 pb-10 overflow-hidden">
      
      {/* Top Meta Header */}
      <div className="mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-800/80">
          
          {/* Creator info */}
          <div>
            <span className="text-sm font-bold text-[#00f2c3] font-mono block">
              Eliab Campos • Desarrollador Oficial MIDI Cam
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-[#00f2c3] flex-shrink-0" />
            <span>Disponible para Android y Windows</span>
          </div>

        </div>

        {/* Navigation hint */}
        <div className="pt-2 text-right text-xs text-zinc-500 hidden sm:block">
          <span className="font-mono text-[11px]">
            Desliza o usa las flechas para navegar • Clic para ampliar
          </span>
        </div>
      </div>

      {/* CAROUSEL WRAPPER WITH NAVIGATION ARROW BUTTONS */}
      <div className="relative group py-2">
        
        {/* Left Floating Arrow Button */}
        <button
          onClick={() => scroll('left')}
          className="flex absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-zinc-900 shadow-[0_8px_25px_rgba(0,0,0,0.6)] items-center justify-center hover:scale-110 active:scale-95 transition-all opacity-95 hover:opacity-100 cursor-pointer"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>

        {/* Right Floating Arrow Button */}
        <button
          onClick={() => scroll('right')}
          className="flex absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-zinc-900 shadow-[0_8px_25px_rgba(0,0,0,0.6)] items-center justify-center hover:scale-110 active:scale-95 transition-all opacity-95 hover:opacity-100 cursor-pointer"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>

        {/* Horizontal Scrollable Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-3 sm:gap-5 overflow-x-auto pb-4 pt-1 px-1 no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {showcaseItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className="w-[145px] min-w-[145px] sm:w-[210px] sm:min-w-[210px] md:w-[230px] md:min-w-[230px] h-[300px] sm:h-[430px] md:h-[470px] rounded-2xl sm:rounded-[24px] flex-shrink-0 relative overflow-hidden select-none bg-zinc-900 shadow-[0_12px_35px_rgba(0,0,0,0.65)] border border-zinc-800/80 hover:border-[#00f2c3]/60 snap-start transition-all duration-300 hover:scale-[1.025] cursor-pointer group"
            >
              <div className="relative w-full h-full overflow-hidden flex items-center justify-center bg-[#1a0a0f]">
                <img
                  src={item.imageUrl}
                  alt={`MIDI Cam pantalla ${item.id} - ${item.title}`}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Expand Indicator on Hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-4 h-4 text-[#00f2c3]" />
                  </div>
                </div>

                {/* Minimalist Index Tag */}
                <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-[10px] font-mono text-zinc-300 border border-white/10 opacity-70 group-hover:opacity-100 transition-opacity">
                  {index + 1}/6
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 pt-2">
          {showcaseItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const isMobile = window.innerWidth < 640;
                  const cardWidth = isMobile ? 157 : 246;
                  scrollContainerRef.current.scrollTo({
                    left: idx * cardWidth,
                    behavior: 'smooth',
                  });
                }
              }}
              className="w-2 h-2 rounded-full transition-all bg-zinc-700 hover:bg-[#00f2c3] focus:outline-none cursor-pointer"
              aria-label={`Ir a la pantalla ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* "Sobre esta app" block */}
      <div className="pt-6 sm:pt-8 border-t border-zinc-800/60 mt-4">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            Sobre esta aplicación
            <ArrowRight className="w-4 h-4 text-[#00f2c3]" />
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-3xl leading-relaxed">
          MIDI Cam transforma la manera de grabar interpretaciones musicales: conecta tu teclado vía USB o MIDI, abre la cámara y graba tu video con detección automática de acordes, teclas iluminadas y audio en perfecta sincronía sin necesidad de computadora ni DAW.
        </p>
      </div>

      {/* FULL-SIZE IMAGE ZOOM MODAL WITH PREV / NEXT */}
      {selectedImageIndex !== null && (
        <div
          onClick={() => setSelectedImageIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full max-h-[92vh] bg-[#11121a] border border-zinc-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#00f2c3]/15 border border-[#00f2c3]/30 text-xs font-mono font-bold text-[#00f2c3]">
                  {showcaseItems[selectedImageIndex].badge} (0{selectedImageIndex + 1}/06)
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white truncate max-w-[200px] sm:max-w-none">
                  {showcaseItems[selectedImageIndex].title}
                </h4>
              </div>

              <button
                onClick={() => setSelectedImageIndex(null)}
                className="p-1.5 rounded-full bg-zinc-800/90 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative w-full flex-1 min-h-0 flex items-center justify-center overflow-hidden rounded-xl bg-black/60 my-1">
              <img
                src={showcaseItems[selectedImageIndex].imageUrl}
                alt={showcaseItems[selectedImageIndex].title}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />

              {/* Prev Image Button */}
              <button
                onClick={handlePrevModal}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/75 hover:bg-black text-white border border-white/20 transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
                aria-label="Imagen Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Image Button */}
              <button
                onClick={handleNextModal}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/75 hover:bg-black text-white border border-white/20 transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
                aria-label="Siguiente Imagen"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Footer Description and CTA */}
            <div className="pt-3 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs sm:text-sm text-zinc-300 text-center sm:text-left leading-relaxed">
                {showcaseItems[selectedImageIndex].desc}
              </p>

              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                <button
                  onClick={() => setSelectedImageIndex(null)}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  Cerrar
                </button>

                <button
                  onClick={() => {
                    setSelectedImageIndex(null);
                    onOpenCheckout();
                  }}
                  className="w-full sm:w-auto px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00f2c3] text-[#09090b] hover:bg-[#15fbd0] shadow-[0_0_20px_rgba(0,242,195,0.4)] transition-all whitespace-nowrap flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Obtener Licencia (U$7,90)</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
