import React, { useState } from 'react';
import { Smartphone, Wifi, Youtube, Palette, Camera, Sparkles, Check, ArrowRight, Cpu } from 'lucide-react';
import { SCREENSHOT_CARDS } from '../data';

interface WorkflowsSectionProps {
  onScrollToOffer?: () => void;
  onOpenCheckout?: () => void;
}

export const WorkflowsSection: React.FC<WorkflowsSectionProps> = ({ onScrollToOffer, onOpenCheckout }) => {
  const [activeTab, setActiveTab] = useState<string>('modo-celular');

  const activeCard = SCREENSHOT_CARDS.find((c) => c.id === activeTab) || SCREENSHOT_CARDS[0];

  const handleCta = onScrollToOffer || onOpenCheckout;

  return (
    <section id="como-funciona" className="py-14 sm:py-24 bg-[#09090b] relative overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#00f2c3]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-[#00f2c3] mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tecnología Revolucionaria</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Diseñado para Músicos Modernos: <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2c3] via-teal-300 to-cyan-400">
              Práctico, Flexible y de Alta Fidelidad
            </span>
          </h2>

          <p className="text-sm sm:text-lg text-zinc-400 leading-relaxed">
            Ya sea grabando solo con tu celular usando tus propios timbres .SF2 o sincronizando sin cables con tu computadora vía Código QR y YouTube, MIDI Cam se adapta exactamente a tu flujo musical.
          </p>
        </div>

        {/* Dynamic Workflow Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 sm:pb-8 mb-8 no-scrollbar">
          
          <button
            onClick={() => setActiveTab('modo-celular')}
            className={`flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'modo-celular'
                ? 'bg-[#00f2c3] text-[#09090b] shadow-[0_0_20px_rgba(0,242,195,0.4)]'
                : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>100% Celular (.SF2)</span>
          </button>

          <button
            onClick={() => setActiveTab('modo-wifi-pc')}
            className={`flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'modo-wifi-pc'
                ? 'bg-[#00f2c3] text-[#09090b] shadow-[0_0_20px_rgba(0,242,195,0.4)]'
                : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            <Wifi className="w-4 h-4" />
            <span>PC Wi-Fi (Código QR)</span>
          </button>

          <button
            onClick={() => setActiveTab('youtube-sync')}
            className={`flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'youtube-sync'
                ? 'bg-[#ef4444] text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]'
                : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            <Youtube className="w-4 h-4" />
            <span>YouTube Sync</span>
          </button>

          <button
            onClick={() => setActiveTab('personalizacao')}
            className={`flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'personalizacao'
                ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.4)]'
                : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>Personalización & Colores</span>
          </button>

          <button
            onClick={() => setActiveTab('camera-pro')}
            className={`flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'camera-pro'
                ? 'bg-cyan-500 text-[#09090b] shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            <Camera className="w-4 h-4" />
            <span>Cámara Pro & Acordes</span>
          </button>

        </div>

        {/* Selected Workflow Feature Showcase Box */}
        <div className="rounded-3xl bg-[#11121a] border border-zinc-800/90 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700 text-xs font-mono font-bold text-[#00f2c3]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{activeCard.badge}</span>
              </div>
              <span className="text-xs text-zinc-500 font-mono">
                {activeCard.statsText}
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-2">
                {activeCard.title}
              </h3>
              <p className="text-base sm:text-lg font-semibold text-[#00f2c3]">
                {activeCard.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
              {activeCard.description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {activeCard.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-xs sm:text-sm text-zinc-200">
                  <div className="w-5 h-5 rounded-full bg-[#00f2c3]/20 text-[#00f2c3] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-medium">{feat}</span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={handleCta}
                className="px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-[#00f2c3] text-[#09090b] hover:bg-[#15fbd0] shadow-[0_0_20px_rgba(0,242,195,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Garantizar mi Licencia (U$7,90)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* 4 Pillars Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
          
          <div className="p-5 rounded-2xl bg-[#12131c] border border-zinc-800/80">
            <div className="w-10 h-10 rounded-xl bg-[#00f2c3]/15 text-[#00f2c3] flex items-center justify-center mb-3">
              <Smartphone className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Sin Dependencia de DAW</h4>
            <p className="text-xs text-zinc-400">
              Olvídate de abrir programas pesados o lidiar con controladores de audio complicados.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#12131c] border border-zinc-800/80">
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center mb-3">
              <Wifi className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Conexión Inalámbrica Fácil</h4>
            <p className="text-xs text-zinc-400">
              Escanea el Código QR con la cámara del celular y toca en tu teclado de PC sin cables.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#12131c] border border-zinc-800/80">
            <div className="w-10 h-10 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center mb-3">
              <Youtube className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">YouTube Integrado</h4>
            <p className="text-xs text-zinc-400">
              Toca sobre cualquier backing track o clase de YouTube y graba todo en una sola toma.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#12131c] border border-zinc-800/80">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">1 Clic para Publicar</h4>
            <p className="text-xs text-zinc-400">
              El video se guarda de inmediato en tu galería con acordes, audio y teclas iluminadas.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
