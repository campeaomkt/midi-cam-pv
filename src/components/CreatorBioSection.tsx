import React from 'react';
import { Music, Award, Laptop, Sparkles, CheckCircle2, Youtube, GraduationCap } from 'lucide-react';

interface CreatorBioSectionProps {
  onOpenCheckout?: () => void;
  onScrollToOffer?: () => void;
}

export const CreatorBioSection: React.FC<CreatorBioSectionProps> = ({
  onOpenCheckout,
  onScrollToOffer,
}) => {
  const handleAction = onOpenCheckout || onScrollToOffer;

  return (
    <section id="biografia" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#09090b] via-[#0e0f17] to-[#09090b] border-t border-zinc-800/60">
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#00f2c3]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Grid: Photo + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Column Left: Photo & Trust Badges */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div className="relative group w-full max-w-[340px] sm:max-w-[380px]">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#00f2c3] via-[#00a884] to-emerald-500 rounded-3xl opacity-40 group-hover:opacity-75 blur-xl transition-all duration-500" />
              
              {/* Photo Frame Container */}
              <div className="relative rounded-3xl overflow-hidden bg-[#161824] border-2 border-[#00f2c3]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <img
                  src="https://eliabcamposteclas.com/wp-content/uploads/2026/03/eliab.jpg"
                  alt="Eliab Campos Teclas - Desarrollador Oficial de MIDI Cam"
                  className="w-full h-auto object-cover object-center transform group-hover:scale-105 transition-transform duration-700 aspect-[4/5]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom Overlay Pill on Image */}
                <div className="absolute bottom-4 inset-x-4 p-3 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00f2c3] animate-pulse" />
                    <div>
                      <p className="text-xs font-bold text-white leading-tight">Eliab Campos</p>
                      <p className="text-[11px] text-[#00f2c3] font-mono">Desarrollador & Músico</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-[#00f2c3]/15 text-[11px] font-mono text-[#00f2c3] border border-[#00f2c3]/30">
                    15+ Años
                  </span>
                </div>
              </div>

              {/* Floating Mini Badge Top Right */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-zinc-900/95 border border-zinc-700 shadow-xl flex items-center gap-2 text-xs font-semibold text-white backdrop-blur-sm">
                <GraduationCap className="w-4 h-4 text-[#00f2c3]" />
                <span>Profesor & Tecladista</span>
              </div>
            </div>

            {/* Quick stats below photo */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[340px] sm:max-w-[380px] mt-5">
              <div className="p-3.5 rounded-2xl bg-[#12131d] border border-zinc-800/80 text-center">
                <span className="text-xl sm:text-2xl font-black text-[#00f2c3] block font-mono">15+</span>
                <span className="text-[11px] text-zinc-400 leading-tight block mt-0.5">Años de Teclado & Docencia</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#12131d] border border-zinc-800/80 text-center">
                <span className="text-xl sm:text-2xl font-black text-white block font-mono">100%</span>
                <span className="text-[11px] text-zinc-400 leading-tight block mt-0.5">Enfocado en Músicos</span>
              </div>
            </div>

          </div>

          {/* Column Right: Biography & Story */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f2c3]/10 border border-[#00f2c3]/30 text-xs font-mono font-semibold text-[#00f2c3] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Quién Está Detrás de MIDI Cam</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Eliab Campos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2c3] to-emerald-400">Teclas</span>
            </h2>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#00f2c3] font-semibold mb-6 flex items-center gap-2">
              <Music className="w-5 h-5 flex-shrink-0" />
              <span>Tecladista, profesor de teclado desde hace más de 15 años y desarrollador de la app</span>
            </p>

            {/* Bio Body Text */}
            <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
              <p>
                A lo largo de más de una década y media enseñando a estudiantes, grabando clases y produciendo contenido musical, viví exactamente la misma frustración que todo tecladista: <strong className="text-white">pasar horas enteras frente a la computadora intentando sincronizar audio, video de la cámara y el archivo MIDI</strong> en programas de edición pesados.
              </p>
              <p>
                La tecnología debería darnos la libertad de tocar, y no atraparnos en procesos técnicos agotadores de edición. Por eso, decidí combinar mi experiencia diaria en la música con el desarrollo de software para crear <strong className="text-white font-semibold">MIDI Cam</strong>.
              </p>
              <p className="text-zinc-400 text-sm">
                La aplicación fue diseñada al detalle por alguien que vive el instrumento día a día. Desde la detección de acordes en tiempo real hasta la facilidad de grabar directamente desde el celular o la computadora, todo fue creado para que presiones el botón de grabar, toques con tu mejor nivel y ¡tengas el video listo para compartir al instante!
              </p>
            </div>

            {/* Pillars / Values List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full my-6 pt-2 border-t border-zinc-800/60">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00f2c3] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Creado de Músico para Músicos</h4>
                  <p className="text-xs text-zinc-400">Comprensión real de lo que necesita quien toca el instrumento.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00f2c3] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Soporte Cercano y Dedicado</h4>
                  <p className="text-xs text-zinc-400">Apoyo técnico directo con quien realmente conoce la aplicación.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00f2c3] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Evolución Continua</h4>
                  <p className="text-xs text-zinc-400">Actualizaciones basadas en la retroalimentación de tecladistas reales.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00f2c3] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Comunidad & Contenido</h4>
                  <p className="text-xs text-zinc-400">Consejos y tutoriales prácticos para aprovechar el 100% de la app.</p>
                </div>
              </div>
            </div>

            {/* Call to action & guarantee */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full pt-2">
              {handleAction && (
                <button
                  onClick={handleAction}
                  className="px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider bg-[#00f2c3] text-[#09090b] hover:bg-[#15fbd0] shadow-[0_0_25px_rgba(0,242,195,0.4)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Asegurar mi Acceso (U$7,90)</span>
                </button>
              )}

              <div className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300">
                <Award className="w-4 h-4 text-[#00f2c3]" />
                <span>Garantía incondicional de 7 días con reembolso total</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
