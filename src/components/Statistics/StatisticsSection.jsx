import React from 'react';
import { Users, Wrench, Shield, MapPin, Clock } from 'lucide-react';
import './StatisticsSection.css';

const STATS = [
  { icon: Users, count: "15,000+", label: "Satisfied Customers", sub: "Across Navi Mumbai" },
  { icon: Wrench, count: "18,500+", label: "Appliance Repairs", sub: "Completed Successfully" },
  { icon: Shield, count: "100%", label: "Genuine Parts", sub: "Factory Certified" },
  { icon: MapPin, count: "15+", label: "Navi Mumbai Nodes", sub: "30-Min Doorstep Arrival" },
  { icon: Clock, count: "09 AM - 10 PM", label: "Working Hours", sub: "All 7 Days Open" }
];

const StatisticsSection = () => {
  return (
    <section className="stats-section section-padding">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((st, idx) => {
            const IconComp = st.icon;
            return (
              <div key={idx} className="stat-card">
                <div className="stat-icon-wrap">
                  <IconComp size={28} />
                </div>
                <div className="stat-number">{st.count}</div>
                <div className="stat-label">{st.label}</div>
                <div className="stat-sub">{st.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
