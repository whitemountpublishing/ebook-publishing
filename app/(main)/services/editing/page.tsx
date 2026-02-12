'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import BgImage from '@/assets/exceptional-book.webp';
import Pattern from '@/assets/pattern-2.webp';
import HeroForm from '@/components/HeroForm';
import BookGallery from '@/components/BookGallery';
import data from '@/src/data/site-content.json';

export default function EditingPage() {
  const serviceTitle = 'Professional Book Editing';
  const serviceSubtitle =
    'Perfect Editing Process from a Company That Strives for the Best. Our editors ensure that all your work is smoothly edited to lead to a better reading experience.';

  const editingServices = [
    {
      icon: '📐',
      title: 'Substantial Editing',
      description: "Improve your book's overall structure, organization, and flow for maximum reader engagement.",
    },
    {
      icon: '✍️',
      title: 'Rewriting & Paraphrasing',
      description: 'Transform awkward passages into polished prose while maintaining your authentic voice.',
    },
    {
      icon: '✅',
      title: 'Error-Free Text',
      description: 'Meticulous grammar, punctuation, and spelling corrections for flawless manuscripts.',
    },
    {
      icon: '📄',
      title: 'Manuscript Formatting',
      description: 'Professional formatting and organization that meets industry publishing standards.',
    },
    {
      icon: '🔍',
      title: 'Critical Reviews',
      description: 'In-depth analysis to identify and fill plot holes, inconsistencies, and narrative gaps.',
    },
    {
      icon: '📚',
      title: 'Publishing Support',
      description: 'Comprehensive editing services that prepare your manuscript for successful publication.',
    },
  ];

  const editingTypes = [
    {
      title: 'Copy-Editing',
      description:
        "This refers to the process of revising written material to iron out flaws within the text. This involves an entire revision phase during which we check for grammatical errors and fix them until it's perfect.",
      features: [
        'Grammar & Syntax Correction',
        'Spelling & Punctuation',
        'Consistency Checks',
        'Style Guide Adherence',
      ],
    },
    {
      title: 'Line-Editing',
      description:
        'Perhaps the most important aspect of editing that deals with fixing story structure, flow, pacing, and engagement. This part is crucial for improving the overall quality of your book.',
      features: ['Story Flow & Pacing', 'Sentence Structure', 'Word Choice Refinement', 'Tone Consistency'],
    },
    {
      title: 'Proof-Reading',
      description:
        'In our proofreading services, we check the book for flaws in structure, formatting errors, grammar, and issues with overall plot. This determines whether additional editing is needed.',
      features: ['Final Error Check', 'Formatting Verification', 'Typographical Errors', 'Print-Ready Review'],
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Order Placement',
      description:
        'Once you decide to place your order, our representatives will communicate on how best to proceed with working on your project.',
    },
    {
      step: '02',
      title: 'Process of Planning',
      description:
        'We devise a comprehensive plan that serves as the basis for the entire project. We believe that failing to plan is planning to fail.',
    },
    {
      step: '03',
      title: 'Feedback & Review',
      description:
        "We show you how far we've come and the direction of the project. Any disagreements in this phase are sorted out collaboratively.",
    },
    {
      step: '04',
      title: 'Final Delivery',
      description:
        'The final stage where your project is delivered with complete ownership transferred to you along with all created materials.',
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
            alt={serviceTitle}
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
                Professional Book Editing
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
            <HeroForm defaultService='book-editing' />
          </div>
        </div>
      </section>

      {/* Editing Services Grid */}
      <section className='section' style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className='container'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                color: 'var(--primary)',
                marginBottom: '1rem',
              }}
            >
              Outstanding Editing & Proofreading Services
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
              We have a team of editors who will ensure your work is built upon and improved through immaculate editing,
              turning your story into a work of art.
            </p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {editingServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className='card'
                style={{
                  padding: '2rem',
                  borderRadius: '1rem',
                  backgroundColor: 'var(--bg-main)',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.75rem' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Editing Types */}
      <section className='section'>
        <div className='container'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                color: 'var(--primary)',
                marginBottom: '1rem',
              }}
            >
              Editing Tailored to Your Needs
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
              We provide outstanding services to ensure your book ends up looking like a masterpiece that impresses a
              vast audience.
            </p>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {editingTypes.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '3rem',
                  alignItems: 'center',
                  padding: '2.5rem',
                  borderRadius: '1.5rem',
                  backgroundColor: idx % 2 === 0 ? 'var(--bg-secondary)' : 'transparent',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.75rem',
                      color: 'var(--primary)',
                      marginBottom: '1rem',
                    }}
                  >
                    {type.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>{type.description}</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  {type.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '1rem',
                        borderRadius: '0.75rem',
                        backgroundColor: 'var(--bg-main)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <svg width='12' height='12' viewBox='0 0 24 24' fill='white'>
                          <path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' />
                        </svg>
                      </div>
                      <span style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 500 }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className='section' style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
        <div className='container'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2
              style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1rem' }}
            >
              Swift Processing in Four Easy Steps
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', maxWidth: '700px', margin: '0 auto' }}>
              Whatever services you seek, we provide immense quality and deliver swiftly.
            </p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {processSteps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                style={{
                  position: 'relative',
                  padding: '2rem',
                  borderRadius: '1rem',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '20px',
                    backgroundColor: 'var(--accent)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '2rem',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                  }}
                >
                  Step {item.step}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginTop: '1rem', marginBottom: '0.75rem', color: 'var(--accent)' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Gallery */}
      <BookGallery />

      {/* CTA Section */}
      <section className='section' style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className='container' style={{ textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                color: 'var(--primary)',
                marginBottom: '1rem',
              }}
            >
              Don&apos;t Hesitate to Contact Us!
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>
              We are working round the clock. If you need to contact us at any time, don&apos;t hesitate to reach out to
              our representatives.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href='/contact-us' className='btn btn-primary' style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
                Get Started
              </a>
              <a
                href={`tel:${data.brand.contact.phone}`}
                className='btn btn-outline'
                style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
