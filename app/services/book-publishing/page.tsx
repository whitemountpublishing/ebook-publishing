'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BgImage from '../../../assets/process-bg.webp';
import Section2Image from '../../../assets/exceptional-book.webp';
import Pattern from '../../../assets/pattern-2.webp';
import HeroForm from '../../../components/HeroForm';
import BookGallery from '../../../components/BookGallery';
import Link from 'next/link';
import { FileSearch, FilePenLine, Palette, Globe } from 'lucide-react';
import GetStartedButton from '@/components/get-started-button';
import { ChatNowButton } from '@/components/chat-now-button';

export default function BookPublishingPage() {
  const serviceTitle = 'Experience Transforming Your Manuscript with Our Expert Book Publishing Services!';
  const serviceSubtitle =
    'Writers invest a lot of time and effort into their manuscripts. We understand the difficulties of getting published and aim to make the process easier. With our publishing services, we provide the support you need to succeed.';

  const features = [
    {
      title: 'Manuscript Evaluation',
      desc: 'We read your manuscript, spot what works, and suggest improvements to make it better.',
      icon: FileSearch,
    },
    {
      title: 'Professional Editing',
      desc: 'We catch typos and small mistakes. Our editors clean up your book, fixing errors and improving flow.',
      icon: FilePenLine,
    },
    {
      title: 'Custom Cover Design',
      desc: 'Artists from our team always design things to inspire and always draw attention.',
      icon: Palette,
    },
    {
      title: 'Publishing & Distribution',
      desc: 'We place your book in physical and online stores, handling the technical side so you can focus on your story.',
      icon: Globe,
    },
  ];

  const values = [
    {
      title: 'Expert Publishing Team',
      desc: 'Our team has a deep understanding of the book publishing industry. We know exactly what published authors face.',
    },
    {
      title: 'Personalized Approach',
      desc: 'Everyone has their own unique life story. We make sure to give each person who comes to us the chance to tell their story.',
    },
    {
      title: 'Enhance Reach & Sales',
      desc: 'Rely on our top-tier team, proficient in delivering excellence in publishing. We master the art of crafting compelling and meaningful books.',
    },
    {
      title: 'Affordable Excellence',
      desc: 'Affordable book publishing proves that you don’t have to sacrifice quality for cost. We help you stay on budget without limits on creativity.',
    },
  ];

  const testimonials = [
    {
      quote:
        'I highly recommend Whitemount to any aspiring author. They were incredibly helpful throughout the entire process and made self-publishing a breeze!',
      author: 'Author',
    },
    {
      quote:
        'I was hesitant to self-publish, but Whitemount made it easy and stress-free. Their marketing and promotion strategies helped me reach a wider audience.',
      author: 'Author (Editing)',
    },
    {
      quote:
        'Whitemount publishing services are top-notch. Their attention to detail, prompt communication, and commitment to quality made the entire process a breeze.',
      author: 'Author (Formatting & Cover)',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Review & Enhancement',
      desc: 'Our team carefully reviews your manuscript. We make sure it connects with readers and captures their interest.',
    },
    {
      num: '02',
      title: 'Refining Content',
      desc: 'Once you approve our changes, our team will update the content to match your goals. We fix mistakes and make your writing smooth.',
    },
    {
      num: '03',
      title: 'Analysis & Editing',
      desc: 'After enhancement, our editors will analyze for literary perfection. We ensure rigorous scrutiny and critical analysis suitable for your genre.',
    },
    {
      num: '04',
      title: 'Formatting & Layout',
      desc: 'We design unique book covers and layouts for your eBooks. Our goal is to make them easy to read and visually appealing.',
    },
    {
      num: '05',
      title: 'Final Steps',
      desc: 'We complete every technical and administrative step. We do everything from registering an ISBN to filing the work for publication.',
    },
    {
      num: '06',
      title: 'Marketing & Promotion',
      desc: 'We offer personalized marketing that highlights the best parts of your book. Our approach ensures your book reaches the right audience.',
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
            alt='Book Publishing'
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
                Global Book Publishing
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

              <motion.div className='mt-8'>
                <GetStartedButton label='Get Started Today' className='py-3 px-6' />
              </motion.div>
            </motion.div>

            {/* Right Column: Mini Form */}
            <HeroForm defaultService='book-publishing' />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className='section' style={{ overflow: 'hidden' }}>
        <div className='container'>
          <div className='grid grid-2' style={{ gap: '5rem', marginBottom: '4rem', alignItems: 'stretch' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.2rem, 5vw, 3rem)',
                  color: 'var(--primary)',
                  marginBottom: '1.5rem',
                  lineHeight: 1.2,
                }}
              >
                Comprehensive Publishing Solutions
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '3rem' }}>
                We take the complexity out of publishing. Our distribution network puts your book in the hands of
                readers worldwide, handling everything from ISBN registration to retail setup.
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '1.5rem',
                  marginBottom: '2.5rem',
                }}
              >
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className='group'
                    style={{
                      padding: '1.5rem',
                      borderRadius: '1rem',
                      backgroundColor: 'var(--bg-secondary)',
                      transition: 'all 0.3s ease',
                      border: '1px solid transparent',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        display: 'inline-flex',
                        padding: '0.75rem',
                        borderRadius: '0.75rem',
                        backgroundColor: 'rgba(245, 158, 11, 0.1)',
                        color: 'var(--accent)',
                        marginBottom: '1rem',
                      }}
                    >
                      <feature.icon size={26} strokeWidth={1.5} />
                    </div>
                    <h4
                      style={{
                        marginBottom: '0.5rem',
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        lineHeight: 1.3,
                      }}
                      className='text-gradient'
                    >
                      {feature.title}
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{feature.desc}</p>
                  </div>
                ))}
              </div>

              <motion.div>
                <ChatNowButton className='bg-(--accent) border-(--accent)' label='Chat Now' />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ position: 'relative', height: '100%', minHeight: '500px' }}
            >
              <div
                style={{
                  position: 'relative',
                  height: '100%',
                  width: '100%',
                  borderRadius: '2rem',
                  overflow: 'hidden',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                }}
              >
                <Image src={Section2Image} alt='Publishing Process' fill style={{ objectFit: 'cover' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='section' style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className='container'>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                color: 'var(--primary)',
              }}
            >
              Why Publish with Whitemount?
            </h2>
          </div>
          <div className='grid' style={{ gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{
                  padding: '2.5rem',
                  backgroundColor: 'white',
                  borderRadius: '1.5rem',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                  border: '1px solid var(--border)',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.35rem',
                    color: 'var(--primary)',
                    marginBottom: '1rem',
                    fontFamily: 'var(--font-serif)',
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className='flex items-stretch flex-col sm:flex-row justify-center gap-4 mt-8'>
            <GetStartedButton label='Get Started Now' className='px-12 py-4 text-lg min-w-50 grow sm:grow-0' />
            <ChatNowButton className='px-12 py-4 text-lg min-w-50 grow sm:grow-0 bg-(--primary) border-(--primary)' />
          </div>
        </div>
      </section>

      {/* Workflow Process */}
      <section className='section'>
        <div className='container'>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                color: 'var(--primary)',
              }}
            >
              A Streamlined Path to Publication
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2rem',
                  padding: '2rem',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '1rem',
                }}
              >
                <div
                  style={{
                    minWidth: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '0.4rem' }}>{step.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div style={{ marginTop: '2rem' }}>
            <ChatNowButton className='px-12 py-4 text-lg min-w-50 bg-(--accent) border-(--accent)' label='Chat Now' />
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='section' style={{ backgroundColor: 'white' }}>
        <div className='container'>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2
              style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--primary)' }}
            >
              What Our Authors Say
            </h2>
          </div>
          <div className='grid' style={{ gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {testimonials.map((t, idx) => (
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
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <p
                  style={{
                    fontSize: '1.1rem',
                    fontStyle: 'italic',
                    color: 'var(--text-muted)',
                    marginBottom: '1.5rem',
                    lineHeight: 1.6,
                  }}
                >
                  {t.quote}
                </p>
                <h4 style={{ color: 'var(--primary)', fontFamily: 'var(--font-serif)', fontSize: '1.1rem' }}>
                  — {t.author}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Gallery */}
      <BookGallery />

      {/* Final CTA */}
      <section className='section' style={{ backgroundColor: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className='container'>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontFamily: 'var(--font-serif)', marginBottom: '2rem' }}>
            Ready To Work Your Next Projects?
          </h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 3.5rem', fontSize: '1.2rem', opacity: 0.9 }}>
            Every author&apos;s journey is important to us. We are dedicated to supporting you at every step. Join the
            community of successful authors who have trusted Whitemount.
          </p>
          <button className='btn btn-primary' style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem', width: 'auto' }}>
            Get Started with Publishing
          </button>
        </div>
      </section>
    </main>
  );
}
