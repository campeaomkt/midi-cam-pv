import React, { useState } from 'react';
import { MidiCamLogo } from './MidiCamLogo';
import { ShieldCheck, Mail, Lock, Heart, CheckCircle } from 'lucide-react';

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
              O aplicativo pioneiro em gravação de vídeo de alta fidelidade sincronizada a teclados MIDI em tempo real com reconhecimento de acordes inteligente.
            </p>

            <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono pt-1">
              <span className="w-2 h-2 rounded-full bg-[#00f2c3]" />
              <span>Plataforma Oficial Independente</span>
            </div>
          </div>

          {/* Col 2: Navegação Rápida */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero-section" className="hover:text-[#00f2c3] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#como-recebe-acesso" className="hover:text-[#00f2c3] transition-colors">
                  Como Receber Acesso
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-[#00f2c3] transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#comparativo" className="hover:text-[#00f2c3] transition-colors">
                  Comparativo de Tempo
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#00f2c3] transition-colors">
                  Depoimentos de Usuários
                </a>
              </li>
              <li>
                <a href="#oferta" className="hover:text-[#00f2c3] transition-colors text-[#00f2c3]">
                  Oferta Vitalícia
                </a>
              </li>
              <li>
                <a href="#biografia" className="hover:text-[#00f2c3] transition-colors">
                  Sobre o Desenvolvedor
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#00f2c3] transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Segurança & Licença */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
              Segurança & Licença
            </h4>
            <div className="space-y-2 text-zinc-400 leading-relaxed">
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00f2c3] flex-shrink-0" />
                <span>Garantia incondicional de reembolso por 7 dias.</span>
              </p>
              <p className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#00f2c3] flex-shrink-0" />
                <span>Processamento criptografado de ponta a ponta.</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00f2c3] flex-shrink-0" />
                <span>Acesso vitalício sem cobranças recorrentes.</span>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleCta}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00f2c3] hover:bg-[#15fbd0] text-[#09090b] shadow-[0_0_15px_rgba(0,242,195,0.3)] transition-all cursor-pointer active:scale-95"
              >
                Ver Oferta Especial (R$ 24,90)
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-center sm:text-left">
          <p>© 2026 MIDI Cam • Desenvolvido por <span className="text-zinc-300 font-medium">Eliab Campos</span>. Todos os direitos reservados.</p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-xs">
            <button
              onClick={() => setModalType('termos')}
              className="hover:text-zinc-300 transition-colors"
            >
              Termos de Uso
            </button>
            <button
              onClick={() => setModalType('privacidade')}
              className="hover:text-zinc-300 transition-colors"
            >
              Política de Privacidade
            </button>
            <button
              onClick={() => setModalType('contato')}
              className="hover:text-zinc-300 transition-colors"
            >
              Contato do Suporte
            </button>
          </div>
        </div>

      </div>

      {/* Simple Legal/Contact Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-[#12131b] border border-zinc-800 rounded-2xl p-6 shadow-2xl text-left">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-zinc-800">
              <h4 className="text-base font-bold text-white capitalize">
                {modalType === 'termos' && 'Termos de Uso - MIDI Cam'}
                {modalType === 'privacidade' && 'Política de Privacidade - MIDI Cam'}
                {modalType === 'contato' && 'Contato do Suporte Oficial'}
              </h4>
              <button
                onClick={() => setModalType(null)}
                className="text-zinc-400 hover:text-white text-xs font-mono bg-zinc-800 px-2 py-1 rounded"
              >
                ESC
              </button>
            </div>

            <div className="text-xs text-zinc-300 space-y-3 leading-relaxed max-h-72 overflow-y-auto pr-1">
              {modalType === 'termos' && (
                <>
                  <p>A licença do software MIDI Cam concede o direito de uso pessoal e profissional para produção de vídeos musicais em smartphones e tablets compatíveis.</p>
                  <p>O pagamento de R$ 24,90 concede direito perpétuo de uso na versão atual e todas as atualizações de performance e compatibilidade da linha 2026.</p>
                  <p>Qualquer dúvida ou necessidade de suporte pode ser direcionada diretamente à nossa equipe de engenharia de áudio.</p>
                </>
              )}
              {modalType === 'privacidade' && (
                <>
                  <p>O aplicativo MIDI Cam respeita integralmente a sua privacidade musical. Todos os dados de vídeo, áudio e eventos MIDI são processados localmente no seu dispositivo.</p>
                  <p>Nenhuma gravação de áudio ou imagem de câmera é enviada para servidores externos.</p>
                  <p>O app requer apenas permissão para acesso à câmera, microfone e portas USB / rede WI-FI para comunicação com o teclado físico.</p>
                </>
              )}
              {modalType === 'contato' && (
                <>
                  <p>Precisa de assistência técnica para conectar o seu teclado específico ou adaptador OTG?</p>
                  <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 font-mono text-xs text-[#00f2c3]">
                    E-mail Oficial: suporte@midicam.app
                  </div>
                  <p>Horário de Atendimento: Segunda a Domingo, das 08h às 22h (Horário de Brasília).</p>
                </>
              )}
            </div>

            <div className="mt-5 pt-3 border-t border-zinc-800 flex justify-end">
              <button
                onClick={() => setModalType(null)}
                className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white transition-colors"
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
