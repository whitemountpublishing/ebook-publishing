"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import data from '../src/data/site-content.json';

interface HeroFormProps {
    defaultService?: string;
}

export default function HeroForm({ defaultService = "" }: HeroFormProps) {
    const router = useRouter();
    const { servicesOverview } = data.pages.home;
    const [formData, setFormData] = React.useState({
        service: defaultService,
        name: '',
        phone: '',
        email: ''
    });
    const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    React.useEffect(() => {
        if (defaultService) {
            setFormData(prev => ({ ...prev, service: defaultService }));
        }
    }, [defaultService]);

    const inputStyle = {
        width: '100%',
        padding: '0.875rem 1rem',
        borderRadius: '0.5rem',
        border: '1px solid #ced4da',
        fontSize: '0.95rem',
        outline: 'none',
        transition: 'border-color 0.2s',
        marginBottom: '1rem',
        color: '#212529'
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
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
                setFormData({ service: defaultService, name: '', phone: '', email: '' });
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

    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '1.5rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                color: '#212529'
            }}>
                <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    marginBottom: '0.5rem',
                    textAlign: 'center'
                }}>
                    What services are you looking for?
                </h3>
                <p style={{
                    fontSize: '0.9rem',
                    color: '#6c757d',
                    marginBottom: '1.5rem',
                    textAlign: 'center'
                }}>
                    Fill the form below to get a custom quote.
                </p>

                {status === 'success' && (
                    <div style={{
                        padding: '1rem',
                        marginBottom: '1rem',
                        backgroundColor: '#d1e7dd',
                        color: '#0f5132',
                        borderRadius: '0.5rem',
                        textAlign: 'center'
                    }}>
                        Message sent successfully! We'll get back to you soon.
                    </div>
                )}

                {status === 'error' && (
                    <div style={{
                        padding: '1rem',
                        marginBottom: '1rem',
                        backgroundColor: '#f8d7da',
                        color: '#842029',
                        borderRadius: '0.5rem',
                        textAlign: 'center'
                    }}>
                        Something went wrong. Please try again or contact us directly.
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                    >
                        <option value="">Select Service*</option>
                        {servicesOverview.items.map((item, idx) => (
                            <option key={idx} value={item.title}>
                                {item.title}
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name*"
                        style={inputStyle}
                        required
                    />
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '1rem' }}>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone No.*"
                            style={inputStyle}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address*"
                            style={inputStyle}
                            required
                        />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={status === 'loading'}
                        className="btn btn-primary"
                        style={{
                            width: '100%',
                            padding: '1.1rem',
                            fontSize: '1.1rem',
                            fontWeight: 800,
                            borderRadius: '0.625rem',
                            marginTop: '0.5rem',
                            boxShadow: '0 10px 20px rgba(245, 158, 11, 0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            opacity: status === 'loading' ? 0.7 : 1,
                            cursor: status === 'loading' ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {status === 'loading' ? 'Sending...' : 'Get Started'}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                    </motion.button>
                </form>
            </div>
        </motion.div>
    );
}
