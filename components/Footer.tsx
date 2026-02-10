'use client';
import Link from 'next/link';
import Image from 'next/image';
import data from '../src/data/site-content.json';
import Logo from '../assets/logo.png';
import LogoDark from '../assets/logo-dark.png';
import { useTheme } from 'next-themes';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
export default function Footer() {
  const { resolvedTheme } = useTheme();
  return (
    <footer className='bg-(--bg-secondary) border-t border-(--border) px-0 py-(--container-padding) relative overflow-hidden'>
      <div className='container'>
        <div
          className='grid grid-4 mb-16 gap-12'
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
        >
          <div>
            <Link href='/' className='inline-block mb-8'>
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
            <h4 className='mb-8 text-(--primary) font-bold' style={{ fontFamily: 'var(--font-serif)' }}>
              Contact Info
            </h4>
            <ul className='flex flex-col gap-4 text-(--text-muted) text-sm'>
              <li>
                <a href={`tel:${data.brand.contact.phone}`} className='flex items-center gap-2'>
                  <PhoneIcon stroke='#22c55e' size={16} />

                  {data.brand.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${data.brand.contact.email}`} className='flex items-center gap-2'>
                  <MailIcon stroke='#22c55e' size={16} />
                  {data.brand.contact.email}
                </a>
              </li>
              {data.brand.contact.addresses.map((addr, idx) => (
                <li key={idx} className='flex items-start gap-2'>
                  <MapPinIcon stroke='#22c55e' size={16} className='shrink-0' />
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
        <div className='border-t border-(--border) pt-10 flex justify-between items-center wrap gap-6 text-(--text-muted) text-sm'>
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
