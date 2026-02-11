'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import Pattern from '@/assets/pattern-2.webp';
import CoverBanner from '@/assets/cover-banner.webp';
import DustJacketImg from '@/assets/dust-jacket-cover.webp';
import ExceptionalBookImg from '@/assets/exceptional-book.webp';
import TypesImg from '@/assets/types-cd-11.webp';
import BioBookImg from '@/assets/bio-book.webp';
import HeroForm from '@/components/HeroForm';
import BookGallery from '@/components/BookGallery';

export default function BookCoverDesignPage() {
  const serviceTitle = 'Attractive cover designs to gain attention from potential readers';
  const serviceSubtitle =
    'Bring life to your book project with our artistic creative skill set. The importance of a good book cover cannot be understated—it can make or break your book.';

  const designProcesses = [
    {
      title: 'Concept Development',
      desc: 'We figure out the essence of your theme. This foundation allows us to develop unique concepts that resonate with the crux of your story.',
    },
    {
      title: 'Custom Illustration',
      desc: 'Our artists handcraft one-of-a-kind visuals and artwork tailored to your content, infusing the cover with your vision and creativity.',
    },
    {
      title: 'Typography & Layout',
      desc: 'Meticulous selection of fonts, colors, and arrangements to ensure your cover effectively conveys the genre and mood of your book.',
    },
    {
      title: 'Print & Optimization',
      desc: 'Whether eye-catching paperbacks or pixel-perfect eBooks, we optimize designs for every medium to ensure excellence across all packages.',
    },
  ];

  const coverTypes = [
    {
      title: 'Dust Jacket Cover',
      desc: 'Designed to prevent dust and protect from spills. Sleek, attractive, and perfectly laminated for maximum resistance and longevity.',
      img: DustJacketImg,
    },
    {
      title: 'Hardboard Cover',
      desc: 'Offers increased durability with a robust structure. Museum-grade board choices ensure a long life for books readers will cherish.',
      img: BioBookImg,
    },
    {
      title: 'Paperback Cover',
      desc: 'A ubiquitious and flexible option. Our designers help you pursue a softcover design that maintains professional quality and impact.',
      img: ExceptionalBookImg,
    },
  ];

  const workCategories = [
    { title: 'Printed Books', desc: 'Long-lasting covers to protect your story.' },
    { title: 'Comic Books', desc: 'Colorful illustrations to entice readers.' },
    { title: 'Magazines', desc: 'Trendy designs to put your best foot forward.' },
    { title: 'Photo Albums', desc: 'Expertly photographed album covers.' },
    { title: 'Year Books', desc: 'Academic achievements in an appealing format.' },
    { title: 'Ebooks', desc: 'Creative digital covers for maximum online impact.' },
  ];

  const steps = [
    {
      num: '01',
      title: 'Making Your Order',
      desc: 'Start working with the greatest designers in the industry to commence your project in earnest.',
    },
    {
      num: '02',
      title: 'Process of Drafting',
      desc: 'We build a mind map and outline of the design beats to ensure a smooth, delay-free experience.',
    },
    {
      num: '03',
      title: 'Gaining Feedback',
      desc: 'A collaborative review to ensure justice was done to your vision and full satisfaction is achieved.',
    },
    {
      num: '04',
      title: 'Delivery of Work',
      desc: 'Timely delivery of professional designs that inspire and engage your target audience.',
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
            src={CoverBanner}
            alt='Book Cover Design'
            fill
            style={{ objectFit: 'cover', opacity: 0.2, filter: 'grayscale(20%)' }}
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
                Creative Design Solutions
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
                  fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                  maxWidth: '600px',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: 1.8,
                }}
              >
                {serviceSubtitle}
              </motion.p>
            </motion.div>

            {/* Right Column: Mini Form */}
            <HeroForm defaultService='book-cover-design' />
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className='section'>
        <div className='container'>
          <div className='grid grid-2' style={{ alignItems: 'center', gap: '4rem', marginBottom: '4rem' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  color: 'var(--primary)',
                  fontFamily: 'var(--font-serif)',
                  marginBottom: '1.5rem',
                }}
              >
                Identity in a Glance
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                A book&apos;s identity and essence are conveyed through the cover. It&apos;s the first thing readers see
                and plays a pivotal role in their decision to explore further. Our designers craft covers that
                don&apos;t just protect—they perform.
              </p>
              <div
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}
              >
                {designProcesses.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1.5rem',
                      borderRadius: '1rem',
                      backgroundColor: 'var(--bg-secondary)',
                      borderTop: '4px solid var(--accent)',
                    }}
                  >
                    <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src={CoverBanner}
                alt='Design Process'
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '2rem',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cover Types */}
      <section className='section' style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className='container'>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                color: 'var(--primary)',
                fontFamily: 'var(--font-serif)',
                marginBottom: '1rem',
              }}
            >
              Specialized Format Designs
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
              Whether it&apos;s the premium feel of a dust jacket or the portability of a paperback, we excel in all.
            </p>
          </div>
          <div className='grid' style={{ gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {coverTypes.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '2rem',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                }}
              >
                <div style={{ height: '240px', position: 'relative' }}>
                  <Image src={type.img} alt={type.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary)', marginBottom: '1rem' }}>
                    {type.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{type.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Categories */}
      <section className='section'>
        <div className='container'>
          <div className='grid grid-2' style={{ alignItems: 'center', gap: '4rem' }}>
            <div style={{ order: 2 }}>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  color: 'var(--primary)',
                  fontFamily: 'var(--font-serif)',
                  marginBottom: '2rem',
                }}
              >
                Our Versatile Expertise
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {workCategories.map((cat, idx) => (
                  <div key={idx}>
                    <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>{cat.title}</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{cat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ order: 1 }}>
              <Image src={TypesImg} alt='Categories' style={{ width: '100%', height: 'auto', borderRadius: '2rem' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Book Gallery */}
      <BookGallery />

      {/* Final CTA */}
      <section className='section' style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
        <div className='container' style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'var(--font-serif)', marginBottom: '2rem' }}>
            Ready for a Captivating Cover?
          </h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 3rem', fontSize: '1.2rem', opacity: 0.9 }}>
            Join hands with Whitemount Publishing and let&apos;s create a cover that your readers will fall in love
            with.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className='btn btn-primary' style={{ padding: '1.2rem 3rem', width: 'auto' }}>
              Get Started Now
            </button>
            <button
              className='btn btn-outline'
              style={{ padding: '1.2rem 3rem', width: 'auto', borderColor: 'white', color: 'white' }}
            >
              Contact US
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
