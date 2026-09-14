import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data';
import { ChevronDown, HelpCircle, MessageSquare, ShieldCheck, Cpu } from 'lucide-react';

interface FaqSectionProps {
  onOpenCheckout?: () => void;
  onScrollToOffer?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenCheckout, onScrollToOffer }) => {
  const handleCta = onScrollToOffer || onOpenCheckout;
  const [openId, setOpenId] = useState<string | null>('teclados-compativeis');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todas as Dúvidas' },
    { id: 'compatibilidade', label: 'Teclados e Marcas' },
    { id: 'conexoes', label: 'Cabos e Conexões' },
    { id: 'audio_video', label: 'Vídeo, Áudio e Acordes' },
    { id: 'compra', label: 'Licença e Garantia' },
  ];

  const filteredItems = selectedCategory === 'todos'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((item) => item.category === selectedCategory);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-14 sm:py-24 bg-[#09090b] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-[#00f2c3] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Tudo o que você precisa saber antes de adquirir
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Respostas diretas sobre compatibilidade de teclados, cabos, latência e funcionamento do MIDI Cam.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#00f2c3] text-[#09090b] shadow-[0_0_15px_rgba(0,242,195,0.3)]'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-3.5 mb-10 sm:mb-14">
          {filteredItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#12131b] border-[#00f2c3]/40 shadow-lg'
                    : 'bg-[#101117]/80 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-4 sm:px-6 py-3.5 sm:py-5 flex items-center justify-between text-left gap-3 sm:gap-4"
                >
                  <span className="text-sm sm:text-lg font-bold text-white leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#00f2c3] text-black rotate-180' : 'bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1 border-t border-zinc-800/60 text-xs sm:text-base text-zinc-300 leading-relaxed animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support & Direct Help Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00f2c3]/15 text-[#00f2c3] flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Não encontrou sua dúvida?</h4>
              <p className="text-xs text-zinc-400">
                Nosso suporte técnico responde prontamente para ajudar na sua configuração.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 transition-colors whitespace-nowrap text-center justify-center"
          >
            Falar com Suporte MIDI Cam
          </button>
        </div>

      </div>
    </section>
  );
};
