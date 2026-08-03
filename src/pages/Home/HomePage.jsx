import React from 'react';
import MetaSEO from '../../components/SEO/MetaSEO';
import HeroSlider from '../../components/Hero/HeroSlider';
import QuickBookingForm from '../../components/Booking/QuickBookingForm';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import ServiceCardSection from '../../components/ServiceCard/ServiceCardSection';
import BrandsGrid from '../../components/Brands/BrandsGrid';
import ServiceProcessTimeline from '../../components/Process/ServiceProcessTimeline';
import StatisticsSection from '../../components/Statistics/StatisticsSection';
import ServiceAreasSection from '../../components/ServiceAreas/ServiceAreasSection';
import TestimonialSection from '../../components/Testimonial/TestimonialSection';
import FAQSection from '../../components/FAQ/FAQSection';
import FinalCTABanner from '../../components/CTA/FinalCTABanner';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page-wrapper">
      <MetaSEO 
        title="#1 Home Appliance Repair Service in Navi Mumbai | ₹99 Visit" 
        description="Fast, reliable & transparent doorstep repair for Washing Machines, Air Conditioners, Refrigerators & Microwaves across Navi Mumbai (Vashi, Nerul, Belapur, Kharghar, Panvel). Call +91 8779694303."
      />

      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* 2. Quick Booking CTA Section */}
      <QuickBookingForm />

      {/* 3. Why Choose Servixa Home */}
      <WhyChooseUs />

      {/* 4. Core Appliance Repair Services */}
      <ServiceCardSection />

      {/* 5. Supported Brands Grid */}
      <BrandsGrid />

      {/* 6. Service Process Timeline */}
      <ServiceProcessTimeline />

      {/* 7. Statistics & Trust Numbers */}
      <StatisticsSection />

      {/* 8. Navi Mumbai Service Areas */}
      <ServiceAreasSection />

      {/* 9. Verified Customer Reviews */}
      <TestimonialSection />

      {/* 10. Local SEO FAQs */}
      <FAQSection />

      {/* 11. Final High-Conversion Banner */}
      <FinalCTABanner />
    </div>
  );
};

export default HomePage;
