import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AccessDeliverySection } from './components/AccessDeliverySection';
import { WorkflowsSection } from './components/WorkflowsSection';
import { ComparisonSection } from './components/ComparisonSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { OfferSection } from './components/OfferSection';
import { CreatorBioSection } from './components/CreatorBioSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleScrollToOffer = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'oferta';
    }
  };

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] font-sans antialiased selection:bg-[#00f2c3]/30 selection:text-[#00f2c3] overflow-x-hidden">
      {/* Official Sticky Navbar */}
      <Navbar
        onScrollToOffer={handleScrollToOffer}
      />

      <main>
        {/* Hero Section with Official Logo & CTA Buttons */}
        <HeroSection
          onScrollToOffer={handleScrollToOffer}
        />

        {/* Section: Como Você Recebe Seu Acesso (Plataforma Confiável + E-mail + Área de Membros + Suporte) */}
        <AccessDeliverySection
          onScrollToOffer={handleScrollToOffer}
        />

        {/* Section: Informative Breakdown of MIDI Cam System Architecture */}
        <WorkflowsSection
          onScrollToOffer={handleScrollToOffer}
          onOpenCheckout={handleScrollToOffer}
        />

        {/* Section: Why Choose MIDI Cam? Old Way vs MIDI Cam */}
        <ComparisonSection
          onScrollToOffer={handleScrollToOffer}
          onOpenCheckout={handleScrollToOffer}
        />

        {/* Section: Real Testimonials & Social Proof */}
        <TestimonialsSection
          onScrollToOffer={handleScrollToOffer}
          onOpenCheckout={handleScrollToOffer}
        />

        {/* Section: Oferta Especial com Todos os Benefícios & Botão de CTA Oficial */}
        <OfferSection
          onOpenCheckout={handleOpenCheckout}
        />

        {/* Section: Biografia do Criador - Eliab Campos Teclas */}
        <CreatorBioSection
          onOpenCheckout={handleOpenCheckout}
          onScrollToOffer={handleScrollToOffer}
        />

        {/* Section: FAQ (Frequently Asked Questions) */}
        <FaqSection
          onScrollToOffer={handleScrollToOffer}
          onOpenCheckout={handleScrollToOffer}
        />
      </main>

      {/* Official Footer */}
      <Footer
        onScrollToOffer={handleScrollToOffer}
        onOpenCheckout={handleScrollToOffer}
      />

      {/* Official Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
      />
    </div>
  );
}
