import React from 'react';
import { ShieldCheck, Clock, Award, DollarSign, Wrench, ThumbsUp, HeartHandshake, CheckCircle2 } from 'lucide-react';
import './WhyChooseUs.css';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Certified Experts",
    desc: "Background-verified, highly trained technicians with 8+ years of repair experience."
  },
  {
    icon: Clock,
    title: "30-Min Rapid Arrival",
    desc: "Fast doorstep service across all nodes in Navi Mumbai with flexible time slots."
  },
  {
    icon: DollarSign,
    title: "Transparent ₹99 Visit",
    desc: "Only ₹99 inspection fee, which becomes 100% FREE when you proceed with repair."
  },
  {
    icon: Award,
    title: "Genuine Spare Parts",
    desc: "We exclusively use 100% original, brand-certified factory replacement parts."
  },
  {
    icon: Wrench,
    title: "Modern Diagnostics",
    desc: "Equipped with advanced digital meters & leak detection tools for 100% accuracy."
  },
  {
    icon: HeartHandshake,
    title: "Service Warranty",
    desc: "Up to 90 days repair warranty on spare parts and labor for total peace of mind."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section section-padding">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <ThumbsUp size={16} />
            <span>Why Navi Mumbai Trusts Us</span>
          </div>
          <h2 className="section-title">
            The <span>SERVIXA HOME</span> Advantage
          </h2>
          <p className="section-subtitle">
            We deliver honest, transparent, and high-quality doorstep appliance repairs without hidden costs.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <div key={idx} className="feature-card card-base">
                <div className="feature-icon-wrapper">
                  <IconComp size={28} />
                </div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
                <div className="feature-check">
                  <CheckCircle2 size={16} />
                  <span>Guaranteed Quality</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
