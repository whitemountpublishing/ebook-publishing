'use client';

import { LANDING_URL_KEY } from '@/src/data/constants';
import { useEffect } from 'react';

export default function LandingTracker() {
  useEffect(() => {
    // already saved? don't overwrite
    if (sessionStorage.getItem(LANDING_URL_KEY)) return;

    const url = window.location.href;

    sessionStorage.setItem(LANDING_URL_KEY, url);
  }, []);

  return null;
}
