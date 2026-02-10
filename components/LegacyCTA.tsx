'use client';
import { motion } from 'framer-motion';
import data from '../src/data/site-content.json';
import Image from 'next/image';
import CTABg from '../assets/cta-bg.webp';
import GetStartedButton from './get-started-button';
import { ChatNowButton } from './chat-now-button';

export default function LegacyCTA() {
  const { legacyCTA } = data.pages.home;
  return (
    <section
      className='section'
      style={{
        color: 'white',
        textAlign: 'center',
        padding: 'var(--section-padding) 0',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#1a1801', // Fallback dark color
      }}
    >
      <Image src={CTABg} alt='Call to Action Background' fill style={{ objectFit: 'cover' }} />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.4)', // Dark overlay
          zIndex: 0,
        }}
      />

      <div className='container' style={{ position: 'relative', zIndex: 1 }}>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontSize: '1rem',
            fontWeight: 700,
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            display: 'block',
            marginBottom: '1.5rem',
          }}
        >
          {legacyCTA.limited}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: 900,
            marginBottom: '2rem',
            lineHeight: 1,
            maxWidth: '1000px',
            margin: '0 auto 2rem',
          }}
        >
          {legacyCTA.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            opacity: 0.8,
            marginBottom: '4rem',
            fontWeight: 500,
            maxWidth: '700px',
            margin: '0 auto 4rem',
          }}
        >
          {legacyCTA.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <GetStartedButton label='Get Started Now' className='px-12 py-4 text-lg min-w-50' />
          <ChatNowButton className='px-12 py-4 text-lg min-w-50' />
        </motion.div>
      </div>
    </section>
  );
}
