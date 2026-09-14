import React, { useState } from 'react';
import { MidiCamLogo } from './MidiCamLogo';
import { ShieldCheck, Mail, Lock, CheckCircle } from 'lucide-react';

interface FooterProps {
  onOpenCheckout?: () => void;
  onScrollToOffer?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCheckout, onScrollToOffer }) => {
  const handleCta = onScrollToOffer || onOpenCheckout;
  const [modalType, setModalType] = useState<'termos' | 'privacidade' | 'contato' | null>(null);

  return (
    <footer className="bg-[#07070a] border-t border-zinc-800/80 pt-12 sm:pt-16 pb-10 sm:pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-zinc-800/80">
          
          {/* Col 1: Brand & Logo */}
          <div className="md:col-span-5 flex flex-col items-start space-y-4">
            <div className="flex items-center gap-3">
              <MidiCamLogo size={42} showGlow={false} activeRec={true} />
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight block">
                  MIDI Cam
                </span>
                <span className="text-[11px] text-[#00f2c3] font-mono">
                  Visual & MIDI Recording Studio
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              La aplicación pionera en grabación de video de alta fidelidad sincronizada a teclados MIDI en tiempo real con reconocimiento de acordes inteligente.
            </p>

            <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono pt-1">
              <span className="w-2 h-2 rounded-full bg-[#00f2c3]" />
              <span>Plataforma Oficial Independiente</span>
            </div>
          </div>

          {/* Col 2: Navegación Rápida */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero-section" className="hover:text-[#00f2c3] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#como-recebe-acesso" className="hover:text-[#00f2c3] transition-colors">
                  Cómo Recibir Acceso
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-[#00f2c3] transition-colors">
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a href="#comparativo" className="hover:text-[#00f2c3] transition-colors">
                  Comparativa de Tiempo
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#00f2c3] transition-colors">
                  Testimonios de Músicos
                </a>
              </li>
              <li>
                <a href="#oferta" className="hover:text-[#00f2c3] transition-colors text-[#00f2c3]">
                  Oferta Vitalicia
                </a>
              </li>
              <li>
                <a href="#biografia" className="hover:text-[#00f2c3] transition-colors">
                  Sobre el Desarrollador
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#00f2c3] transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Seguridad & Licencia */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
              Seguridad & Licencia
            </h4>
            <div className="space-y-2 text-zinc-400 leading-relaxed">
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00f2c3] flex-shrink-0" />
                <span>Garantía incondicional de reembolso por 7 días.</span>
              </p>
              <p className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#00f2c3] flex-shrink-0" />
                <span>Procesamiento encriptado de extremo a extremo.</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00f2c3] flex-shrink-0" />
                <span>Acceso vitalicio sin cobros recurrentes.</span>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleCta}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00f2c3] hover:bg-[#15fbd0] text-[#09090b] shadow-[0_0_15px_rgba(0,242,195,0.3)] transition-all cursor-pointer active:scale-95"
              >
                Ver Oferta Especial (U$7,90)
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-center sm:text-left">
          <p>© 2026 MIDI Cam • Desarrollado por <span className="text-zinc-300 font-medium">Eliab Campos</span>. Todos los derechos reservados.</p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-xs">
            <button
              onClick={() => setModalType('termos')}
              className="hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Términos de Uso
            </button>
            <button
              onClick={() => setModalType('privacidade')}
              className="hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Política de Privacidad
            </button>
            <button
              onClick={() => setModalType('contato')}
              className="hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Contacto de Soporte
            </button>
          </div>
        </div>

      </div>

      {/* Legal / Contact Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-[#12131b] border border-zinc-800 rounded-2xl p-6 shadow-2xl text-left">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-zinc-800">
              <h4 className="text-base font-bold text-white capitalize">
                {modalType === 'termos' && 'Términos de Uso - MIDI Cam'}
                {modalType === 'privacidade' && 'Política de Privacidad - MIDI Cam'}
                {modalType === 'contato' && 'Contacto de Soporte Oficial'}
              </h4>
              <button
                onClick={() => setModalType(null)}
                className="text-zinc-400 hover:text-white text-xs font-mono bg-zinc-800 px-2 py-1 rounded cursor-pointer"
              >
                ESC
              </button>
            </div>

            <div className="text-xs text-zinc-300 space-y-3 leading-relaxed max-h-72 overflow-y-auto pr-1">
              {modalType === 'termos' && (
                <>
                  <p>La licencia del software MIDI Cam otorga el derecho de uso personal y profesional para producción de videos musicales en smartphones, tablets y computadoras compatibles.</p>
                  <p>El pago único de U$7,90 concede derecho perpetuo de uso en la versión actual y todas las actualizaciones de rendimiento y compatibilidad de la línea 2026.</p>
                  <p>Cualquier duda o necesidad de asistencia técnica puede dirigirse directamente a nuestro equipo de soporte.</p>
                </>
              )}
              {modalType === 'privacidade' && (
                <>
                  <p>La aplicación MIDI Cam respeta plenamente tu privacidad musical. Todos los datos de video, audio y eventos MIDI se procesan localmente en tu propio dispositivo.</p>
                  <p>Ninguna grabación de audio ni imagen de cámara se envía a servidores externos.</p>
                  <p>La app únicamente requiere permisos de acceso a la cámara, micrófono y puertos USB / red Wi-Fi para comunicarse con el teclado físico.</p>
                </>
              )}
              {modalType === 'contato' && (
                <>
                  <p>¿Necesitas ayuda técnica para conectar tu teclado específico o adaptador OTG?</p>
                  <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 font-mono text-xs text-[#00f2c3]">
                    E-mail Oficial: soporte@midicam.app
                  </div>
                  <p>Horario de Atención: Lunes a Domingo, de 08:00 a 22:00.</p>
                </>
              )}
            </div>

            <div className="mt-5 pt-3 border-t border-zinc-800 flex justify-end">
              <button
                onClick={() => setModalType(null)}
                className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
