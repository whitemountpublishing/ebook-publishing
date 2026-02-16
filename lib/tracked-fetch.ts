import { LANDING_URL_KEY } from '@/src/data/constants';

export function prepareTrackingData() {
  const landingUrl = typeof window !== 'undefined' ? sessionStorage.getItem(LANDING_URL_KEY) : null;

  if (!landingUrl) return null;

  try {
    const url = new URL(landingUrl);
    const params = new URLSearchParams(url.search);

    const trackingData = {
      landing_url: landingUrl,
      referrer: document.referrer || null,
      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: params.get('utm_campaign'),
      gclid: params.get('gclid'),
      fbclid: params.get('fbclid'),
    };

    return trackingData;
  } catch (error) {
    console.error('Error parsing landing URL:', error);
    return null;
  }
}

export type TrackingData = ReturnType<typeof prepareTrackingData>;
