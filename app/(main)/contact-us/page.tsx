import ContactHero from '@/components/ContactHero';
import ContactSection from '@/components/ContactSection';
import Testimonials from '@/components/Testimonials';
import LegacyCTA from '@/components/LegacyCTA';
import FAQs from '@/components/FAQs';

export default function ContactUsPage() {
  return (
    <main>
      <ContactHero />
      <ContactSection />
      <FAQs />
      <Testimonials />
      <LegacyCTA />
    </main>
  );
}
