import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST, NAVI_MUMBAI_LOCATIONS } from '../../constants/businessInfo';
import { trackCallClick } from '../../services/analytics';
import logoImg from '../../assets/logos/logo.jpeg';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand & Contact Info */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo-link">
              <img src={logoImg} alt="SERVIXA HOME Logo" className="footer-logo-img" />
              <div className="logo-text-block">
                <span className="brand-name text-white">SERVIXA <span className="brand-accent">HOME</span></span>
                <span className="brand-tagline text-muted">सेवा • सुरक्षा • समृद्धि</span>
              </div>
            </Link>

            <p className="footer-brand-desc">
              Navi Mumbai's premier doorstep home appliance repair service company. Certified technicians, transparent ₹99 inspection policy, and 100% genuine spare parts.
            </p>

            <div className="footer-contact-details">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} onClick={() => trackCallClick('Footer')} className="contact-item">
                <Phone size={18} className="contact-icon" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <a href={`mailto:${BUSINESS_INFO.email}`} className="contact-item">
                <Mail size={18} className="contact-icon" />
                <span>{BUSINESS_INFO.email}</span>
              </a>

              <div className="contact-item">
                <Clock size={18} className="contact-icon" />
                <span>{BUSINESS_INFO.workingHours}</span>
              </div>

              <div className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <span>Serving Navi Mumbai & Nearby Areas</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links & Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Repair Services</h4>
            <ul className="footer-links-list">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.id}>
                  <Link to={srv.path}>{srv.title}</Link>
                </li>
              ))}
              <li><Link to="/booking">Book Service Online</Link></li>
              <li><Link to="/faq">Inspection Charge (₹99)</Link></li>
            </ul>
          </div>

          {/* Column 3: Service Locations */}
          <div className="footer-col">
            <h4 className="footer-heading">Navi Mumbai Locations</h4>
            <ul className="footer-links-list columns-2">
              {NAVI_MUMBAI_LOCATIONS.slice(0, 10).map((loc) => (
                <li key={loc.slug}>
                  <Link to={`/service-areas/${loc.slug}`}>{loc.name}</Link>
                </li>
              ))}
              <li><Link to="/service-areas">View All Areas</Link></li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Legal */}
          <div className="footer-col">
            <h4 className="footer-heading">Company Information</h4>
            <ul className="footer-links-list">
              <li><Link to="/about">About Servixa Home</Link></li>
              <li><Link to="/service-areas">Service Coverage</Link></li>
              <li><Link to="/blog">Appliance Care Blog</Link></li>
              <li><Link to="/faq">Frequently Asked Questions</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="bottom-trust-tag">
            <ShieldCheck size={16} className="trust-icon" />
            <span>Official Website: <a href={BUSINESS_INFO.websiteUrl} target="_blank" rel="noopener noreferrer">{BUSINESS_INFO.websiteUrl}</a></span>
          </div>

          <div className="copyright-text">
            © {currentYear} <strong>SERVIXA HOME</strong>. All Rights Reserved. Built for High Conversions & Customer Trust.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
