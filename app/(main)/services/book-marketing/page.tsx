'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BgImage from '@/assets/marketing.png';
import Pattern from '@/assets/pattern-2.webp';
import HeroForm from '@/components/HeroForm';
import BookGallery from '@/components/BookGallery';
import data from '@/src/data/site-content.json';

export default function BookMarketingPage() {
  const serviceTitle = 'Marketing That Turns Pages & Profits';
  const serviceSubtitle =
    "Let's Take Your Story to the Top with our strategic marketing services that help your book reach its target audience, ensuring it gets the recognition it deserves.";

  const marketingServices = [
    {
      title: 'Custom Marketing Strategies',
      description:
        "Personalized marketing plans tailored to your book's genre, target audience, and unique selling points.",
    },
    {
      title: 'Multi-Channel Promotion',
      description: 'Coordinated campaigns across social media, email, PR, and digital advertising for maximum reach.',
    },
    {
      title: 'Pre, Launch & Post Planning',
      description:
        'Comprehensive timeline covering pre-launch buzz, launch day activities, and sustained post-launch momentum.',
    },
    {
      title: 'Author Branding',
      description:
        'Build a recognizable author identity with professional branding, website design, and media kit development.',
    },
    {
      title: 'Target Audience Engagement',
      description:
        'Connect with your ideal readers through targeted outreach, community building, and reader interaction strategies.',
    },
    {
      title: 'Evaluations & Tracking',
      description: 'Data-driven insights with regular performance reports, analytics tracking, and ROI measurement.',
    },
  ];

  const marketingProcess = [
    {
      step: '01',
      title: 'Marketing Consultation',
      description:
        "We conduct in-depth interviews to understand your marketing objectives—whether it's building fame, establishing credibility, driving revenue, or achieving bestseller status.",
    },
    {
      step: '02',
      title: 'Research & Analysis',
      description:
        'Our team performs a comprehensive analysis of your background, book overview, and competitor landscape to inform our approach.',
    },
    {
      step: '03',
      title: 'Strategic Development',
      description:
        'Based on our research and your objectives, we craft a tailored marketing strategy aimed at driving your desired results.',
    },
    {
      step: '04',
      title: 'Ongoing Execution & Monitoring',
      description:
        'We implement daily marketing activities, conduct weekly assessments, and provide monthly evaluations to ensure consistent performance.',
    },
    {
      step: '05',
      title: 'Adaptive Strategy Refinement',
      description:
        'We continuously refine our strategies based on feedback and performance metrics, ensuring your marketing efforts evolve to maximize impact.',
    },
  ];

  const whyChooseUs = [
    { icon: '🎯', title: 'Targeted Reach', description: 'Your book reaches the right readers at the right time.' },
    { icon: '📈', title: 'Proven Results', description: 'Data-driven strategies that deliver measurable outcomes.' },
    { icon: '🤝', title: 'Personalized Support', description: 'Dedicated marketing team focused on your success.' },
    {
      icon: '🚀',
      title: 'Best-Seller Dreams',
      description: 'From unknown to unforgettable—we fuel your fame and fortune.',
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
                Targeted Book Marketing
              </motion.h6>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontFamily: 'var(--font-serif)',
                  marginBottom: '1.5rem',
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
            <HeroForm defaultService='book-marketing' />
          </div>
        </div>
      </section>

      {/* Marketing Services Grid */}
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
              Tailored Marketing Services for Maximum Impact
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
              We offer a comprehensive range of marketing services to boost your book&apos;s visibility and drive reader
              engagement.
            </p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {marketingServices.map((service, idx) => (
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
                  borderLeft: '4px solid var(--accent)',
                }}
              >
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.75rem' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Process */}
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
              How We Drive Your Book&apos;s Success
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
              Our marketing process is designed to maximize your book&apos;s exposure, ensuring it reaches eager readers
              who want to engage with your content.
            </p>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {marketingProcess.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{
                  display: 'flex',
                  gap: '2rem',
                  alignItems: 'flex-start',
                  flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
                  flexWrap: 'wrap',
                }}
              >
                <div
                  style={{
                    minWidth: '80px',
                    height: '80px',
                    borderRadius: '1rem',
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-serif)',
                  }}
                >
                  {item.step}
                </div>
                <div style={{ flex: 1, minWidth: '280px' }}>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose Whitemount Publishing?
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', maxWidth: '700px', margin: '0 auto' }}>
              Because your book deserves the best. We combine creativity, expertise, and personalized support to bring
              your story to life.
            </p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{
                  textAlign: 'center',
                  padding: '2rem',
                  borderRadius: '1rem',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--accent)' }}>{item.title}</h3>
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
              Ready to Write Your Legacy?
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>
              From unknown to unforgettable—let us fuel your fame, fortune, and best-seller dreams!
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href='/contact-us' className='btn btn-primary' style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
                Get Started Today
              </a>
              <a
                href={`tel:${data.brand.contact.phone}`}
                className='btn btn-outline'
                style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}
              >
                Talk to an Expert
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
