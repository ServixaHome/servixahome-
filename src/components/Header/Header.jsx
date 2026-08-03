import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants/businessInfo';
import { trackCallClick } from '../../services/analytics';
import logoImg from '../../assets/logos/logo.jpeg';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-announcement-bar">
        <div className="container top-bar-content">
          <div className="top-trust-tag">
            <ShieldCheck size={15} className="trust-icon" />
            <span>Navi Mumbai's Trusted Appliance Repair • <strong>₹99 Inspection Only</strong></span>
          </div>
          <div className="top-bar-contact">
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} onClick={() => trackCallClick('TopBar')} className="top-contact-link">
              <Phone size={13} />
              <span>Call 24/7: <strong>{BUSINESS_INFO.phone}</strong></span>
            </a>
            <span className="divider">|</span>
            <span className="working-hours">09:00 AM - 10:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`site-header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-inner">
          {/* Logo */}
          <Link to="/" className="brand-logo-link" title="SERVIXA HOME - Home Appliance Repair">
            <img src={logoImg} alt="SERVIXA HOME Logo" className="header-logo-img" />
            <div className="logo-text-block">
              <span className="brand-name">SERVIXA <span className="brand-accent">HOME</span></span>
              <span className="brand-tagline">सेवा • सुरक्षा • समृद्धि</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
            <div className="nav-dropdown-wrapper">
              <Link to="/services" className={`nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`}>
                Services
              </Link>
              <div className="nav-dropdown-menu">
                <Link to="/services/washing-machine-repair">Washing Machine Repair</Link>
                <Link to="/services/ac-repair">Air Conditioner Repair</Link>
                <Link to="/services/refrigerator-repair">Refrigerator Repair</Link>
                <Link to="/services/microwave-repair">Microwave Repair</Link>
              </div>
            </div>
            <Link to="/service-areas" className={`nav-link ${location.pathname === '/service-areas' ? 'active' : ''}`}>Locations</Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
            <Link to="/faq" className={`nav-link ${location.pathname === '/faq' ? 'active' : ''}`}>FAQ</Link>
            <Link to="/blog" className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}>Blog</Link>
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          </nav>


            {/* Mobile Hamburger Toggle */}
            <button 
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer animate-slide-up">
            <div className="mobile-drawer-inner">
              <Link to="/" className="mobile-nav-item">Home <ChevronRight size={16} /></Link>
              
              <div className="mobile-services-group">
                <div className="group-title">REPAIR SERVICES</div>
                <Link to="/services/washing-machine-repair" className="mobile-nav-subitem">• Washing Machine Repair</Link>
                <Link to="/services/ac-repair" className="mobile-nav-subitem">• Air Conditioner Repair</Link>
                <Link to="/services/refrigerator-repair" className="mobile-nav-subitem">• Refrigerator Repair</Link>
                <Link to="/services/microwave-repair" className="mobile-nav-subitem">• Microwave Repair</Link>
              </div>

              <Link to="/service-areas" className="mobile-nav-item">Service Areas (Navi Mumbai) <ChevronRight size={16} /></Link>
              <Link to="/about" className="mobile-nav-item">About Us <ChevronRight size={16} /></Link>
              <Link to="/faq" className="mobile-nav-item">FAQ <ChevronRight size={16} /></Link>
              <Link to="/blog" className="mobile-nav-item">Appliance Maintenance Blog <ChevronRight size={16} /></Link>
              <Link to="/contact" className="mobile-nav-item">Contact Us <ChevronRight size={16} /></Link>
              
              <div className="mobile-drawer-cta">
                <Link to="/booking" className="btn btn-primary w-full">
                  <Calendar size={18} />
                  <span>Book Doorstep Repair (₹99 Visit)</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
