'use client';

import React from 'react';
import { MailIcon, PhoneIcon } from 'lucide-react';
import data from '@/src/data/site-content.json';
import ThemeToggle from './ThemeToggle';
import Logo from '@/assets/logo.png';
import LogoDark from '@/assets/logo-dark.png';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import GetStartedButton from './get-started-button';

export function SimpleHeader() {
  const { resolvedTheme } = useTheme();
  return (
    <React.Fragment>
      <div className='top-bar'>
        <div className='container top-bar-content'>
          <a href={`mailto:${data.brand.contact.email}`} className='top-bar-link'>
            <MailIcon size={18} />
            {data.brand.contact.email}
          </a>
          <a href={`tel:${data.brand.contact.phone}`} className='top-bar-link'>
            <PhoneIcon size={18} />
            {data.brand.contact.phone}
          </a>
        </div>
      </div>

      <header className='main-header'>
        <div className='container header-content'>
          {/* Logo */}
          <Link href='/' className='logo-link'>
            <Image
              src={resolvedTheme === 'dark' ? LogoDark : Logo}
              alt={data.brand.name}
              height={30}
              width={100}
              className='h-12 sm:h-16 w-auto object-contain'
              priority
            />
          </Link>

          {/* Header Actions */}
          <div className='header-actions'>
            <ThemeToggle />

            <GetStartedButton label='Get a quote' className='py-2' />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
