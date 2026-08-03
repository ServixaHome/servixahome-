import React from 'react';
import { Star, CheckCircle, Quote, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonialsData';
import './TestimonialSection.css';

const TestimonialSection = () => {
  return (
    <section className="testimonial-section section-padding">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Star size={16} />
            <span>4.9 / 5 Rated by 15,000+ Customers</span>
          </div>
          <h2 className="section-title">
            Real Reviews From <span>Navi Mumbai Homes</span>
          </h2>
          <p className="section-subtitle">
            See what apartment owners and families across Vashi, Nerul, Kharghar & Belapur say about our doorstep service.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="testimonial-card card-base">
              <div className="review-top-row">
                <div className="stars-row">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="star-filled" />
                  ))}
                </div>
                <div className="review-verified-badge">
                  <CheckCircle size={14} />
                  <span>Verified Customer</span>
                </div>
              </div>

              <p className="review-comment">"{review.comment}"</p>

              <div className="review-author-box">
                <div className="author-avatar">
                  {review.name.charAt(0)}
                </div>
                <div className="author-info">
                  <h4 className="author-name">{review.name}</h4>
                  <span className="author-location">{review.location} • <strong className="service-tag">{review.service}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
