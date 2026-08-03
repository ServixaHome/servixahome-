import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import MetaSEO from '../../components/SEO/MetaSEO';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import FinalCTABanner from '../../components/CTA/FinalCTABanner';
import { BUSINESS_INFO } from '../../constants/businessInfo';
import { submitBookingForm } from '../../services/web3forms';
import { trackCallClick } from '../../services/analytics';
import { triggerQuickWhatsApp } from '../../services/whatsapp';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'General Enquiry',
    address: '',
    problem: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatusMessage({ type: '', text: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setStatusMessage({ type: 'error', text: 'Please fill out your name and phone number.' });
      return;
    }

    setIsSubmitting(true);
    const result = await submitBookingForm(formData);
    setIsSubmitting(false);

    if (result.success) {
      setStatusMessage({ type: 'success', text: 'Thank you! Your message has been sent successfully. Our team will call you shortly.' });
      setFormData({ name: '', phone: '', email: '', service: 'General Enquiry', address: '', problem: '' });
    } else {
      setStatusMessage({ type: 'error', text: result.message });
    }
  };

  return (
    <div className="contact-page">
      <MetaSEO 
        title="Contact Us | Servixa Home Navi Mumbai | +91 8779694303" 
        description="Contact SERVIXA HOME for doorstep appliance repair in Navi Mumbai. Phone: +91 8779694303, WhatsApp: +91 8779694303, Email: home.servixa@gmail.com. Open 9 AM - 10 PM daily."
      />

      <Breadcrumb items={[{ label: 'Contact Us' }]} />

      <section className="contact-hero-banner">
        <div className="container text-center">
          <span className="hero-tag"><Phone size={16} /> Fast Customer Support</span>
          <h1>Get In Touch With SERVIXA HOME</h1>
          <p>Have questions or need emergency doorstep repair in Navi Mumbai? Reach out via Call, WhatsApp, or Form.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="contact-main-grid">
            {/* Left: Official Business Contact Cards */}
            <div className="contact-info-column">
              <div className="info-card card-base">
                <div className="info-icon-box"><Phone size={24} /></div>
                <div>
                  <h3>Call Support Helpline</h3>
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} onClick={() => trackCallClick('ContactPage')} className="info-link-highlight">
                    {BUSINESS_INFO.phone}
                  </a>
                  <p>Available 24/7 for emergency repair inquiries</p>
                </div>
              </div>

              <div className="info-card card-base">
                <div className="info-icon-box whatsapp-box"><MessageSquare size={24} /></div>
                <div>
                  <h3>Official WhatsApp</h3>
                  <button onClick={() => triggerQuickWhatsApp("Hello Servixa Home, I want to book a doorstep repair service.")} className="info-btn-link">
                    +91 8779694303 (Instant Chat)
                  </button>
                  <p>Fast 2-minute response during working hours</p>
                </div>
              </div>

              <div className="info-card card-base">
                <div className="info-icon-box"><Mail size={24} /></div>
                <div>
                  <h3>Email Address</h3>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="info-link">
                    {BUSINESS_INFO.email}
                  </a>
                  <p>Send business & AMC inquiry emails</p>
                </div>
              </div>

              <div className="info-card card-base">
                <div className="info-icon-box"><Clock size={24} /></div>
                <div>
                  <h3>Working Hours</h3>
                  <strong>{BUSINESS_INFO.workingHours}</strong>
                  <p>Operating all 7 days including Sunday</p>
                </div>
              </div>

              <div className="info-card card-base">
                <div className="info-icon-box"><MapPin size={24} /></div>
                <div>
                  <h3>Primary Service Coverage</h3>
                  <strong>Serving Navi Mumbai & Nearby Areas</strong>
                  <p>Vashi, Nerul, Belapur, Seawoods, Kharghar, Airoli, Panvel & surrounding nodes</p>
                </div>
              </div>
            </div>

            {/* Right: Message & Inspection Booking Form */}
            <div className="contact-form-column card-base">
              <h2>Send Us a Message</h2>
              <p className="form-sub-note">Fill out this quick form for instant technician dispatch in Navi Mumbai.</p>

              {statusMessage.text && (
                <div className={`status-alert ${statusMessage.type === 'error' ? 'alert-error' : 'alert-success'}`}>
                  {statusMessage.type === 'error' ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />}
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Full Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Anand Varma" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="10-Digit Mobile Number" maxLength={10} required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address (Optional)</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Required</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange}>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Washing Machine Repair">Washing Machine Repair</option>
                    <option value="AC Repair & Service">AC Repair & Servicing</option>
                    <option value="Refrigerator Repair">Refrigerator Repair</option>
                    <option value="Microwave Repair">Microwave Repair</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Doorstep Address in Navi Mumbai</label>
                  <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Sector, Area, Society Name" />
                </div>

                <div className="form-group">
                  <label htmlFor="problem">Message / Problem Description</label>
                  <textarea id="problem" name="problem" rows="3" value={formData.problem} onChange={handleChange} placeholder="Describe the issue with your appliance..." />
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-full" disabled={isSubmitting}>
                  {isSubmitting ? <span>Sending...</span> : <><Send size={18} /><span>Send Message</span></>}
                </button>

                <div className="form-visit-reassurance">
                  <ShieldCheck size={16} />
                  <span>Doorstep Visit Inspection Fee ₹99 (100% Waived if repair approved).</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FinalCTABanner />
    </div>
  );
};

export default ContactPage;
