import React, { useState, useEffect } from 'react';

interface LandingPageProps {
  onEnter: () => void;
}

function LandingPage({ onEnter }: LandingPageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 gradient-dark overflow-hidden">
      {/* Subtle mesh gradient overlay */}
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Animated neural network background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs - colorblind-friendly colors */}
        <div className="absolute w-[600px] h-[600px] rounded-full filter blur-[120px] opacity-20 animate-float" 
             style={{ background: 'radial-gradient(circle, #0072b2 0%, transparent 70%)', top: '10%', left: '20%' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full filter blur-[100px] opacity-15 animate-float" 
             style={{ background: 'radial-gradient(circle, #56b4e9 0%, transparent 70%)', top: '40%', right: '15%', animationDelay: '2s' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full filter blur-[80px] opacity-10 animate-float" 
             style={{ background: 'radial-gradient(circle, #009e73 0%, transparent 70%)', bottom: '10%', left: '30%', animationDelay: '4s' }} />
        
        {/* Neural connection lines - decorative SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0072b2" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#56b4e9" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <g stroke="url(#lineGrad)" strokeWidth="1" fill="none">
            <path d="M100,100 Q300,50 500,150 T900,100" className="animate-pulse" style={{ animationDuration: '4s' }} />
            <path d="M50,300 Q250,200 450,350 T850,280" className="animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
            <path d="M200,500 Q400,400 600,520 T1000,450" className="animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
          </g>
          {/* Neuron nodes */}
          <g fill="#56b4e9" fillOpacity="0.3">
            <circle cx="100" cy="100" r="4" />
            <circle cx="500" cy="150" r="6" />
            <circle cx="900" cy="100" r="4" />
            <circle cx="50" cy="300" r="3" />
            <circle cx="450" cy="350" r="5" />
            <circle cx="850" cy="280" r="4" />
            <circle cx="200" cy="500" r="4" />
            <circle cx="600" cy="520" r="6" />
            <circle cx="1000" cy="450" r="3" />
          </g>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* BICAN Attribution Badge */}
          <div className={`mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-xs font-medium tracking-wider text-sky-300 uppercase">Part of the</span>
              <span className="text-sm font-semibold text-white">BRAIN Initiative Cell Atlas Network</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            <span className="block">BICAN Basal Ganglia</span>
            <span className="block mt-2" style={{ 
              background: 'linear-gradient(90deg, #56b4e9 0%, #0072b2 50%, #009e73 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Epigenome Navigator
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Explore comprehensive epigenomic landscapes across the basal ganglia,
            powered by single-cell chromatin accessibility and histone modification profiling
            from the <a href="https://www.portal.brain-bican.org/" target="_blank" rel="noopener noreferrer" 
                       className="text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-colors">
              BRAIN Initiative Cell Atlas Network
            </a>
          </p>

          {/* CTA Button */}
          <button
            onClick={onEnter}
            className="group relative px-10 py-4 text-white text-lg font-semibold rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            style={{ background: 'linear-gradient(135deg, #0072b2 0%, #005f94 100%)' }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Enter Portal
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </button>

          {/* Feature highlights */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Interactive Browser',
                description: 'Navigate chromatin accessibility and histone modifications across basal ganglia regions',
                delay: 'delay-200',
                color: '#0072b2'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
                title: 'Cell Type Taxonomy',
                description: 'Hierarchical classification of neuronal and non-neuronal cell types with regional annotation',
                delay: 'delay-400',
                color: '#009e73'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'Multi-Modal Data',
                description: 'Integrated single-cell ATAC-seq and CUT&Tag profiles with comprehensive QC metrics',
                delay: 'delay-600',
                color: '#e69f00'
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(idx + 2) * 200}ms` }}
              >
                <div className="group h-full p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl mb-4 flex items-center justify-center"
                       style={{ backgroundColor: `${feature.color}20`, color: feature.color }}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* BICAN Footer Attribution */}
          <div className={`mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-gray-500">
                Data provided by the{' '}
                <a href="https://www.portal.brain-bican.org/" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
                  BRAIN Initiative Cell Atlas Network (BICAN)
                </a>
              </p>
              <div className="flex items-center gap-6 text-xs text-gray-600">
                <span>Supported by NIH BRAIN Initiative</span>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <span>Open Access Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
