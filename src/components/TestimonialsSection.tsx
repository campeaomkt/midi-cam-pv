import React from 'react';
import { TESTIMONIALS } from '../data';
import { Star, Quote, CheckCircle, Award } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenCheckout?: () => void;
  onScrollToOffer?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenCheckout, onScrollToOffer }) => {
  const handleCta = onScrollToOffer || onOpenCheckout;
  return (
    <section id="depoimentos" className="py-14 sm:py-24 bg-[#0c0d12] relative overflow-hidden border-t border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-[#00f2c3] mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Aprovado por Músicos e Educadores</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Quem experimenta não volta ao processo antigo
          </h2>
          <p className="text-sm sm:text-lg text-zinc-400">
            Veja como pianistas, tecladistas de igreja, criadores de conteúdo e professores transformaram seus vídeos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-12 sm:mb-16">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl sm:rounded-3xl bg-[#12131b] border border-zinc-800/90 p-5 sm:p-8 flex flex-col justify-between relative shadow-xl hover:border-[#00f2c3]/40 transition-all duration-300 group"
            >
              <div>
                {/* Stars and Highlight Pill */}
                <div className="flex items-center justify-between gap-2 mb-4 sm:mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>

                  <span className="text-[11px] sm:text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-[#00f2c3]/10 text-[#00f2c3] border border-[#00f2c3]/20">
                    {t.highlight}
                  </span>
                </div>

                {/* Content Quote */}
                <div className="relative mb-5 sm:mb-6">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-zinc-700/40 absolute -top-3 -left-2 sm:-left-3 -z-10" />
                  <p className="text-zinc-200 text-xs sm:text-base leading-relaxed italic">
                    "{t.content}"
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-4 sm:pt-5 border-t border-zinc-800/80">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatarUrl}
                    alt={t.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-zinc-700 group-hover:border-[#00f2c3] transition-colors flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                      {t.name}
                      <CheckCircle className="w-3.5 h-3.5 text-[#00f2c3] flex-shrink-0" />
                    </h4>
                    <span className="text-[11px] sm:text-xs text-zinc-400 block">{t.role}</span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500">Usa: {t.instrument}</span>
                  </div>
                </div>

                {t.followers && (
                  <span className="text-[10px] sm:text-xs font-mono text-zinc-400 bg-zinc-900 px-2 sm:px-2.5 py-1 rounded-lg border border-zinc-800">
                    {t.followers}
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner for Creators */}
        <div id="para-criadores" className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0d171d] via-[#101923] to-[#0d171d] border border-[#00f2c3]/30 p-5 sm:p-10 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-3xl font-extrabold text-white mb-2 sm:mb-3">
              Pronto para elevar a autoridade visual das suas redes?
            </h3>
            <p className="text-xs sm:text-base text-zinc-300 mb-5 sm:mb-6 leading-relaxed">
              Junte-se aos tecladistas que já produzem conteúdo profissional todos os dias com zero atrito técnico.
            </p>
            <button
              onClick={handleCta}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-xs uppercase tracking-wider bg-[#00f2c3] text-[#09090b] hover:bg-[#15fbd0] shadow-[0_0_25px_rgba(0,242,195,0.4)] transition-all inline-flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Ver Oferta Vitalícia e Benefícios (R$ 24,90)</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
