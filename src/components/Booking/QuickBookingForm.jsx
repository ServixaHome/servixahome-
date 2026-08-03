import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, User, Phone, Wrench, AlertCircle, CheckCircle, MessageSquare, Send } from 'lucide-react';
import { submitBookingForm } from '../../services/web3forms';
import { triggerWhatsAppBooking } from '../../services/whatsapp';
import './QuickBookingForm.css';

const QuickBookingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Washing Machine Repair',
    date: '',
    time: '09:00 AM - 12:00 PM',
    address: '',
    problem: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMessage('');
  };

  const validatePhone = (phoneStr) => {
    const cleanPhone = phoneStr.replace(/\D/g, '');
    return cleanPhone.length >= 10;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!validatePhone(formData.phone)) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!formData.address.trim()) {
      setErrorMessage('Please enter your doorstep address in Navi Mumbai.');
      return;
    }

    setIsSubmitting(true);
    const result = await submitBookingForm(formData);
    setIsSubmitting(false);

    if (result.success) {
      navigate('/thank-you', { state: { bookingDetails: formData } });
    } else {
      setErrorMessage(result.message);
    }
  };

  const handleWhatsAppClick = () => {
    if (!formData.name.trim() || !validatePhone(formData.phone)) {
      setErrorMessage('Please provide your name and phone number before booking via WhatsApp.');
      return;
    }
    triggerWhatsAppBooking(formData);
    navigate('/thank-you', { state: { bookingDetails: formData } });
  };

  return (
    <section className="quick-booking-section">
      <div className="container">
        <div className="booking-card card-base animate-slide-up">
          <div className="booking-header">
            <div className="header-tag">
              <Calendar size={15} />
              <span>Instant 60-Second Booking</span>
            </div>
            <h2>Book Doorstep Appliance Repair</h2>
            <p className="visit-badge-text">
              ✨ <strong>Transparent ₹99 Visit Fee</strong> (100% FREE if repair is approved)
            </p>
          </div>

          {errorMessage && (
            <div className="form-error-alert animate-fade-in">
              <AlertCircle size={18} />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="quick-form-grid">
            {/* Customer Name */}
            <div className="form-group">
              <label htmlFor="name"><User size={15} /> Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="e.g. Rahul Sharma" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>

            {/* Mobile Number */}
            <div className="form-group">
              <label htmlFor="phone"><Phone size={15} /> Phone Number *</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="10-Digit Mobile Number" 
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                required 
              />
            </div>

            {/* Service Select */}
            <div className="form-group">
              <label htmlFor="service"><Wrench size={15} /> Service Required *</label>
              <select 
                id="service" 
                name="service" 
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="Washing Machine Repair">Washing Machine Repair</option>
                <option value="AC Repair & Service">AC Repair & Servicing</option>
                <option value="Refrigerator Repair">Refrigerator Repair</option>
                <option value="Microwave Repair">Microwave Repair</option>
                <option value="Other Appliance Repair">Other Appliance Issue</option>
              </select>
            </div>

            {/* Preferred Date */}
            <div className="form-group">
              <label htmlFor="date"><Calendar size={15} /> Preferred Date</label>
              <input 
                type="date" 
                id="date" 
                name="date" 
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Preferred Time Slot */}
            <div className="form-group">
              <label htmlFor="time"><Clock size={15} /> Preferred Time Slot</label>
              <select id="time" name="time" value={formData.time} onChange={handleChange}>
                <option value="09:00 AM - 12:00 PM">Morning (09:00 AM - 12:00 PM)</option>
                <option value="12:00 PM - 03:00 PM">Afternoon (12:00 PM - 03:00 PM)</option>
                <option value="03:00 PM - 06:00 PM">Evening (03:00 PM - 06:00 PM)</option>
                <option value="06:00 PM - 10:00 PM">Night (06:00 PM - 10:00 PM)</option>
              </select>
            </div>

            {/* Address */}
            <div className="form-group full-width">
              <label htmlFor="address"><MapPin size={15} /> Doorstep Address (Navi Mumbai) *</label>
              <input 
                type="text" 
                id="address" 
                name="address" 
                placeholder="Flat / Society, Sector, Area (e.g. Sec 14, Vashi)" 
                value={formData.address}
                onChange={handleChange}
                required 
              />
            </div>

            {/* Problem Description */}
            <div className="form-group full-width">
              <label htmlFor="problem">Appliance Issue Description (Optional)</label>
              <textarea 
                id="problem" 
                name="problem" 
                rows="2" 
                placeholder="e.g. Washing machine not spinning / AC leaking water / Refrigerator not cooling..." 
                value={formData.problem}
                onChange={handleChange}
              />
            </div>

            {/* Action Buttons */}
            <div className="form-actions-row full-width">
              <button 
                type="submit" 
                className="btn btn-primary btn-submit-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Submitting Booking...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Confirm Doorstep Booking</span>
                  </>
                )}
              </button>

              <button 
                type="button" 
                className="btn btn-whatsapp btn-submit-lg"
                onClick={handleWhatsAppClick}
              >
                <MessageSquare size={18} />
                <span>Book via WhatsApp</span>
              </button>
            </div>

            {/* Guarantee Footer Note */}
            <div className="form-guarantee-note full-width">
              <CheckCircle size={15} className="guarantee-icon" />
              <span>Your details are 100% private & secure. Our technician will call within 15 minutes to confirm.</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuickBookingForm;
