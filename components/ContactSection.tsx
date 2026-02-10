'use client';

import { motion } from 'framer-motion';

import data from '../src/data/site-content.json';
import { ContactForm } from './contact-form';
import { contactMethods, socials } from '../src/data/socials';
export default function ContactSection() {
  const { form } = data.pages.contact;

  return (
    <section
      className='section'
      style={{
        backgroundColor: 'var(--bg-secondary)',
        position: 'relative',
        padding: 'clamp(3rem, 8vw, 6rem) 0',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Background Accent */}
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 61, 51, 0.05) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />

      <div className='container' style={{ position: 'relative', zIndex: 1 }}>
        <div
          className='grid gap-4 sm:gap-6 md:gap-8 lg:gap-12'
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          }}
        >
          {/* Left Side: Text and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h6 className='text-(--accent) tracking-wide mb-2 font-bold uppercase text-sm'>
              Let&apos;s Connect
            </motion.h6>
            <motion.h2
              className='text-2xl sm:text-3xl md:text-4xl mb-4 text-pretty text-(--primary)'
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {form.title}
            </motion.h2>
            <motion.p className='text-(--text-muted) max-w-lg mb-10'>{form.description}</motion.p>

            {/* Contact Cards */}
            <div
              className='grid gap-4 mb-10'
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))' }}
            >
              {contactMethods.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  whileHover={{ scale: 1.02, borderColor: 'var(--accent)' }}
                  className='flex gap-3 items-center p-4 rounded-xl border-2 border-(--border) bg-(--bg-main) text-(--text-muted) transition-all duration-300'
                >
                  <div className='size-10 sm:size-12 rounded-lg bg-(--primary) flex items-center justify-center text-white shrink-0 '>
                    {item.icon}
                  </div>
                  <div className='flex flex-col min-w-0 flex-1'>
                    <span className='font-medium text-(--text-muted) tracking-wide'>{item.label}</span>
                    <span className='font-bold text-(--primary) text-sm wrap-break-word'>{item.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className='flex gap-3 items-center flex-wrap'>
              <span className='text-(--text-muted) font-semibold'>Follow Us:</span>
              {socials.map((social) => (
                <motion.a
                  key={social.url}
                  title={social.label}
                  whileHover={{ y: -3, backgroundColor: 'var(--primary)', color: 'white' }}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 rounded-lg border-2 border-(--border) bg-(--bg-main) text-(--text-muted) transition-colors duration-300 flex items-center justify-center'
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <ContactForm className='rounded-2xl border-2 border-(--border) bg-(--bg-main) p-6 shadow-lg' />
        </div>
      </div>
    </section>
  );
}
