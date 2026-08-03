import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Navigation, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { NAVI_MUMBAI_LOCATIONS, BUSINESS_INFO } from '../../constants/businessInfo';
import { trackCallClick } from '../../services/analytics';
import './ServiceAreasSection.css';

const ServiceAreasSection = () => {
  return (
    <section className="service-areas-section section-padding">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <MapPin size={15} />
            <span>Serving All Nodes of Navi Mumbai</span>
          </div>
          <h2 className="section-title">
            Doorstep Service <span>Locations</span>
          </h2>
          <p className="section-subtitle">
            Our certified repair engineers are stationed across Navi Mumbai for rapid 30 to 45-minute arrival.
          </p>
        </div>

        <div className="locations-cards-grid">
          {NAVI_MUMBAI_LOCATIONS.map((loc) => (
            <Link key={loc.slug} to={`/service-areas/${loc.slug}`} className="location-card card-base">
              <div className="location-card-header">
                <Navigation size={17} className="loc-icon" />
                <h3>{loc.name}</h3>
              </div>
              <p className="loc-pincode">Pincode: {loc.pincode}</p>
              <div className="loc-highlight-badge">
                <ShieldCheck size={13} />
                <span>{loc.highlight}</span>
              </div>
              <div className="loc-card-footer">
                <span>View Coverage</span>
                <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>

        <div className="location-expansion-banner card-base">
          <div className="expansion-text">
            <h3>Future Service Expansion: Mumbai, Thane & Kalyan-Dombivli</h3>
            <p>Need urgent doorstep appliance repair outside Navi Mumbai? Contact our support team directly!</p>
          </div>
          <a 
            href={`tel:${BUSINESS_INFO.phoneRaw}`} 
            className="btn btn-call"
            onClick={() => trackCallClick('ExpansionBanner')}
          >
            <Phone size={16} />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
