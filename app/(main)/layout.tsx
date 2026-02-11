import { AppFooter } from '@/components/app-footer';
import Header from '@/components/Header';
import React from 'react';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <AppFooter />
    </React.Fragment>
  );
}
