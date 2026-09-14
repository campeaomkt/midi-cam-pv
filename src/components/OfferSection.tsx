import React from 'react';
import { Download, ShieldCheck, CheckCircle2, Clock, Sparkles, AlertCircle, Zap, Star } from 'lucide-react';
import { HOTMART_CHECKOUT_URL } from '../data';

interface OfferSectionProps {
  onOpenCheckout?: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="oferta" className="py-16 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#09090b] via-[#0d1217] to-[#09090b]">
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00f2c3]/8 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00f2c3]/15 border border-[#00f2c3]/30 text-xs font-mono font-bold text-[#00f2c3] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Condición Oficial Especial de Lanzamiento</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
            Comienza a Grabar Hoy con <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2c3] via-teal-300 to-cyan-400">
              MIDI Cam Completo
            </span>
          </h2>

          <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed">
            Sin mensualidades, sin anuncios molestos y sin pagar suscripciones abusivas. Acceso de por vida a la versión oficial completa.
          </p>
        </div>

        {/* The Master Offer Card */}
        <div className="rounded-3xl bg-[#11131c] border-2 border-[#00f2c3]/60 p-6 sm:p-12 shadow-[0_20px_70px_rgba(0,242,195,0.2)] relative overflow-hidden">
          
          {/* Top banner pill */}
          <div className="absolute top-0 right-0 px-6 py-2 rounded-bl-2xl bg-[#00f2c3] text-[#09090b] font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md">
            <Zap className="w-4 h-4 fill-current" />
            <span>Acceso Vitalicio • Pago Único</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left side: Everything included */}
            <div className="lg:col-span-7 space-y-5">
              
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#00f2c3] font-semibold block mb-1">
                  Paquete Oficial MIDI Cam
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Todo lo que recibes de inmediato:
                </h3>
              </div>

              {/* Benefit checklist */}
              <div className="space-y-3.5 pt-1">
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00f2c3] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-200">
                    <strong className="text-white font-semibold">App MIDI Cam para Celular (Android):</strong> graba solo con el smartphone usando timbres propios (.SF2) vía cable OTG sin DAW.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00f2c3] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-200">
                    <strong className="text-white font-semibold">Software MIDI Cam para PC (Windows):</strong> sincronización inalámbrica en 3 segundos mediante Código QR.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00f2c3] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-200">
                    <strong className="text-white font-semibold">Integración de Playbacks de YouTube:</strong> reproduce cualquier backing track de YouTube y graba todo en una sola toma sin latencia.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00f2c3] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-200">
                    <strong className="text-white font-semibold">Personalización Completa:</strong> colores neón para las teclas, modelos de 25 a 88 teclas y filtros de cámara cinematográficos.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00f2c3] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-200">
                    <strong className="text-white font-semibold">Detector de Acordes Polifónicos Pro:</strong> más de 1.800 cifrados identificados en tiempo real mientras tocas.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00f2c3] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-200">
                    <strong className="text-white font-semibold">Actualizaciones Futuras Incluidas:</strong> mejoras de rendimiento continuas sin pagar jamás nada extra.
                  </span>
                </div>

              </div>

            </div>

            {/* Right side: Price Box & Big Action */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-[#090a0f] border border-zinc-800 text-center relative">
              
              <div className="w-full flex items-center justify-between pb-3 mb-4 border-b border-zinc-800 text-xs">
                <span className="text-zinc-500 line-through">Precio Regular: U$19,90</span>
                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono font-bold text-[10px]">
                  60% OFF HOY
                </span>
              </div>

              <div className="my-2">
                <span className="text-xs sm:text-sm font-mono text-zinc-400 block mb-1">
                  Por solo pago único de
                </span>
                
                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#00f2c3]">U$</span>
                  <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">7,90</span>
                </div>

                <span className="text-xs text-zinc-400 font-mono mt-1 block">
                  Sin mensualidades • Acceso de por vida
                </span>
              </div>

              {/* Big CTA Button */}
              <a
                id="offer-cta-button"
                href={HOTMART_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-6 py-4 px-6 rounded-full font-extrabold text-sm uppercase tracking-wider bg-[#00f2c3] text-[#09090b] hover:bg-[#15fbd0] shadow-[0_0_30px_rgba(0,242,195,0.45)] hover:shadow-[0_0_45px_rgba(0,242,195,0.7)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 group text-center no-underline"
              >
                <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                <span>Comprar Ahora por U$7,90</span>
              </a>

              {/* Security badges */}
              <div className="mt-5 space-y-1.5 text-[11px] text-zinc-400">
                <p className="flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00f2c3]" />
                  <span>Pago 100% seguro con encriptación SSL</span>
                </p>
                <p className="flex items-center justify-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#00f2c3]" />
                  <span>Liberación inmediata en tu correo electrónico</span>
                </p>
              </div>

            </div>

          </div>

          {/* 7 Days Guarantee Bottom Banner */}
          <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center gap-4 bg-zinc-950/40 p-4 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-[#00f2c3]/15 text-[#00f2c3] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-sm font-bold text-white">Garantía Incondicional de 7 Días</h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Prueba MIDI Cam en tu teclado y computadora. Si por cualquier motivo no estás 100% satisfecho, te reembolsamos el 100% de tu dinero sin preguntas ni complicaciones.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
