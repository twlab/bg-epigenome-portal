import React, { type FC, useState, useEffect, useRef } from 'react';

// ============================================================================
// Types
// ============================================================================

type ScAnalysisTabProps = {
  nightMode: boolean;
};

// ============================================================================
// Main Component
// ============================================================================

const ScAnalysisTab: FC<ScAnalysisTabProps> = ({ nightMode }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Toggle fullscreen function
  const toggleFullscreen = async () => {
    if (!containerRef.current) return;
    
    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error('Error toggling fullscreen:', err);
    }
  };

  // Handle fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard shortcut: F to toggle fullscreen
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'f' || e.key === 'F') {
        const target = e.target as HTMLElement;
        if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
          e.preventDefault();
          toggleFullscreen();
        }
      }
    };
    
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className={`${isFullscreen ? 'h-screen' : 'h-full flex flex-col'} ${nightMode ? 'text-gray-200' : 'text-gray-800'}`} style={{ minHeight: 0 }}>
      {/* Container with fullscreen capability */}
      <div 
        ref={containerRef}
        className={`${isFullscreen ? 'h-full rounded-none' : 'rounded-2xl flex-1'} shadow-xl overflow-hidden flex flex-col ${
          nightMode ? 'card-science-dark' : 'card-science'
        }`}
        style={!isFullscreen ? { minHeight: 0 } : {}}
      >
        {/* Header Section */}
        {!isFullscreen && (
          <div className={`px-6 py-4 border-b flex items-center justify-between ${
            nightMode ? 'border-science-700 bg-science-800' : 'border-science-200 bg-science-50'
          }`}>
            <div className="flex items-start gap-4 flex-1">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                nightMode ? 'bg-primary-500/20' : 'bg-primary-100'
              }`}>
                <svg 
                  className={`w-6 h-6 ${nightMode ? 'text-primary-400' : 'text-primary-600'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className={`text-lg font-semibold mb-1 ${nightMode ? 'text-white' : 'text-science-900'}`}>
                  Single-Cell Analysis
                </h3>
                <p className={`text-sm ${nightMode ? 'text-science-400' : 'text-science-600'}`}>
                  Interactive single-cell analysis tools for exploring BGE datasets. Generate UMAP plots, gene boxplots, and heatmaps.
                </p>
                {/* Note about large dataset */}
                <div className={`mt-2 px-3 py-2 rounded-lg ${
                  nightMode ? 'bg-yellow-500/20 border-yellow-500/30' : 'bg-yellow-50 border-yellow-200'
                } border`}>
                  <p className={`text-xs font-medium ${nightMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
                    ⏳ Please be patient as the dataset is huge and may take time to load.
                  </p>
                </div>
              </div>
            </div>
            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className={`p-2.5 rounded-lg transition-all ml-4 shrink-0 ${
                nightMode
                  ? 'bg-science-700 hover:bg-science-600 text-science-200'
                  : 'bg-science-100 hover:bg-science-200 text-science-700'
              } hover:shadow-md`}
              title={isFullscreen ? 'Exit Fullscreen (ESC)' : 'Enter Fullscreen (F)'}
            >
              {isFullscreen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              )}
            </button>
          </div>
        )}

        {/* Fullscreen header (minimal) */}
        {isFullscreen && (
          <div className={`px-6 py-3 border-b flex items-center justify-between ${
            nightMode ? 'border-science-700 bg-science-800' : 'border-science-200 bg-science-50'
          }`}>
            <h3 className={`text-lg font-semibold ${nightMode ? 'text-white' : 'text-science-900'}`}>
              Single-Cell Analysis
            </h3>
            <button
              onClick={toggleFullscreen}
              className={`p-2.5 rounded-lg transition-all ${
                nightMode
                  ? 'bg-science-700 hover:bg-science-600 text-science-200'
                  : 'bg-science-100 hover:bg-science-200 text-science-700'
              } hover:shadow-md`}
              title="Exit Fullscreen (ESC or F)"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
              </svg>
            </button>
          </div>
        )}

        {/* Embedded Analysis Tool - fills remaining space */}
        <div className={`flex-1 overflow-hidden`} style={{ minHeight: 0 }}>
          <div className="relative w-full h-full">
            <iframe
              src="https://neomorph.salk.edu/SCMDAP/BGE"
              className="w-full h-full border-0"
              title="Single-Cell Analysis Dashboard"
              allow="fullscreen"
              loading="lazy"
              tabIndex={-1}
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScAnalysisTab;
