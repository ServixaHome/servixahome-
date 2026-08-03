import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Users, ThumbsUp, CheckCircle2, Phone, Calendar, HeartHandshake } from 'lucide-react';
import MetaSEO from '../../components/SEO/MetaSEO';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import StatisticsSection from '../../components/Statistics/StatisticsSection';
import FinalCTABanner from '../../components/CTA/FinalCTABanner';
import { BUSINESS_INFO } from '../../constants/businessInfo';
import { trackCallClick } from '../../services/analytics';
import heroWashing from '../../assets/images/hero_washing.jpg';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <MetaSEO 
        title="About Servixa Home | #1 Doorstep Appliance Repair Navi Mumbai" 
        description="Learn about SERVIXA HOME - Navi Mumbai's most trusted doorstep repair company. 15,000+ happy customers, transparent ₹99 inspection fee, certified technicians."
      />

      <Breadcrumb items={[{ label: 'About Us' }]} />

      {/* Hero Banner */}
      <section className="about-hero-section section-padding">
        <div className="container">
          <div className="about-hero-grid">
            <div className="about-hero-text">
              <div className="section-badge">
                <ShieldCheck size={16} />
                <span>Navi Mumbai's Trusted Local Business</span>
              </div>
              <h1 className="about-title">
                Building Trust Through Honest, <span>Transparent Repair</span>
              </h1>
              <p className="about-desc">
                Founded with a single mission: to eliminate fake pricing, hidden fees, and unreliable repairs in home appliance servicing. <strong>SERVIXA HOME</strong> is built on the core values of <em>Seva (Service), Suraksha (Security), and Samriddhi (Prosperity)</em>.
              </p>

              <div className="about-points-list">
                <div className="about-point">
                  <CheckCircle2 size={18} className="point-icon" />
                  <span>100% Genuine Manufacturer Approved Spare Parts</span>
                </div>
                <div className="about-point">
                  <CheckCircle2 size={18} className="point-icon" />
                  <span>Transparent ₹99 Inspection Fee (Waived with Repair)</span>
                </div>
                <div className="about-point">
                  <CheckCircle2 size={18} className="point-icon" />
                  <span>Background Verified & Certified Service Engineers</span>
                </div>
              </div>

              <div className="about-cta-row">
                <a 
                  href={`tel:${BUSINESS_INFO.phoneRaw}`} 
                  className="btn btn-call btn-lg"
                  onClick={() => trackCallClick('AboutPageHero')}
                >
                  <Phone size={18} />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
                <Link to="/booking" className="btn btn-primary btn-lg">
                  <Calendar size={18} />
                  <span>Book Doorstep Visit</span>
                </Link>
              </div>
            </div>

            <div className="about-hero-img-wrap card-base">
              <img src={heroWashing} alt="Servixa Home Technician in Action" className="about-img" />
              <div className="about-badge-overlay">
                <Award size={24} className="award-icon" />
                <div>
                  <strong>15,000+</strong>
                  <span>Repairs Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section section-padding">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card card-base">
              <div className="icon-box"><ThumbsUp size={28} /></div>
              <h2>Our Mission</h2>
              <p>
                To provide Navi Mumbai homeowners with fast, reliable, and affordable doorstep appliance repair services without any hidden surprise costs.
              </p>
            </div>

            <div className="mission-card card-base">
              <div className="icon-box"><HeartHandshake size={28} /></div>
              <h2>Our Vision</h2>
              <p>
                To become the most recommended appliance repair company across Navi Mumbai, Mumbai, and Thane by maintaining uncompromised quality and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <StatisticsSection />

      {/* Final CTA */}
      <FinalCTABanner />
    </div>
  );
};

export default AboutPage;
