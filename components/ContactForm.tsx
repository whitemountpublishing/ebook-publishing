"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import data from '../src/data/site-content.json';

export default function ContactForm() {
    const router = useRouter();
    const { form } = data.pages.contact;
    const { contact } = data.brand;
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
        boxSizing: 'border-box' as const
    };

    const inputFocusProps = {
        whileFocus: {
            borderColor: 'var(--accent)',
            boxShadow: '0 0 0 3px rgba(245, 158, 11, 0.15)'
        }
    };

    const labelStyles = {
        fontWeight: 600,
        fontSize: '0.9rem',
        color: 'var(--text-main)',
        marginBottom: '0.5rem',
        display: 'block'
    };

    return (
        <section className="section" style={{
            backgroundColor: 'var(--bg-secondary)',
            position: 'relative',
            padding: 'clamp(3rem, 8vw, 6rem) 0',
            overflow: 'hidden'
        }}>
            {/* Subtle Background Accent */}
            <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-20%',
                width: '600px',
                height: '600px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0, 61, 51, 0.05) 0%, transparent 70%)',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
                    gap: 'clamp(2rem, 5vw, 4rem)',
                    alignItems: 'start'
                }}>
                    {/* Left Side: Text and Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h6
                            style={{
                                color: 'var(--accent)',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                marginBottom: '1rem',
                                letterSpacing: '2px',
                                fontSize: '0.85rem'
                            }}
                        >
                            Let's Connect
                        </motion.h6>
                        <motion.h2
                            style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                                color: 'var(--primary)',
                                marginBottom: '1rem',
                                lineHeight: 1.2
                            }}
                        >
                            {form.title}
                        </motion.h2>
                        <motion.p
                            style={{
                                color: 'var(--text-muted)',
                                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                                lineHeight: 1.8,
                                marginBottom: '2.5rem',
                                maxWidth: '500px'
                            }}
                        >
                            {form.description}
                        </motion.p>

                        {/* Contact Cards */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                            gap: '1rem',
                            marginBottom: '2rem'
                        }}>
                            {[
                                {
                                    label: "Email",
                                    value: contact.email,
                                    href: `mailto:${contact.email}`,
                                    icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                },
                                {
                                    label: "Phone",
                                    value: contact.phone,
                                    href: `tel:${contact.phone.replace(/\s/g, '')}`,
                                    icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                }
                            ].map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.href}
                                    whileHover={{ scale: 1.02, borderColor: 'var(--accent)' }}
                                    style={{
                                        display: 'flex',
                                        gap: 'clamp(0.75rem, 2vw, 1rem)',
                                        alignItems: 'center',
                                        padding: 'clamp(1rem, 3vw, 1.25rem)',
                                        borderRadius: '1rem',
                                        backgroundColor: 'var(--bg-main)',
                                        border: '2px solid var(--border)',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                        minWidth: 0
                                    }}
                                >
                                    <div style={{
                                        width: 'clamp(40px, 10vw, 48px)',
                                        height: 'clamp(40px, 10vw, 48px)',
                                        backgroundColor: 'var(--primary)',
                                        borderRadius: '0.75rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        flexShrink: 0
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
                                        <span style={{ fontWeight: 600, fontSize: 'clamp(0.7rem, 2vw, 0.8rem)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</span>
                                        <span style={{ fontWeight: 700, fontSize: 'clamp(0.85rem, 2.5vw, 1rem)', color: 'var(--primary)', wordBreak: 'break-word', overflowWrap: 'break-word' }}>{item.value}</span>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                            <span style={{ fontWeight: 600, color: 'var(--text-muted)', marginRight: '0.5rem', fontSize: '0.9rem' }}>Follow Us:</span>
                            {[
                                { name: 'facebook', icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg> },
                                { name: 'twitter', icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg> },
                                { name: 'instagram', icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S1 3.35 .63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.012 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.012 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.012-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.266.057-1.645.07-4.848.07s-3.584-.015-4.85-.074c-1.17-.061-1.805-.256-2.227-.421-.562-.224-.96-.479-1.382-.899-.419-.419-.679-.824-.896-1.38-.164-.42-.36-1.065-.413-2.235-.057-1.266-.07-1.645-.07-4.848s.015-3.584.074-4.85c.061-1.17.256-1.805.421-2.227.224-.562.479-.96.899-1.382.419-.419.824-.679 1.38-.896.42-.164 1.065-.36 2.235-.413 1.266-.057 1.645-.07 4.848-.07zM12 5.837a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm7.846-10.405a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" /></svg> },
                                { name: 'linkedin', icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" /></svg> }
                            ].map((social) => (
                                <motion.a
                                    key={social.name}
                                    whileHover={{ y: -3, backgroundColor: 'var(--primary)', color: 'white' }}
                                    href="#"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '0.5rem',
                                        border: '2px solid var(--border)',
                                        backgroundColor: 'var(--bg-main)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--text-muted)',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            backgroundColor: 'var(--bg-main)',
                            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                            borderRadius: '1.5rem',
                            border: '2px solid var(--border)',
                            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)'
                        }}
                    >
                        <h3 style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                            color: 'var(--primary)',
                            marginBottom: '0.5rem'
                        }}>
                            Send Us a Message
                        </h3>
                        <p style={{
                            color: 'var(--text-muted)',
                            fontSize: '0.95rem',
                            marginBottom: '1.5rem'
                        }}>
                            Fill out the form below and we'll get back to you within 24 hours.
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
                                Something went wrong. Please try again.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {/* Name & Email Row */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                                gap: '1.25rem'
                            }}>
                                <div>
                                    <label style={labelStyles}>Full Name *</label>
                                    <motion.input
                                        {...inputFocusProps}
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                        style={inputStyles}
                                    />
                                </div>
                                <div>
                                    <label style={labelStyles}>Email Address *</label>
                                    <motion.input
                                        {...inputFocusProps}
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                        style={inputStyles}
                                    />
                                </div>
                            </div>

                            {/* Phone & Service Row */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                                gap: '1.25rem'
                            }}>
                                <div>
                                    <label style={labelStyles}>Phone Number</label>
                                    <motion.input
                                        {...inputFocusProps}
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 234 567 890"
                                        style={inputStyles}
                                    />
                                </div>
                                <div>
                                    <label style={labelStyles}>Service Interested In</label>
                                    <motion.select
                                        {...inputFocusProps}
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        style={{
                                            ...inputStyles,
                                            cursor: 'pointer',
                                            appearance: 'none',
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'right 1rem center'
                                        }}
                                    >
                                        <option value="">Select a service...</option>
                                        <option value="ghostwriting">Ghostwriting</option>
                                        <option value="editing">Editing</option>
                                        <option value="proofreading">Proofreading</option>
                                        <option value="book-cover">Book Cover Design</option>
                                        <option value="publishing">Book Publishing</option>
                                        <option value="marketing">Book Marketing</option>
                                        <option value="formatting">Formatting</option>
                                        <option value="other">Other</option>
                                    </motion.select>
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label style={labelStyles}>Subject</label>
                                <motion.input
                                    {...inputFocusProps}
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="How can we help you?"
                                    style={inputStyles}
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label style={labelStyles}>Your Message *</label>
                                <motion.textarea
                                    {...inputFocusProps}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project..."
                                    rows={5}
                                    required
                                    style={{
                                        ...inputStyles,
                                        resize: 'vertical',
                                        minHeight: '120px'
                                    }}
                                />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: 'var(--accent-hover)' }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
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
                                    opacity: status === 'loading' ? 0.7 : 1
                                }}
                            >
                                {status === 'loading' ? 'Sending Message...' : 'Send Message'}
                            </motion.button>

                            <p style={{
                                fontSize: '0.8rem',
                                color: 'var(--text-muted)',
                                textAlign: 'center',
                                marginTop: '0.5rem'
                            }}>
                                By submitting, you agree to our privacy policy.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div >
        </section >
    );
}
