import React from 'react';
import { ShieldCheck, Mail, Laptop, GraduationCap, Headphones, Download, ArrowRight, CheckCircle2, Lock, Sparkles } from 'lucide-react';

interface AccessDeliverySectionProps {
  onScrollToOffer: () => void;
}

export const AccessDeliverySection: React.FC<AccessDeliverySectionProps> = ({ onScrollToOffer }) => {
  return (
    <section id="como-recebe-acesso" className="py-14 sm:py-20 bg-[#0c0d14] relative overflow-hidden border-t border-b border-zinc-800/80">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00f2c3]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161824] border border-[#272a38] text-xs font-semibold text-[#00f2c3] mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>Processo 100% Confiável & Imediato</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Como Você Recebe Seu <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2c3] via-teal-300 to-cyan-400">
              Acesso ao App MIDI Cam?
            </span>
          </h2>

          <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed">
            Sua compra é processada por uma plataforma líder e segura. Em segundos, todo o conteúdo é liberado diretamente no seu e-mail.
          </p>
        </div>

        {/* 3 Steps / Pillars of Delivery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-10 sm:mb-14">
          
          {/* Pillar 1: Plataforma Confiável */}
          <div className="p-5 sm:p-8 rounded-2xl bg-[#11131c] border border-zinc-800/80 hover:border-[#00f2c3]/30 transition-all flex flex-col justify-between space-y-5 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#00f2c3]/10 border border-[#00f2c3]/20 flex items-center justify-center text-[#00f2c3] mb-5 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-mono uppercase tracking-wider text-[#00f2c3] font-bold">Etapa 1</span>
              <h3 className="text-base sm:text-lg font-bold text-white mt-1 mb-2.5">
                Pagamento Blindado em Plataforma Segura
              </h3>
              
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Sua transação é intermediada por uma das maiores e mais confiáveis plataformas de pagamentos do Brasil. Seus dados contam com criptografia de ponta a ponta e aprovação instantânea via PIX ou Cartão.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-xs text-zinc-300 font-mono">
              <CheckCircle2 className="w-4 h-4 text-[#00f2c3] flex-shrink-0" />
              <span>Sem cobranças surpresa ou mensalidades</span>
            </div>
          </div>

          {/* Pillar 2: E-mail Imediato */}
          <div className="p-5 sm:p-8 rounded-2xl bg-[#11131c] border border-zinc-800/80 hover:border-[#00f2c3]/30 transition-all flex flex-col justify-between space-y-5 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-bold">Etapa 2</span>
              <h3 className="text-base sm:text-lg font-bold text-white mt-1 mb-2.5">
                Envio Instantâneo no Seu E-mail
              </h3>
              
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Assim que o pagamento for aprovado, o sistema envia automaticamente para o seu e-mail o link exclusivo de acesso, junto com seu usuário e dados para entrar na sua conta.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-xs text-zinc-300 font-mono">
              <CheckCircle2 className="w-4 h-4 text-[#00f2c3] flex-shrink-0" />
              <span>Liberação automática em menos de 1 minuto</span>
            </div>
          </div>

          {/* Pillar 3: Área de Membros Premium */}
          <div className="p-5 sm:p-8 rounded-2xl bg-gradient-to-b from-[#141824] to-[#10121a] border border-[#00f2c3]/40 shadow-[0_10px_30px_rgba(0,242,195,0.08)] flex flex-col justify-between space-y-5 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#00f2c3]/15 border border-[#00f2c3]/30 flex items-center justify-center text-[#00f2c3] mb-5 group-hover:scale-110 transition-transform">
                <Laptop className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-mono uppercase tracking-wider text-[#00f2c3] font-bold">Etapa 3</span>
              <h3 className="text-base sm:text-lg font-bold text-white mt-1 mb-2.5">
                Área de Membros Premium Exclusiva
              </h3>
              
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Você acessa um portal moderno e organizado, onde encontra os instaladores oficiais do app, todas as vídeo-aulas detalhadas e o canal direto de suporte.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-xs text-[#00f2c3] font-mono font-medium">
              <Sparkles className="w-4 h-4 flex-shrink-0" />
              <span>Acesso vitalício disponível 24 horas por dia</span>
            </div>
          </div>

        </div>

        {/* Detailed Breakdown of what is inside the Premium Members Area */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#11131e] border border-zinc-800 p-5 sm:p-10 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <div className="px-3 py-1 rounded-full bg-[#00f2c3]/10 border border-[#00f2c3]/30 text-xs font-bold text-[#00f2c3] uppercase tracking-wider">
              O Que Espera por Você na Área de Membros
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {/* Inside item 1 */}
            <div className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Downloads Oficiais do App</h4>
                  <span className="text-[11px] text-zinc-400 font-mono">Sempre Atualizado</span>
                </div>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Baixe o aplicativo para celular Android (.APK) e o software oficial para computador (Windows 10/11) com atualizações contínuas liberadas sem custo adicional.
              </p>
            </div>

            {/* Inside item 2 */}
            <div className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Aulas e Vídeos Tutoriais</h4>
                  <span className="text-[11px] text-zinc-400 font-mono">Conteúdo Completo</span>
                </div>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Acesse uma biblioteca de vídeo-aulas didáticas mostrando como configurar timbres .sf2, conectar cabos OTG, parear com o PC via QR Code, gravar com YouTube e obter a melhor imagem.
              </p>
            </div>

            {/* Inside item 3 */}
            <div className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Suporte VIP para Dúvidas</h4>
                  <span className="text-[11px] text-zinc-400 font-mono">Atendimento Direto</span>
                </div>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Precisa de ajuda para configurar seu modelo de teclado ou controlador? Nossa equipe está disponível dentro da área de membros para orientar você em cada detalhe.
              </p>
            </div>
          </div>

          {/* CTA Banner inside Access Section */}
          <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
              <CheckCircle2 className="w-5 h-5 text-[#00f2c3] flex-shrink-0" />
              <span>Você recebe tudo isso com garantia incondicional de 7 dias e pagamento único.</span>
            </div>

            <button
              onClick={onScrollToOffer}
              className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#00f2c3] text-[#09090b] hover:bg-[#15fbd0] shadow-[0_0_20px_rgba(0,242,195,0.3)] transition-all flex items-center gap-2 flex-shrink-0 active:scale-95"
            >
              <span>Ver Oferta Especial (R$ 24,90)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
