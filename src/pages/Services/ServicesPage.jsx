import React from 'react';
import MetaSEO from '../../components/SEO/MetaSEO';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ServiceCardSection from '../../components/ServiceCard/ServiceCardSection';
import BrandsGrid from '../../components/Brands/BrandsGrid';
import ServiceProcessTimeline from '../../components/Process/ServiceProcessTimeline';
import FinalCTABanner from '../../components/CTA/FinalCTABanner';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <MetaSEO 
        title="Home Appliance Repair Services in Navi Mumbai | ₹99 Visit" 
        description="Professional doorstep repair for Washing Machines, Air Conditioners, Refrigerators, and Microwaves across Navi Mumbai. 100% genuine spare parts & 90-day warranty."
      />

      <Breadcrumb items={[{ label: 'Our Services' }]} />

      <section className="services-hero-banner">
        <div className="container">
          <div className="services-banner-content">
            <span className="hero-tag">Certified Home Technicians</span>
            <h1>All Home Appliance Repair Services</h1>
            <p>
              Doorstep repairs by experienced local engineers with transparent ₹99 inspection charges across Navi Mumbai.
            </p>
          </div>
        </div>
      </section>

      {/* Main Core Services Grid */}
      <ServiceCardSection />

      {/* Service Process Timeline */}
      <ServiceProcessTimeline />

      {/* Supported Appliance Brands */}
      <BrandsGrid />

      {/* Final Conversion Banner */}
      <FinalCTABanner />
    </div>
  );
};

export default ServicesPage;
