'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BgImage from '@/assets/expertise.png';
import Pattern from '@/assets/pattern-2.webp';
import HeroForm from '@/components/HeroForm';
import BookGallery from '@/components/BookGallery';

export default function ChildrensBookPage() {
  const serviceTitle = 'Enchanting Stories for Young Readers';
  const serviceSubtitle =
    "Bring imagination to life with our specialized children's book services. From whimsical storytelling to vibrant illustrations, we help you create a masterpiece that children will cherish.";

  const features = [
    {
      title: 'Captivating Storytelling',
      desc: 'Our writers specialize in creating engaging, age-appropriate narratives that spark curiosity and wonder in young minds.',
    },
    {
      title: 'Vibrant Illustrations',
      desc: 'Work with talented artists to bring your characters and worlds to life with stunning, colorful visuals that complement your story.',
    },
    {
      title: 'Educational Value',
      desc: 'We help integrate valuable life lessons and educational themes seamlessly into your narrative for a meaningful reading experience.',
    },
    {
      title: 'Market Ready',
      desc: "From formatting to publishing, we ensure your children's book meets industry standards and stands out in a competitive market.",
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
            alt="Children's Book Services"
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
                Children&apos;s Book Expertise
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
            <HeroForm defaultService='childrens-book' />
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
              Our Specialized Services
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
              We provide everything you need to create a successful and beloved children&apos;s book.
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
            Start Your Storytelling Journey
          </h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 3rem', fontSize: '1.2rem', opacity: 0.9 }}>
            Let&apos;s work together to create a children&apos;s book that will inspire and delight young readers for
            years to come.
          </p>
          <button className='btn btn-primary' style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem', width: 'auto' }}>
            Get a Quote
          </button>
        </div>
      </section>
    </main>
  );
}
