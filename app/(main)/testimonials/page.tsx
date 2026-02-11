'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import data from '@/src/data/site-content.json';
import BgImage from '@/assets/amazing-bg.webp';
import Pattern from '@/assets/pattern-2.webp';

export default function TestimonialsPage() {
  const { testimonials } = data.pages.home;

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
        {/* Background Parallax Image */}
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
            alt='Testimonials Background'
            fill
            style={{ objectFit: 'cover', opacity: 0.2 }}
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
              backgroundSize: '800px',
              opacity: 0.05,
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
            {testimonials.title}
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
            {testimonials.description}
          </motion.p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className='section' style={{ padding: 'var(--section-padding) 0' }}>
        <div className='container'>
          <div className='grid grid-2' style={{ gap: '2.5rem' }}>
            {testimonials.reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className='glass'
                style={{
                  padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1.5rem, 5vw, 3rem)',
                  borderRadius: '2.5rem',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                  background: 'var(--bg-main)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width='18' height='18' viewBox='0 0 24 24' fill='var(--accent)'>
                      <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                    </svg>
                  ))}
                </div>
                <p
                  style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                    lineHeight: 1.8,
                    fontStyle: 'italic',
                    color: 'var(--text-main)',
                    flexGrow: 1,
                  }}
                >
                  {review.text}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-serif)',
                      flexShrink: 0,
                    }}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4
                      style={{
                        margin: 0,
                        fontSize: '1.15rem',
                        color: 'var(--primary)',
                        fontFamily: 'var(--font-serif)',
                      }}
                    >
                      {review.name}
                    </h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Verified Client</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className='section'
        style={{ backgroundColor: 'var(--bg-secondary)', textAlign: 'center', padding: 'var(--section-padding) 0' }}
      >
        <div className='container'>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className='card'
            style={{
              padding: 'clamp(4rem, 10vw, 6rem) var(--container-padding)',
              border: 'none',
              background: 'var(--primary)',
              color: 'white',
              borderRadius: '3rem',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-serif)',
              }}
            >
              Ready to write your story?
            </h2>
            <p
              style={{
                maxWidth: '600px',
                margin: '0 auto 3.5rem',
                opacity: 0.8,
                fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              }}
            >
              Join our community of published authors and let our experts guide you to success.
            </p>
            <button
              className='btn btn-primary'
              style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem', width: 'clamp(200px, 100%, 300px)' }}
            >
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
