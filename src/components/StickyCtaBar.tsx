import React, { useState, useEffect } from 'react';
import { MidiCamLogo } from './MidiCamLogo';
import { Download } from 'lucide-react';

interface StickyCtaBarProps {
  onOpenCheckout?: () => void;
  onScrollToOffer?: () => void;
}

export const StickyCtaBar: React.FC<StickyCtaBarProps> = ({ onOpenCheckout, onScrollToOffer }) => {
  const handleCta = onScrollToOffer || onOpenCheckout;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero (~550px)
      setVisible(window.scrollY > 550);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-full max-w-2xl px-4 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#111218]/90 backdrop-blur-xl border border-zinc-700/80 rounded-full px-4 py-2.5 shadow-[0_15px_40px_rgba(0,0,0,0.8)] flex items-center justify-between gap-3">
        
        {/* Left: Logo & Title */}
        <div className="flex items-center gap-3">
          <MidiCamLogo size={32} showGlow={false} activeRec={true} />
          <div className="hidden sm:block">
            <span className="text-xs font-extrabold text-white block leading-tight">
              MIDI Cam Oficial
            </span>
            <span className="text-[10px] text-zinc-400 font-mono">
              Grabación 4K & Acordes en Tiempo Real
            </span>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCta}
            className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00f2c3] text-[#09090b] hover:bg-[#15fbd0] shadow-[0_0_20px_rgba(0,242,195,0.4)] transition-all flex items-center gap-2 active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Ver Oferta (U$7,90)</span>
          </button>
        </div>

      </div>
    </div>
  );
};
