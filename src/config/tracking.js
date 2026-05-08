export const trackingConfig = {
  gtmId: import.meta.env.VITE_GTM_ID || '',
  ga4Id: import.meta.env.VITE_GA4_ID || '',
  metaPixelId: import.meta.env.VITE_META_PIXEL_ID || ''
}

export function trackEvent(eventName, payload = {}) {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: eventName, ...payload })

  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, payload)
  }
}
