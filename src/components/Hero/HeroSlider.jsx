import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, ChevronLeft, ChevronRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants/businessInfo';
import { trackCallClick } from '../../services/analytics';

import heroWashing from '../../assets/images/hero_washing.jpg';
import heroAc from '../../assets/images/hero_ac.jpg';
import heroFridge from '../../assets/images/hero_fridge.jpg';
import heroMicrowave from '../../assets/images/hero_microwave.jpg';

import './HeroSlider.css';

const SLIDES = [
  {
    id: 1,
    badge: "Washing Machine Specialists",
    title: "Expert Washing Machine Repair in Navi Mumbai",
    subtitle: "Front Load, Top Load & Automatic Repair at Your Doorstep within 45 Minutes.",
    image: heroWashing,
    trustPoints: ["Original Spare Parts", "30-Day Warranty", "Transparent ₹99 Visit Fee"]
  },
  {
    id: 2,
    badge: "Air Conditioner Cooling Experts",
    title: "Fast AC Repair & Jet Wash Service",
    subtitle: "Split & Window AC Gas Charging, PCB Repair & Deep Foam Cleaning.",
    image: heroAc,
    trustPoints: ["Instant 30-Min Arrival", "Certified AC Technicians", "Complete Cooling Guarantee"]
  },
  {
    id: 3,
    badge: "Refrigerator Repair Experts",
    title: "Double Door & Single Door Refrigerator Repair",
    subtitle: "Gas Refilling, Defrost Sensor Replacement & Compressor Relay Repair.",
    image: heroFridge,
    trustPoints: ["Same Day Doorstep Repair", "100% Genuine Relays & Gas", "No Hidden Charges"]
  },
  {
    id: 4,
    badge: "Microwave Oven Repair",
    title: "Convection & Solo Microwave Repair Service",
    subtitle: "Magnetron Replacement, Touch Panel Repair & Sparking Diagnostics.",
    image: heroMicrowave,
    trustPoints: ["On-Spot Inspection", "Safety Tested Repairs", "All Leading Brands"]
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <section className="hero-slider-section">
      {SLIDES.map((slide, idx) => (
        <div 
          key={slide.id}
          className={`hero-slide ${idx === currentSlide ? 'slide-active' : ''}`}
          style={{ backgroundImage: `linear-gradient(90deg, rgba(10, 24, 50, 0.88) 0%, rgba(15, 61, 135, 0.70) 55%, rgba(15, 23, 42, 0.45) 100%), url(${slide.image})` }}
        >
          <div className="container hero-slide-container">
            <div className="hero-content-box animate-slide-up">
              <div className="hero-badge">
                <ShieldCheck size={15} />
                <span>{slide.badge}</span>
              </div>

              <h1 className="hero-heading">{slide.title}</h1>
              <p className="hero-subheading">{slide.subtitle}</p>

              {/* Key Trust Points */}
              <div className="hero-trust-list">
                {slide.trustPoints.map((pt, i) => (
                  <div key={i} className="trust-point-item">
                    <CheckCircle2 size={15} className="check-icon" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Strict CTA Hierarchy: Primary (Book Service) + Secondary (Call Now) */}
              <div className="hero-cta-group">
                <Link to="/booking" className="btn btn-primary btn-lg">
                  <Calendar size={18} />
                  <span>Book Service (₹99 Visit)</span>
                </Link>

                <a 
                  href={`tel:${BUSINESS_INFO.phoneRaw}`} 
                  className="btn btn-call btn-lg"
                  onClick={() => trackCallClick('HeroSlider')}
                >
                  <Phone size={18} />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Controls */}
      <button className="slider-nav-btn prev-btn" onClick={prevSlide} aria-label="Previous Slide">
        <ChevronLeft size={22} />
      </button>
      <button className="slider-nav-btn next-btn" onClick={nextSlide} aria-label="Next Slide">
        <ChevronRight size={22} />
      </button>

      {/* Slide Indicators */}
      <div className="slide-indicators">
        {SLIDES.map((_, idx) => (
          <button 
            key={idx}
            className={`indicator-dot ${idx === currentSlide ? 'dot-active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
