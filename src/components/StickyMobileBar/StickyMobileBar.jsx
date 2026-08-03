import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants/businessInfo';
import { trackCallClick } from '../../services/analytics';
import { triggerQuickWhatsApp } from '../../services/whatsapp';
import './StickyMobileBar.css';

const StickyMobileBar = () => {
  return (
    <div className="sticky-mobile-bar">
      <a 
        href={`tel:${BUSINESS_INFO.phoneRaw}`} 
        className="mobile-bar-btn btn-call-mobile"
        onClick={() => trackCallClick('StickyMobileBar')}
      >
        <Phone size={18} />
        <span>Call Now</span>
      </a>

      <button 
        onClick={() => triggerQuickWhatsApp("Hello Servixa Home, I want to inquire about doorstep appliance repair.")}
        className="mobile-bar-btn btn-whatsapp-mobile"
      >
        <MessageSquare size={18} />
        <span>WhatsApp</span>
      </button>

      <Link to="/booking" className="mobile-bar-btn btn-book-mobile">
        <Calendar size={18} />
        <span>Book Visit</span>
      </Link>
    </div>
  );
};

export default StickyMobileBar;
