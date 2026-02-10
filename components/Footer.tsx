'use client';
import Link from 'next/link';
import Image from 'next/image';
import data from '../src/data/site-content.json';
import Logo from '../assets/logo.png';
import LogoDark from '../assets/logo-dark.png';
import { useTheme } from 'next-themes';
export default function Footer() {
  const { resolvedTheme } = useTheme();
  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        padding: 'var(--section-padding) 0 var(--container-padding)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className='container'>
        <div
          className='grid grid-4'
          style={{ marginBottom: '4rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}
        >
          <div style={{ gridColumn: 'span 1' }}>
            <Link href='/' style={{ display: 'inline-block', marginBottom: '2rem' }}>
              <Image
                src={resolvedTheme === 'dark' ? LogoDark : Logo}
                alt={data.brand.name}
                height={60}
                width={180}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '300px' }}>
              Leading the way in premium book publishing and ghostwriting services with a commitment to excellence.
            </p>
          </div>
          <div>
            <h4
              style={{
                marginBottom: '2rem',
                color: 'var(--primary)',
                fontFamily: 'var(--font-serif)',
                fontWeight: 800,
              }}
            >
              Contact Info
            </h4>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                color: 'var(--text-muted)',
                fontSize: '0.95rem',
              }}
            >
              <li>
                <a
                  href={`tel:${data.brand.contact.phone}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#22c55e'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z'></path>
                  </svg>
                  {data.brand.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${data.brand.contact.email}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#22c55e'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <rect width='20' height='16' x='2' y='4' rx='2'></rect>
                    <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
                  </svg>
                  {data.brand.contact.email}
                </a>
              </li>
              {data.brand.contact.addresses.map((addr, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#22c55e'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    style={{ marginTop: '3px', flexShrink: 0 }}
                  >
                    <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'></path>
                    <circle cx='12' cy='10' r='3'></circle>
                  </svg>
                  {addr}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4
              style={{
                marginBottom: '2rem',
                color: 'var(--primary)',
                fontFamily: 'var(--font-serif)',
                fontWeight: 800,
              }}
            >
              Quick Links
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
              <li>
                <Link href='/' style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/about-us' style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='/contact-us' style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4
              style={{
                marginBottom: '2rem',
                color: 'var(--primary)',
                fontFamily: 'var(--font-serif)',
                fontWeight: 800,
              }}
            >
              Our Services
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
              {data.navigation
                .find((n) => n.name === 'Services')
                ?.subItems?.slice(0, 5)
                .map((item) => (
                  <li key={item.path}>
                    <Link href={item.path} style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            color: 'var(--text-muted)',
            fontSize: '0.9rem',
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} {data.brand.name}. All Rights Reserved.
          </p>
          <ul style={{ display: 'flex', gap: '2rem' }}>
            <li>
              <Link href='/privacy-policy'>Privacy Policy</Link>
            </li>
            <li>
              <Link href='/terms-and-condition'>Terms & Conditions</Link>
            </li>
            <li>
              <Link href='/refund-policy'>Refund Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
