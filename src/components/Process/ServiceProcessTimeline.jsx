import React from 'react';
import { Calendar, UserCheck, Home, Search, FileText, CheckCircle, Wrench, ShieldCheck, CreditCard } from 'lucide-react';
import './ServiceProcessTimeline.css';

const STEPS = [
  { step: 1, icon: Calendar, title: "Customer Books", desc: "Book online or call +91 8779694303" },
  { step: 2, icon: UserCheck, title: "Technician Assigned", desc: "Certified local engineer assigned" },
  { step: 3, icon: Home, title: "Doorstep Visit", desc: "Arrival at your home in 30-45 mins" },
  { step: 4, icon: Search, title: "Inspection", desc: "Thorough diagnostic check" },
  { step: 5, icon: FileText, title: "Repair Estimate", desc: "Clear & transparent quotation" },
  { step: 6, icon: CheckCircle, title: "Customer Approval", desc: "Repair starts only with your consent" },
  { step: 7, icon: Wrench, title: "Repair Process", desc: "Original parts & expert fix" },
  { step: 8, icon: ShieldCheck, title: "Quality Testing", desc: "Post-repair performance check" },
  { step: 9, icon: CreditCard, title: "Easy Payment", desc: "Pay after 100% satisfaction" }
];

const ServiceProcessTimeline = () => {
  return (
    <section className="process-timeline-section section-padding">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <CheckCircle size={16} />
            <span>Hassle-Free Doorstep Journey</span>
          </div>
          <h2 className="section-title">
            Our Transparent <span>Service Process</span>
          </h2>
          <p className="section-subtitle">
            From booking to completion, experience seamless 9-step appliance repair with complete peace of mind.
          </p>
        </div>

        <div className="process-timeline-grid">
          {STEPS.map((st) => {
            const IconComponent = st.icon;
            return (
              <div key={st.step} className="timeline-step-card card-base">
                <div className="step-number-badge">{st.step}</div>
                <div className="step-icon-box">
                  <IconComponent size={24} />
                </div>
                <h4>{st.title}</h4>
                <p>{st.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcessTimeline;
