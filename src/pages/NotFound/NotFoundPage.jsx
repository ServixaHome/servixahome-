import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone, Calendar, AlertTriangle } from 'lucide-react';
import MetaSEO from '../../components/SEO/MetaSEO';
import { BUSINESS_INFO } from '../../constants/businessInfo';
import { trackCallClick } from '../../services/analytics';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <MetaSEO 
        title="404 - Page Not Found | SERVIXA HOME" 
        description="The page you are looking for does not exist. Return to SERVIXA HOME homepage or book a doorstep repair."
      />

      <section className="section-padding">
        <div className="container">
          <div className="not-found-card card-base text-center">
            <div className="error-code-badge">
              <AlertTriangle size={48} className="error-icon" />
              <span>404 ERROR</span>
            </div>

            <h1>Page Not Found</h1>
            <p>
              Oops! The page or service route you are looking for might have been moved or doesn't exist.
            </p>

            <div className="not-found-actions">
              <Link to="/" className="btn btn-primary btn-lg">
                <Home size={18} />
                <span>Return to Homepage</span>
              </Link>

              <Link to="/booking" className="btn btn-navy btn-lg">
                <Calendar size={18} />
                <span>Book Service Online</span>
              </Link>

              <a 
                href={`tel:${BUSINESS_INFO.phoneRaw}`} 
                className="btn btn-call btn-lg"
                onClick={() => trackCallClick('NotFoundPage')}
              >
                <Phone size={18} />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
