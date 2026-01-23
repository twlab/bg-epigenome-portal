import React, { type FC } from 'react';

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
  return (
    <div className={`space-y-6 ${nightMode ? 'text-gray-200' : 'text-gray-800'}`}>
      {/* Header Section */}
      <div className={`rounded-2xl p-8 ${nightMode ? 'card-science-dark' : 'card-science'}`}>
        <div className="flex items-start gap-4 mb-6">
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
          <div>
            <h3 className={`text-xl font-semibold mb-2 ${nightMode ? 'text-white' : 'text-science-900'}`}>
              Single-Cell Analysis
            </h3>
            <p className={`leading-relaxed ${nightMode ? 'text-science-300' : 'text-science-600'}`}>
              Interactive single-cell analysis tools for exploring BGE datasets. Generate UMAP plots, gene boxplots, and heatmaps.
            </p>
          </div>
        </div>
      </div>

      {/* Embedded Analysis Tool */}
      <div className={`rounded-2xl overflow-hidden ${nightMode ? 'card-science-dark' : 'card-science'}`}>
        <div className="relative w-full" style={{ height: '800px', minHeight: '600px' }}>
          <iframe
            src="https://neomorph.salk.edu/SCMDAP/BGE"
            className="w-full h-full border-0"
            title="Single-Cell Analysis Dashboard"
            allow="fullscreen"
            loading="lazy"
            tabIndex={-1}
          />
        </div>
      </div>
    </div>
  );
};

export default ScAnalysisTab;
