'use client';
import { motion } from 'framer-motion';
import data from '../src/data/site-content.json';
import { useState, useEffect, useCallback } from 'react';
import { ArrowLeftIcon } from 'lucide-react';

export default function Testimonials() {
  const { testimonials } = data.pages.home;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleItems(1);
      else if (window.innerWidth < 1024) setVisibleItems(2);
      else setVisibleItems(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.reviews.length - visibleItems);

  const nextStep = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevStep = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    const timer = setInterval(nextStep, 6000);
    return () => clearInterval(timer);
  }, [maxIndex, nextStep]);

  return (
    <section className='section overflow-hidden bg-(--bg-secondary) py-(--section-padding)'>
      <div className='container'>
        <div className='mb-[clamp(3rem,6vw,5rem)] text-center'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='section-title mb-6 font-(--font-serif) text-[clamp(2.5rem,5vw,3.5rem)] text-(--primary)'
          >
            {testimonials.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='mx-auto max-w-200 px-4 text-[clamp(1rem,2.5vw,1.1rem)] text-(--text-muted)'
          >
            {testimonials.description}
          </motion.p>
        </div>

        <div className='relative px-[clamp(0px,5vw,40px)]'>
          <div className='overflow-x-hidden rounded-4xl'>
            <motion.div
              animate={{ x: `-${currentIndex * (100 / visibleItems)}%` }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
              className='flex w-full gap-4'
            >
              {testimonials.reviews.map((review, idx) => (
                <div
                  key={idx}
                  className='box-border px-[clamp(0.5rem,2vw,1.25rem)]'
                  style={{
                    minWidth: `calc(100% / ${visibleItems} - 1rem)`,
                  }}
                >
                  <div className='card relative flex h-full flex-col gap-8 rounded-4xl border border-(--border) bg-(--bg-main) p-[clamp(2rem,5vw,3rem)_clamp(1.5rem,5vw,2.5rem)] shadow-[0_10px_40px_rgba(0,0,0,0.04)]'>
                    <div className='absolute right-8 top-6 font-(--font-serif) text-[3rem] leading-none text-(--accent) opacity-20'>
                      “
                    </div>

                    <div className='-mb-2 flex gap-1'>
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} className='h-4 w-4 fill-(--accent)' viewBox='0 0 20 20'>
                          <path d='M10 1L13 7L19 8L15 13L16 19L10 16L4 19L5 13L1 8L7 7L10 1z' />
                        </svg>
                      ))}
                    </div>

                    <p className='flex-1 text-[clamp(1rem,2.5vw,1.1rem)] font-medium leading-[1.8] text-(--text-main)'>
                      {review.text}
                    </p>
                    <div className='border-t border-(--border) pt-6 text-[1rem] font-extrabold tracking-[0.5px] text-(--text-muted) '>
                      — {review.name}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevStep}
            className='absolute left-[-10px] top-1/2 z-10 flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-main)] text-[1.4rem] text-[var(--primary)] shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all duration-200 ease-out hover:shadow-[0_8px_20px_rgba(0,0,0,0.14)] dark:border-[var(--border-dark)] dark:bg-[var(--bg-main-dark)] dark:text-[var(--primary-light)] dark:shadow-[0_4px_15px_rgba(255,255,255,0.1)] dark:hover:shadow-[0_8px_20px_rgba(255,255,255,0.14)]'
            aria-label='Previous testimonials'
          >
            <ArrowLeftIcon className='h-5 w-5' />
          </button>
          <button
            onClick={nextStep}
            className='absolute right-[-10px] top-1/2 z-10 flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-main)] text-[1.4rem] text-[var(--primary)] shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all duration-200 ease-out hover:shadow-[0_8px_20px_rgba(0,0,0,0.14)] dark:border-[var(--border-dark)] dark:bg-[var(--bg-main-dark)] dark:text-[var(--primary-light)] dark:shadow-[0_4px_15px_rgba(255,255,255,0.1)] dark:hover:shadow-[0_8px_20px_rgba(255,255,255,0.14)]'
            aria-label='Next testimonials'
          >
            <ArrowLeftIcon className='h-5 w-5 rotate-180' />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className='mt-16 flex justify-center gap-2.5'>
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-[5px] transition-all duration-300 ease-out ${
                currentIndex === idx ? 'w-8 bg-[var(--accent)]' : 'w-2.5 bg-[var(--border)]'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
