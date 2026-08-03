import React from 'react';
import MetaSEO from '../../components/SEO/MetaSEO';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ServiceAreasSection from '../../components/ServiceAreas/ServiceAreasSection';
import FinalCTABanner from '../../components/CTA/FinalCTABanner';
import { MapPin } from 'lucide-react';
import './ServiceAreasPage.css';

const ServiceAreasPage = () => {
  return (
    <div className="service-areas-page">
      <MetaSEO 
        title="Appliance Repair Locations in Navi Mumbai | Doorstep Service" 
        description="Doorstep Washing Machine, AC, Refrigerator & Microwave repair across Vashi, Nerul, CBD Belapur, Seawoods, Kharghar, Airoli, Ghansoli, Panvel. 30-min technician arrival."
      />

      <Breadcrumb items={[{ label: 'Service Areas' }]} />

      <section className="areas-hero-banner">
        <div className="container text-center">
          <span className="hero-tag"><MapPin size={16} /> Complete Navi Mumbai Coverage</span>
          <h1>Our Doorstep Service Locations</h1>
          <p>
            We deploy dedicated certified repair engineers across all major nodes in Navi Mumbai for fast 30 to 45-minute doorstep visits.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <ServiceAreasSection />

      <FinalCTABanner />
    </div>
  );
};

export default ServiceAreasPage;
