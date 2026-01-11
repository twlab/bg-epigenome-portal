import type { FC } from 'react';

type AboutSectionProps = {
  nightMode: boolean;
};

const AboutSection: FC<AboutSectionProps> = ({ nightMode }) => (
  <div className={`space-y-8 ${nightMode ? 'text-gray-200' : 'text-gray-800'}`}>
    {/* Main Hero Card */}
    <div className="rounded-2xl p-8 gradient-science text-white shadow-2xl relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 pattern-neural" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-white/20">
            About
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          BICAN Basal Ganglia Epigenome Navigator
        </h2>
        
        <p className="text-lg text-white/90 leading-relaxed max-w-3xl">
          An interactive portal for exploring epigenomic data from the basal ganglia, 
          developed as part of the{' '}
          <a 
            href="https://www.portal.brain-bican.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sky-300 hover:text-white underline underline-offset-2 transition-colors"
          >
            BRAIN Initiative Cell Atlas Network (BICAN)
          </a>.
        </p>
      </div>
    </div>

    {/* About BICAN Section */}
    <div className={`rounded-2xl p-8 ${nightMode ? 'card-science-dark' : 'card-science'}`}>
      <div className="flex items-start gap-4 mb-6">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
          nightMode ? 'bg-primary-500/20' : 'bg-primary-100'
        }`}>
          <svg className={`w-6 h-6 ${nightMode ? 'text-primary-400' : 'text-primary-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        </div>
        <div>
          <h3 className={`text-xl font-semibold mb-2 ${nightMode ? 'text-white' : 'text-science-900'}`}>
            About BICAN
          </h3>
          <p className={`leading-relaxed ${nightMode ? 'text-science-300' : 'text-science-600'}`}>
            The BRAIN Initiative® Cell Atlas Network (BICAN) is a collaborative effort between 
            neuroscientists, computational biologists, and software engineers to create a 
            comprehensive atlas of the human brain. Supported by the U.S. BRAIN Initiative, 
            BICAN is dedicated to advancing our knowledge of the brain by gathering and sharing 
            new data that allows us to develop the "parts list" of the brain, detailing the vast 
            array of neurons and non-neuronal cells.
          </p>
        </div>
      </div>
      
      <a 
        href="https://www.portal.brain-bican.org/" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
          nightMode 
            ? 'bg-primary-500/20 text-primary-300 hover:bg-primary-500/30' 
            : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
        }`}
      >
        <span>Visit BICAN Portal</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>

    {/* Project Overview Grid */}
    <div className="grid gap-6 md:grid-cols-2">
      {/* What is BGE */}
      <div className={`rounded-2xl p-6 ${nightMode ? 'card-science-dark' : 'card-science'}`}>
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
          nightMode ? 'bg-sky-500/20' : 'bg-sky-100'
        }`}>
          <svg className={`w-5 h-5 ${nightMode ? 'text-sky-400' : 'text-sky-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h3 className={`text-lg font-semibold mb-3 ${nightMode ? 'text-white' : 'text-science-900'}`}>
          What is BGE?
        </h3>
        <p className={`text-sm leading-relaxed ${nightMode ? 'text-science-300' : 'text-science-600'}`}>
          BGE (Basal Ganglia Epigenome) is a specialized portal for curated epigenomic datasets 
          with built-in visualization and exploration tools tailored to deep brain nuclei. 
          It provides researchers with interactive access to chromatin accessibility and 
          histone modification data across basal ganglia subregions.
        </p>
      </div>

      {/* Data Sources */}
      <div className={`rounded-2xl p-6 ${nightMode ? 'card-science-dark' : 'card-science'}`}>
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
          nightMode ? 'bg-success-500/20' : 'bg-success-100'
        }`}>
          <svg className={`w-5 h-5 ${nightMode ? 'text-success-400' : 'text-success-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        </div>
        <h3 className={`text-lg font-semibold mb-3 ${nightMode ? 'text-white' : 'text-science-900'}`}>
          Data Sources
        </h3>
        <p className={`text-sm leading-relaxed ${nightMode ? 'text-science-300' : 'text-science-600'}`}>
          This portal integrates data from BICAN consortium members, including single-cell 
          ATAC-seq for chromatin accessibility, CUT&Tag for histone modifications, and 
          comprehensive cell type annotations aligned with the Allen Brain Atlas taxonomy.
        </p>
      </div>
    </div>

    {/* Key Features */}
    <div className={`rounded-2xl p-8 ${nightMode ? 'card-science-dark' : 'card-science'}`}>
      <h3 className={`text-xl font-semibold mb-6 ${nightMode ? 'text-white' : 'text-science-900'}`}>
        Key Contributions
      </h3>
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'Epigenome-wide Analysis',
            description: 'Comprehensive profiling of basal ganglia subdivisions including striatum, pallidum, and associated nuclei',
            color: nightMode ? 'border-l-primary-400' : 'border-l-primary-500'
          },
          {
            title: 'Cross-species Validation',
            description: 'Comparative data using macaque and mouse models to understand evolutionary conservation',
            color: nightMode ? 'border-l-success-400' : 'border-l-success-500'
          },
          {
            title: 'Interactive Visualization',
            description: 'Rapid prototyping toolkit for exploring chromatin states and regulatory elements',
            color: nightMode ? 'border-l-accent-400' : 'border-l-accent-500'
          }
        ].map((feature, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl border-l-4 ${feature.color} ${
              nightMode ? 'bg-science-800/50' : 'bg-science-50'
            }`}
          >
            <h4 className={`font-medium mb-2 ${nightMode ? 'text-white' : 'text-science-900'}`}>
              {feature.title}
            </h4>
            <p className={`text-sm ${nightMode ? 'text-science-400' : 'text-science-600'}`}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Resources & Links */}
    <div className={`rounded-2xl p-6 ${nightMode ? 'card-science-dark' : 'card-science'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${nightMode ? 'text-white' : 'text-science-900'}`}>
        Related Resources
      </h3>
      
      <div className="flex flex-wrap gap-3">
        {[
          { label: 'BICAN Data Catalog', href: 'https://www.portal.brain-bican.org/' },
          { label: 'Allen Brain Atlas', href: 'https://atlas.brain-map.org/' },
          { label: 'NIH BRAIN Initiative', href: 'https://braininitiative.nih.gov/' }
        ].map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              nightMode 
                ? 'bg-science-800 text-science-300 hover:bg-science-700 hover:text-white border border-science-700' 
                : 'bg-science-100 text-science-700 hover:bg-science-200 border border-science-200'
            }`}
          >
            <span>{link.label}</span>
            <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ))}
      </div>
    </div>

    {/* Attribution Footer */}
    <div className={`text-center py-4 px-6 rounded-xl ${nightMode ? 'bg-science-900/50' : 'bg-science-100'}`}>
      <p className={`text-sm ${nightMode ? 'text-science-400' : 'text-science-600'}`}>
        This portal is part of the{' '}
        <a 
          href="https://www.portal.brain-bican.org/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`font-medium ${nightMode ? 'text-sky-400 hover:text-sky-300' : 'text-primary-600 hover:text-primary-700'}`}
        >
          BRAIN Initiative Cell Atlas Network
        </a>
        {' '}supported by NIH BRAIN Initiative grants.
      </p>
    </div>
  </div>
);

export default AboutSection;
