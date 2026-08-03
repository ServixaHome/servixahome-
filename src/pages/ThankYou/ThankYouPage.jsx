import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle2, Phone, Home, ShieldCheck, ArrowRight } from 'lucide-react';
import MetaSEO from '../../components/SEO/MetaSEO';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { BUSINESS_INFO, SERVICES_LIST } from '../../constants/businessInfo';
import { trackCallClick } from '../../services/analytics';
import './ThankYouPage.css';

const ThankYouPage = () => {
  const location = useLocation();
  const bookingDetails = location.state?.bookingDetails;

  return (
    <div className="thank-you-page">
      <MetaSEO 
        title="Booking Confirmed | Thank You" 
        description="Your doorstep appliance repair booking has been received. Our certified technician will contact you shortly."
      />

      <Breadcrumb items={[{ label: 'Booking Confirmation' }]} />

      <section className="section-padding">
        <div className="container">
          <div className="thank-you-card card-base animate-slide-up">
            <div className="success-icon-badge">
              <CheckCircle2 size={48} className="success-icon" />
            </div>

            <h1 className="thank-you-title">Booking Received Successfully!</h1>
            <p className="thank-you-subtitle">
              Thank you for choosing <strong>SERVIXA HOME</strong>. Our nearest certified technician in Navi Mumbai has been notified and will call you within <strong>15 minutes</strong> to confirm your visit.
            </p>

            {bookingDetails && (
              <div className="booking-summary-box">
                <h3>Booking Details Summary</h3>
                <div className="summary-grid">
                  <div><strong>Customer Name:</strong> {bookingDetails.name}</div>
                  <div><strong>Phone Number:</strong> {bookingDetails.phone}</div>
                  <div><strong>Service Requested:</strong> {bookingDetails.service}</div>
                  <div><strong>Preferred Time:</strong> {bookingDetails.time}</div>
                  <div className="full-col"><strong>Doorstep Address:</strong> {bookingDetails.address}</div>
                </div>
              </div>
            )}

            {/* Visit Charge Policy Confirmation */}
            <div className="thank-you-policy-note">
              <ShieldCheck size={16} />
              <span>Inspection Fee ₹99 applies ONLY if you decline repair. Otherwise, inspection is <strong>100% FREE</strong>!</span>
            </div>

            {/* Clean Actions: Call Now + Return Home */}
            <div className="thank-you-actions">
              <a 
                href={`tel:${BUSINESS_INFO.phoneRaw}`} 
                className="btn btn-call btn-lg"
                onClick={() => trackCallClick('ThankYouPage')}
              >
                <Phone size={18} />
                <span>Urgent? Call {BUSINESS_INFO.phone}</span>
              </a>

              <Link to="/" className="btn btn-primary btn-lg">
                <Home size={18} />
                <span>Return to Homepage</span>
              </Link>
            </div>
          </div>

          {/* Related Popular Services */}
          <div className="popular-services-block">
            <h3>Continue Browsing Repair Services</h3>
            <div className="popular-services-grid">
              {SERVICES_LIST.map((srv) => (
                <Link key={srv.id} to={srv.path} className="popular-service-item card-base">
                  <span>{srv.title}</span>
                  <ArrowRight size={15} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYouPage;
