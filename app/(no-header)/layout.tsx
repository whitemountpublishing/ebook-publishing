import { AppFooter } from '@/components/app-footer';
import React from 'react';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      {children}
      <AppFooter />
    </React.Fragment>
  );
}
