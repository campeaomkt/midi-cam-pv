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
                  alt="Eliab Campos Teclas - Desenvolvedor Oficial do MIDI Cam"
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
                      <p className="text-[11px] text-[#00f2c3] font-mono">Desenvolvedor & Músico</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-[#00f2c3]/15 text-[11px] font-mono text-[#00f2c3] border border-[#00f2c3]/30">
                    15+ Anos
                  </span>
                </div>
              </div>

              {/* Floating Mini Badge Top Right */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-zinc-900/95 border border-zinc-700 shadow-xl flex items-center gap-2 text-xs font-semibold text-white backdrop-blur-sm">
                <GraduationCap className="w-4 h-4 text-[#00f2c3]" />
                <span>Professor & Tecladista</span>
              </div>
            </div>

            {/* Quick stats below photo */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[340px] sm:max-w-[380px] mt-5">
              <div className="p-3.5 rounded-2xl bg-[#12131d] border border-zinc-800/80 text-center">
                <span className="text-xl sm:text-2xl font-black text-[#00f2c3] block font-mono">15+</span>
                <span className="text-[11px] text-zinc-400 leading-tight block mt-0.5">Anos de Teclado & Ensino</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#12131d] border border-zinc-800/80 text-center">
                <span className="text-xl sm:text-2xl font-black text-white block font-mono">100%</span>
                <span className="text-[11px] text-zinc-400 leading-tight block mt-0.5">Focado em Músicos</span>
              </div>
            </div>

          </div>

          {/* Column Right: Biography & Story */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f2c3]/10 border border-[#00f2c3]/30 text-xs font-mono font-semibold text-[#00f2c3] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Quem Está por Trás do MIDI Cam</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Eliab Campos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2c3] to-emerald-400">Teclas</span>
            </h2>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#00f2c3] font-semibold mb-6 flex items-center gap-2">
              <Music className="w-5 h-5 flex-shrink-0" />
              <span>Tecladista, professor de teclado há mais de 15 anos e desenvolvedor do app</span>
            </p>

            {/* Bio Body Text */}
            <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
              <p>
                Durante mais de uma década e meia ensinando alunos, gravando aulas e produzindo conteúdos musicais, enfrentei exatamente a mesma dor de todo tecladista: <strong className="text-white">passar horas na frente do computador tentando sincronizar áudio, vídeo de câmera e arquivo MIDI</strong> em editores pesados.
              </p>
              <p>
                A tecnologia deveria servir para nos dar liberdade para tocar, e não para nos prender em processos cansativos de edição. Por isso, decidi unir minha vivência diária na música com a programação para criar o <strong className="text-white font-semibold">MIDI Cam</strong>.
              </p>
              <p className="text-zinc-400 text-sm">
                O aplicativo foi pensado nos mínimos detalhes por quem vive o instrumento no dia a dia. Desde a detecção de acordes em tempo real até a facilidade de gravar diretamente pelo celular ou computador, tudo foi feito para que você aperte o botão de gravar, toque o seu melhor e tenha o vídeo pronto para compartilhar na hora!
              </p>
            </div>

            {/* Pillars / Values List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full my-6 pt-2 border-t border-zinc-800/60">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00f2c3] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Criado de Músico para Músico</h4>
                  <p className="text-xs text-zinc-400">Entendimento real das necessidades de quem toca.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00f2c3] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Suporte Próximo e Dedicado</h4>
                  <p className="text-xs text-zinc-400">Apoio técnico direto com quem realmente entende do app.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00f2c3] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Evolução Constante</h4>
                  <p className="text-xs text-zinc-400">Atualizações baseadas no feedback de tecladistas reais.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00f2c3] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Comunidade & Conteúdo</h4>
                  <p className="text-xs text-zinc-400">Dicas e tutoriais práticos para você aproveitar 100%.</p>
                </div>
              </div>
            </div>

            {/* Call to action & social */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full pt-2">
              {handleAction && (
                <button
                  onClick={handleAction}
                  className="px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider bg-[#00f2c3] text-[#09090b] hover:bg-[#15fbd0] shadow-[0_0_25px_rgba(0,242,195,0.4)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Garantir Meu Acesso (R$ 24,90)</span>
                </button>
              )}

              <div className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300">
                <Award className="w-4 h-4 text-[#00f2c3]" />
                <span>Garantia incondicional de 7 dias com reembolso total</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
