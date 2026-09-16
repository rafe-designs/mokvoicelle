// app/page.tsx
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing'; 
import Testimonials from '@/components/Testimonials';
import TeamSlider from '@/components/TeamSlider';
import Contact from '@/components/Contact';
import Faq from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* 1. Sticky Navigation Header */}
      <Header />

      {/* 2. Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* 3. Services Grid Section */}
      <section id="services">
        <ServicesGrid />
      </section>

      {/* 4. Portfolio / Case Studies Section (Strategic Placement) */}
      <section id="portfolio">
        <Portfolio />
      </section>

      {/* 5. Team Slider Section */}
      <section id="pricing">
        <Pricing />
      </section>

      {/* 6. Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* 7. Team Slider Section */}
      <section id="team">
        <TeamSlider />
      </section>

      {/* 8. Contact CTA Section */}
      <section id="contact" className="py-24 bg-slate-900/40 text-center px-6 border-t border-slate-800/40">
        <Contact />
      </section>

      {/* 9. Faq Section */}
      <section id="faq" className="py-24 bg-slate-900/40 text-center px-6 border-t border-slate-800/40">
        <Faq />
      </section>

      {/* 10. Footer */}
      <Footer />
    </main>
  );
}