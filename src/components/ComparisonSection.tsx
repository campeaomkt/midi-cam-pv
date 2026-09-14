import React from 'react';
import { XCircle, CheckCircle2, Clock, Zap, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface ComparisonSectionProps {
  onScrollToOffer?: () => void;
  onOpenCheckout?: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onScrollToOffer, onOpenCheckout }) => {
  const handleCta = onScrollToOffer || onOpenCheckout;

  return (
    <section id="comparativo" className="py-14 sm:py-24 bg-[#090a0f] relative overflow-hidden border-t border-zinc-800/80">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-[#00f2c3]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-[#00f2c3] mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>Comparativa de Productividad</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            El Método Antiguo vs.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2c3] via-teal-300 to-cyan-400">
              La Revolución con MIDI Cam
            </span>
          </h2>

          <p className="text-sm sm:text-lg text-zinc-400">
            Descubre por qué cientos de tecladistas dejaron de perder horas en la computadora para publicar videos todos los días en redes sociales.
          </p>
        </div>

        {/* Side-by-side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16">
          
          {/* Card Left: O Processo Antigo (Dor & Perda de Tempo) */}
          <div className="rounded-3xl bg-[#140e11]/80 border border-red-900/30 p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-red-900/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
                    <XCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Método Tradicional Agotador</h3>
                    <span className="text-xs text-red-400/80 font-mono">Sin MIDI Cam</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-red-400 px-2.5 py-1 rounded-full bg-red-950/60 border border-red-800/40">
                  ~ 3 HORAS / VIDEO
                </span>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-medium">Grabar por separado:</strong> cámara del celular por un lado, audio en el DAW por el otro y archivo MIDI en la computadora.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-medium">Transferencia lenta de archivos:</strong> pasar gigabytes de video al PC mediante cables o nubes lentas.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-medium">Sincronización manual cuadro a cuadro:</strong> dar palmadas o contar segundos intentando hacer coincidir el audio con la imagen.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-medium">Crear animaciones de teclas complejas:</strong> renderizar animaciones de teclado en software pesado de edición de video.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-medium">Cansancio y frustración:</strong> terminas el día agotado en vez de dedicarte a tocar y estudiar tu instrumento.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-red-900/30 text-xs font-mono text-red-300">
              ❌ Resultado: pocos videos publicados y horas de frustración técnica.
            </div>
          </div>

          {/* Card Right: O Novo Jeito com MIDI Cam (Solução & Liberdade) */}
          <div className="rounded-3xl bg-gradient-to-b from-[#0d1619] to-[#0c1117] border-2 border-[#00f2c3]/50 p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-[0_10px_40px_rgba(0,242,195,0.15)]">
            
            {/* Glow pill */}
            <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl bg-[#00f2c3] text-[#09090b] text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>100% Inmediato</span>
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#00f2c3]/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00f2c3]/15 text-[#00f2c3] flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Flujo Inteligente con MIDI Cam</h3>
                    <span className="text-xs text-[#00f2c3] font-mono">Tecnología Oficial 2026</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#00f2c3] px-2.5 py-1 rounded-full bg-[#00f2c3]/15 border border-[#00f2c3]/40">
                  LISTO AL INSTANTE
                </span>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-zinc-200">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00f2c3] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-semibold">Toca y graba en 1 toma:</strong> conecta el cable OTG o vincula vía Wi-Fi por Código QR a la PC y presiona Grabar.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00f2c3] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-semibold">Timbres .SF2 Propios sin DAW:</strong> reproduce pianos de cola, Rhodes y pads de alta fidelidad desde tu celular.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00f2c3] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-semibold">Sincronización con YouTube:</strong> practica con playbacks de YouTube directamente en la app sin desfase alguno.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00f2c3] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-semibold">Teclado y acordes automáticos:</strong> teclas iluminadas en tiempo real y detección precisa de acordes polifónicos.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00f2c3] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-semibold">Exportación instantánea:</strong> al detener la grabación, el video ya está en tu galería listo para compartir en Instagram, TikTok o YouTube.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-[#00f2c3]/20 flex items-center justify-between">
              <span className="text-xs font-mono text-[#00f2c3]">
                ✔ Ahorras hasta 15 horas de edición cada semana
              </span>
            </div>

          </div>

        </div>

        {/* CTA Bar */}
        <div className="p-6 rounded-2xl bg-[#111219] border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#00f2c3]/15 text-[#00f2c3] flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">¿Listo para ahorrar tiempo valioso?</h4>
              <p className="text-xs text-zinc-400">Acceso vitalicio a la versión completa por solo U$7,90 (pago único).</p>
            </div>
          </div>

          <button
            onClick={handleCta}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-[#00f2c3] text-[#09090b] hover:bg-[#15fbd0] shadow-[0_0_20px_rgba(0,242,195,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Ver Oferta Vitalicia (U$7,90)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
