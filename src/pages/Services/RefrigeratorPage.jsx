import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, CheckCircle2, ShieldCheck, Refrigerator, AlertTriangle } from 'lucide-react';
import MetaSEO from '../../components/SEO/MetaSEO';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import QuickBookingForm from '../../components/Booking/QuickBookingForm';
import FinalCTABanner from '../../components/CTA/FinalCTABanner';
import { BUSINESS_INFO } from '../../constants/businessInfo';
import { trackCallClick } from '../../services/analytics';
import heroFridge from '../../assets/images/hero_fridge.jpg';
import './RefrigeratorPage.css';

const PROBLEMS = [
  "Refrigerator not cooling / Lower compartment warm",
  "Freezer ice accumulation / Defrost failure",
  "Gas leakage & Compressor R600a charging",
  "Compressor relay or overload protector burnt",
  "Water leaking under the fridge",
  "Excessive noise from rear cooling fan",
  "Door gasket seal damaged / door not shutting properly",
  "Digital thermostat / PCB board malfunction"
];

const BRANDS = ["Samsung", "LG", "Whirlpool", "Godrej", "Haier", "Bosch", "Panasonic", "Electrolux", "Voltas Beko"];

const RefrigeratorPage = () => {
  return (
    <div className="service-detail-page">
      <MetaSEO 
        title="Refrigerator Repair Navi Mumbai | Double & Single Door Expert" 
        description="Doorstep Refrigerator Repair in Navi Mumbai. Single Door, Double Door & Side-by-Side gas charging, defrost sensor & compressor fix. Call +91 8779694303."
      />

      <Breadcrumb items={[
        { label: 'Services', path: '/services' },
        { label: 'Refrigerator Repair' }
      ]} />

      <section className="detail-hero-section section-padding">
        <div className="container">
          <div className="detail-hero-grid">
            <div className="detail-hero-info">
              <div className="section-badge">
                <Refrigerator size={15} />
                <span>Navi Mumbai's Refrigerator Specialists</span>
              </div>
              <h1>Single & Double Door Refrigerator Repair in Navi Mumbai</h1>
              <p>
                Food spoiling due to fridge cooling failure? <strong>SERVIXA HOME</strong> delivers instant doorstep inspection and repair for Single Door, Double Door, and Side-by-Side refrigerators across Navi Mumbai.
              </p>

              <div className="detail-hero-features">
                <div className="feature-chip"><CheckCircle2 size={15} /><span>100% Genuine Relays & Sensors</span></div>
                <div className="feature-chip"><CheckCircle2 size={15} /><span>Factory Pure Gas Charging</span></div>
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
                  onClick={() => trackCallClick('FridgePageHero')}
                >
                  <Phone size={18} />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>

            <div className="detail-hero-media card-base">
              <img src={heroFridge} alt="Refrigerator Repair Technician" className="detail-main-img" />
              <div className="media-trust-badge">
                <ShieldCheck size={20} />
                <span>Certified Fridge Technicians</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Common <span>Refrigerator Issues Solved</span></h2>
            <p className="section-subtitle">We repair defrost heaters, thermostats, relays, and compressors on-site.</p>
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
          <h2 className="section-title">Fridge <span>Brands We Service</span></h2>
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

export default RefrigeratorPage;
