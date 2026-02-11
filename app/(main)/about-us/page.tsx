'use client';

import AboutHero from '@/components/AboutHero';
import AboutGuide from '@/components/AboutGuide';
import AboutStats from '@/components/AboutStats';
import Testimonials from '@/components/Testimonials';
import ProcessSteps from '@/components/ProcessSteps';
import GhostwritingExpertise from '@/components/GhostwritingExpertise';
import LegacyCTA from '@/components/LegacyCTA';

export default function AboutUsPage() {
  return (
    <main>
      <AboutHero />
      <AboutGuide />
      <AboutStats />
      <GhostwritingExpertise />
      <ProcessSteps />
      <Testimonials />
      <LegacyCTA />
    </main>
  );
}
