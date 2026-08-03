import React from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';
import { SUPPORTED_BRANDS } from '../../constants/businessInfo';
import './BrandsGrid.css';

const BrandsGrid = () => {
  return (
    <section className="brands-section section-padding">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Shield size={16} />
            <span>100% Genuine Spare Parts Guaranteed</span>
          </div>
          <h2 className="section-title">
            Supported Appliance <span>Brands</span>
          </h2>
          <p className="section-subtitle">
            We provide expert doorstep repair and maintenance for all leading Indian and international appliance brands.
          </p>
        </div>

        <div className="brands-grid">
          {SUPPORTED_BRANDS.map((brand, idx) => (
            <div key={idx} className="brand-card card-base">
              <div className="brand-badge-icon">
                <CheckCircle2 size={16} />
              </div>
              <h3 className="brand-name">{brand.name}</h3>
              <span className="brand-category">{brand.category}</span>
            </div>
          ))}
        </div>

        <div className="brands-footer-note">
          <span>* Don't see your brand listed? We service all multi-brand models and imported appliances across Navi Mumbai!</span>
        </div>
      </div>
    </section>
  );
};

export default BrandsGrid;
