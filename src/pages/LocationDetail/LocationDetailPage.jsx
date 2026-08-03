import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, Calendar, CheckCircle2, Navigation } from 'lucide-react';
import MetaSEO from '../../components/SEO/MetaSEO';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import QuickBookingForm from '../../components/Booking/QuickBookingForm';
import FinalCTABanner from '../../components/CTA/FinalCTABanner';
import { NAVI_MUMBAI_LOCATIONS, BUSINESS_INFO } from '../../constants/businessInfo';
import { trackCallClick } from '../../services/analytics';
import './LocationDetailPage.css';

const LocationDetailPage = () => {
  const { locationSlug } = useParams();
  
  const currentLocation = NAVI_MUMBAI_LOCATIONS.find(
    (loc) => loc.slug.toLowerCase() === (locationSlug || '').toLowerCase()
  ) || {
    name: locationSlug ? locationSlug.replace(/-/g, ' ') : "Navi Mumbai",
    pincode: "400703",
    highlight: "30-Min Rapid Doorstep Service"
  };

  return (
    <div className="location-detail-page">
      <MetaSEO 
        title={`Appliance Repair in ${currentLocation.name} Navi Mumbai | ₹99 Visit`} 
        description={`Doorstep Washing Machine, AC, Refrigerator & Microwave repair in ${currentLocation.name}, Navi Mumbai (Pincode ${currentLocation.pincode}). Certified technicians & ₹99 inspection.`}
      />

      <Breadcrumb items={[
        { label: 'Service Areas', path: '/service-areas' },
        { label: `${currentLocation.name} Repair` }
      ]} />

      <section className="location-hero-banner">
        <div className="container">
          <div className="location-hero-content">
            <span className="hero-tag"><Navigation size={15} /> Local Doorstep Hub</span>
            <h1>Home Appliance Repair in {currentLocation.name}, Navi Mumbai</h1>
            <p>
              Resident of <strong>{currentLocation.name}</strong>? Our local doorstep technicians arrive at your home within 30 to 45 minutes with genuine factory spare parts and modern diagnostic tools.
            </p>

            <div className="loc-hero-features">
              <div className="feature-chip"><CheckCircle2 size={15} /><span>Rapid 30-Min Visit in {currentLocation.name}</span></div>
              <div className="feature-chip"><CheckCircle2 size={15} /><span>Inspection Fee ₹99 (Waived with Repair)</span></div>
              <div className="feature-chip"><CheckCircle2 size={15} /><span>Up to 90 Days Service Warranty</span></div>
            </div>

            <div className="detail-cta-row">
              <Link to="/booking" className="btn btn-primary btn-lg">
                <Calendar size={18} />
                <span>Book Service in {currentLocation.name}</span>
              </Link>

              <a 
                href={`tel:${BUSINESS_INFO.phoneRaw}`} 
                className="btn btn-call btn-lg"
                onClick={() => trackCallClick(`LocationHero-${currentLocation.name}`)}
              >
                <Phone size={18} />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available in Area */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Appliance Repairs <span>Available in {currentLocation.name}</span></h2>
            <p className="section-subtitle">We repair all major home appliances at your doorstep in {currentLocation.name}.</p>
          </div>

          <div className="area-services-grid">
            <div className="area-service-card card-base">
              <h3>Washing Machine Repair in {currentLocation.name}</h3>
              <p>Front load & top load automatic washer drum, spin motor, and PCB circuit repair.</p>
              <Link to="/services/washing-machine-repair" className="area-service-link">View Service & Pricing →</Link>
            </div>

            <div className="area-service-card card-base">
              <h3>AC Repair & Servicing in {currentLocation.name}</h3>
              <p>Split & window AC gas charging, jet wash cleaning, and compressor troubleshooting.</p>
              <Link to="/services/ac-repair" className="area-service-link">View Service & Pricing →</Link>
            </div>

            <div className="area-service-card card-base">
              <h3>Refrigerator Repair in {currentLocation.name}</h3>
              <p>Single door, double door gas refilling, defrost sensor, and relay replacement.</p>
              <Link to="/services/refrigerator-repair" className="area-service-link">View Service & Pricing →</Link>
            </div>

            <div className="area-service-card card-base">
              <h3>Microwave Oven Repair in {currentLocation.name}</h3>
              <p>Convection & solo microwave magnetron, diode, touchpad, and sparking fix.</p>
              <Link to="/services/microwave-repair" className="area-service-link">View Service & Pricing →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Integration */}
      <section className="section-padding">
        <div className="container">
          <QuickBookingForm />
        </div>
      </section>

      <FinalCTABanner />
    </div>
  );
};

export default LocationDetailPage;
