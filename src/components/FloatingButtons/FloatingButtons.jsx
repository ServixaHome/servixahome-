import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp } from 'lucide-react';
import { triggerQuickWhatsApp } from '../../services/whatsapp';
import './FloatingButtons.css';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-widgets-wrapper desktop-only-widgets">
      {/* Floating WhatsApp Button (Desktop) */}
      <button 
        onClick={() => triggerQuickWhatsApp("Hello Servixa Home, I want to book an urgent doorstep repair.")}
        className="floating-btn float-whatsapp pulse-whatsapp"
        title="Chat on WhatsApp"
      >
        <MessageSquare size={22} />
        <span className="floating-btn-tooltip">WhatsApp Chat</span>
      </button>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop} 
          className="floating-btn float-top animate-fade-in"
          title="Scroll Back to Top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
