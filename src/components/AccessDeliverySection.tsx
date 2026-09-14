import React from 'react';
import { ShieldCheck, Mail, Laptop, GraduationCap, Headphones, Download, ArrowRight, CheckCircle2, Lock, Sparkles } from 'lucide-react';

interface AccessDeliverySectionProps {
  onScrollToOffer: () => void;
}

export const AccessDeliverySection: React.FC<AccessDeliverySectionProps> = ({ onScrollToOffer }) => {
  return (
    <section id="como-recebe-acesso" className="py-14 sm:py-20 bg-[#0c0d14] relative overflow-hidden border-t border-b border-zinc-800/80">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00f2c3]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161824] border border-[#272a38] text-xs font-semibold text-[#00f2c3] mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>Proceso 100% Confiable & Inmediato</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            ¿Cómo Recibes tu <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2c3] via-teal-300 to-cyan-400">
              Acceso a la App MIDI Cam?
            </span>
          </h2>

          <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed">
            Tu compra es procesada por una plataforma segura y de alta tecnología. En segundos, todo el contenido se libera directamente en tu correo electrónico.
          </p>
        </div>

        {/* 3 Steps / Pillars of Delivery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-10 sm:mb-14">
          
          {/* Pillar 1: Plataforma Confiável */}
          <div className="p-5 sm:p-8 rounded-2xl bg-[#11131c] border border-zinc-800/80 hover:border-[#00f2c3]/30 transition-all flex flex-col justify-between space-y-5 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#00f2c3]/10 border border-[#00f2c3]/20 flex items-center justify-center text-[#00f2c3] mb-5 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-mono uppercase tracking-wider text-[#00f2c3] font-bold">Paso 1</span>
              <h3 className="text-base sm:text-lg font-bold text-white mt-1 mb-2.5">
                Pago Protegido en Plataforma Segura
              </h3>
              
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Tu transacción cuenta con encriptación de extremo a extremo SSL. Acepta tarjetas de crédito, débito y métodos de pago internacionales con aprobación inmediata.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-xs text-zinc-300 font-mono">
              <CheckCircle2 className="w-4 h-4 text-[#00f2c3] flex-shrink-0" />
              <span>Sin cargos sorpresa ni mensualidades</span>
            </div>
          </div>

          {/* Pillar 2: E-mail Imediato */}
          <div className="p-5 sm:p-8 rounded-2xl bg-[#11131c] border border-zinc-800/80 hover:border-[#00f2c3]/30 transition-all flex flex-col justify-between space-y-5 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-bold">Paso 2</span>
              <h3 className="text-base sm:text-lg font-bold text-white mt-1 mb-2.5">
                Envío Instantáneo a tu Correo
              </h3>
              
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Tan pronto como se apruebe el pago, el sistema envía automáticamente a tu correo electrónico el enlace exclusivo de acceso, junto con tu usuario y clave para ingresar.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-xs text-zinc-300 font-mono">
              <CheckCircle2 className="w-4 h-4 text-[#00f2c3] flex-shrink-0" />
              <span>Liberación automática en menos de 1 minuto</span>
            </div>
          </div>

          {/* Pillar 3: Área de Membros Premium */}
          <div className="p-5 sm:p-8 rounded-2xl bg-gradient-to-b from-[#141824] to-[#10121a] border border-[#00f2c3]/40 shadow-[0_10px_30px_rgba(0,242,195,0.08)] flex flex-col justify-between space-y-5 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#00f2c3]/15 border border-[#00f2c3]/30 flex items-center justify-center text-[#00f2c3] mb-5 group-hover:scale-110 transition-transform">
                <Laptop className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-mono uppercase tracking-wider text-[#00f2c3] font-bold">Paso 3</span>
              <h3 className="text-base sm:text-lg font-bold text-white mt-1 mb-2.5">
                Área de Miembros Premium Exclusiva
              </h3>
              
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Accedes a un portal moderno y organizado, donde descargas los instaladores oficiales de la app, todas las video-clases paso a paso y el canal de soporte directo.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-xs text-[#00f2c3] font-mono font-medium">
              <Sparkles className="w-4 h-4 flex-shrink-0" />
              <span>Acceso de por vida disponible las 24 horas</span>
            </div>
          </div>

        </div>

        {/* Detailed Breakdown of what is inside the Premium Members Area */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#11131e] border border-zinc-800 p-5 sm:p-10 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <div className="px-3 py-1 rounded-full bg-[#00f2c3]/10 border border-[#00f2c3]/30 text-xs font-bold text-[#00f2c3] uppercase tracking-wider">
              Lo que te espera en el Área de Miembros
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {/* Inside item 1 */}
            <div className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Descargas Oficiales de la App</h4>
                  <span className="text-[11px] text-zinc-400 font-mono">Siempre Actualizado</span>
                </div>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Descarga la aplicación para celular Android (.APK) y el software oficial para computadora (Windows 10/11) con actualizaciones continuas liberadas sin costo extra.
              </p>
            </div>

            {/* Inside item 2 */}
            <div className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Clases y Tutoriales en Video</h4>
                  <span className="text-[11px] text-zinc-400 font-mono">Contenido Completo</span>
                </div>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Accede a una biblioteca de video-tutoriales didácticos que enseñan a configurar timbres .sf2, conectar cables OTG, vincular a la PC por Código QR, grabar con YouTube y lograr la mejor toma.
              </p>
            </div>

            {/* Inside item 3 */}
            <div className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Soporte VIP para Preguntas</h4>
                  <span className="text-[11px] text-zinc-400 font-mono">Atención Directa</span>
                </div>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                ¿Necesitas ayuda para configurar tu modelo de teclado o controlador? Nuestro equipo está disponible dentro del área de miembros para orientarte en cada detalle.
              </p>
            </div>
          </div>

          {/* CTA Banner inside Access Section */}
          <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
              <CheckCircle2 className="w-5 h-5 text-[#00f2c3] flex-shrink-0" />
              <span>Recibes todo esto con garantía incondicional de 7 días y pago único.</span>
            </div>

            <button
              onClick={onScrollToOffer}
              className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#00f2c3] text-[#09090b] hover:bg-[#15fbd0] shadow-[0_0_20px_rgba(0,242,195,0.3)] transition-all flex items-center gap-2 flex-shrink-0 active:scale-95 cursor-pointer"
            >
              <span>Ver Oferta Especial (U$7,90)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
