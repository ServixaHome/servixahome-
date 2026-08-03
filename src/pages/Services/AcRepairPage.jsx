import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, CheckCircle2, ShieldCheck, Wind, AlertTriangle } from 'lucide-react';
import MetaSEO from '../../components/SEO/MetaSEO';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import QuickBookingForm from '../../components/Booking/QuickBookingForm';
import FinalCTABanner from '../../components/CTA/FinalCTABanner';
import { BUSINESS_INFO } from '../../constants/businessInfo';
import { trackCallClick } from '../../services/analytics';
import heroAc from '../../assets/images/hero_ac.jpg';
import './AcRepairPage.css';

const PROBLEMS = [
  "AC blowing warm air / Not cooling room",
  "Water leaking / dripping inside room",
  "Gas leakage & R32 / R410A gas refilling required",
  "AC compressor not starting or tripping MCB",
  "Foul odor / heavy dust build-up in cooling coils",
  "PCB circuit board failure or sensor issue",
  "Remote control unresponsive / display error",
  "Loud rattling or buzzing noise from outdoor unit"
];

const BRANDS = ["Daikin", "Voltas", "Blue Star", "Carrier", "Hitachi", "LG", "Samsung", "Lloyd", "Panasonic", "Midea"];

const AcRepairPage = () => {
  return (
    <div className="service-detail-page">
      <MetaSEO 
        title="AC Repair & Service Navi Mumbai | Gas Charging & Jet Wash" 
        description="Best AC Repair & Servicing in Navi Mumbai. Split & Window AC foam jet wash, R32/R410 gas refilling, PCB repair & compressor fix. Call +91 8779694303."
      />

      <Breadcrumb items={[
        { label: 'Services', path: '/services' },
        { label: 'AC Repair & Service' }
      ]} />

      <section className="detail-hero-section section-padding">
        <div className="container">
          <div className="detail-hero-grid">
            <div className="detail-hero-info">
              <div className="section-badge">
                <Wind size={15} />
                <span>Navi Mumbai's Top AC Service Experts</span>
              </div>
              <h1>AC Repair & Deep Foam Jet Wash in Navi Mumbai</h1>
              <p>
                Get ice-cold cooling back! <strong>SERVIXA HOME</strong> provides doorstep Split & Window AC repairs, R32 gas refilling, and high-pressure jet wash cleaning across Vashi, Nerul, Belapur, Seawoods & Kharghar.
              </p>

              <div className="detail-hero-features">
                <div className="feature-chip"><CheckCircle2 size={15} /><span>Anti-Bacterial Foam Jet Wash</span></div>
                <div className="feature-chip"><CheckCircle2 size={15} /><span>100% Pure Refrigerant Gas</span></div>
                <div className="feature-chip"><CheckCircle2 size={15} /><span>90-Day Cooling Warranty</span></div>
              </div>

              <div className="detail-cta-row">
                <Link to="/booking" className="btn btn-primary btn-lg">
                  <Calendar size={18} />
                  <span>Book Service (₹99 Visit)</span>
                </Link>

                <a 
                  href={`tel:${BUSINESS_INFO.phoneRaw}`} 
                  className="btn btn-call btn-lg"
                  onClick={() => trackCallClick('AcPageHero')}
                >
                  <Phone size={18} />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>

            <div className="detail-hero-media card-base">
              <img src={heroAc} alt="Air Conditioner Jet Service Technician" className="detail-main-img" />
              <div className="media-trust-badge">
                <ShieldCheck size={20} />
                <span>Certified AC Specialists</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Common <span>AC Problems Solved</span></h2>
            <p className="section-subtitle">We service inverter & non-inverter Split & Window ACs from all major brands.</p>
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
          <h2 className="section-title">AC <span>Brands We Service</span></h2>
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

export default AcRepairPage;
