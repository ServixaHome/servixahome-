import React from 'react';
import MetaSEO from '../../components/SEO/MetaSEO';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import FAQSection from '../../components/FAQ/FAQSection';
import FinalCTABanner from '../../components/CTA/FinalCTABanner';
import { Phone, MessageSquare, HelpCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants/businessInfo';
import { trackCallClick } from '../../services/analytics';
import { triggerQuickWhatsApp } from '../../services/whatsapp';
import './FAQPage.css';

const FAQPage = () => {
  return (
    <div className="faq-page">
      <MetaSEO 
        title="Frequently Asked Questions | Servixa Home Navi Mumbai" 
        description="Find answers to all your questions about Servixa Home's doorstep appliance repair services, ₹99 inspection policy, 90-day warranty, and technician visits in Navi Mumbai."
      />

      <Breadcrumb items={[{ label: 'FAQ' }]} />

      <section className="faq-page-banner">
        <div className="container">
          <div className="faq-banner-text">
            <span className="hero-tag"><HelpCircle size={16} /> Customer Help Center</span>
            <h1>Frequently Asked Questions</h1>
            <p>Everything you need to know about our doorstep repair process, pricing transparency, and service warranty.</p>
          </div>
        </div>
      </section>

      {/* Main Accordion FAQ Section */}
      <FAQSection />

      {/* Direct Contact Prompt */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="faq-contact-card card-base text-center">
            <h3>Have a Specific Question Not Listed Here?</h3>
            <p>Our customer support team is available from 09:00 AM to 10:00 PM every day to assist you.</p>
            <div className="faq-prompt-actions">
              <a 
                href={`tel:${BUSINESS_INFO.phoneRaw}`} 
                className="btn btn-call btn-lg"
                onClick={() => trackCallClick('FAQPageContact')}
              >
                <Phone size={18} />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <button 
                onClick={() => triggerQuickWhatsApp("Hello Servixa Home, I have a question regarding doorstep repair.")}
                className="btn btn-whatsapp btn-lg"
              >
                <MessageSquare size={18} />
                <span>Ask on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <FinalCTABanner />
    </div>
  );
};

export default FAQPage;
