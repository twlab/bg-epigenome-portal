import taxonomyData from '../data/taxonomy.tsv?raw';

export interface TaxonomyGroup {
  group: string;
  regionDistribution: string;
  isSelected: boolean;  // Whether this group is selected for visualization
}

export interface TaxonomySubclass {
  subclass: string;
  groups: TaxonomyGroup[];
  isExpanded: boolean;
  isSelected: boolean;  // Whether this subclass is selected for visualization
}

export interface TaxonomyClass {
  class: string;
  subclasses: TaxonomySubclass[];
  isExpanded: boolean;
}

export interface TaxonomyNeighborhood {
  neighborhood: string;
  classes: TaxonomyClass[];
  isExpanded: boolean;
}

export interface TaxonomyStore {
  neighborhoods: TaxonomyNeighborhood[];
}

// Parse TSV and build hierarchical structure
export function parseTaxonomyData(): TaxonomyNeighborhood[] {
  const lines = taxonomyData.trim().split('\n');
  const neighborhoods = new Map<string, TaxonomyNeighborhood>();

  lines.forEach((line) => {
    const cols = line.split('\t');
    const neighborhoodName = cols[0] || '';
    const className = cols[1] || '';
    const subclassName = cols[2] || '';
    const groupName = cols[3] || '';
    const regionDistribution = cols[4] || '';

    // Get or create neighborhood (expanded by default)
    if (!neighborhoods.has(neighborhoodName)) {
      neighborhoods.set(neighborhoodName, {
        neighborhood: neighborhoodName,
        classes: [],
        isExpanded: true,
      });
    }
    const neighborhood = neighborhoods.get(neighborhoodName)!;

    // Get or create class
    let classObj = neighborhood.classes.find(c => c.class === className);
    if (!classObj) {
      classObj = {
        class: className,
        subclasses: [],
        isExpanded: false,
      };
      neighborhood.classes.push(classObj);
    }

    // Get or create subclass
    let subclassObj = classObj.subclasses.find(s => s.subclass === subclassName);
    if (!subclassObj) {
      subclassObj = {
        subclass: subclassName,
        groups: [],
        isExpanded: false,
        isSelected: false,
      };
      classObj.subclasses.push(subclassObj);
    }

    // Add group (groups are unique)
    subclassObj.groups.push({
      group: groupName,
      regionDistribution,
      isSelected: false,
    });
  });

  return Array.from(neighborhoods.values());
}

// Helper to serialize the store (for saving state)
export function serializeTaxonomyStore(neighborhoods: TaxonomyNeighborhood[]): Record<string, boolean> {
  const selections: Record<string, boolean> = {};
  
  neighborhoods.forEach(neighborhood => {
    neighborhood.classes.forEach(classObj => {
      classObj.subclasses.forEach(subclass => {
        // Include subclass selections
        if (subclass.isSelected) {
          selections[subclass.subclass] = true;
        }
        // Include group selections
        subclass.groups.forEach(group => {
          if (group.isSelected) {
            selections[group.group] = true;
          }
        });
      });
    });
  });
  
  return selections;
}

// Get color for a specific level in the hierarchy using colorblind-friendly palette
// Uses varying luminance (grayscale variations) which is universally accessible
export function getHierarchyColor(neighborhoodName: string, level: 'neighborhood' | 'class' | 'subclass' | 'group', nightMode: boolean = false) {
  if (nightMode) {
    // Night mode: clear hierarchy with accessible contrast ratios
    switch (level) {
      case 'neighborhood': return 'bg-science-800 text-science-100';
      case 'class': return 'bg-science-800/80 text-science-200';
      case 'subclass': return 'bg-science-800/60 text-science-300';
      case 'group': return 'bg-science-900/50 text-science-400';
    }
  }
  
  // Light mode: clear visual hierarchy using luminance
  switch (level) {
    case 'neighborhood': return 'bg-science-200 text-science-900';
    case 'class': return 'bg-science-100 text-science-800';
    case 'subclass': return 'bg-science-50 text-science-700';
    case 'group': return 'bg-white text-science-600';
  }
}

// Parse region distribution string (dictionary format) into a map
export function parseRegionDistribution(regionDistStr: string): Record<string, number> {
  try {
    // The string is in Python dict format like "{'GPi': 1329, 'GPe': 312, ...}"
    // Convert to JSON format
    const jsonStr = regionDistStr
      .replace(/'/g, '"')  // Replace single quotes with double quotes
      .replace(/\s+/g, ''); // Remove whitespace
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error('Failed to parse region distribution:', regionDistStr, error);
    return {};
  }
}

// Calculate summed region distribution for selected groups only
export function calculateRegionDistribution(neighborhoods: TaxonomyNeighborhood[]): Record<string, number> {
  const summedDistribution: Record<string, number> = {};
  
  neighborhoods.forEach(neighborhood => {
    neighborhood.classes.forEach(classObj => {
      classObj.subclasses.forEach(subclass => {
        subclass.groups.forEach(group => {
          // Only include groups that are selected (ignore subclass selection)
          if (group.isSelected) {
            const distribution = parseRegionDistribution(group.regionDistribution);
            
            // Sum up the counts for each region
            Object.entries(distribution).forEach(([region, count]) => {
              summedDistribution[region] = (summedDistribution[region] || 0) + count;
            });
          }
        });
      });
    });
  });
  
  return summedDistribution;
}

// Get list of selected groups
export function getSelectedGroups(neighborhoods: TaxonomyNeighborhood[]): TaxonomyGroup[] {
  const selectedGroups: TaxonomyGroup[] = [];
  
  neighborhoods.forEach(neighborhood => {
    neighborhood.classes.forEach(classObj => {
      classObj.subclasses.forEach(subclass => {
        subclass.groups.forEach(group => {
          if (group.isSelected) {
            selectedGroups.push(group);
          }
        });
      });
    });
  });
  
  return selectedGroups;
}
