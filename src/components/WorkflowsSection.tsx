import React, { useState } from 'react';
import { Smartphone, Monitor, Youtube, Sliders, Music, Cable, QrCode, CheckCircle2, ArrowRight, ShieldCheck, Cpu, HardDrive, Video, Layers } from 'lucide-react';

interface WorkflowsSectionProps {
  onOpenCheckout?: () => void;
  onScrollToOffer?: () => void;
}

export const WorkflowsSection: React.FC<WorkflowsSectionProps> = ({ onOpenCheckout, onScrollToOffer }) => {
  const [activeTab, setActiveTab] = useState<'celular' | 'pc' | 'youtube' | 'customizacao'>('celular');
  const handleCta = onScrollToOffer || onOpenCheckout;

  return (
    <section id="como-funciona" className="py-14 sm:py-20 lg:py-28 relative overflow-hidden bg-[#0a0b10] border-t border-b border-zinc-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#00f2c3]/6 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#3b82f6]/6 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - 100% Informative */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161821] border border-[#272a38] text-xs font-semibold text-[#00f2c3] mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Guia Técnico & Funcionamento</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Como Funciona o <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2c3] via-teal-300 to-cyan-400">
              Sistema Oficial MIDI Cam
            </span>
          </h2>

          <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed">
            Conheça em detalhes a arquitetura técnica, os dois métodos de conexão disponíveis e como o aplicativo elimina completamente a necessidade de edição de vídeo ou DAWs.
          </p>
        </div>

        {/* Informative Navigation Tabs */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="p-1.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-1.5 shadow-xl backdrop-blur-md w-full sm:w-auto">
            
            <button
              onClick={() => setActiveTab('celular')}
              className={`px-2.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 sm:gap-2 transition-all text-center ${
                activeTab === 'celular'
                  ? 'bg-[#00f2c3] text-[#09090b] shadow-[0_0_20px_rgba(0,242,195,0.35)]'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>1. Celular (.SF2)</span>
            </button>

            <button
              onClick={() => setActiveTab('pc')}
              className={`px-2.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 sm:gap-2 transition-all text-center ${
                activeTab === 'pc'
                  ? 'bg-[#00f2c3] text-[#09090b] shadow-[0_0_20px_rgba(0,242,195,0.35)]'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              <Monitor className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>2. PC Sem Fio</span>
            </button>

            <button
              onClick={() => setActiveTab('youtube')}
              className={`px-2.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 sm:gap-2 transition-all text-center ${
                activeTab === 'youtube'
                  ? 'bg-[#00f2c3] text-[#09090b] shadow-[0_0_20px_rgba(0,242,195,0.35)]'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              <Youtube className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>3. YouTube Sync</span>
            </button>

            <button
              onClick={() => setActiveTab('customizacao')}
              className={`px-2.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 sm:gap-2 transition-all text-center ${
                activeTab === 'customizacao'
                  ? 'bg-[#00f2c3] text-[#09090b] shadow-[0_0_20px_rgba(0,242,195,0.35)]'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              <Sliders className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>4. Customização</span>
            </button>

          </div>
        </div>

        {/* TAB 1: GRAVAÇÃO AUTÔNOMA NO CELULAR (.SF2) */}
        {activeTab === 'celular' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch bg-[#10121a] border border-[#202434] rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-2xl">
            
            {/* Left Informative Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#00f2c3]/10 border border-[#00f2c3]/30 text-xs text-[#00f2c3] font-mono font-semibold mb-3">
                  <Cable className="w-3.5 h-3.5" />
                  CONEXÃO DIRETA VIA CABO OTG
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                  Gravação 100% Autônoma: <br />
                  <span className="text-[#00f2c3]">Apenas o Celular Android e Seus Timbres .SF2</span>
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                  Neste modo, você não precisa de computador, placa de áudio externa ou programas pesados (DAWs). O teclado físico conecta-se diretamente à porta USB do celular por meio de um adaptador OTG comum, e o MIDI Cam assume todo o processamento de áudio, sintetização e gravação de vídeo.
                </p>

                {/* Technical Points */}
                <div className="space-y-3.5">
                  <div className="p-4 rounded-2xl bg-[#161824] border border-zinc-800">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <Music className="w-4 h-4 text-[#00f2c3]" />
                      <h4 className="text-sm font-bold text-white">Carregamento Nativo de Timbres SoundFont (.sf2)</h4>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Você pode carregar arquivos de timbres (.sf2) da sua preferência diretamente no armazenamento do smartphone. Toque pianos acústicos de concerto, Rhodes, órgãos Hammond, sintetizadores ou acordeons com amostragem fiel de estúdio.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#161824] border border-zinc-800">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <Cpu className="w-4 h-4 text-[#00f2c3]" />
                      <h4 className="text-sm font-bold text-white">Sem Dependência de DAWs ou Softwares Externos</h4>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Dispensa o uso de Reaper, Ableton Live, FL Studio, Logic ou plugins VST. O próprio motor de áudio do aplicativo processa os dados MIDI em tempo real com resposta de toque ultra-rápida.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#161824] border border-zinc-800">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <Video className="w-4 h-4 text-[#00f2c3]" />
                      <h4 className="text-sm font-bold text-white">Arquivo MP4 Gravado Diretamente na Galeria</h4>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Ao encerrar a execução, o vídeo final com a imagem da câmera, as teclas acesas sincronizadas e o áudio digital estéreo já fica pronto na galeria do celular para publicação imediata.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleCta}
                  className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#00f2c3] text-[#09090b] hover:bg-[#15fbd0] shadow-[0_0_20px_rgba(0,242,195,0.3)] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Ver Oferta Especial (R$ 24,90)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Informative Technical Specification Card */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0b0c13] border border-zinc-800 space-y-5">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">
                    Ficha Técnica & Capacidades
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00f2c3]/15 text-[#00f2c3] border border-[#00f2c3]/30">
                      Android 8.0+
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                      USB-OTG
                    </span>
                  </div>
                </div>

                {/* Technical Architecture Highlights */}
                <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                  Arquitetura do Sistema:
                </h5>
                <div className="space-y-2.5 mb-6">
                  <div className="p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-900">
                    <div className="text-xs font-semibold text-zinc-200 mb-0.5">Motor DSP de Baixa Latência</div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Processamento de áudio direto no hardware em ponto flutuante de 32-bit com resposta inferior a 4ms.
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-900">
                    <div className="text-xs font-semibold text-zinc-200 mb-0.5">Sintetizador SoundFont Nativo</div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Compatibilidade universal com arquivos .sf2 com suporte a multicamadas dinâmicas e pedal de sustentação.
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-900">
                    <div className="text-xs font-semibold text-zinc-200 mb-0.5">Renderizador Gráfico a 60 FPS</div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Sincronização imediata entre o sinal elétrico do teclado e as animações de iluminação na tela.
                    </p>
                  </div>
                </div>

                {/* Technical Specs List */}
                <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                  Especificações do Sistema:
                </h5>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between py-1.5 border-b border-zinc-800/60">
                    <span className="text-zinc-400">Latência de Entrada:</span>
                    <span className="text-[#00f2c3] font-semibold">&lt; 4 milissegundos</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-zinc-800/60">
                    <span className="text-zinc-400">Formato de Timbres:</span>
                    <span className="text-white font-semibold">SoundFont 2 (.sf2)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-zinc-800/60">
                    <span className="text-zinc-400">Resolução de Vídeo:</span>
                    <span className="text-white font-semibold">Até 4K Ultra HD (60 FPS)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-zinc-800/60">
                    <span className="text-zinc-400">Taxa de Áudio:</span>
                    <span className="text-white font-semibold">Estéreo 48 kHz / 320 kbps</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-zinc-400">Reconhecimento de Acordes:</span>
                    <span className="text-white font-semibold">+1.800 variações em tempo real</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 text-[11px] text-zinc-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00f2c3] flex-shrink-0" />
                <span>Funciona com qualquer teclado ou controlador USB-MIDI padrão.</span>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: GRAVAÇÃO SEM FIO COM PC (WINDOWS + QR CODE) */}
        {activeTab === 'pc' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch bg-[#10121a] border border-[#202434] rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-2xl">
            
            {/* Left Informative Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-xs text-[#3b82f6] font-mono font-semibold mb-3">
                  <Monitor className="w-3.5 h-3.5" />
                  APP PC (WINDOWS) • SINCRONISMO WI-FI
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                  Conexão Sem Fio pelo Computador: <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-cyan-300 to-[#00f2c3]">
                    Pareamento via QR Code em 3 Segundos
                  </span>
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                  Se você utiliza seu teclado controlador conectado diretamente ao computador, o MIDI Cam oferece um aplicativo dedicado para Windows. Ao abrir o programa no PC, ele gera um QR Code na tela. Basta apontar a câmera do celular para sincronizar ambos os dispositivos instantaneamente via rede Wi-Fi local, sem nenhum cabo entre eles.
                </p>

                {/* Informative Cards */}
                <div className="space-y-3.5">
                  <div className="p-4 rounded-2xl bg-[#161824] border border-zinc-800">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <QrCode className="w-4 h-4 text-[#00f2c3]" />
                      <h4 className="text-sm font-bold text-white">Leitura Instantânea de QR Code</h4>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Não requer configurações complexas de IP, portas de rede ou roteamento. A leitura do QR Code estabelece um túnel de comunicação local protegido em menos de 3 segundos.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#161824] border border-zinc-800">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <Layers className="w-4 h-4 text-[#00f2c3]" />
                      <h4 className="text-sm font-bold text-white">Espelhamento em Tempo Real no Teclado do Celular</h4>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Cada tecla pressionada no seu teclado controlador no PC acende imediatamente no tecladinho virtual na tela do celular. A transmissão dos dados MIDI ocorre com atraso imperceptível.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#161824] border border-zinc-800">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <HardDrive className="w-4 h-4 text-[#00f2c3]" />
                      <h4 className="text-sm font-bold text-white">Processamento Híbrido com Timbres no PC</h4>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Você pode carregar bancos de som .SF2 pesados diretamente no computador, aproveitando a memória do PC e enviando a renderização sonora diretamente para a gravação no celular.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleCta}
                  className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#00f2c3] text-[#09090b] hover:bg-[#15fbd0] shadow-[0_0_20px_rgba(0,242,195,0.3)] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Ver Oferta Especial (R$ 24,90)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Informative Technical Specification Card */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0b0c13] border border-zinc-800 space-y-5">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">
                    Ficha Técnica & Protocolo Wi-Fi
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/15 text-blue-300 border border-blue-500/30">
                      Windows 10 / 11
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                      Zero Driver
                    </span>
                  </div>
                </div>

                {/* Network & Protocol Highlights */}
                <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                  Infraestrutura de Comunicação:
                </h5>
                <div className="space-y-2.5 mb-6">
                  <div className="p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-900">
                    <div className="text-xs font-semibold text-zinc-200 mb-0.5">Tunelamento UDP de Baixa Latência</div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Transmissão direta pela rede Wi-Fi local sem tráfego de dados na internet e sem jitter.
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-900">
                    <div className="text-xs font-semibold text-zinc-200 mb-0.5">Handshake Criptografado por QR Code</div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Vinculação automática e protegida entre o software do PC e o app do smartphone em 3 segundos.
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-900">
                    <div className="text-xs font-semibold text-zinc-200 mb-0.5">Transmissão MIDI Contínua</div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Suporte completo a dados polifônicos, curvas de velocity, pitch bend e pedal de sustain.
                    </p>
                  </div>
                </div>

                {/* Technical Specs List */}
                <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                  Arquitetura de Rede:
                </h5>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between py-1.5 border-b border-zinc-800/60">
                    <span className="text-zinc-400">Tipo de Conexão:</span>
                    <span className="text-[#00f2c3] font-semibold">Wi-Fi Local (Rede Doméstica)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-zinc-800/60">
                    <span className="text-zinc-400">Método de Pareamento:</span>
                    <span className="text-white font-semibold">QR Code Dinâmico</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-zinc-800/60">
                    <span className="text-zinc-400">Latência de Transmissão:</span>
                    <span className="text-emerald-400 font-semibold">&lt; 5 milissegundos</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-zinc-800/60">
                    <span className="text-zinc-400">Drivers Necessários:</span>
                    <span className="text-white font-semibold">Nenhum (Plug and Play)</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-zinc-400">Compatibilidade do PC:</span>
                    <span className="text-white font-semibold">Windows 10 e Windows 11 (64-bit)</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 text-[11px] text-zinc-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00f2c3] flex-shrink-0" />
                <span>Permite posicionar o celular no ângulo ideal sem ficar preso a cabos longos.</span>
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: SINCRONIZAÇÃO COM VÍDEOS DO YOUTUBE */}
        {activeTab === 'youtube' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch bg-[#10121a] border border-[#202434] rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-2xl">
            
            {/* Left Informative Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-500/10 border border-red-500/30 text-xs text-red-400 font-mono font-semibold mb-3">
                  <Youtube className="w-3.5 h-3.5" />
                  RECURSO EXCLUSIVO • YOUTUBE SYNC
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                  Integração com Vídeos do YouTube: <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-[#00f2c3]">
                    Backing Tracks, Playbacks e Aulas Sincronizadas
                  </span>
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                  Um dos maiores desafios de quem grava vídeos tocando sobre playbacks é casar o áudio da música original com o áudio do teclado e a imagem da câmera na pós-produção. O MIDI Cam resolve isso na fonte: dentro do aplicativo no PC, você pode carregar qualquer vídeo do YouTube e gravar tudo em um único take perfeito direto no celular.
                </p>

                {/* Informative Cards */}
                <div className="space-y-3.5">
                  <div className="p-4 rounded-2xl bg-[#161824] border border-zinc-800">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <Youtube className="w-4 h-4 text-red-400" />
                      <h4 className="text-sm font-bold text-white">Player do YouTube Integrado ao Aplicativo</h4>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Cole o link de qualquer vídeo, playback, backing track ou vídeo-aula do YouTube dentro do programa. O reprodutor sincroniza o início da faixa com o botão de REC do aplicativo.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#161824] border border-zinc-800">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <Sliders className="w-4 h-4 text-[#00f2c3]" />
                      <h4 className="text-sm font-bold text-white">Mixagem em Tempo Real com Controle de Volume</h4>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Ajuste o equilíbrio exato entre o volume da música do YouTube e o volume do seu teclado (.sf2). O som sai limpo, sem ruídos de ambiente e com definição profissional.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#161824] border border-zinc-800">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00f2c3]" />
                      <h4 className="text-sm font-bold text-white">Gravação Simultânea em 1 Take (Zero Edição)</h4>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      O celular grava simultaneamente: o áudio do YouTube + o som do seu instrumento + as teclas virtuais iluminadas + a imagem da câmera. O vídeo final não requer nenhum software de edição como Premiere ou DaVinci.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleCta}
                  className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#00f2c3] text-[#09090b] hover:bg-[#15fbd0] shadow-[0_0_20px_rgba(0,242,195,0.3)] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Ver Oferta Especial (R$ 24,90)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Informative Technical Specification Card */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0b0c13] border border-zinc-800 space-y-5">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">
                    Ficha Técnica do Módulo YouTube
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/15 text-red-300 border border-red-500/30">
                      Sincronismo 1-Take
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                      Mixer Ativo
                    </span>
                  </div>
                </div>

                {/* Engine Highlights */}
                <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                  Capacidades do Mecanismo:
                </h5>
                <div className="space-y-2.5 mb-6">
                  <div className="p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-900">
                    <div className="text-xs font-semibold text-zinc-200 mb-0.5">Player Nativo com Trigger Automático</div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      O início da música no YouTube sincroniza no milissegundo exato em que a gravação do celular começa.
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-900">
                    <div className="text-xs font-semibold text-zinc-200 mb-0.5">Mixagem Estéreo em Linha Direta</div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Equilíbrio de volume independente entre a base do YouTube e o timbre .sf2 do teclado com ganho calibrado.
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-900">
                    <div className="text-xs font-semibold text-zinc-200 mb-0.5">Arquivo Único sem Pós-Produção</div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Entrega o vídeo final completo direto na galeria, eliminando softwares de edição como Premiere ou DaVinci.
                    </p>
                  </div>
                </div>

                {/* Technical Specs List */}
                <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                  Vantagens de Produção:
                </h5>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between py-1.5 border-b border-zinc-800/60">
                    <span className="text-zinc-400">Tempo de Pós-Produção:</span>
                    <span className="text-[#00f2c3] font-semibold">Zero minutos (vídeo pronto)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-zinc-800/60">
                    <span className="text-zinc-400">Sincronismo Áudio/Vídeo:</span>
                    <span className="text-white font-semibold">Automático no hardware</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-zinc-800/60">
                    <span className="text-zinc-400">Fontes Suportadas:</span>
                    <span className="text-white font-semibold">Vídeos e Playbacks do YouTube</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-zinc-800/60">
                    <span className="text-zinc-400">Canais de Áudio:</span>
                    <span className="text-white font-semibold">Estéreo Digital Unificado</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-zinc-400">Economia Média por Vídeo:</span>
                    <span className="text-white font-semibold">45 a 90 minutos de edição</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 text-[11px] text-zinc-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00f2c3] flex-shrink-0" />
                <span>Ideal para covers, estudos harmônicos, tutoriais e vídeos para redes sociais.</span>
              </div>
            </div>

          </div>
        )}

        {/* TAB 4: PERSONALIZAÇÃO & RECURSOS DE CÂMERA */}
        {activeTab === 'customizacao' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch bg-[#10121a] border border-[#202434] rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-2xl">
            
            {/* Left Informative Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#a855f7]/10 border border-[#a855f7]/30 text-xs text-[#a855f7] font-mono font-semibold mb-3">
                  <Sliders className="w-3.5 h-3.5" />
                  CUSTOMIZAÇÃO COMPLETA
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                  Personalização Visual e Controle de Câmera: <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] via-pink-300 to-[#00f2c3]">
                    Cores Neon, Modelos de Teclado e Filtros Pro
                  </span>
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                  O MIDI Cam foi desenvolvido para valorizar a identidade visual de cada músico. Todas as configurações gráficas são ajustadas em menus rápidos e salvam suas preferências automaticamente.
                </p>

                {/* Features list */}
                <div className="space-y-3.5">
                  <div className="p-4 rounded-2xl bg-[#161824] border border-zinc-800">
                    <h4 className="text-sm font-bold text-white mb-1">Paleta Oficial de Cores Neon</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-2.5">
                      Você pode escolher a cor exata da iluminação das teclas virtuais para combinar com seu setup ou com a iluminação do seu ambiente:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
                      <div className="flex items-center gap-2 text-zinc-300">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#00f2c3]" />
                        <span>Ciano Neon Oficial</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-300">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#a855f7]" />
                        <span>Roxo Synthwave</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-300">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                        <span>Âmbar Dourado</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-300">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                        <span>Vermelho REC</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-300">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]" />
                        <span>Azul Elétrico</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-300">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                        <span>Verde Esmeralda</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#161824] border border-zinc-800">
                    <h4 className="text-sm font-bold text-white mb-1">Escalas e Modelos de Teclado Virtual</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Adapte o visual ao número exato de teclas do seu instrumento físico: opções de <strong>25, 49, 61, 76 ou 88 teclas</strong>. Suporta modo 2D superior ou perspectiva tridimensional (3D) com profundidade de toque.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#161824] border border-zinc-800">
                    <h4 className="text-sm font-bold text-white mb-1">Motor de Detecção Polifônica de Acordes</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Algoritmo harmônico avançado que identifica mais de 1.800 variações de acordes em tempo real (tríades, tétrades, inversões como C/E, baixos trocados, notas omitidas e tensões como b9, #9, 11ª e 13ª).
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleCta}
                  className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#00f2c3] text-[#09090b] hover:bg-[#15fbd0] shadow-[0_0_20px_rgba(0,242,195,0.3)] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Ver Oferta Especial (R$ 24,90)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Informative Technical Specification Card */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0b0c13] border border-zinc-800 space-y-5">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">
                    Especificações de Câmera & Imagem
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/30">
                    Ultra HD
                  </span>
                </div>

                {/* Technical Specs List */}
                <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                  Parâmetros de Gravação:
                </h5>
                <div className="space-y-2 text-xs font-mono mb-6">
                  <div className="flex justify-between py-1.5 border-b border-zinc-800/60">
                    <span className="text-zinc-400">Orientação de Vídeo:</span>
                    <span className="text-[#00f2c3] font-semibold">Vertical 9:16 ou Horizontal 16:9</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-zinc-800/60">
                    <span className="text-zinc-400">Taxa de Quadros:</span>
                    <span className="text-white font-semibold">30 FPS ou 60 FPS Suaves</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-zinc-800/60">
                    <span className="text-zinc-400">Filtros Cinematográficos:</span>
                    <span className="text-white font-semibold">Neon Pro, Vívido, Cinema, Vintage</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-zinc-800/60">
                    <span className="text-zinc-400">Espelhamento de Câmera:</span>
                    <span className="text-white font-semibold">Frontal ou Traseira com Flip</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-zinc-400">Posicionamento do Teclado:</span>
                    <span className="text-white font-semibold">Inferior, Superior ou Flutuante</span>
                  </div>
                </div>

                <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                  Formatos Prontos para Redes Sociais:
                </h5>
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f2c3]" />
                    <span><strong>Instagram Reels & Stories:</strong> 1080x1920 (9:16)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f2c3]" />
                    <span><strong>TikTok & YouTube Shorts:</strong> 1080x1920 (9:16)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f2c3]" />
                    <span><strong>YouTube Vídeos Longos:</strong> 1920x1080 / 3840x2160 (16:9)</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 text-[11px] text-zinc-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00f2c3] flex-shrink-0" />
                <span>Renderizado direto no hardware do aparelho sem perda de quadros.</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
