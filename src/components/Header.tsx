import { TabDefinition } from './TabNavigation';

interface HeaderProps {
  nightMode: boolean;
  onToggleNightMode: () => void;
  tabs: TabDefinition[];
  currentTab: string;
  onTabChange: (tabId: string) => void;
}

function Header({ nightMode, onToggleNightMode, tabs, currentTab, onTabChange }: HeaderProps) {
  return (
    <header className={`${nightMode ? 'bg-science-900/95 border-science-800' : 'bg-white/95 border-science-200'} border-b backdrop-blur-md transition-colors duration-300 sticky top-0 z-50`}>
      {/* Top bar with logo and controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Title area */}
            <div>
              <div className="flex items-center gap-2">
                <h1 className={`text-xl font-bold tracking-tight ${nightMode ? 'text-white' : 'text-science-900'}`}>
                  Basal Ganglia Epigenome
                </h1>
                {/* BICAN badge */}
                <span className={`hidden sm:inline-flex px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded ${
                  nightMode ? 'bg-primary-500/20 text-primary-300' : 'bg-primary-100 text-primary-700'
                }`}>
                  BICAN
                </span>
              </div>
              <p className={`text-sm ${nightMode ? 'text-science-400' : 'text-science-600'}`}>
                Navigate the Brain Initiative Cell Atlas
              </p>
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={onToggleNightMode}
              className={`p-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                nightMode
                  ? 'bg-science-800 text-science-200 hover:bg-science-700 border border-science-700'
                  : 'bg-science-100 text-science-700 hover:bg-science-200 border border-science-200'
              }`}
              aria-label={nightMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {nightMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
              <span className="hidden md:inline text-sm">{nightMode ? 'Light' : 'Dark'}</span>
            </button>

            {/* BICAN Portal link */}
            <a
              href="https://www.portal.brain-bican.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                nightMode
                  ? 'text-sky-400 hover:bg-sky-500/10'
                  : 'text-primary-600 hover:bg-primary-50'
              }`}
            >
              <span>BICAN Portal</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className={`${nightMode ? 'bg-science-900/50' : 'bg-science-50/80'} border-t ${nightMode ? 'border-science-800' : 'border-science-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex -mb-px overflow-x-auto scrollbar-hide" role="tablist">
            {tabs.map((tab) => {
              const isActive = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  role="tab"
                  aria-selected={isActive}
                  className={`relative px-5 py-3.5 font-medium text-sm whitespace-nowrap transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset ${
                    isActive
                      ? nightMode
                        ? 'text-sky-400'
                        : 'text-primary-600'
                      : nightMode
                        ? 'text-science-400 hover:text-science-200'
                        : 'text-science-600 hover:text-science-900'
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <div
                      className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full ${
                        nightMode ? 'bg-sky-400' : 'bg-primary-500'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
