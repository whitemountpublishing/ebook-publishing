'use client';
import Link from 'next/link';
import Image from 'next/image';
import data from '../src/data/site-content.json';
import ThemeToggle from './ThemeToggle';
import Logo from '../assets/logo.png';
import LogoDark from '../assets/logo-dark.png';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { ChevronDownIcon, MailIcon, PhoneIcon } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const handleMenuItemClick = () => {
    setIsOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className='top-bar'>
        <div className='container top-bar-content'>
          <a href={`mailto:${data.brand.contact.email}`} className='top-bar-link'>
            <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
              <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
              <polyline points='22,6 12,13 2,6' />
            </svg>
            {data.brand.contact.email}
          </a>
          <a href={`tel:${data.brand.contact.phone}`} className='top-bar-link'>
            <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
              <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
            </svg>
            {data.brand.contact.phone}
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className='main-header'>
        <div className='container header-content'>
          {/* Logo */}
          <Link href='/' className='logo-link'>
            <Image
              src={resolvedTheme === 'dark' ? LogoDark : Logo}
              alt={data.brand.name}
              height={30}
              width={100}
              className='h-12 sm:h-16 w-auto'
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className='desktop-nav'>
            <ul className='nav-list'>
              {data.navigation.map((item) => (
                <li key={item.path} className='nav-item'>
                  <Link href={item.path} className='nav-link'>
                    {item.name}
                    {item.subItems && <ChevronDownIcon size={16} className='ml-1 inline-block' />}
                  </Link>
                  {item.subItems && (
                    <ul className='dropdown'>
                      {item.subItems.map((sub) => (
                        <li key={sub.path}>
                          <Link href={sub.path} className='dropdown-item'>
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Actions */}
          <div className='header-actions'>
            <ThemeToggle />

            {/* Hamburger Menu */}
            <button
              className={`hamburger ${isOpen ? 'active' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label='Toggle Menu'
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className='mobile-menu-header'>
          <Link href='/' onClick={() => setIsOpen(false)}>
            <Image src={Logo} alt={data.brand.name} height={40} width={130} style={{ objectFit: 'contain' }} />
          </Link>
          <button className='close-btn' onClick={() => setIsOpen(false)} aria-label='Close Menu'>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
              <line x1='18' y1='6' x2='6' y2='18' />
              <line x1='6' y1='6' x2='18' y2='18' />
            </svg>
          </button>
        </div>
        <nav className='mobile-nav'>
          {data.navigation.map((item, idx) => (
            <div key={item.path} className='flex flex-col'>
              <div className='flex items-center justify-between relative'>
                <Link
                  href={item.path}
                  className='mobile-nav-link no-underline'
                  onClick={handleMenuItemClick}
                  style={{ '--idx': idx, flex: 1, textDecoration: 'none' } as React.CSSProperties}
                >
                  {item.name}
                </Link>
                {item.subItems && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSubmenu(activeSubmenu === item.name ? null : item.name);
                    }}
                    className='p-4 cursor-pointer absolute top-1/2 right-0 -translate-y-1/2 inline-block text-gray-600 transform transition-transform duration-300'
                  >
                    <ChevronDownIcon
                      size={20}
                      className={`transform transition-transform duration-300 ${activeSubmenu === item.name ? 'rotate-180' : ''}`}
                    />
                  </button>
                )}
              </div>

              {item.subItems && activeSubmenu === item.name && (
                <div className='flex flex-col px-6 pb-2 gap-2 bg-gray-100 rounded-md'>
                  {item.subItems.map((sub, subIdx) => (
                    <Link
                      key={sub.path}
                      href={sub.path}
                      className='mobile-nav-link text-sm! no-underline'
                      onClick={handleMenuItemClick}
                      style={
                        {
                          '--idx': subIdx,
                        } as React.CSSProperties
                      }
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className='mobile-menu-footer'>
          <a href={`tel:${data.brand.contact.phone}`} className='mobile-phone'>
            <PhoneIcon size={18} />
            {data.brand.contact.phone}
          </a>
          <a href={`mailto:${data.brand.contact.email}`} className='mobile-email'>
            <MailIcon size={18} />
            {data.brand.contact.email}
          </a>
        </div>
      </div>

      {/* Overlay */}
      <div className={`menu-overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}></div>
    </>
  );
}
