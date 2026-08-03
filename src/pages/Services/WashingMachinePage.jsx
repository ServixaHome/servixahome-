import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, CheckCircle2, ShieldCheck, Wrench, AlertTriangle } from 'lucide-react';
import MetaSEO from '../../components/SEO/MetaSEO';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import QuickBookingForm from '../../components/Booking/QuickBookingForm';
import FinalCTABanner from '../../components/CTA/FinalCTABanner';
import { BUSINESS_INFO } from '../../constants/businessInfo';
import { trackCallClick } from '../../services/analytics';
import heroWashing from '../../assets/images/hero_washing.jpg';
import './WashingMachinePage.css';

const PROBLEMS = [
  "Washing Machine not spinning or shaking violently",
  "Water not draining / E4 or OE error code",
  "Loud grinding noise during wash cycle",
  "Water leaking from bottom of washer",
  "Door lock stuck or handle broken",
  "PCB mainboard circuit board failure",
  "Washer not powering on at all",
  "Foul odor or mould buildup inside drum"
];

const BRANDS = ["LG", "Samsung", "Whirlpool", "IFB", "Bosch", "Godrej", "Haier", "Panasonic", "Siemens", "Lloyd"];

const WashingMachinePage = () => {
  return (
    <div className="service-detail-page">
      <MetaSEO 
        title="Washing Machine Repair Navi Mumbai | Front & Top Load Expert" 
        description="Doorstep Washing Machine Repair in Navi Mumbai. Front Load, Top Load & Automatic repairs by certified experts. LG, Samsung, IFB, Whirlpool, Bosch. Call +91 8779694303."
      />

      <Breadcrumb items={[
        { label: 'Services', path: '/services' },
        { label: 'Washing Machine Repair' }
      ]} />

      <section className="detail-hero-section section-padding">
        <div className="container">
          <div className="detail-hero-grid">
            <div className="detail-hero-info">
              <div className="section-badge">
                <Wrench size={15} />
                <span>Navi Mumbai's #1 Washing Machine Specialist</span>
              </div>
              <h1>Washing Machine Repair Service in Navi Mumbai</h1>
              <p>
                Is your Front Load or Top Load Washing Machine malfunctioning? <strong>SERVIXA HOME</strong> provides fast doorstep repair across Vashi, Nerul, Kharghar, Belapur & Panvel within 45 minutes!
              </p>

              <div className="detail-hero-features">
                <div className="feature-chip"><CheckCircle2 size={15} /><span>100% Genuine Spare Parts</span></div>
                <div className="feature-chip"><CheckCircle2 size={15} /><span>Transparent ₹99 Visit Fee</span></div>
                <div className="feature-chip"><CheckCircle2 size={15} /><span>Up to 90 Days Warranty</span></div>
              </div>

              <div className="detail-cta-row">
                <Link to="/booking" className="btn btn-primary btn-lg">
                  <Calendar size={18} />
                  <span>Book Service (₹99 Visit)</span>
                </Link>

                <a 
                  href={`tel:${BUSINESS_INFO.phoneRaw}`} 
                  className="btn btn-call btn-lg"
                  onClick={() => trackCallClick('WashingMachinePageHero')}
                >
                  <Phone size={18} />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>

            <div className="detail-hero-media card-base">
              <img src={heroWashing} alt="Washing Machine Repair Technician" className="detail-main-img" />
              <div className="media-trust-badge">
                <ShieldCheck size={20} />
                <span>Certified Washer Technicians</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Common <span>Washing Machine Issues</span> We Fix</h2>
            <p className="section-subtitle">Our engineers carry advanced diagnostic tools to resolve drum, motor, drain pump, and PCB issues on-spot.</p>
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
          <h2 className="section-title">Washing Machine <span>Brands We Service</span></h2>
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

export default WashingMachinePage;
