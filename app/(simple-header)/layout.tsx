import { AppFooter } from '@/components/app-footer';
import { SimpleHeader } from '@/components/simple-header';
import React from 'react';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <SimpleHeader />
      {children}
      <AppFooter />
    </React.Fragment>
  );
}
