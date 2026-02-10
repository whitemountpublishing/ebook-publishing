'use client';
import Link from 'next/link';
import Image from 'next/image';
import data from '../src/data/site-content.json';
import ThemeToggle from './ThemeToggle';
import Logo from '../assets/logo.png';
import LogoDark from '../assets/logo-dark.png';
import { useState } from 'react';
import { useTheme } from 'next-themes';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

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
                    {item.subItems && (
                      <svg
                        width='10'
                        height='6'
                        viewBox='0 0 10 6'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='dropdown-arrow'
                      >
                        <path
                          d='M1 1L5 5L9 1'
                          stroke='currentColor'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    )}
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
            <div key={item.path} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <Link
                  href={item.path}
                  className='mobile-nav-link'
                  onClick={() => setIsOpen(false)}
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
                    style={{
                      padding: '1rem',
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-main)', // Assuming variable exists, or inherit
                      cursor: 'pointer',
                      transform: activeSubmenu === item.name ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                )}
              </div>

              {item.subItems && activeSubmenu === item.name && (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingLeft: '1.5rem',
                  paddingBottom: '0.5rem',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(0,0,0,0.02)'
                }}>
                  {item.subItems.map((sub, subIdx) => (
                    <Link
                      key={sub.path}
                      href={sub.path}
                      className='mobile-nav-link'
                      onClick={() => setIsOpen(false)}
                      style={{
                        '--idx': subIdx,
                        fontSize: '1rem',
                        padding: '0.75rem 1rem',
                        color: 'var(--text-muted, #666)',
                        textDecoration: 'none'
                      } as React.CSSProperties}
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
            <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
              <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
            </svg>
            {data.brand.contact.phone}
          </a>
          <a href={`mailto:${data.brand.contact.email}`} className='mobile-email'>
            <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
              <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
              <polyline points='22,6 12,13 2,6' />
            </svg>
            {data.brand.contact.email}
          </a>
        </div>
      </div>

      {/* Overlay */}
      <div className={`menu-overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}></div>
    </>
  );
}
