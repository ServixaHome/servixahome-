import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS_DATA } from '../../data/faqsData';
import './FAQSection.css';

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleIndex = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="faq-section section-padding">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <HelpCircle size={16} />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span>Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about our ₹99 inspection fee, doorstep service warranty, and technician visits in Navi Mumbai.
          </p>
        </div>

        <div className="faq-accordion-wrapper">
          {FAQS_DATA.map((faq, idx) => (
            <div 
              key={idx} 
              className={`faq-item card-base ${openIdx === idx ? 'faq-open' : ''}`}
            >
              <button 
                className="faq-question-btn" 
                onClick={() => toggleIndex(idx)}
                aria-expanded={openIdx === idx}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-toggle-icon">
                  {openIdx === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>

              {openIdx === idx && (
                <div className="faq-answer-box animate-fade-in">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
