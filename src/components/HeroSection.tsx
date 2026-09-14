import React from 'react';
import { MidiCamLogo } from './MidiCamLogo';
import { Download, Play, CheckCircle2, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { ShowcaseCarousel } from './ShowcaseCarousel';

interface HeroSectionProps {
  onScrollToOffer: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden flex flex-col justify-center"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#00f2c3]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#22d3ee]/8 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#ef4444]/6 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* TOP ROW: Hero Headline, CTA & Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-8 lg:mb-12">
          
          {/* LEFT COLUMN: Main Info & High-Impact CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#161821] border border-[#272a38] text-[11px] sm:text-xs font-semibold text-zinc-300 mb-5 shadow-sm max-w-full flex-wrap">
              <span className="flex h-2 w-2 relative flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f2c3] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f2c3]"></span>
              </span>
              <span className="text-zinc-200 truncate sm:overflow-visible">Grabación Sincronizada 4K</span>
              <span className="text-zinc-500">•</span>
              <span className="text-[#00f2c3]">Versión Oficial 2026</span>
            </div>

            {/* Main Display Title */}
            <h1
              id="hero-title"
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-4 sm:mb-5"
            >
              MIDI Cam
            </h1>

            {/* Slogan / Subtitle */}
            <p
              id="hero-subtitle"
              className="text-base sm:text-xl md:text-2xl text-zinc-300 font-normal leading-relaxed max-w-2xl mb-6"
            >
              Graba <span className="text-white font-semibold">100% en tu celular con timbres propios (.SF2)</span> sin DAW, o conecta <span className="text-[#00f2c3] font-semibold">sin cables a la PC vía Código QR</span> con sincronización de videos de YouTube y personalización total.
            </p>

            {/* Capabilities Chips */}
            <div
              id="social-proof-chips"
              className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00f2c3]" />
                <span className="text-zinc-300">Android &amp; Windows</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#131722] border border-[#00f2c3]/30 text-xs text-[#00f2c3] shadow-sm font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Timbres .SF2 Propios</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#18131d] border border-purple-500/30 text-xs text-purple-300 shadow-sm font-medium">
                <span>Código QR Wi-Fi &amp; YouTube Sync</span>
              </div>
            </div>

            {/* Primary & Secondary Conversion Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6">
              <button
                id="hero-primary-cta"
                onClick={onScrollToOffer}
                className="relative group px-8 py-4 rounded-full font-bold text-sm tracking-wide uppercase transition-all duration-300 active:scale-95 shadow-[0_0_25px_rgba(0,242,195,0.35)] hover:shadow-[0_0_40px_rgba(0,242,195,0.6)] bg-[#00f2c3] text-[#09090b] hover:bg-[#15fbd0] flex items-center justify-center gap-3 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                <span>Adquirir MIDI Cam - U$7,90</span>
              </button>

              <a
                id="hero-secondary-cta"
                href="#como-funciona"
                className="px-6 py-4 rounded-full font-semibold text-sm text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-700/80 hover:border-zinc-500 transition-all flex items-center justify-center gap-2.5 backdrop-blur-sm group active:scale-95 text-center"
              >
                <span>Conoce Cómo Funciona</span>
              </a>
            </div>

            {/* Guarantee & Compatibility statement */}
            <div className="flex items-center gap-2.5 text-xs text-zinc-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#00f2c3] flex-shrink-0" />
              <span>Conexión directa USB-MIDI y Wi-Fi. Sin necesidad de computadora obligatoria.</span>
            </div>

          </div>

          {/* RIGHT COLUMN: Official Product Identity Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center z-10">
            <div className="w-full max-w-[440px] relative">
              
              {/* Main Official Product Display Box */}
              <div
                id="hero-product-showcase"
                className="relative rounded-3xl bg-[#111218]/90 border border-[#232635] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl overflow-hidden"
              >
                {/* Glowing Aura */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-[#00f2c3]/15 rounded-full blur-3xl -z-10" />

                {/* Center Official Large Icon */}
                <div className="flex flex-col items-center justify-center pt-2 pb-2 my-2">
                  <div className="relative group">
                    <div className="p-2 rounded-[38px] bg-gradient-to-b from-[#252838] to-[#12131a] shadow-[0_12px_40px_rgba(0,0,0,0.9)] border border-[#2f3348]/60 transition-transform duration-300 group-hover:scale-105">
                      <MidiCamLogo
                        size={180}
                        showGlow={true}
                        activeRec={true}
                      />
                    </div>

                    {/* Brand Pill */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#09090b] border border-[#00f2c3]/50 text-[11px] text-[#00f2c3] font-mono font-bold shadow-sm tracking-wider whitespace-nowrap uppercase">
                      MIDI CAM
                    </div>
                  </div>
                </div>

                {/* Clean Official Technical Specifications Card */}
                <div className="mt-5 p-4 rounded-2xl bg-[#09090c] border border-[#1f212d] space-y-2 text-xs">
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-zinc-400">Sincronía Audio + MIDI</span>
                    <span className="text-[#00f2c3] font-bold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      Cero Latencia (&lt; 3ms)
                    </span>
                  </div>

                  <div className="flex items-center justify-between font-mono">
                    <span className="text-zinc-400">Timbres Propios</span>
                    <span className="text-white font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00f2c3]" />
                      SoundFonts .SF2 Nativo
                    </span>
                  </div>

                  <div className="flex items-center justify-between font-mono">
                    <span className="text-zinc-400">Conexión Inalámbrica</span>
                    <span className="text-zinc-200">Código QR Wi-Fi (App PC)</span>
                  </div>

                  <div className="flex items-center justify-between font-mono">
                    <span className="text-zinc-400">Integración YouTube</span>
                    <span className="text-red-400 font-semibold">Playbacks Sincronizados</span>
                  </div>

                  <div className="flex items-center justify-between font-mono">
                    <span className="text-zinc-400">Personalización</span>
                    <span className="text-zinc-200">Colores, Teclados &amp; Filtros</span>
                  </div>

                  <div className="flex items-center justify-between font-mono pt-1 border-t border-zinc-800/80">
                    <span className="text-zinc-400">Exportación</span>
                    <span className="text-[#00f2c3] font-bold">1 Clic a la Galería</span>
                  </div>
                </div>

                {/* Subfooter in Card */}
                <div className="mt-3.5 flex items-center justify-between text-[11px] text-zinc-400 px-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f2c3]" />
                    Celular Autónomo o PC Wi-Fi
                  </span>
                  <span className="font-mono text-[#00f2c3]">v2026 LIVE</span>
                </div>

              </div>

              {/* Decorative Floating Tech Badge */}
              <div className="hidden sm:block absolute -left-6 -bottom-5 px-3.5 py-2 rounded-xl bg-[#09090b]/90 border border-zinc-800 shadow-xl backdrop-blur-md text-xs text-zinc-300 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00f2c3]" />
                  <span className="font-semibold text-white">Celular • PC Wi-Fi • Timbres SF2</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: CAROUSEL */}
        <div className="w-full pt-4 border-t border-zinc-800/60">
          <ShowcaseCarousel
            onOpenCheckout={onScrollToOffer}
          />
        </div>

      </div>
    </section>
  );
};
