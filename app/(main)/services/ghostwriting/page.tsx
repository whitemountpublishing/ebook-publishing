'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BgImage from '@/assets/expertise.png';
import Pattern from '@/assets/pattern-2.webp';
import HeroForm from '@/components/HeroForm';
import BookGallery from '@/components/BookGallery';

export default function ServicePage() {
  const serviceTitle = 'Engaging Content and Affordable Ghostwriting Services';
  const serviceSubtitle =
    'Begin your journey into the literary world with top notch ghostwriters who will take the crux of your ideas and transform them into a masterpiece that will significantly help you as an author in becoming a legend!';

  const genres = [
    {
      title: 'Fiction',
      desc: "Our expert literary craftsmen will weave a tapestry of emotions into the pages of your magnificent fiction novel. Whether it's fantasy or science fiction, our experts have the touch of gold.",
    },
    {
      title: 'Informative',
      desc: 'Delving into the annals of history or analyzing societal change, our informative writers create engaging content that captivates readers with significant narratives.',
    },
    {
      title: 'Memoir',
      desc: 'A life well lived should be shared. Our memoir writing services capture the journey of overcoming odds and emerging triumphant through valuable insights.',
    },
    {
      title: "Children's Book",
      desc: 'Immerse young minds in wonder. Our writers craft lovable characters who ignite imagination and inspire literary adventures for young readers.',
    },
    {
      title: 'Self Help',
      desc: 'A guiding light to personal growth, inner peace, and fulfillment. Through deep introspection and actionable insights, your audience will be compelled to delve within.',
    },
    {
      title: 'Biography',
      desc: "Capturing the essence of authenticity and emotional resonance. Our biography services delve into the layers of an individual's character and contributions.",
    },
  ];

  const benefits = [
    {
      title: 'Seal of Approval',
      desc: 'Genuine work with our seal of approval and guarantee of authenticity.',
    },
    {
      title: 'In-depth Review',
      desc: 'Ensuring work is thoroughly edited with no mistakes through our rigorous system.',
    },
    {
      title: 'Unlimited Revisions',
      desc: 'We allow as many revisions as possible to ensure your total satisfaction.',
    },
    {
      title: 'Ownership Rights',
      desc: 'You maintain 100% of the rights to your book; we hold no claim to your IP.',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Placing Your Order',
      desc: 'Start the process by choosing the ghostwriting services that suit your needs, from fiction to business books.',
    },
    {
      num: '02',
      title: 'Draft of the Outline',
      desc: 'Our writers draft an outline that maps the entire plot, ensuring your vision is being utilized exactly as you want.',
    },
    {
      num: '03',
      title: 'Your Feedback',
      desc: 'Review the work and discuss satisfaction. This crucial step establishes if changes, proofreading, or editing are needed.',
    },
    {
      num: '04',
      title: 'Final Delivery',
      desc: 'The hard work and dedication culminate in the delivery of a well-written novel that you now fully own.',
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
            alt='Ghostwriting'
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
                Professional Ghostwriting
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
            <HeroForm defaultService='ghostwriting' />
          </div>
        </div>
      </section>

      {/* Introduction & Benefits */}
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
                Your Story, Our Expertise
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Whitemount Publishing ghostwriting services help aspiring writers or individuals who have great ideas
                but lack the time or skill to bring them to fruition. Our team of experienced authors works closely with
                you to understand your characters, tone, and vision.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    style={{
                      padding: '1.5rem',
                      borderRadius: '1rem',
                      backgroundColor: 'var(--bg-secondary)',
                      borderLeft: '4px solid var(--accent)',
                    }}
                  >
                    <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{benefit.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{
                position: 'relative',
                borderRadius: '2rem',
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
              }}
            >
              <Image
                src={BgImage}
                alt='Ghostwriting Expertise'
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specializations */}
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
              Genre-Specific Ghostwriting
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
              From gripping thrillers to inspirational life stories, we master every genre.
            </p>
          </div>
          <div className='grid' style={{ gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {genres.map((genre, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{
                  padding: '2.5rem',
                  borderRadius: '1.5rem',
                  backgroundColor: 'white',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                  border: '1px solid var(--border)',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary)', marginBottom: '1rem' }}>
                  {genre.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{genre.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='section'>
        <div className='container'>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                color: 'var(--primary)',
                fontFamily: 'var(--font-serif)',
              }}
            >
              Our Methodical Process
            </h2>
          </div>
          <div
            className='grid'
            style={{ gap: '0', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', position: 'relative' }}
          >
            {/* Connecting Line */}
            <div
              style={{
                position: 'absolute',
                top: '50px',
                left: '10%',
                right: '10%',
                height: '2px',
                background: 'var(--border)',
                zIndex: 0,
                display: 'none',
              }}
              className='desktop-only'
            />

            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                style={{ position: 'relative', zIndex: 1, padding: '2rem', textAlign: 'center' }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    margin: '0 auto 2rem',
                    border: '8px solid white',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Gallery */}
      <BookGallery />

      {/* Final CTA */}
      <section
        className='section'
        style={{ backgroundColor: 'var(--primary)', position: 'relative', overflow: 'hidden' }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${Pattern.src})`,
            backgroundSize: '400px',
            opacity: 0.1,
          }}
        />
        <div className='container' style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white' }}>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontFamily: 'var(--font-serif)', marginBottom: '2rem' }}
          >
            Ready to Share Your Vision?
          </motion.h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 4rem', fontSize: '1.2rem', opacity: 0.9 }}>
            Contact Whitemount Publishing&apos;s team today and let&apos;s turn your ideas into a literary success.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className='btn btn-primary' style={{ padding: '1.2rem 3rem', width: 'auto' }}>
              Start Your Journey
            </button>
            <button
              className='btn btn-outline'
              style={{ padding: '1.2rem 3rem', width: 'auto', borderColor: 'white', color: 'white' }}
            >
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
