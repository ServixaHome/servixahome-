import React from 'react';
import MetaSEO from '../../components/SEO/MetaSEO';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { BUSINESS_INFO } from '../../constants/businessInfo';
import './LegalPages.css';

const DisclaimerPage = () => {
  return (
    <div className="legal-page">
      <MetaSEO 
        title="Disclaimer | SERVIXA HOME" 
        description="Disclaimer for SERVIXA HOME - Independent home appliance repair service provider in Navi Mumbai."
      />

      <Breadcrumb items={[{ label: 'Disclaimer' }]} />

      <section className="section-padding">
        <div className="container">
          <div className="legal-card card-base">
            <h1>Independent Business Disclaimer</h1>
            <p className="legal-updated">Last Updated: July 2026</p>

            <p><strong>SERVIXA HOME</strong> is an independent local doorstep home appliance repair and maintenance service company operating in Navi Mumbai, Maharashtra.</p>

            <p>All brand names, trademarks, logos, and model names mentioned on this website (such as LG, Samsung, Whirlpool, IFB, Bosch, Daikin, Godrej, Haier, etc.) belong strictly to their respective trademark owners and manufacturers.</p>

            <p>SERVIXA HOME is an independent multi-brand out-of-warranty service provider and is not directly affiliated with, sponsored by, or endorsed by any specific manufacturer unless explicitly stated.</p>

            <p>For official brand in-warranty service, customers are advised to contact the respective manufacturer's official customer support channels.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisclaimerPage;
