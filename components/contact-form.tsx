'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import data from '@/src/data/site-content.json';

export function ContactForm({ className }: { className?: string }) {
  const router = useRouter();

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', subject: '', message: '' });
        router.push('/thank-you');
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };
  const inputStyles = {
    padding: '1rem 1.25rem',
    borderRadius: '0.75rem',
    backgroundColor: 'var(--bg-main)',
    border: '2px solid var(--border)',
    color: 'var(--text-main)',
    outline: 'none',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    width: '100%',
    boxSizing: 'border-box' as const,
  };

  const inputFocusProps = {
    whileFocus: {
      borderColor: 'var(--accent)',
      boxShadow: '0 0 0 3px rgba(245, 158, 11, 0.15)',
    },
  };

  const labelStyles = {
    fontWeight: 600,
    fontSize: '0.9rem',
    color: 'var(--text-main)',
    marginBottom: '0.5rem',
    display: 'block',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={cn('bg-(--bg-main) px-6 py-8', className)}
    >
      <h3
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
          color: 'var(--primary)',
          marginBottom: '0.5rem',
        }}
      >
        Send Us a Message
      </h3>
      <p
        style={{
          color: 'var(--text-muted)',
          fontSize: '0.95rem',
          marginBottom: '1.5rem',
        }}
      >
        Fill out the form below and we&apos;ll get back to you within 24 hours.
      </p>

      {status === 'success' && (
        <div
          style={{
            padding: '1rem',
            marginBottom: '1rem',
            backgroundColor: '#d1e7dd',
            color: '#0f5132',
            borderRadius: '0.5rem',
            textAlign: 'center',
          }}
        >
          Message sent successfully! We&apos;ll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div
          style={{
            padding: '1rem',
            marginBottom: '1rem',
            backgroundColor: '#f8d7da',
            color: '#842029',
            borderRadius: '0.5rem',
            textAlign: 'center',
          }}
        >
          Something went wrong. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* Name & Email Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
            gap: '1.25rem',
          }}
        >
          <div>
            <label style={labelStyles}>Full Name *</label>
            <motion.input
              {...inputFocusProps}
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='John Doe'
              required
              style={inputStyles}
            />
          </div>
          <div>
            <label style={labelStyles}>Email Address *</label>
            <motion.input
              {...inputFocusProps}
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='john@example.com'
              required
              style={inputStyles}
            />
          </div>
        </div>

        {/* Phone & Service Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
            gap: '1.25rem',
          }}
        >
          <div>
            <label style={labelStyles}>Phone Number</label>
            <motion.input
              {...inputFocusProps}
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder={`(Optional) ${data.brand.contact.phone}`}
              style={inputStyles}
            />
          </div>
          <div>
            <label style={labelStyles}>Service Interested In</label>
            <motion.select
              {...inputFocusProps}
              name='service'
              value={formData.service}
              onChange={handleChange}
              style={{
                ...inputStyles,
                cursor: 'pointer',
                appearance: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
              }}
            >
              <option value=''>Select a service...</option>
              <option value='ghostwriting'>Ghostwriting</option>
              <option value='editing'>Editing</option>
              <option value='proofreading'>Proofreading</option>
              <option value='book-cover'>Book Cover Design</option>
              <option value='publishing'>Book Publishing</option>
              <option value='marketing'>Book Marketing</option>
              <option value='formatting'>Formatting</option>
              <option value='other'>Other</option>
            </motion.select>
          </div>
        </div>

        {/* Subject */}
        <div>
          <label style={labelStyles}>Subject</label>
          <motion.input
            {...inputFocusProps}
            type='text'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            placeholder='How can we help you?'
            style={inputStyles}
          />
        </div>

        {/* Message */}
        <div>
          <label style={labelStyles}>Your Message *</label>
          <motion.textarea
            {...inputFocusProps}
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Tell us about your project...'
            rows={5}
            required
            style={{
              ...inputStyles,
              resize: 'vertical',
              minHeight: '120px',
            }}
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: 'var(--accent-hover)' }}
          whileTap={{ scale: 0.98 }}
          type='submit'
          disabled={status === 'loading'}
          style={{
            padding: '1rem 2rem',
            fontSize: '1rem',
            fontWeight: 700,
            borderRadius: '0.75rem',
            backgroundColor: 'var(--accent)',
            color: 'white',
            border: 'none',
            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
            boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            width: '100%',
            marginTop: '0.5rem',
            transition: 'all 0.3s ease',
            opacity: status === 'loading' ? 0.7 : 1,
          }}
        >
          {status === 'loading' ? 'Sending Message...' : 'Send Message'}
        </motion.button>

        <p
          style={{
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            textAlign: 'center',
            marginTop: '0.5rem',
          }}
        >
          By submitting, you agree to our privacy policy.
        </p>
      </form>
    </motion.div>
  );
}
