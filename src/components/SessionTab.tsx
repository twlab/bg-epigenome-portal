import React, { type FC } from 'react';
import { deleteCookie } from '../utils/cookieUtils';

// ============================================================================
// Types
// ============================================================================

type SessionTabProps = {
  nightMode: boolean;
  onShowLanding: () => void;
  onStartGuide: () => void;
};

// ============================================================================
// Icons
// ============================================================================

const PlayIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const HomeIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const InfoIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ChevronIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`w-5 h-5 transform group-hover:translate-x-1 transition-transform ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

// ============================================================================
// Reusable UI Components
// ============================================================================

const ActionButton: FC<{
  nightMode: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: 'primary' | 'accent';
}> = ({ nightMode, onClick, icon, title, description, variant = 'primary' }) => {
  const colors = {
    primary: nightMode
      ? 'bg-science-800/50 border-primary-500/30 hover:border-primary-500/50 hover:bg-science-800'
      : 'bg-primary-50 border-primary-200 hover:border-primary-300 hover:bg-primary-100',
    accent: nightMode
      ? 'bg-science-800/50 border-accent-500/30 hover:border-accent-500/50 hover:bg-science-800'
      : 'bg-accent-50 border-accent-200 hover:border-accent-300 hover:bg-accent-100',
  };

  const iconColors = {
    primary: nightMode ? 'bg-primary-500/20 text-primary-400' : 'bg-primary-100 text-primary-600',
    accent: nightMode ? 'bg-accent-500/20 text-accent-400' : 'bg-accent-100 text-accent-600',
  };

  return (
    <button
      onClick={onClick}
      className={`group p-6 rounded-xl border-2 transition-all duration-300 text-left ${colors[variant]}`}
    >
      <div className="flex items-start gap-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${iconColors[variant]}`}>
          {icon}
        </div>
        <div className="flex-1">
          <h4 className={`font-semibold mb-1 ${nightMode ? 'text-white' : 'text-science-900'}`}>
            {title}
          </h4>
          <p className={`text-sm ${nightMode ? 'text-science-400' : 'text-science-600'}`}>
            {description}
          </p>
        </div>
        <ChevronIcon className={nightMode ? 'text-science-400' : 'text-science-500'} />
      </div>
    </button>
  );
};

// ============================================================================
// Main Component
// ============================================================================

const SessionTab: FC<SessionTabProps> = ({
  nightMode,
  onShowLanding,
  onStartGuide,
}) => {
  const handleShowLanding = () => {
    deleteCookie('bge_skip_landing');
    onShowLanding();
  };

  return (
    <div className={`space-y-6 ${nightMode ? 'text-gray-200' : 'text-gray-800'}`}>
      {/* Interactive Features Section */}
      <div className={`rounded-2xl p-8 ${nightMode ? 'card-science-dark' : 'card-science'}`}>
        <div className="flex items-start gap-4 mb-6">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
            nightMode ? 'bg-accent-500/20' : 'bg-accent-100'
          }`}>
            <PlayIcon className={nightMode ? 'text-accent-400' : 'text-accent-600'} />
          </div>
          <div>
            <h3 className={`text-xl font-semibold mb-2 ${nightMode ? 'text-white' : 'text-science-900'}`}>
              Interactive Features
            </h3>
            <p className={`leading-relaxed ${nightMode ? 'text-science-300' : 'text-science-600'}`}>
              Restart interactive features and access the landing page.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <ActionButton
            nightMode={nightMode}
            onClick={onStartGuide}
            icon={<PlayIcon />}
            title="Interactive Guide"
            description="Restart the guide to learn about portal features."
            variant="accent"
          />
          <ActionButton
            nightMode={nightMode}
            onClick={handleShowLanding}
            icon={<HomeIcon />}
            title="Landing Page"
            description="Show the landing page again."
            variant="primary"
          />
        </div>
      </div>

      {/* Info Card */}
      <div className={`rounded-2xl p-6 ${nightMode ? 'bg-science-800/50 border-science-700' : 'bg-science-50 border-science-200'} border`}>
        <div className="flex items-start gap-3">
          <InfoIcon className={`mt-0.5 shrink-0 ${nightMode ? 'text-sky-400' : 'text-sky-600'}`} />
          <div>
            <h4 className={`font-semibold mb-1 ${nightMode ? 'text-white' : 'text-science-900'}`}>
              Session Settings
            </h4>
            <p className={`text-sm ${nightMode ? 'text-science-300' : 'text-science-600'}`}>
              Use the buttons above to restart the interactive guide or view the landing page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionTab;
