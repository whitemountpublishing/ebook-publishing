import Hero from '@/components/Hero';
import BookTypes from '@/components/BookTypes';
import Services from '@/components/Services';
import ProcessSteps from '@/components/ProcessSteps';
import Testimonials from '@/components/Testimonials';
import FAQs from '@/components/FAQs';
import GhostwritingExpertise from '@/components/GhostwritingExpertise';
import MarketingDetail from '@/components/MarketingDetail';
import LegacyCTA from '@/components/LegacyCTA';
import BookGallery from '@/components/BookGallery';

export default function Home() {
  return (
    <main>
      <Hero />
      <BookTypes />
      <GhostwritingExpertise />
      <Services />
      <BookGallery />
      <ProcessSteps />
      <MarketingDetail />
      <FAQs />
      <Testimonials />
      <LegacyCTA />
    </main>
  );
}
