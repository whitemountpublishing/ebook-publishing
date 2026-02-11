'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import data from '@/src/data/site-content.json';
import BgImage from '@/assets/process-bg.webp';
import Pattern from '@/assets/pattern-2.webp';
import HeroForm from '@/components/HeroForm';
import BookGallery from '@/components/BookGallery';

const ServiceIcons: { [key: string]: React.ReactNode } = {
  Ghostwriting: (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M12 20h9' />
      <path d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' />
    </svg>
  ),
  Editing: (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' />
      <path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' />
    </svg>
  ),
  Formatting: (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M4 7V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3' />
      <path d='M9 12h6' />
      <path d='M9 16h6' />
      <path d='M4 11h16' />
      <path d='M20 20v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3' />
    </svg>
  ),
  'Book Publishing': (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
    </svg>
  ),
  "Children's Book": (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='12' cy='12' r='3' />
      <path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z' />
    </svg>
  ),
  'Book Marketing': (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polyline points='22 7 13.5 15.5 8.5 10.5 2 17' />
      <polyline points='16 7 22 7 22 13' />
    </svg>
  ),
  Proofreading: (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M12 20h9' />
      <path d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' />
    </svg>
  ),
  'Book Cover Design': (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect x='3' y='3' width='18' height='18' rx='2' ry='2' />
      <circle cx='8.5' cy='8.5' r='1.5' />
      <polyline points='21 15 16 10 5 21' />
    </svg>
  ),
  'Book Printing': (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polyline points='6 9 6 2 18 2 18 9' />
      <path d='M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2' />
      <rect x='6' y='14' width='12' height='8' />
    </svg>
  ),
};

export default function ServicesPage() {
  const { servicesOverview } = data.pages.home;

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
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        >
          <Image
            src={BgImage}
            alt='Services Hero'
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
              backgroundSize: '1000px',
              backgroundAttachment: 'fixed',
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
                Professional Publishing Solutions
              </motion.h6>
              <h1
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontFamily: 'var(--font-serif)',
                  marginBottom: '1.5rem',
                  lineHeight: 1.1,
                }}
              >
                Our Expert Services
              </h1>
              <p
                style={{
                  fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                  maxWidth: '600px',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: 1.7,
                }}
              >
                Unlock your potential as a published author with a complete suite of professional solutions tailored to
                bring your literary vision to the global stage.
              </p>
            </motion.div>

            {/* Right Column: Mini Form */}
            <HeroForm />
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className='section' style={{ padding: 'var(--section-padding) 0' }}>
        <div className='container'>
          <div
            className='grid'
            style={{ gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 100%, 380px), 1fr))' }}
          >
            {servicesOverview.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover='hover'
                style={{
                  background: 'var(--bg-main)',
                  padding: '4rem 3rem',
                  borderRadius: '2.5rem',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.04)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  variants={{
                    hover: { scale: 1.1, backgroundColor: 'var(--primary)', color: 'white' },
                  }}
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'rgba(0, 61, 51, 0.05)',
                    borderRadius: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{ width: '40px', height: '40px' }}>
                    {ServiceIcons[item.title] || <span>{idx + 1}</span>}
                  </div>
                </motion.div>

                <h3
                  style={{
                    fontSize: '2rem',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--primary)',
                    margin: '0.5rem 0',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    color: 'var(--text-muted)',
                    flexGrow: 1,
                  }}
                >
                  {item.description}
                </p>

                <Link
                  href={
                    data.navigation
                      .find((nav) => nav.name === 'Services')
                      ?.subItems?.find((sub) => sub.name === item.title)?.path || '#'
                  }
                  style={{ textDecoration: 'none' }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='btn btn-primary'
                    style={{ marginTop: '1.5rem', width: '100%', padding: '1.25rem' }}
                  >
                    Explore Service
                  </motion.button>
                </Link>

                {/* Background Watermark */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-20px',
                    right: '-10px',
                    fontSize: '10rem',
                    fontWeight: 900,
                    color: 'var(--primary)',
                    opacity: 0.03,
                    pointerEvents: 'none',
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                  }}
                >
                  {idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Gallery */}
      <BookGallery />

      <section className='section' style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className='container'>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              padding: 'clamp(4rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem)',
              background: 'var(--primary)',
              color: 'white',
              borderRadius: 'clamp(2rem, 5vw, 4rem)',
              backgroundImage: `url(${Pattern.src})`,
              backgroundSize: '400px',
              backgroundBlendMode: 'overlay',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '2rem', fontFamily: 'var(--font-serif)' }}
              >
                Ready to Write Your Legacy?
              </h2>
              <p
                style={{
                  maxWidth: '800px',
                  margin: '0 auto 4rem',
                  opacity: 0.85,
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                  lineHeight: 1.8,
                }}
              >
                Our dedicated team of experts is standing by to help you every step of the way. Let&apos;s create
                something extraordinary together.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  className='btn btn-primary'
                  style={{
                    padding: '1.5rem clamp(2rem, 5vw, 4rem)',
                    fontSize: '1.15rem',
                    width: 'auto',
                    minWidth: '240px',
                  }}
                >
                  Schedule a Consultation
                </button>
                <button
                  className='btn btn-outline'
                  style={{
                    padding: '1.5rem clamp(2rem, 5vw, 4rem)',
                    fontSize: '1.15rem',
                    borderColor: 'white',
                    color: 'white',
                    width: 'auto',
                    minWidth: '240px',
                  }}
                >
                  Reach Our Team
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
