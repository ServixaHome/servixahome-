import React from 'react';
import MetaSEO from '../../components/SEO/MetaSEO';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { BUSINESS_INFO } from '../../constants/businessInfo';
import './LegalPages.css';

const PrivacyPolicyPage = () => {
  return (
    <div className="legal-page">
      <MetaSEO 
        title="Privacy Policy | SERVIXA HOME" 
        description="Privacy Policy for SERVIXA HOME website (www.servixahome.online). Explaining data protection, customer privacy, Google Analytics, and lead management."
      />

      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

      <section className="section-padding">
        <div className="container">
          <div className="legal-card card-base">
            <h1>Privacy Policy</h1>
            <p className="legal-updated">Last Updated: July 2026</p>

            <p>At <strong>SERVIXA HOME</strong> ("we", "us", "our"), operating at <a href={BUSINESS_INFO.websiteUrl}>{BUSINESS_INFO.websiteUrl}</a>, we respect your personal privacy and are committed to protecting the customer data you share with us.</p>

            <h2>1. Information We Collect</h2>
            <p>When you book an appliance repair service or contact us via form, call, or WhatsApp, we collect:</p>
            <ul>
              <li>Customer Full Name</li>
              <li>Contact Phone Number</li>
              <li>Email Address (if provided)</li>
              <li>Doorstep Address in Navi Mumbai</li>
              <li>Appliance Repair Service & Problem Details</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>Your information is strictly used to:</p>
            <ul>
              <li>Dispatch certified doorstep technicians to your home address.</li>
              <li>Send visit updates and repair quotations.</li>
              <li>Improve our website user experience and local customer service.</li>
            </ul>

            <h2>3. Google Analytics & Cookies</h2>
            <p>We use Google Analytics 4 (GA4 ID: G-541393348) and Google Tag Manager (GTM-PMZS2J8D) to analyze anonymous website traffic and optimize conversion user experience. No personal identifying information is sold to third parties.</p>

            <h2>4. Contact Us</h2>
            <p>For privacy inquiries, contact us at <strong>{BUSINESS_INFO.email}</strong> or call <strong>{BUSINESS_INFO.phone}</strong>.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
