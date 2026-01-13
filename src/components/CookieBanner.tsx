import { useState, useEffect } from 'react';
import { getCookie, setCookie } from '../utils/cookieUtils';

interface CookieBannerProps {
  nightMode: boolean;
}

/**
 * Cookie consent banner component that displays a notification about cookie usage
 * and allows users to accept or reject cookies.
 */
function CookieBanner({ nightMode }: CookieBannerProps) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice about cookies
    const consent = getCookie('bge_cookie_consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setCookie('bge_cookie_consent', 'accepted', 365);
    setShowBanner(false);
  };

  const handleReject = () => {
    setCookie('bge_cookie_consent', 'rejected', 365);
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 animate-slide-up ${
      nightMode ? 'bg-science-900 border-science-700' : 'bg-white border-science-200'
    } border-t shadow-2xl`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Cookie Icon */}
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
            nightMode ? 'bg-accent-500/20' : 'bg-accent-100'
          }`}>
            <svg className={`w-5 h-5 ${nightMode ? 'text-accent-400' : 'text-accent-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className={`text-sm font-semibold mb-1 ${nightMode ? 'text-white' : 'text-science-900'}`}>
              Cookie Consent
            </h3>
            <p className={`text-sm leading-relaxed ${nightMode ? 'text-science-300' : 'text-science-600'}`}>
              We use cookies to remember your preferences (like skipping the landing page) and improve your experience. 
              These are functional cookies only - we don't track you or collect personal data.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleReject}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                nightMode
                  ? 'bg-science-800 text-science-300 hover:bg-science-700 border border-science-700'
                  : 'bg-science-100 text-science-700 hover:bg-science-200 border border-science-200'
              }`}
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 text-sm font-medium bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg hover:from-primary-700 hover:to-accent-700 transition-all shadow-lg hover:shadow-xl"
            >
              Accept
            </button>
          </div>
        </div>
      </div>

      {/* Slide up animation */}
      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default CookieBanner;
