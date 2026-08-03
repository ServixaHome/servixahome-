import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, ShieldCheck, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants/businessInfo';
import { trackCallClick } from '../../services/analytics';
import './FinalCTABanner.css';

const FinalCTABanner = () => {
  return (
    <section className="final-cta-section section-padding">
      <div className="container">
        <div className="cta-card card-base">
          <div className="cta-content-wrapper">
            <div className="cta-badge">
              <ShieldCheck size={15} />
              <span>Doorstep Repair Guaranteed in Navi Mumbai</span>
            </div>

            <h2>Need Urgent Home Appliance Repair?</h2>
            <p>
              Don't let a broken Washing Machine, AC, Refrigerator or Microwave disrupt your home. 
              Our certified technicians arrive at your doorstep in <strong>30-45 minutes</strong> with genuine spare parts!
            </p>

            <div className="cta-trust-highlights">
              <span>✓ Transparent ₹99 Inspection Policy</span>
              <span>✓ Up to 90 Days Service Warranty</span>
              <span>✓ All Major Brands Serviced</span>
            </div>

            {/* Strict CTA Hierarchy: Primary (Book Service) + Secondary (Call Now) */}
            <div className="cta-buttons-group">
              <Link to="/booking" className="btn btn-primary btn-lg">
                <Calendar size={18} />
                <span>Book Service Online</span>
              </Link>

              <a 
                href={`tel:${BUSINESS_INFO.phoneRaw}`} 
                className="btn btn-call btn-lg"
                onClick={() => trackCallClick('FinalCTABanner')}
              >
                <Phone size={18} />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            <div className="cta-working-info">
              <Clock size={15} />
              <span>Available Monday to Sunday (09:00 AM - 10:00 PM) • Emergency Service On-Call</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTABanner;
