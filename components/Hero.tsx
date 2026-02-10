'use client';
import { motion } from 'framer-motion';
import data from '../src/data/site-content.json';
import HeroImg from '../assets/hero.png';
import Image from 'next/image';
import GetStartedButton from './get-started-button';
import { ChatNowButton } from './chat-now-button';

export default function Hero() {
  const { hero } = data.pages.home;
  return (
    <section
      className='section'
      style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        padding: 'var(--section-padding) 0',
        overflow: 'hidden',
        backgroundColor: 'var(--primary)',
        color: 'white',
      }}
    >
      {/* Background Image with Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 'clamp(300px, 60%, 100%)',
            height: '100%',
            zIndex: 0,
          }}
        >
          <Image
            src={HeroImg}
            alt='Hero Background'
            fill
            priority
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to right, var(--primary) 0%, rgba(0, 61, 51, 0.8) 40%, transparent 100%)',
            }}
            className='nav-desktop'
          />
          {/* Mobile specific overlay to ensure text readability */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 61, 51, 0.7)',
            }}
            className='nav-mobile'
          />
        </div>
      </div>

      <div className='container' style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ maxWidth: '800px' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span
              style={{
                color: 'var(--accent)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                display: 'block',
                marginBottom: '1rem',
                fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
              }}
            >
              {hero.description}
            </span>
            <h1
              className='hero-title'
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 900,
                marginBottom: '1.5rem',
                lineHeight: 1.1,
                fontFamily: 'var(--font-serif)',
              }}
            >
              {hero.title}
            </h1>
            <p
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: 1.6,
              }}
            >
              {hero.subtitle}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <GetStartedButton label={hero.cta} className='px-12' />

              <ChatNowButton />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
