'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import data from '../src/data/site-content.json';
import PursuitImg from '../assets/expertise.png';
import Pattern from '../assets/pattern-2.webp';
import BgImage from '../assets/pursuit-img.webp';

export default function GhostwritingExpertise() {
  const { ghostwritingExpertise } = data.pages.home;
  return (
    <section
      className='section'
      style={{
        backgroundColor: 'var(--bg-main)',
        position: 'relative',
        overflow: 'hidden',
        padding: 'var(--section-padding) 0',
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${Pattern.src})`,
          backgroundSize: '400px',
          opacity: 0.05,
          zIndex: 0,
        }}
      />

      {/* Background Image Accent */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          opacity: 0.1,
          zIndex: 0,
          filter: 'grayscale(100%)',
        }}
      >
        <Image src={BgImage} alt='Background Accent' fill style={{ objectFit: 'contain' }} />
      </div>

      <div className='container' style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              marginBottom: '1.5rem',
              maxWidth: '1000px',
              margin: '0 auto 1.5rem',
              fontFamily: 'var(--font-serif)',
              color: 'var(--primary)',
            }}
          >
            {ghostwritingExpertise.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              color: 'var(--text-muted)',
              maxWidth: '900px',
              margin: '0 auto 3rem',
              fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
            }}
          >
            {ghostwritingExpertise.subtitle}
          </motion.p>
        </div>

        <div className='grid grid-2' style={{ alignItems: 'center', gap: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <motion.div
              animate={{ rotate: [0, 2, 0, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src={PursuitImg}
                alt='Expertise Image'
                width={550}
                height={550}
                style={{
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))',
                }}
              />
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3
              style={{
                fontSize: '2.25rem',
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-serif)',
                color: 'var(--primary)',
              }}
            >
              {ghostwritingExpertise.professionalLeague.title}
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
              {ghostwritingExpertise.professionalLeague.description}
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {ghostwritingExpertise.professionalLeague.points.map((point, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: 'var(--accent)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary)',
                      flexShrink: 0,
                    }}
                  >
                    <svg width='14' height='14' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M6 10L9 13L14 8'
                        stroke='currentColor'
                        strokeWidth='3'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                  <span style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--text-main)' }}>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
