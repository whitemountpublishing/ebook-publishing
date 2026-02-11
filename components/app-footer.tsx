'use client';
import Link from 'next/link';
import Image from 'next/image';
import data from '../src/data/site-content.json';
import Logo from '../assets/logo.png';
import LogoDark from '../assets/logo-dark.png';
import { useTheme } from 'next-themes';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { socials } from '@/src/data/socials';
import TrustPilotImage from '@/assets/trustpilot.png';

export function AppFooter() {
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
                className='object-contain'
              />
            </Link>
            <p className='text-(--text-muted) text-sm leading-relaxed max-w-70'>
              Leading the way in premium book publishing and ghostwriting services with a commitment to excellence.
            </p>
            <div className='flex gap-4 mt-6'>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-(--text-muted) hover:text-(--primary) transition-colors'
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className='mt-8 flex items-center gap-4 text-sm font-medium'>
              <a
                href='https://www.trustpilot.com/review/whitemountpublishing.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Trustpilot Reviews'
                className='flex items-center gap-2 hover:opacity-80 transition-opacity'
              >
                <Image src={TrustPilotImage} alt='Trustpilot Reviews' height={50} className='object-contain' />
              </a>
            </div>
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
            <h4 className='mb-8 text-(--primary) font-bold' style={{ fontFamily: 'var(--font-serif)' }}>
              Quick Links
            </h4>
            <ul className='flex flex-col gap-4 text-sm'>
              <li>
                <Link href='/' className='text-(--text-muted) transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/about-us' className='text-(--text-muted) transition-colors'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='/contact-us' className='text-(--text-muted) transition-colors'>
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
                    <Link href={item.path} className='text-(--text-muted) transition-colors'>
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
          <ul className='flex gap-8'>
            <li>
              <Link href='/privacy-policy' className='text-(--text-muted) transition-colors'>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href='/terms-and-condition' className='text-(--text-muted) transition-colors'>
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href='/refund-policy' className='text-(--text-muted) transition-colors'>
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
