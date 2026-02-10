"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
    // Optional: confetti effect or analytics tracking on mount
    useEffect(() => {
        // Analytics code could go here
    }, []);

    return (
        <main style={{
            backgroundColor: 'var(--bg-main)',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: 'clamp(2rem, 5vw, 4rem)',
                    borderRadius: '2rem',
                    textAlign: 'center',
                    maxWidth: '600px',
                    width: '100%',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                    border: '1px solid var(--border)'
                }}
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    style={{
                        display: 'inline-flex',
                        color: 'var(--accent)',
                        marginBottom: '2rem'
                    }}
                >
                    <CheckCircle size={80} strokeWidth={1.5} />
                </motion.div>

                <h1 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    color: 'var(--primary)',
                    marginBottom: '1rem',
                    lineHeight: 1.2
                }}>
                    Thank You!
                </h1>

                <p style={{
                    fontSize: '1.1rem',
                    color: 'var(--text-muted)',
                    marginBottom: '2.5rem',
                    lineHeight: 1.6
                }}>
                    Your message has been successfully submitted. Our team will review your details and get back to you shortly.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
                        Back to Home
                    </Link>
                </div>
            </motion.div>
        </main>
    );
}
