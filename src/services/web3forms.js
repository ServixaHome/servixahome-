// WEB3FORMS INTEGRATION SERVICE FOR SERVIXA HOME
import { BUSINESS_INFO } from '../constants/businessInfo';

export const submitBookingForm = async (formData) => {
  try {
    // Construct FormData for 100% reliable browser POST handling
    const data = new FormData();
    data.append("access_key", BUSINESS_INFO.web3FormsKey);
    data.append("subject", `New Appliance Repair Booking: ${formData.service || 'General Enquiry'} - ${formData.name}`);
    data.append("from_name", "SERVIXA HOME Website Booking");
    data.append("to_email", BUSINESS_INFO.email);
    data.append("name", formData.name || "");
    data.append("phone", formData.phone || "");
    data.append("email", formData.email || "Not Provided");
    data.append("service", formData.service || "Appliance Repair");
    data.append("preferred_date", formData.date || "As soon as possible");
    data.append("preferred_time", formData.time || "Flexible");
    data.append("address", formData.address || "");
    data.append("landmark", formData.landmark || "N/A");
    data.append("problem_description", formData.problem || "Doorstep Inspection requested");
    data.append("visit_charge_acknowledged", "Yes (₹99 only if repair declined)");
    data.append("booking_timestamp", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));
    data.append("website_source", "www.servixahome.online");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data
    });

    const result = await response.json();

    if (result.success) {
      // Fire GA4 Lead Event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'generate_lead', {
          event_category: 'Booking',
          event_label: formData.service,
          value: 99
        });
      }
      return { success: true, message: "Booking submitted successfully!" };
    } else {
      return { success: false, message: result.message || "Submission failed. Please call us directly." };
    }
  } catch (error) {
    console.error("Web3Forms submission error:", error);
    return {
      success: false,
      message: "Network error occurred. Please call +91 8779694303 directly."
    };
  }
};
