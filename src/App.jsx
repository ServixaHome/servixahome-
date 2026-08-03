import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import StickyMobileBar from './components/StickyMobileBar/StickyMobileBar';
import FloatingButtons from './components/FloatingButtons/FloatingButtons';

// Pages
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ServicesPage from './pages/Services/ServicesPage';
import WashingMachinePage from './pages/Services/WashingMachinePage';
import AcRepairPage from './pages/Services/AcRepairPage';
import RefrigeratorPage from './pages/Services/RefrigeratorPage';
import MicrowavePage from './pages/Services/MicrowavePage';
import BookingPage from './pages/Booking/BookingPage';
import ContactPage from './pages/Contact/ContactPage';
import FAQPage from './pages/FAQ/FAQPage';
import ServiceAreasPage from './pages/ServiceAreas/ServiceAreasPage';
import LocationDetailPage from './pages/LocationDetail/LocationDetailPage';
import BlogIndexPage from './pages/Blog/BlogIndexPage';
import BlogDetailPage from './pages/Blog/BlogDetailPage';
import ThankYouPage from './pages/ThankYou/ThankYouPage';
import PrivacyPolicyPage from './pages/Legal/PrivacyPolicyPage';
import TermsPage from './pages/Legal/TermsPage';
import DisclaimerPage from './pages/Legal/DisclaimerPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';

// Styles
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sticky Header */}
        <Header />

        {/* Dynamic Route Pages */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            
            {/* Service Routes */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/washing-machine-repair" element={<WashingMachinePage />} />
            <Route path="/services/ac-repair" element={<AcRepairPage />} />
            <Route path="/services/refrigerator-repair" element={<RefrigeratorPage />} />
            <Route path="/services/microwave-repair" element={<MicrowavePage />} />
            
            {/* Booking & Contact */}
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />

            {/* Location Routes */}
            <Route path="/service-areas" element={<ServiceAreasPage />} />
            <Route path="/service-areas/:locationSlug" element={<LocationDetailPage />} />

            {/* Blog System */}
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:postSlug" element={<BlogDetailPage />} />

            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-conditions" element={<TermsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />

            {/* 404 Catch All */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Desktop Floating Action Widgets */}
        <FloatingButtons />

        {/* Mobile Sticky Bottom CTA Bar */}
        <StickyMobileBar />

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
