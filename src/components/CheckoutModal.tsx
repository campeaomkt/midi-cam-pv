import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Lock, Sparkles, CreditCard, Smartphone, Check, ArrowRight } from 'lucide-react';
import { MidiCamLogo } from './MidiCamLogo';
import { HOTMART_CHECKOUT_URL } from '../data';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'online'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      window.location.href = HOTMART_CHECKOUT_URL;
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsCompleted(false);
    setIsProcessing(false);
    onClose();
  };

  return (
    <div
      id="checkout-modal-backdrop"
      onClick={handleResetAndClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        id="checkout-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-[#11131c] border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden text-left"
      >
        {/* Glow Header */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#00f2c3]/10 rounded-full blur-3xl -z-10" />

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800 transition-colors cursor-pointer"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCompleted ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-zinc-800/80">
              <MidiCamLogo size={36} showGlow={false} activeRec={true} />
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  Checkout Oficial MIDI Cam
                </h3>
                <span className="text-xs text-[#00f2c3] font-mono">
                  Acceso Vitalicio • Versión 2026
                </span>
              </div>
            </div>

            {/* Price Summary Bar */}
            <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex items-center justify-between mb-5">
              <div>
                <span className="text-xs text-zinc-400 block">Producto:</span>
                <span className="text-sm font-bold text-white">Licencia Completa MIDI Cam (Android + PC)</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-zinc-400 block line-through">U$19,90</span>
                <span className="text-lg font-black text-[#00f2c3]">U$ 7,90</span>
              </div>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00f2c3] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Tu Mejor Correo Electrónico
                </label>
                <input
                  type="email"
                  required
                  placeholder="ejemplo@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00f2c3] transition-colors"
                />
                <span className="text-[11px] text-zinc-400 mt-1 block">
                  El enlace y credenciales de acceso se enviarán inmediatamente a este correo.
                </span>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Método de Pago
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'bg-[#00f2c3]/15 border-[#00f2c3] text-white'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-[#00f2c3]" />
                    <span>Tarjeta de Crédito / Débito</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('online')}
                    className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === 'online'
                        ? 'bg-[#00f2c3]/15 border-[#00f2c3] text-white'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-4 h-4 text-[#00f2c3]" />
                    <span>Pago Seguro Online</span>
                  </button>
                </div>
              </div>

              {/* Trust highlights */}
              <div className="pt-2 space-y-1 text-[11px] text-zinc-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#00f2c3]" />
                  <span>Descarga inmediata tras confirmación</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#00f2c3]" />
                  <span>Garantía incondicional de 7 días</span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full mt-4 py-3.5 px-6 rounded-full font-bold text-xs uppercase tracking-wider bg-[#00f2c3] text-[#09090b] hover:bg-[#15fbd0] shadow-[0_0_20px_rgba(0,242,195,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-60"
              >
                {isProcessing ? (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Finalizar Compra Segura (U$7,90)</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-center gap-2 text-[11px] text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-[#00f2c3]" />
              <span>Conexión Encriptada SSL de 256 bits</span>
            </div>
          </div>
        ) : (
          /* Success Screen */
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#00f2c3]/20 border-2 border-[#00f2c3] flex items-center justify-center mx-auto text-[#00f2c3] shadow-[0_0_30px_rgba(0,242,195,0.4)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white">
              ¡Pedido Confirmado con Éxito!
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-sm mx-auto">
              Enviamos el enlace de acceso exclusivo a <strong className="text-white">{email || 'tu correo'}</strong>. Revisa también tu bandeja de entrada o spam para comenzar a grabar de inmediato.
            </p>

            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-left text-xs space-y-1.5 font-mono text-zinc-300">
              <div className="text-[#00f2c3] font-bold pb-1 border-b border-zinc-800">
                Paso a Paso Rápido:
              </div>
              <p>1. Abre el correo de confirmación de MIDI Cam.</p>
              <p>2. Haz clic en el enlace para acceder al Área de Miembros.</p>
              <p>3. Descarga la versión para Celular (Android) y PC (Windows).</p>
            </div>

            <button
              onClick={handleResetAndClose}
              className="mt-4 px-8 py-3 rounded-full font-bold text-xs uppercase tracking-wider bg-[#00f2c3] text-[#09090b] hover:bg-[#15fbd0] transition-colors cursor-pointer"
            >
              Comprendido, ¡Listo!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
