import React, { useState } from 'react';
import { MidiCamLogo } from './MidiCamLogo';
import { X, CheckCircle2, ShieldCheck, Copy, Download, QrCode, CreditCard, Sparkles, Key, Smartphone } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'cartao'>('pix');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [step, setStep] = useState<'checkout' | 'success'>('checkout');

  if (!isOpen) return null;

  const pixCode = '00020126580014br.gov.bcb.pix0136midicam-oficial-pix-pagamento@midicam.app520400005303986540524.905802BR5920MIDI CAM OFICIAL6009SAO PAULO62070503***6304E8A2';
  const generatedKey = 'MCAM-2026-LIVE-8942-PRO';

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-[#111218] border border-zinc-800 rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.9)]">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'checkout' ? (
          <div className="p-5 sm:p-8">
            {/* Header with official logo */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6 pr-8">
              <MidiCamLogo size={42} showGlow={false} activeRec={true} />
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
                  Adquirir Licença Oficial MIDI Cam
                </h3>
                <span className="text-[11px] sm:text-xs text-zinc-400 font-mono">
                  Acesso Vitalício • Pagamento Único
                </span>
              </div>
            </div>

            {/* Price Box */}
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-zinc-950 border border-zinc-800/90 mb-4 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase text-zinc-400 block">
                  Valor Promocional Exclusivo
                </span>
                <span className="text-3xl font-extrabold text-white font-mono">
                  R$ 24,90
                </span>
                <span className="text-[11px] text-[#00f2c3] block font-mono">Sem assinaturas mensais</span>
              </div>
              <div className="text-right">
                <span className="text-xs line-through text-zinc-500 font-mono block">R$ 79,90</span>
                <span className="text-xs font-bold text-[#00f2c3] bg-[#00f2c3]/10 px-2 py-0.5 rounded border border-[#00f2c3]/20">
                  68% OFF
                </span>
              </div>
            </div>

            {/* Included in License Checklist */}
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 mb-5 text-[11px] text-zinc-300 space-y-1.5">
              <div className="flex items-center gap-2 text-zinc-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f2c3]" />
                <span><strong>App Celular (Android):</strong> gravação via cabo OTG + timbres .SF2</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f2c3]" />
                <span><strong>App PC (Windows):</strong> Wi-Fi via QR Code + YouTube integrado</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f2c3]" />
                <span><strong>Personalização:</strong> cores neon, modelos de teclado e filtros</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400 font-mono text-[10px] pt-0.5">
                <span>Criado por Eliab Campos • Acesso vitalício e suporte</span>
              </div>
            </div>

            {/* Payment Method Switch */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              <button
                type="button"
                onClick={() => setPaymentMethod('pix')}
                className={`py-2.5 px-4 rounded-xl text-xs font-bold font-mono flex items-center justify-center gap-2 border transition-all ${
                  paymentMethod === 'pix'
                    ? 'bg-[#00f2c3] text-[#09090b] border-[#00f2c3] shadow-[0_0_15px_rgba(0,242,195,0.3)]'
                    : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                }`}
              >
                <QrCode className="w-4 h-4" />
                <span>PIX Instantâneo</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('cartao')}
                className={`py-2.5 px-4 rounded-xl text-xs font-bold font-mono flex items-center justify-center gap-2 border transition-all ${
                  paymentMethod === 'cartao'
                    ? 'bg-[#00f2c3] text-[#09090b] border-[#00f2c3] shadow-[0_0_15px_rgba(0,242,195,0.3)]'
                    : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                }`}
              >
                <CreditCard className="w-4 h-4" />
                <span>Cartão de Crédito</span>
              </button>
            </div>

            {/* Pix Tab */}
            {paymentMethod === 'pix' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 flex flex-col items-center text-center">
                  <div className="w-36 h-36 bg-white p-2 rounded-xl mb-3 flex items-center justify-center shadow-md">
                    {/* Simulated Clean Pix QR */}
                    <div className="w-full h-full border-4 border-black p-1 flex flex-col justify-between">
                      <div className="flex justify-between">
                        <div className="w-6 h-6 bg-black" />
                        <div className="w-6 h-6 bg-black" />
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="w-8 h-8 rounded-full bg-[#00f2c3] flex items-center justify-center">
                          <span className="font-extrabold text-[10px] text-black">MC</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="w-6 h-6 bg-black" />
                        <div className="w-3 h-3 bg-black self-end" />
                      </div>
                    </div>
                  </div>

                  <span className="text-xs text-zinc-300 font-medium mb-2">
                    Escaneie o QR Code no app do seu banco ou copie a chave:
                  </span>

                  <button
                    type="button"
                    onClick={handleCopyPix}
                    className="w-full py-2.5 px-3 rounded-lg bg-zinc-950 border border-zinc-700 hover:border-[#00f2c3] text-xs font-mono text-zinc-200 flex items-center justify-center gap-2 transition-colors"
                  >
                    {isCopied ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-[#00f2c3]" />
                        <span className="text-[#00f2c3] font-bold">Chave Pix Copiada!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-zinc-400" />
                        <span>Copiar Código Pix Copia e Cola</span>
                      </>
                    )}
                  </button>
                </div>

                <form onSubmit={handleSimulatePayment} className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Seu E-mail (para envio da chave e download):
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="exemplo@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#00f2c3]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-[#00f2c3] text-[#09090b] hover:bg-[#15fbd0] shadow-[0_0_20px_rgba(0,242,195,0.35)] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Confirmar Pagamento e Baixar</span>
                  </button>
                </form>
              </div>
            )}

            {/* Credit Card Tab */}
            {paymentMethod === 'cartao' && (
              <form onSubmit={handleSimulatePayment} className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Nome Completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Nome impresso no cartão"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#00f2c3]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Número do Cartão</label>
                  <input
                    type="text"
                    required
                    maxLength={19}
                    placeholder="0000 0000 0000 0000"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#00f2c3] font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">Validade</label>
                    <input
                      type="text"
                      required
                      placeholder="MM/AA"
                      maxLength={5}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#00f2c3] font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">CVV</label>
                    <input
                      type="text"
                      required
                      placeholder="123"
                      maxLength={4}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#00f2c3] font-mono"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-[#00f2c3] text-[#09090b] hover:bg-[#15fbd0] shadow-[0_0_20px_rgba(0,242,195,0.35)] transition-all flex items-center justify-center gap-2"
                >
                  <span>Pagar R$ 24,90 em 1 Clique</span>
                </button>
              </form>
            )}

            {/* Guarantee Seal */}
            <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00f2c3]" />
                Garantia Incondicional de 7 Dias
              </span>
              <span>Criptografia SSL Segura</span>
            </div>

          </div>
        ) : (
          /* SUCCESS / INSTANT DELIVERY STATE */
          <div className="p-8 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#00f2c3]/20 text-[#00f2c3] flex items-center justify-center mx-auto mb-4 border border-[#00f2c3]/40 shadow-[0_0_25px_rgba(0,242,195,0.4)]">
              <Sparkles className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-2">
              Acesso Liberado com Sucesso!
            </h3>
            <p className="text-sm text-zinc-300 mb-6">
              Sua licença vitalícia oficial do MIDI Cam foi ativada. Você já pode instalar e conectar seu teclado.
            </p>

            {/* License Key Box */}
            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 mb-6 text-left">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5 text-[#00f2c3]" />
                  Chave de Ativação Oficial:
                </span>
                <span className="text-[10px] font-mono text-[#00f2c3] bg-[#00f2c3]/10 px-2 py-0.5 rounded">
                  VITALÍCIA
                </span>
              </div>
              <div className="text-lg font-mono font-bold text-white tracking-wider">
                {generatedKey}
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-2.5 mb-6">
              <a
                href="#download-android"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Download do MIDI Cam para Android (APK) iniciado! Pronto para carregar seus timbres .SF2.');
                }}
                className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#00f2c3] text-[#09090b] hover:bg-[#15fbd0] shadow-[0_0_20px_rgba(0,242,195,0.3)] transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Baixar App Celular Android (.APK)</span>
              </a>

              <a
                href="#download-windows"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Download do MIDI Cam Studio para PC (Windows) iniciado! Inclui módulo QR Code e YouTube Sync.');
                }}
                className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-white hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#00f2c3]" />
                <span>Baixar App PC Windows (.EXE)</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-full text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
              >
                Fechar e voltar ao site
              </button>
            </div>

            <div className="text-[11px] text-zinc-500 font-mono">
              Suporte prioritário ativo em suporte@midicam.app
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
