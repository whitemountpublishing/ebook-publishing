'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import BgImage from '@/assets/process-bg.webp';
import Pattern from '@/assets/pattern-2.webp';
import HeroForm from '@/components/HeroForm';
import BookGallery from '@/components/BookGallery';

export default function FormattingPage() {
  const serviceTitle = 'Expert Book Formatting for Print & Digital';
  const serviceSubtitle =
    'Ensure a professional reading experience with our expert book formatting services. We optimize your manuscript for both print and digital platforms, meeting all industry standards.';

  const features = [
    {
      title: 'Professional Layout',
      desc: 'We create clean, readable layouts that enhance the reading experience and reflect the tone of your work.',
    },
    {
      title: 'E-book Optimization',
      desc: 'Expertly format your book for Kindle, Apple Books, and other digital platforms for a seamless digital reading experience.',
    },
    {
      title: 'Print-Ready Files',
      desc: 'Generate high-quality, print-ready PDFs that meet the specifications of top publishing platforms like Amazon KDP and IngramSpark.',
    },
    {
      title: 'Custom Elements',
      desc: 'Add custom headers, footers, drop caps, and other decorative elements to give your book a unique and premium feel.',
    },
  ];

  return (
    <main style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section
        className='section'
        style={{
          position: 'relative',
          padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 8vw, 6rem)',
          overflow: 'hidden',
          backgroundColor: 'var(--primary)',
          color: 'white',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src={BgImage}
            alt='Book Formatting Services'
            fill
            style={{ objectFit: 'cover', opacity: 0.1, filter: 'grayscale(100%)' }}
            priority
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${Pattern.src})`,
              backgroundSize: '600px',
              opacity: 0.05,
            }}
          />
        </div>

        <div className='container' style={{ position: 'relative', zIndex: 1 }}>
          <div className='grid grid-2' style={{ alignItems: 'center', gap: '4rem' }}>
            {/* Left Column: Content */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} style={{ textAlign: 'left' }}>
              <motion.h6
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  color: 'var(--accent)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                  letterSpacing: '2px',
                  fontSize: '0.9rem',
                }}
              >
                Precision Book Formatting
              </motion.h6>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontFamily: 'var(--font-serif)',
                  marginBottom: '2rem',
                  lineHeight: 1.1,
                }}
              >
                {serviceTitle}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                  fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                  maxWidth: '600px',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: 1.8,
                }}
              >
                {serviceSubtitle}
              </motion.p>
            </motion.div>

            {/* Right Column: Mini Form */}
            <HeroForm defaultService='formatting' />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='section'>
        <div className='container'>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                color: 'var(--primary)',
                marginBottom: '1.5rem',
              }}
            >
              Our Formatting Standards
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
              We ensure your book looks professional on every device and in ogni printed copy.
            </p>
          </div>
          <div className='grid grid-2' style={{ gap: '2rem' }}>
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{
                  padding: '2.5rem',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '1.5rem',
                  borderLeft: '4px solid var(--accent)',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary)', marginBottom: '1rem' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Gallery */}
      <BookGallery />

      {/* CTA Section */}
      <section className='section' style={{ backgroundColor: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className='container'>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'var(--font-serif)', marginBottom: '2rem' }}>
            Get Your Book Market-Ready
          </h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 3rem', fontSize: '1.2rem', opacity: 0.9 }}>
            Contact us today to ensure your manuscript is formatted to perfection and ready for global distribution.
          </p>
          <button className='btn btn-primary' style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem', width: 'auto' }}>
            Format My Book
          </button>
        </div>
      </section>
    </main>
  );
}
