"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import data from '../src/data/site-content.json';
import Pattern from '../assets/pattern-2.webp';

import { FileSearch, FilePenLine, Palette, Globe, PenTool, Megaphone, Printer } from 'lucide-react';

export default function Services() {
    const { servicesOverview } = data.pages.home;

    // Map of service titles to their respective icons
    const iconMap = {
        "Ghostwriting": PenTool,
        "Editing": FilePenLine,
        "Book Cover Design": Palette,
        "Book Publishing": Globe,
        "Book Marketing": Megaphone,
        "Book Printing": Printer,
    };

    return (
        <section className="section" style={{
            backgroundColor: 'var(--primary)',
            padding: 'var(--section-padding) 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${Pattern.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundSize: '1800px',
                opacity: 0.1,
                zIndex: 0,

            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 8vw, 6rem)' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                        style={{
                            marginBottom: '1.5rem',
                            fontFamily: 'var(--font-serif)',
                            color: 'white',
                            fontSize: 'clamp(2.25rem, 6vw, 3.5rem)'
                        }}
                    >
                        {servicesOverview.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            maxWidth: '900px',
                            margin: '0 auto',
                            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                            lineHeight: 1.8
                        }}
                    >
                        {servicesOverview.description}
                    </motion.p>
                </div>
                <div className="grid" style={{ gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 100%, 350px), 1fr))' }}>
                    {servicesOverview.items.map((item, idx) => {
                        const Icon = iconMap[item.title as keyof typeof iconMap] || FileSearch;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover="hover"
                                className="glass"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.5rem',
                                    padding: 'clamp(2.5rem, 5vw, 3.5rem) clamp(1.5rem, 5vw, 2.5rem)',
                                    position: 'relative',
                                    cursor: 'default',
                                    height: '100%',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '2rem',
                                    overflow: 'hidden',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    color: 'white',
                                    backdropFilter: 'blur(10px)',
                                    transition: 'all 0.4s ease'
                                }}
                            >
                                <motion.div
                                    variants={{
                                        hover: {
                                            scale: 1.1,
                                            backgroundColor: 'var(--accent)',
                                            color: 'var(--primary)'
                                        }
                                    }}
                                    style={{
                                        width: '64px',
                                        height: '64px',
                                        backgroundColor: 'rgba(245, 158, 11, 0.1)',
                                        borderRadius: '18px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--accent)',
                                        marginBottom: '0.5rem',
                                        transition: 'all 0.3s ease',
                                        flexShrink: 0
                                    }}
                                >
                                    <Icon size={32} strokeWidth={1.5} />
                                </motion.div>

                                <h4 style={{
                                    margin: 0,
                                    fontSize: 'clamp(1.35rem, 4vw, 1.75rem)',
                                    fontWeight: 800,
                                    color: 'var(--accent)',
                                    fontFamily: 'var(--font-serif)'
                                }}>
                                    {item.title}
                                </h4>
                                <p style={{
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    fontSize: '1rem',
                                    margin: 0,
                                    lineHeight: 1.8,
                                    flexGrow: 1
                                }}>
                                    {item.description}
                                </p>

                                <Link
                                    href={data.navigation.find(nav => nav.name === "Services")?.subItems?.find(sub => sub.name === item.title)?.path || '#'}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        color: 'var(--accent)',
                                        fontWeight: 800,
                                        fontSize: '1rem',
                                        marginTop: '1.5rem',
                                        transition: 'all 0.3s ease',
                                        textDecoration: 'none'
                                    }}
                                >
                                    <motion.div
                                        variants={{
                                            hover: { gap: '1rem', color: 'white' }
                                        }}
                                        style={{ display: 'flex', alignItems: 'center', gap: 'inherit' }}
                                    >
                                        View Details
                                        <span style={{ fontSize: '1.4rem' }}>→</span>
                                    </motion.div>
                                </Link>

                                {/* Background Numbering */}
                                <div style={{
                                    position: 'absolute',
                                    top: '15px',
                                    right: '25px',
                                    fontSize: '6rem',
                                    fontWeight: 900,
                                    color: 'white',
                                    opacity: 0.05,
                                    pointerEvents: 'none',
                                    zIndex: 0,
                                    fontFamily: 'var(--font-serif)',
                                    fontStyle: 'italic'
                                }}>
                                    {idx + 1}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
