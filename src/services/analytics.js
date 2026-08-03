// GOOGLE ANALYTICS & GOOGLE ADS TRACKING SERVICE
import { BUSINESS_INFO } from '../constants/businessInfo';

export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', BUSINESS_INFO.ga4Id, {
      page_path: url,
    });
  }
};

export const trackCallClick = (source = 'Header') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_call_click', {
      event_category: 'Contact',
      event_label: source,
      value: 1
    });
  }
};

export const trackBookingEvent = (serviceName) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'booking_submitted', {
      event_category: 'Lead',
      event_label: serviceName,
      value: 99
    });
  }
};
