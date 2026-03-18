import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import SocialProof from "@/components/social-proof";
import Features from "@/components/features";
import GameShowcase from "@/components/game-showcase";
import Testimonials from "@/components/testimonials";
import StatsSection from "@/components/stats-section";
import Faq from "@/components/faq";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";
import ScrollAnimator from "@/components/scroll-animator";

export default function Home() {
  return (
    <ScrollAnimator>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <GameShowcase />
        <StatsSection />
        <Testimonials />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </ScrollAnimator>
  );
}
