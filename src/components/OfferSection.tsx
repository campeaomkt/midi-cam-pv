import React from 'react';
import { Check, ShieldCheck, Zap, Lock, Sparkles, ArrowRight, Clock, Star, Gift, Smartphone, Monitor, Youtube, Music, Laptop, Headphones } from 'lucide-react';

interface OfferSectionProps {
  onOpenCheckout: () => void;
  checkoutUrl?: string;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onOpenCheckout, checkoutUrl }) => {
  const handleCtaClick = () => {
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    } else {
      onOpenCheckout();
    }
  };

  const benefits = [
    {
      title: 'App MIDI Cam para Celular (Android)',
      desc: 'Conexão direta via cabo OTG, vídeo até 4K 60 FPS com áudio digital estéreo gravado direto na galeria.',
      icon: Smartphone,
    },
    {
      title: 'Carregamento de Timbres Próprios (.SF2)',
      desc: 'Toque com seus pianos, sintetizadores, órgãos e timbres SoundFont favoritos direto no celular, sem DAWs.',
      icon: Music,
    },
    {
      title: 'Software Oficial para Computador (Windows)',
      desc: 'Conecte seu controlador ao PC e espelhe as teclas no celular via Wi-Fi lendo um simples QR Code em 3 segundos.',
      icon: Monitor,
    },
    {
      title: 'Módulo YouTube Sync Integrado (1-Take)',
      desc: 'Grave tocando sobre playbacks e backing tracks do YouTube com mixagem independente e zero edição posterior.',
      icon: Youtube,
    },
    {
      title: 'Reconhecimento Polifônico de Acordes',
      desc: 'Motor inteligente que identifica e projeta mais de 1.800 variações de cifras e acordes na tela em tempo real.',
      icon: Sparkles,
    },
    {
      title: 'Personalização Visual Completa',
      desc: '6 paletas de cores neon, escalas de 25 a 88 teclas (modos 2D e 3D) e filtros de câmera cinematográficos.',
      icon: Gift,
    },
    {
      title: 'Acesso à Área de Membros Premium',
      desc: 'Portal exclusivo onde você baixa os instaladores oficiais e tem acesso vitalício a todas as atualizações.',
      icon: Laptop,
    },
    {
      title: 'Biblioteca de Aulas e Vídeo-Tutoriais',
      desc: 'Aulas práticas gravadas mostrando cada configuração: cabo OTG, bancos .sf2, QR Code, YouTube e ajustes de som.',
      icon: Clock,
    },
    {
      title: 'Canal de Suporte Dedicado para Dúvidas',
      desc: 'Atendimento e orientação direta para ajudar você a configurar perfeitamente seu modelo de teclado ou controlador.',
      icon: Headphones,
    },
    {
      title: 'Acesso Vitalício sem Mensalidades',
      desc: 'Pague uma única vez e tenha acesso perpétuo ao sistema completo, sem nenhuma cobrança recorrente futura.',
      icon: Star,
    },
  ];

  return (
    <section id="oferta" className="py-14 sm:py-24 bg-[#08090d] relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00f2c3]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141724] border border-[#262c42] text-xs font-bold text-[#00f2c3] uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Condição Promocional Exclusiva</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Garanta Seu Acesso Vitalício ao <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2c3] via-teal-300 to-cyan-400">
              Pacote Completo MIDI Cam
            </span>
          </h2>

          <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed">
            Economize mais de 3 horas por vídeo gravado. Tenha o sistema definitivo para celular e PC com área de membros, aulas em vídeo e suporte direto.
          </p>
        </div>

        {/* Big Premium Offer Box */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#0f111a] border-2 border-[#00f2c3]/40 shadow-[0_20px_70px_rgba(0,242,195,0.15)] overflow-hidden relative">
          
          {/* Top banner tag */}
          <div className="bg-gradient-to-r from-[#00f2c3] to-cyan-400 py-2.5 px-3 sm:px-4 text-center">
            <span className="text-[11px] sm:text-sm font-extrabold uppercase tracking-wider sm:tracking-widest text-[#09090b] flex items-center justify-center gap-1.5 sm:gap-2">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current flex-shrink-0" />
              Oferta Especial de Lançamento • Acesso Imediato
            </span>
          </div>

          <div className="p-4 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left 7 Columns: Complete Benefits Checklist */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#00f2c3] font-bold">
                  Tudo o Que Está Incluso na Sua Licença
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-3">
                  Sua Estrutura Completa de Gravação
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Você não está comprando apenas um app, mas uma solução completa que resolve desde a gravação autônoma no celular até a integração sem fio com o PC e playbacks do YouTube.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {benefits.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#141724]/80 border border-zinc-800/80 hover:border-[#00f2c3]/30 transition-colors flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#00f2c3]/15 text-[#00f2c3] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-zinc-400 leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Security trust badges */}
              <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
                <div className="flex items-center gap-1.5 text-zinc-300">
                  <ShieldCheck className="w-4 h-4 text-[#00f2c3]" />
                  <span>Garantia de 7 Dias</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-300">
                  <Lock className="w-4 h-4 text-[#00f2c3]" />
                  <span>Plataforma 100% Segura</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-300">
                  <Zap className="w-4 h-4 text-[#00f2c3]" />
                  <span>Entrega Imediata</span>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Price & Main Conversion Box */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#141826] to-[#0d0f17] border border-[#00f2c3]/30 text-center shadow-2xl relative overflow-hidden">
                
                {/* Floating pill */}
                <div className="inline-block px-3 py-1 rounded-full bg-[#00f2c3]/10 border border-[#00f2c3]/30 text-[11px] font-bold text-[#00f2c3] uppercase tracking-wider mb-4">
                  Acesso Vitalício • Pagamento Único
                </div>

                <div className="text-xs text-zinc-400 uppercase tracking-widest font-mono line-through mb-1">
                  De R$ 97,00 por apenas
                </div>

                <div className="flex items-baseline justify-center gap-1 text-white my-2">
                  <span className="text-2xl font-bold text-zinc-300">R$</span>
                  <span className="text-5xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-[#00f2c3]">
                    24
                  </span>
                  <span className="text-3xl font-black text-[#00f2c3]">,90</span>
                </div>

                <p className="text-xs text-zinc-400 mb-6">
                  Sem mensalidades • Sem cobranças adicionais • Uso para sempre
                </p>

                {/* Main CTA Button */}
                <button
                  id="offer-cta-button"
                  onClick={handleCtaClick}
                  className="w-full relative group py-4 px-6 rounded-xl font-extrabold text-sm uppercase tracking-wider bg-[#00f2c3] text-[#09090b] hover:bg-[#15fbd0] shadow-[0_0_30px_rgba(0,242,195,0.4)] hover:shadow-[0_0_45px_rgba(0,242,195,0.6)] transition-all flex items-center justify-center gap-2 active:scale-95 overflow-hidden mb-4 cursor-pointer"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  <span>Garantir Meu Acesso Vitalício</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-[11px] text-zinc-400 leading-relaxed mb-6">
                  Compra processada em ambiente protegido. Você receberá os dados de acesso à Área de Membros diretamente no seu e-mail logo após a aprovação.
                </p>

                {/* 7-Day Guarantee Box */}
                <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800 flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Garantia Blindada de 7 Dias</h5>
                    <p className="text-[10px] text-zinc-400 leading-tight">
                      Teste o MIDI Cam sem risco. Se não ficar 100% satisfeito, basta solicitar o reembolso.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
