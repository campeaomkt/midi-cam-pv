import React from 'react';
import { XCircle, CheckCircle2, Clock, Zap, Video, Sparkles } from 'lucide-react';

interface ComparisonSectionProps {
  onOpenCheckout?: () => void;
  onScrollToOffer?: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = () => {
  const oldWaySteps = [
    { step: 1, title: 'Gravar vídeo no celular/câmera', desc: 'Preocupar-se com enquadramento sem ver o MIDI.', time: '20 min' },
    { step: 2, title: 'Gravar MIDI separado na DAW', desc: 'Abrir Reaper/Logic/Ableton, configurar canal MIDI e áudio.', time: '35 min' },
    { step: 3, title: 'Renderizar teclado virtual (MidiVisualizer)', desc: 'Exportar arquivos transparentes pesados no computador.', time: '40 min' },
    { step: 4, title: 'Sincronizar frame a frame no Premiere/DaVinci', desc: 'Casar áudio, vídeo das mãos e teclas com precisão milimétrica.', time: '60 min' },
    { step: 5, title: 'Digitar manualmente as cifras e acordes', desc: 'Ouvir, descobrir o acorde e criar legendas uma a uma.', time: '30 min' },
  ];

  const midiCamSteps = [
    { step: 1, title: 'Celular (Cabo OTG) ou PC Sem Fio (QR Code)', desc: 'Grave só com o celular e timbres .sf2 ou conecte ao PC via Wi-Fi em 3 segundos lendo o QR Code.', time: '10 seg' },
    { step: 2, title: 'Tocar com SF2 próprio ou Playbacks do YouTube', desc: 'Carregue qualquer som SoundFont ou vídeo do YouTube no app para gravar áudio, backing track e teclas juntos.', time: 'Duração da música' },
    { step: 3, title: 'Vídeo 4K gravado na hora na galeria', desc: 'Teclas acesas, cifras harmônicas e áudio sincronizado com zero latência. Sem edição posterior!', time: 'Instantâneo' },
  ];

  return (
    <section id="comparativo" className="py-14 sm:py-24 bg-[#09090b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-[#00f2c3] mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>Produtividade Musical Radical</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Por que escolher o MIDI Cam?
          </h2>
          <p className="text-sm sm:text-lg text-zinc-400">
            Compare o processo exaustivo de edição tradicional com a revolução de 1 clique do MIDI Cam.
          </p>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
          
          {/* THE OLD WAY (O Jeito Antigo) */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#12131a]/60 border border-red-950/40 p-5 sm:p-8 relative overflow-hidden shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-800/80 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">O Jeito Antigo</h3>
                  <span className="text-xs text-zinc-400 font-mono">Edição Tradicional Fragmentada</span>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <span className="inline-block text-xs font-mono text-red-400 font-bold bg-red-950/50 px-2.5 py-1 rounded-full border border-red-800/40">
                  ~3 Horas Perdidas por Vídeo
                </span>
              </div>
            </div>

            {/* Steps Timeline */}
            <div className="space-y-3 sm:space-y-4">
              {oldWaySteps.map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-3 sm:gap-3.5 p-3 rounded-xl bg-zinc-950/50 border border-zinc-900"
                >
                  <span className="w-6 h-6 rounded-full bg-red-900/30 text-red-400 text-xs font-bold font-mono flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.step}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-2">
                      <h4 className="text-sm font-semibold text-zinc-200">{item.title}</h4>
                      <span className="text-[11px] font-mono text-zinc-500">{item.time}</span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pain summary footer */}
            <div className="mt-6 p-4 rounded-xl bg-red-950/20 border border-red-900/30 text-xs text-red-300 flex items-center gap-3">
              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <span>
                Resultado: Desgaste mental, perda de criatividade e atraso constante no calendário de postagens.
              </span>
            </div>
          </div>

          {/* WITH MIDI CAM (Com o MIDI Cam) */}
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#11171d] to-[#0c0f16] border-2 border-[#00f2c3]/40 p-5 sm:p-8 relative overflow-hidden shadow-[0_10px_50px_rgba(0,242,195,0.12)]">
            {/* Corner Badge */}
            <div className="absolute top-0 right-0 bg-[#00f2c3] text-[#09090b] font-mono text-[10px] font-extrabold uppercase px-3 sm:px-4 py-1 rounded-bl-xl tracking-wider">
              Fluxo Inteligente 2026
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-800/80 mb-6 pt-2 sm:pt-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#00f2c3]/15 text-[#00f2c3] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    Com o MIDI Cam
                    <Sparkles className="w-4 h-4 text-[#00f2c3]" />
                  </h3>
                  <span className="text-xs text-[#00f2c3] font-mono">100% Mobile em Tempo Real</span>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <span className="inline-block text-xs font-mono text-[#00f2c3] font-bold bg-[#00f2c3]/10 px-2.5 py-1 rounded-full border border-[#00f2c3]/30">
                  Pronto em 1 Clique
                </span>
              </div>
            </div>

            {/* Steps Timeline */}
            <div className="space-y-3 sm:space-y-4">
              {midiCamSteps.map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-xl bg-zinc-950/70 border border-[#00f2c3]/20 shadow-sm"
                >
                  <span className="w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-[#00f2c3] text-[#09090b] text-xs font-extrabold font-mono flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_10px_rgba(0,242,195,0.4)]">
                    {item.step}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-white">{item.title}</h4>
                      <span className="text-xs font-mono text-[#00f2c3] font-semibold">{item.time}</span>
                    </div>
                    <p className="text-xs text-zinc-300 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Success summary footer */}
            <div className="mt-6 p-4 rounded-xl bg-[#00f2c3]/10 border border-[#00f2c3]/30 text-xs text-zinc-200 flex items-center gap-3">
              <Zap className="w-5 h-5 text-[#00f2c3] flex-shrink-0" />
              <span>
                Resultado: Vídeo 4K gravado com áudio sincronizado, teclado iluminado e acordes na tela pronto para compartilhar direto do celular!
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
