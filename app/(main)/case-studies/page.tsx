'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import data from '@/src/data/site-content.json';
import BgImage from '@/assets/pursuit-img.webp';
import Pattern from '@/assets/pattern-2.webp';

export default function CaseStudiesPage() {
  const { caseStudies } = data.pages.home;

  return (
    <main style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section
        className='section'
        style={{
          position: 'relative',
          padding: 'var(--section-padding) 0',
          overflow: 'hidden',
          backgroundColor: 'var(--primary)',
          color: 'white',
        }}
      >
        {/* Background Pattern & Image */}
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
            alt='Case Studies Background'
            fill
            style={{ objectFit: 'cover', opacity: 0.15, filter: 'grayscale(100%)' }}
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
              opacity: 0.08,
            }}
          />
        </div>

        <div className='container' style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontFamily: 'var(--font-serif)',
              marginBottom: '2rem',
            }}
          >
            {caseStudies.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              maxWidth: '800px',
              margin: '0 auto',
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.8,
            }}
          >
            {caseStudies.description}
          </motion.p>
        </div>
      </section>

      {/* Case Studies Portfolio Grid */}
      <section className='section' style={{ padding: '8rem 0' }}>
        <div className='container'>
          <div className='grid grid-2' style={{ gap: '4rem' }}>
            {caseStudies.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className='glass'
                style={{
                  padding: 'var(--container-padding)',
                  borderRadius: '2.5rem',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                  background: 'var(--bg-main)',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.06)',
                  transition: 'transform 0.4s ease',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem',
                    borderBottom: '1px solid var(--border)',
                    paddingBottom: '2rem',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: 'var(--accent)',
                      color: 'white',
                      padding: '0.4rem 1rem',
                      borderRadius: '2rem',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                  >
                    Case Study 0{idx + 1}
                  </span>
                  <div style={{ flexGrow: 1, height: '1px', backgroundColor: 'var(--border)' }}></div>
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                      color: 'var(--primary)',
                      fontFamily: 'var(--font-serif)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1.1rem' }}>By {item.author}</p>
                </div>

                <p
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: 'var(--text-muted)',
                  }}
                >
                  {item.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {item.services.map((service, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        padding: '0.5rem 1.25rem',
                        background: 'rgba(0, 61, 51, 0.05)',
                        borderRadius: '0.5rem',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--primary)',
                      }}
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='btn btn-primary'
                  style={{ marginTop: '1.5rem', width: 'fit-content' }}
                >
                  Read Full Story
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/Legacy Section */}
      <section className='section' style={{ backgroundColor: 'var(--bg-secondary)', textAlign: 'center' }}>
        <div className='container'>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              padding: 'clamp(3rem, 10vw, 8rem) var(--container-padding)',
              background: 'var(--primary)',
              color: 'white',
              borderRadius: '2.5rem',
              backgroundImage: `url(${Pattern.src})`,
              backgroundSize: '400px',
              backgroundBlendMode: 'overlay',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                  marginBottom: '2rem',
                  fontFamily: 'var(--font-serif)',
                }}
              >
                See Your Book Here
              </h2>
              <p
                style={{
                  maxWidth: '700px',
                  margin: '0 auto 4rem',
                  opacity: 0.8,
                  fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                  lineHeight: 1.8,
                }}
              >
                Our team of world-class ghostwriters and markers are ready to help you write your next bestseller.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  className='btn btn-primary'
                  style={{ padding: '1.25rem 2.5rem', fontSize: '1.1rem', width: 'clamp(200px, 100%, 300px)' }}
                >
                  Consult an Expert
                </button>
                <button
                  className='btn btn-outline'
                  style={{
                    padding: '1.25rem 2.5rem',
                    fontSize: '1.1rem',
                    borderColor: 'white',
                    color: 'white',
                    width: 'clamp(200px, 100%, 300px)',
                  }}
                >
                  View Services
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
