'use client';
import { motion, AnimatePresence } from 'framer-motion';
import data from '../src/data/site-content.json';
import { useState } from 'react';
import {} from 'lucide-react';

export default function FAQs() {
  const { faqs } = data.pages.home;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className='section' style={{ backgroundColor: 'var(--bg-main)', padding: 'var(--section-padding) 0' }}>
      <div className='container'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='section-title'
          style={{
            marginBottom: '4rem',
            fontFamily: 'var(--font-serif)',
            color: 'var(--primary)',
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          }}
        >
          {faqs.title}
        </motion.h2>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {faqs.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className='glass'
              style={{
                border: '1px solid var(--border)',
                borderRadius: '1rem',
                overflow: 'hidden',
                backgroundColor: openIndex === idx ? 'var(--bg-secondary)' : 'white',
                boxShadow: openIndex === idx ? '0 10px 30px rgba(0,0,0,0.05)' : 'none',
                transition: 'all 0.3s ease',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '1.75rem 2rem',
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  color: openIndex === idx ? 'var(--accent)' : 'var(--primary)',
                  fontFamily: 'var(--font-serif)',
                  transition: 'all 0.3s ease',
                }}
              >
                {item.question}
                <motion.div
                  animate={{
                    rotate: openIndex === idx ? 180 : 0,
                    backgroundColor: openIndex === idx ? 'var(--accent)' : 'transparent',
                    color: openIndex === idx ? 'white' : 'var(--accent)',
                  }}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid var(--accent)`,
                    fontSize: '0.7rem',
                  }}
                >
                  ▼
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      style={{
                        padding: '0 2rem 2rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.8,
                        fontSize: '1.05rem',
                      }}
                    >
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
