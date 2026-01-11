import type { Track } from '../store/trackStore';

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





// Convert Track to browser track format - pass through unchanged
export function convertToBrowserTrack(track: Track) {
  return track.config;
}

// Map of genome align tracks by reference
const genomeAlignTracks: Record<string, any> = {
  'mm10': mm10_genome_align_track,
  'rheMac10': rheMac10_genome_align_track,
  'mCalJa1.2': mCalJa12_genome_align_track,
};

// Build browser tracks from selected tracks
// Tracks should already be sorted by reference (hg38 first, then mm10, rheMac10, mCalJa1.2)
// Insert genome align track before the first track of each non-hg38 reference
export function buildBrowserTracks(selectedTracks: Track[]): any[] {
  const result: any[] = [...hg38_default_tracks];

  // Track which genome align tracks have been inserted
  const insertedAlignTracks = new Set<string>();
  
  // Process each track in order (already sorted by reference)
  for (const track of selectedTracks) {
    const reference = track.metadata.reference;
    
    // If this is a non-hg38 reference and we haven't inserted its align track yet
    if (reference && reference !== 'hg38' && !insertedAlignTracks.has(reference)) {
      const alignTrack = genomeAlignTracks[reference];
      if (alignTrack) {
        result.push(alignTrack);
        insertedAlignTracks.add(reference);
      }
    }
    
    // Add the track itself
    result.push(convertToBrowserTrack(track));
    }
  
  return result;
}
