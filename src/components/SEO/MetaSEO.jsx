import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../../services/analytics';

const MetaSEO = ({ title, description, canonicalPath = '' }) => {
  const location = useLocation();

  useEffect(() => {
    // Update Page Title
    if (title) {
      document.title = `${title} | SERVIXA HOME Navi Mumbai`;
    }

    // Update Meta Description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }

    // Track Page View in Analytics
    trackPageView(location.pathname + location.search);

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [title, description, location]);

  return null;
};

export default MetaSEO;
