import React from 'react';
import MetaSEO from '../../components/SEO/MetaSEO';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import QuickBookingForm from '../../components/Booking/QuickBookingForm';
import { ShieldCheck, Clock, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants/businessInfo';
import { trackCallClick } from '../../services/analytics';
import { triggerQuickWhatsApp } from '../../services/whatsapp';
import './BookingPage.css';

const BookingPage = () => {
  return (
    <div className="booking-page">
      <MetaSEO 
        title="Book Appliance Repair Service | ₹99 Inspection Fee" 
        description="Book doorstep repair for Washing Machine, AC, Refrigerator & Microwave in Navi Mumbai. Quick 60-second form submission with guaranteed 30-min technician response."
      />

      <Breadcrumb items={[{ label: 'Book Service' }]} />

      <section className="booking-hero-banner">
        <div className="container">
          <div className="booking-banner-content">
            <div className="banner-badge">
              <ShieldCheck size={16} />
              <span>Doorstep Visit Across Navi Mumbai</span>
            </div>
            <h1>Book Your Doorstep Repair in 60 Seconds</h1>
            <p>
              Fill out the simple form below. Our certified technician will arrive at your home with genuine spare parts.
            </p>
          </div>
        </div>
      </section>

      {/* Main Booking Form */}
      <div className="booking-form-wrapper">
        <QuickBookingForm />
      </div>

      {/* Direct Phone / WhatsApp Helpline */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="direct-helpline-card card-base">
            <div className="helpline-text">
              <h3>Prefer to Book over Call or WhatsApp?</h3>
              <p>Speak directly with our Navi Mumbai service coordinator for immediate booking dispatch.</p>
            </div>

            <div className="helpline-buttons">
              <a 
                href={`tel:${BUSINESS_INFO.phoneRaw}`} 
                className="btn btn-call btn-lg"
                onClick={() => trackCallClick('BookingPageHelpline')}
              >
                <Phone size={20} />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <button 
                onClick={() => triggerQuickWhatsApp("Hello Servixa Home, I want to book doorstep repair over WhatsApp.")}
                className="btn btn-whatsapp btn-lg"
              >
                <MessageSquare size={20} />
                <span>WhatsApp Booking</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
