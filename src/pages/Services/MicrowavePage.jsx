import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, CheckCircle2, ShieldCheck, Microwave, AlertTriangle } from 'lucide-react';
import MetaSEO from '../../components/SEO/MetaSEO';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import QuickBookingForm from '../../components/Booking/QuickBookingForm';
import FinalCTABanner from '../../components/CTA/FinalCTABanner';
import { BUSINESS_INFO } from '../../constants/businessInfo';
import { trackCallClick } from '../../services/analytics';
import heroMicrowave from '../../assets/images/hero_microwave.jpg';
import './MicrowavePage.css';

const PROBLEMS = [
  "Microwave running but not heating food",
  "Sparking or burning noise inside cooking chamber",
  "Turntable glass plate not rotating",
  "Touchpad buttons / key panel unresponsive",
  "Microwave tripping home circuit breaker",
  "Display screen blank or showing error code",
  "Door latch / safety switch broken",
  "Loud hum or buzzing sound from magnetron transformer"
];

const BRANDS = ["IFB", "LG", "Samsung", "Panasonic", "Bajaj", "Godrej", "Morphy Richards", "Whirlpool", "Haier"];

const MicrowavePage = () => {
  return (
    <div className="service-detail-page">
      <MetaSEO 
        title="Microwave Oven Repair Navi Mumbai | Magnetron & Touchpad Expert" 
        description="Doorstep Microwave Oven Repair in Navi Mumbai. Solo, Grill & Convection magnetron fix, touchpad panel repair & sparking diagnostics. Call +91 8779694303."
      />

      <Breadcrumb items={[
        { label: 'Services', path: '/services' },
        { label: 'Microwave Repair' }
      ]} />

      <section className="detail-hero-section section-padding">
        <div className="container">
          <div className="detail-hero-grid">
            <div className="detail-hero-info">
              <div className="section-badge">
                <Microwave size={15} />
                <span>Navi Mumbai's Microwave Experts</span>
              </div>
              <h1>Convection, Grill & Solo Microwave Repair in Navi Mumbai</h1>
              <p>
                Microwave not heating or sparking inside? <strong>SERVIXA HOME</strong> provides safe doorstep diagnostics and original component replacements across Navi Mumbai.
              </p>

              <div className="detail-hero-features">
                <div className="feature-chip"><CheckCircle2 size={15} /><span>Safety High-Voltage Inspection</span></div>
                <div className="feature-chip"><CheckCircle2 size={15} /><span>Genuine Magnetron & Diodes</span></div>
                <div className="feature-chip"><CheckCircle2 size={15} /><span>Same Day Doorstep Repair</span></div>
              </div>

              <div className="detail-cta-row">
                <Link to="/booking" className="btn btn-primary btn-lg">
                  <Calendar size={18} />
                  <span>Book Service (₹99 Visit)</span>
                </Link>

                <a 
                  href={`tel:${BUSINESS_INFO.phoneRaw}`} 
                  className="btn btn-call btn-lg"
                  onClick={() => trackCallClick('MicrowavePageHero')}
                >
                  <Phone size={18} />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>

            <div className="detail-hero-media card-base">
              <img src={heroMicrowave} alt="Microwave Oven Repair Engineer" className="detail-main-img" />
              <div className="media-trust-badge">
                <ShieldCheck size={20} />
                <span>Certified Microwave Engineers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Common <span>Microwave Problems Solved</span></h2>
            <p className="section-subtitle">We test magnetrons, high-voltage capacitors, diodes, and membrane keypads for total safety.</p>
          </div>

          <div className="problems-grid">
            {PROBLEMS.map((prob, idx) => (
              <div key={idx} className="problem-card card-base">
                <AlertTriangle size={18} className="prob-icon" />
                <span>{prob}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container text-center">
          <h2 className="section-title">Microwave <span>Brands We Service</span></h2>
          <div className="detail-brands-flex">
            {BRANDS.map((b, i) => (
              <div key={i} className="detail-brand-chip card-base">
                <strong>{b}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <QuickBookingForm />
        </div>
      </section>

      <FinalCTABanner />
    </div>
  );
};

export default MicrowavePage;
