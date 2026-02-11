'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BgImage from '@/assets/amazing-bg.webp';
import Pattern from '@/assets/pattern-2.webp';
import BioBookImg from '@/assets/bio-book.webp';
import HeroForm from '@/components/HeroForm';
import BookGallery from '@/components/BookGallery';

export default function BookPrintingPage() {
  const serviceTitle = 'Ready, Set, Print! Your Book, Your Format, Your Way';
  const serviceSubtitle =
    'Bring your book to life in stunning physical form with our professional printing services. From hardcover to specialty editions, we ensure top-quality results.';

  const printingOptions = [
    {
      title: 'Format Choices',
      desc: 'Expertly produced hardcover, paperback, and specialty editions tailored to your exact publishing specifications.',
    },
    {
      title: 'High Quality Paper',
      desc: 'Premium selection of paper stocks that enhance the reading experience and provide a professional feel for your book.',
    },
    {
      title: 'Binding Choices',
      desc: 'Custom binding styles including case wrap, dust jacket, and perfect bound for maximum durability and aesthetic appeal.',
    },
    {
      title: 'Flexible Quantities',
      desc: 'Scale from small print runs to massive production with our agile printing systems and print-on-demand capabilities.',
    },
    {
      title: 'Fast Turnaround',
      desc: 'Our streamlined production workflow ensures your physical books are ready for delivery within aggressive timelines.',
    },
    {
      title: 'Custom Formats',
      desc: 'Tailored sizes and dimensions for unique manuscript types, from landscape coffee table books to pocket-sized novels.',
    },
  ];

  const qualityChecks = [
    {
      title: 'Custom Print Solutions',
      desc: 'We work closely with you to select the best paper type, cover finish, and binding style to match your creative vision.',
    },
    {
      title: 'Print-on-Demand',
      desc: 'Avoid excess inventory and high upfront costs with our flexible POD services, printing only as many copies as you need.',
    },
    {
      title: 'Quality Assurance',
      desc: 'Every single copy undergoes rigorous quality checks to ensure absolute consistency in design, layout, and print density.',
    },
    {
      title: 'Global Fulfillment',
      desc: 'We manage the entire shipping and fulfillment process to ensure your printed books reach readers anywhere in the world.',
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
            alt='Book Printing'
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
                Professional Book Printing
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
            <HeroForm defaultService='book-printing' />
          </div>
        </div>
      </section>

      {/* Premium Options */}
      <section className='section'>
        <div className='container'>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 8vw, 6rem)' }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 5vw, 3rem)',
                color: 'var(--primary)',
                marginBottom: '1.5rem',
              }}
            >
              Premium Printing Options
            </motion.h2>
            <p
              style={{
                maxWidth: '800px',
                margin: '0 auto',
                fontSize: '1.1rem',
                color: 'var(--text-muted)',
                lineHeight: 1.8,
              }}
            >
              We offer a wide range of printing options to ensure your book is produced with the highest quality,
              perfectly matching your unique creative vision.
            </p>
          </div>

          <div className='grid grid-3' style={{ gap: '2rem' }}>
            {printingOptions.map((opt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className='card'
                style={{
                  padding: '2rem',
                  borderRadius: '1.5rem',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                }}
              >
                <h4
                  style={{
                    color: 'var(--primary)',
                    marginBottom: '1rem',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.4rem',
                  }}
                >
                  {opt.title}
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{opt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className='section' style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className='container'>
          <div className='grid grid-2' style={{ alignItems: 'center', gap: '4rem' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{
                position: 'relative',
                height: 'clamp(400px, 50vw, 600px)',
                borderRadius: '2rem',
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0,0,0,0.1)',
              }}
            >
              <Image src={BioBookImg} alt='Quality Printing' fill style={{ objectFit: 'cover' }} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.2rem, 5vw, 3rem)',
                  color: 'var(--primary)',
                  marginBottom: '1.5rem',
                }}
              >
                Precision Production Workflow
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Every physical copy we produce undergoes a systematic quality control process to ensure it meets our
                rigorous standards of excellence.
              </p>
              <div className='grid grid-2' style={{ gap: '2rem' }}>
                {qualityChecks.map((check, idx) => (
                  <div key={idx}>
                    <h4 style={{ color: 'var(--accent)', marginBottom: '0.8rem', fontFamily: 'var(--font-serif)' }}>
                      {check.title}
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{check.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Book Gallery */}
      <BookGallery />

      {/* CTA Section */}
      <section className='section'>
        <div className='container' style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              padding: 'clamp(3.5rem, 8vw, 5rem) var(--container-padding)',
              background: 'var(--primary)',
              color: 'white',
              borderRadius: '3rem',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                fontFamily: 'var(--font-serif)',
                marginBottom: '1.5rem',
              }}
            >
              READY TO WRITE YOUR LEGACY?
            </h2>
            <p
              style={{
                maxWidth: '600px',
                margin: '0 auto 3.5rem',
                opacity: 0.8,
                fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              }}
            >
              Join our community of published authors and let our experts bring your physical masterpiece to life.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className='btn btn-primary' style={{ padding: '1.25rem 3.5rem', width: 'auto' }}>
                Get Started Now
              </button>
              <button
                className='btn btn-outline'
                style={{ padding: '1.25rem 3.5rem', border: '2px solid white', color: 'white', width: 'auto' }}
              >
                Live Chat
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
