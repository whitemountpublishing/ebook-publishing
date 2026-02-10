'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
  useEffect(() => {
    // Trigger Google Ads conversion event
    if ('gtag' in window && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17931671428/pDBaCPmmq_YbEISvvuZC',
        value: 1.0,
        currency: 'USD',
      });
    }
  }, []);

  return (
    <main className='bg-(--bg-main) min-h-[80vh] flex items-center justify-center p-4 sm:p-8'>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='bg-(--bg-secondary) p-8 sm:p-10 md:p-12 lg:p-16 rounded-4xl text-center max-w-2xl w-full show-lg border border-(--border)'
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className='inline-flex text-(--accent) mb-8'
        >
          <CheckCircle size={80} strokeWidth={1.5} />
        </motion.div>

        <h1 className='text-2xl sm:text-3xl md:text-4xl mb-4 text-pretty text-(--primary)'>Thank You!</h1>

        <p className='text-(--text-muted) mb-8'>
          Your message has been successfully submitted. Our team will review your details and get back to you shortly.
        </p>

        <div className='flex gap-4 justify-center wrap'>
          <Link href='/' className='btn btn-primary' style={{ padding: '1rem 2rem' }}>
            Back to Home
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
