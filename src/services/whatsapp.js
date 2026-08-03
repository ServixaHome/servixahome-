// WHATSAPP AUTOMATION SERVICE FOR SERVIXA HOME
import { BUSINESS_INFO } from '../constants/businessInfo';

export const triggerWhatsAppBooking = (formData = {}) => {
  const name = formData.name || "Customer";
  const phone = formData.phone || "Not provided";
  const service = formData.service || "Appliance Repair Service";
  const date = formData.date || "Today / Urgent";
  const time = formData.time || "As soon as possible";
  const address = formData.address || "Navi Mumbai";
  const problem = formData.problem || "Inspection and doorstep repair required.";

  const messageText = `Hello Servixa Home,\n\nI want to book a repair service.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Service:* ${service}\n*Preferred Date:* ${date}\n*Preferred Time:* ${time}\n*Address:* ${address}\n*Problem:* ${problem}\n\nPlease contact me and confirm technician visit.`;

  const encodedMsg = encodeURIComponent(messageText);
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodedMsg}`;

  // Track event in GA4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'Engagement',
      event_label: service
    });
  }

  // Open WhatsApp in new tab / app
  window.open(whatsappUrl, '_blank');
};

export const triggerQuickWhatsApp = (customMsg = "") => {
  const defaultText = customMsg || `Hello Servixa Home, I need doorstep appliance repair in Navi Mumbai. Please provide details.`;
  const encoded = encodeURIComponent(defaultText);
  const url = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encoded}`;
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_quick_click', {
      event_category: 'Engagement'
    });
  }

  window.open(url, '_blank');
};
