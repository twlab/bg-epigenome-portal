import type { Track } from '../store/trackStore';


export const hg38_default_tracks_OLD = [
  {
    type: "ruler",
    name: "Ruler",
  },
  {
    type: "geneAnnotation",
    name: "refGene",
    genome: "hg38",
  },
  {
    type: "geneAnnotation",
    name: "gencodeV47",
    genome: "hg38",
  },
  {
    type: "geneAnnotation",
    name: "MANE_select_1.4",
    label: "MANE selection v1.4",
    genome: "hg38",
  },
  {
    type: "repeatmasker",
    name: "rmsk_all",
    options: { label: "RepeatMasker" },
    url: "https://vizhub.wustl.edu/public/hg38/rmsk16.bb",
  },
];





// Default hg38 tracks
export const hg38_default_tracks = [
  {
    type: "ruler",
    name: "Ruler",
  },
  {
    type: "geneAnnotation",
    name: "refGene",
    genome: "hg38",
  }
];


export const mm10_genome_align_track = {
  "name": "hg38 vs mm10",
  "querygenome": "mm10", 
  "type": "genomealign", 
  "url": "https://vizhub.wustl.edu/public/hg38/weaver/hg38_mm10_axt.gz", 
}

export const rheMac10_genome_align_track = {
  "name": "hg38 vs rheMac10",
  "querygenome": "rheMac10", 
  "type": "genomealign", 
  "url": "https://vizhub.wustl.edu/public/hg38/weaver/hg38-rheMac10.gz", 
}

export const mCalJa12_genome_align_track = {
  "name": "hg38 vs mCalJa1.2",
  "querygenome": "mCalJa1.2", 
  "type": "genomealign", 
  "url": "https://wangcluster.wustl.edu/~wzhang/projects/bge/data/mCalJa1/genome.gz", 
}



export const mm10_default_tracks = [
  mm10_genome_align_track,
  {
    type: "geneAnnotation",
    name: "refGene",
    genome: "mm10",
    metadata: {"genome": "mm10"}

  }
];

export const rheMac10_default_tracks = [
  rheMac10_genome_align_track,
  {
    type: "geneAnnotation",
    name: "refGene",
    genome: "rheMac10",
    metadata: {"genome": "rheMac10"}
  }
];

export const mCalJa12_default_tracks = [
  mCalJa12_genome_align_track,
  {
    type: "geneAnnotation",
    name: "refGene",
    genome: "mCalJa1.2",
    metadata: {"genome": "mCalJa1.2"}
  }
];






// Convert Track to browser track format - pass through unchanged
export function convertToBrowserTrack(track: Track) {
  return track.config;
}

// Map of default tracks by reference
const defaultTracksByReference: Record<string, any[]> = {
  'mm10': mm10_default_tracks,
  'rheMac10': rheMac10_default_tracks,
  'mCalJa1.2': mCalJa12_default_tracks,
};

// Build browser tracks from selected tracks
// Tracks should already be sorted by reference (hg38 first, then mm10, rheMac10, mCalJa1.2)
// Insert default track list before the first track of each non-hg38 reference
export function buildBrowserTracks(selectedTracks: Track[]): any[] {
  const result: any[] = [...hg38_default_tracks];

  // Track which default tracks have been inserted
  const insertedDefaultTracks = new Set<string>();
  
  // Process each track in order (already sorted by reference)
  for (const track of selectedTracks) {
    const reference = track.metadata.reference;
    
    // If this is a non-hg38 reference and we haven't inserted its default tracks yet
    if (reference && reference !== 'hg38' && !insertedDefaultTracks.has(reference)) {
      const defaultTracks = defaultTracksByReference[reference];
      if (defaultTracks) {
        result.push(...defaultTracks);
        insertedDefaultTracks.add(reference);
      }
    }
    
    // Add the track itself
    result.push(convertToBrowserTrack(track));
    }
  
  return result;
}
