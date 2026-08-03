import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Wrench, Calendar, Sparkles } from 'lucide-react';
import { SERVICES_LIST, COMING_SOON_SERVICES } from '../../constants/businessInfo';

import heroWashing from '../../assets/images/hero_washing.jpg';
import heroAc from '../../assets/images/hero_ac.jpg';
import heroFridge from '../../assets/images/hero_fridge.jpg';
import heroMicrowave from '../../assets/images/hero_microwave.jpg';

import './ServiceCardSection.css';

const SERVICE_IMAGES = {
  "washing-machine": heroWashing,
  "ac-repair": heroAc,
  "refrigerator": heroFridge,
  "microwave": heroMicrowave
};

const ServiceCardSection = () => {
  return (
    <section className="services-card-section section-padding">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Wrench size={15} />
            <span>Our Core Repair Expertise</span>
          </div>
          <h2 className="section-title">
            Doorstep Appliance <span>Services</span>
          </h2>
          <p className="section-subtitle">
            Fast, reliable, and professional repair services with transparent ₹99 inspection charges.
          </p>
        </div>

        {/* Core Services Grid */}
        <div className="services-grid">
          {SERVICES_LIST.map((srv) => {
            const imgPath = SERVICE_IMAGES[srv.id];
            return (
              <div key={srv.id} className="service-card card-base">
                <div className="service-card-image-wrap">
                  <img src={imgPath} alt={srv.title} className="service-card-img" />
                  <div className="service-price-badge">
                    <span>Inspection ₹99</span>
                  </div>
                </div>

                <div className="service-card-content">
                  <h3 className="service-card-title">{srv.title}</h3>
                  <p className="service-card-desc">{srv.shortDesc}</p>

                  {/* Popular Issues Handled */}
                  <div className="service-issues-box">
                    <span className="issues-label">Common Problems Solved:</span>
                    <ul className="issues-list">
                      {srv.popularIssues.slice(0, 3).map((issue, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={14} className="issue-check" />
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Supported Brand Tags */}
                  <div className="service-brands-tags">
                    <span className="tags-label">Brands:</span>
                    <div className="tags-flex">
                      {srv.brands.slice(0, 5).map((b, i) => (
                        <span key={i} className="brand-tag">{b}</span>
                      ))}
                      <span className="brand-tag count">+More</span>
                    </div>
                  </div>

                  {/* Clean Service Card Actions: Learn More + Book Service */}
                  <div className="service-card-actions">
                    <Link to={srv.path} className="btn btn-outline btn-card-action">
                      <span>Learn More</span>
                      <ArrowRight size={15} />
                    </Link>

                    <Link to="/booking" className="btn btn-primary btn-card-action">
                      <Calendar size={15} />
                      <span>Book Service</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coming Soon Services Banner */}
        <div className="coming-soon-container card-base">
          <div className="coming-soon-header">
            <Sparkles size={22} className="sparkle-icon" />
            <div>
              <h3>Expanding Services — Coming Soon</h3>
              <p>We are continuously upgrading our repair facility to serve all your home appliances!</p>
            </div>
          </div>

          <div className="coming-soon-tags-grid">
            {COMING_SOON_SERVICES.map((item, idx) => (
              <div key={idx} className="coming-soon-chip">
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCardSection;
