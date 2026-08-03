import React from 'react';
import MetaSEO from '../../components/SEO/MetaSEO';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { BUSINESS_INFO } from '../../constants/businessInfo';
import './LegalPages.css';

const TermsPage = () => {
  return (
    <div className="legal-page">
      <MetaSEO 
        title="Terms & Conditions | SERVIXA HOME" 
        description="Terms and conditions for doorstep home appliance repairs, ₹99 inspection fee policy, repair estimates, and warranty terms."
      />

      <Breadcrumb items={[{ label: 'Terms & Conditions' }]} />

      <section className="section-padding">
        <div className="container">
          <div className="legal-card card-base">
            <h1>Terms & Conditions</h1>
            <p className="legal-updated">Last Updated: July 2026</p>

            <h2>1. Doorstep Inspection Policy</h2>
            <p>Our standard doorstep visit and diagnosis fee across Navi Mumbai is <strong>₹99</strong>. If the customer accepts the repair quotation, the ₹99 inspection fee is 100% WAIVED and included inside the repair cost.</p>

            <h2>2. Repair Quotation & Approval</h2>
            <p>Technicians provide an upfront repair estimate after inspecting the appliance. No repair work begins without explicit customer approval.</p>

            <h2>3. Service Warranty Terms</h2>
            <p>Replaced spare parts carry up to 90 days service warranty as specified on your invoice. Warranty is void if the appliance is tampered with by an external technician after our repair.</p>

            <h2>4. Payment Methods</h2>
            <p>Payments are due immediately upon job completion via Cash, UPI (Google Pay / PhonePe / Paytm), or Card.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
