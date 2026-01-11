import type { FC } from 'react';

export type TabDefinition = {
  id: string;
  label: string;
};

type TabNavigationProps = {
  tabs: TabDefinition[];
  currentTab: string;
  onTabChange: (tabId: string) => void;
  nightMode: boolean;
};

const TabNavigation: FC<TabNavigationProps> = ({ tabs, currentTab, onTabChange, nightMode }) => {
  return (
    <div className="mt-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center">
          {tabs.map((tab) => {
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 border ${
                  isActive
                    ? nightMode
                      ? 'bg-gray-100 text-gray-900 border-gray-100'
                      : 'bg-white text-gray-900 border-gray-200 shadow-lg'
                    : nightMode
                      ? 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'
                      : 'bg-white/50 text-gray-600 border-gray-200 hover:bg-white'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;

