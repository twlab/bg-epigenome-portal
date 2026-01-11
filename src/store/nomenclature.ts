// Brain Atlas Nomenclature - Maps abbreviations to full names for display purposes
// Internal keys remain unchanged (based on taxonomy.tsv)

// Regional Distribution Keys (Anatomical Locations)
export const regionNames: Record<string, string> = {
  "BF": "Basal Forebrain",
  "CaB": "Caudate Nucleus (Body)",
  "CaH": "Caudate Nucleus (Head)",
  "CaT": "Caudate Nucleus (Tail)",
  "Eca": "Extended Amygdala (Capsular)",
  "GPe": "Globus Pallidus externa",
  "GPeC": "Globus Pallidus externa (Caudal)",
  "GPeR": "Globus Pallidus externa (Rostral)",
  "GPi": "Globus Pallidus interna",
  "NAC": "Nucleus Accumbens",
  "NACc": "Nucleus Accumbens (Core)",
  "NACs": "Nucleus Accumbens (Shell)",
  "Pu": "Putamen",
  "PuC": "Putamen (Caudal)",
  "PuPV": "Putamen (Paraventricular)",
  "PuR": "Putamen (Rostral)",
  "SN": "Substantia Nigra",
  "SN-VTA": "Substantia Nigra / Ventral Tegmental Area Transition",
  "STH": "Subthalamic Nucleus",
  "VeP": "Ventral Pallidum"
};

// Subclass Keys (Developmental & Broad Categories)
export const subclassNames: Record<string, string> = {
  "Astro-Epen": "Astrocyte / Ependymal",
  "CN CGE GABA": "Cerebral Nuclei GABA (Caudal Ganglionic Eminence derived)",
  "CN Cholinergic GABA": "Cerebral Nuclei Cholinergic-GABAergic Hybrid",
  "CN GABA-Glut": "Cerebral Nuclei GABA-Glutamate Co-releasing",
  "CN LAMP5-CXCL14 GABA": "Cerebral Nuclei LAMP5+ CXCL14+ GABAergic Interneuron",
  "CN LAMP5-LHX6 GABA": "Cerebral Nuclei LAMP5+ LHX6+ GABAergic Interneuron",
  "CN LGE GABA": "Cerebral Nuclei GABA (Lateral Ganglionic Eminence derived)",
  "CN LHX8 GABA": "Cerebral Nuclei LHX8+ GABAergic Neuron",
  "CN MEIS2 GABA": "Cerebral Nuclei MEIS2+ GABAergic Neuron",
  "CN MGE GABA": "Cerebral Nuclei GABA (Medial Ganglionic Eminence derived)",
  "CN ONECUT1 GABA": "Cerebral Nuclei ONECUT1+ GABAergic Neuron",
  "CN ST18 GABA": "Cerebral Nuclei ST18+ GABAergic Neuron",
  "CN VIP GABA": "Cerebral Nuclei VIP+ GABAergic Interneuron",
  "Cx GABA": "Cortical GABAergic Interneuron",
  "F Glut": "Forebrain Glutamatergic",
  "F M GABA": "Forebrain / Midbrain GABAergic",
  "F M GATA3 GABA": "Forebrain / Midbrain GATA3+ GABAergic",
  "F M Glut": "Forebrain / Midbrain Glutamatergic",
  "Immune": "Immune Cells",
  "M Dopa": "Midbrain Dopaminergic",
  "Nonneuron": "Non-neuronal Cells",
  "OPC-Oligo": "Oligodendrocyte Precursor / Oligodendrocyte",
  "OT Granular GABA": "Olfactory Tubercle Granular GABAergic Neuron",
  "SN PAX7 GABA": "Substantia Nigra PAX7+ GABAergic Neuron",
  "STR D1 MSN": "Striatal Dopamine D1 Receptor Medium Spiny Neuron",
  "STR D2 MSN": "Striatal Dopamine D2 Receptor Medium Spiny Neuron",
  "STR Hybrid MSN": "Striatal D1/D2 Receptor Hybrid Medium Spiny Neuron",
  "STR RSPO2 GABA": "Striatal RSPO2+ GABAergic Neuron",
  "STR SST GABA": "Striatal Somatostatin+ GABAergic Interneuron",
  "STR SST-CHODL GABA": "Striatal Somatostatin+ CHODL+ GABAergic Interneuron",
  "Subpallium GABA": "Subpallial GABAergic Neuron",
  "Subpallium GABA-Glut": "Subpallial GABA-Glutamate Co-releasing Neuron",
  "Vascular": "Vascular Cells"
};

// Group Keys (Specific Cell Types)
export const groupNames: Record<string, string> = {
  "ACx MEIS2 GABA": "Allocortex MEIS2+ GABAergic Interneuron",
  "AMY-SLEA-BNST D1 GABA": "Amygdala/Sublenticular Extended Amygdala/BNST D1+ GABAergic Neuron",
  "AMY-SLEA-BNST GABA": "Amygdala/Sublenticular Extended Amygdala/BNST GABAergic Neuron",
  "Astrocyte": "Astrocyte",
  "B cells": "B Lymphocytes",
  "BAM": "Border-Associated Macrophage",
  "BF SKOR1 Glut": "Basal Forebrain SKOR1+ Glutamatergic Neuron",
  "CN GABA-Glut": "Cerebral Nuclei GABA-Glutamate Co-releasing Neuron",
  "COP": "Committed Oligodendrocyte Progenitor",
  "Endo": "Endothelial Cell",
  "Ependymal": "Ependymal Cell",
  "GPe MEIS2-SOX6 GABA": "GPe MEIS2+ SOX6+ GABAergic Neuron (Arkypallidal)",
  "GPe SOX6-CTXND1 GABA": "GPe SOX6+ CTXND1+ GABAergic Neuron",
  "GPe-NDB-SI LHX6-LHX8-GBX1 GABA": "GPe/Diagonal Band/Substantia Innominata LHX6+ LHX8+ GABAergic Neuron",
  "GPi Core": "Globus Pallidus interna Core Neuron",
  "GPi Shell": "Globus Pallidus interna Shell Neuron",
  "GPin-BF Cholinergic GABA": "GPi-Basal Forebrain Cholinergic-GABAergic Hybrid",
  "ImAstro": "Immature/Intermediate Astrocyte",
  "ImOligo": "Immature/Intermediate Oligodendrocyte",
  "LAMP5-CXCL14 GABA": "LAMP5+ CXCL14+ GABAergic Interneuron",
  "LAMP5-LHX6 GABA": "LAMP5+ LHX6+ GABAergic Interneuron",
  "Microglia": "Microglia",
  "Monocyte": "Monocyte",
  "OB Dopa-GABA": "Olfactory Bulb Dopaminergic-GABAergic Neuron",
  "OB FRMD7 GABA": "Olfactory Bulb FRMD7+ GABAergic Neuron",
  "OPC": "Oligodendrocyte Precursor Cell",
  "OT D1 ICj": "Olfactory Tubercle D1+ Islands of Calleja Neuron",
  "Oligo OPALIN": "Oligodendrocyte (OPALIN+)",
  "Oligo PLEKHG1": "Oligodendrocyte (PLEKHG1+)",
  "Pericyte": "Pericyte",
  "SMC": "Smooth Muscle Cell",
  "SN EBF2 GABA": "Substantia Nigra EBF2+ GABAergic Neuron",
  "SN GATA3-PVALB GABA": "Substantia Nigra GATA3+ Parvalbumin+ GABAergic Neuron",
  "SN SEMA5A GABA": "Substantia Nigra SEMA5A+ GABAergic Neuron",
  "SN SOX6 Dopa": "Substantia Nigra SOX6+ Dopaminergic Neuron",
  "SN-VTR CALB1 Dopa": "SN/Ventral Tegmental Region Calbindin1+ Dopaminergic Neuron",
  "SN-VTR GAD2 Dopa": "SN/Ventral Tegmental Region GAD2+ Dopaminergic Neuron",
  "SN-VTR-HTH GATA3-TCF7L2 GABA": "SN/VTR/Hypothalamus GATA3+ TCF7L2+ GABAergic Neuron",
  "STH PVALB-PITX2 Glut": "Subthalamic Nucleus Parvalbumin+ PITX2+ Glutamatergic Neuron",
  "STR Cholinergic GABA": "Striatal Cholinergic Interneuron",
  "STR D1D2 Hybrid MSN": "Striatal D1/D2 Receptor Hybrid Medium Spiny Neuron",
  "STR FS PTHLH-PVALB GABA": "Striatal Fast-Spiking PTHLH+ Parvalbumin+ Interneuron",
  "STR LYPD6-RSPO2 GABA": "Striatal LYPD6+ RSPO2+ GABAergic Neuron",
  "STR SST-ADARB2 GABA": "Striatal Somatostatin+ ADARB2+ Interneuron",
  "STR SST-CHODL GABA": "Striatal Somatostatin+ CHODL+ Interneuron (NOS1+)",
  "STR SST-RSPO2 GABA": "Striatal Somatostatin+ RSPO2+ Interneuron",
  "STR TAC3-PLPP4 GABA": "Striatal TAC3+ PLPP4+ GABAergic Neuron",
  "STR-BF TAC3-PLPP4-LHX8 GABA": "Striatal/Basal Forebrain TAC3+ PLPP4+ LHX8+ GABAergic Neuron",
  "STRd Cholinergic GABA": "Dorsal Striatum Cholinergic Interneuron",
  "STRd D1 Matrix MSN": "Dorsal Striatum D1 Matrix Medium Spiny Neuron",
  "STRd D1 Striosome MSN": "Dorsal Striatum D1 Striosome Medium Spiny Neuron",
  "STRd D2 Matrix MSN": "Dorsal Striatum D2 Matrix Medium Spiny Neuron",
  "STRd D2 StrioMat Hybrid MSN": "Dorsal Striatum D2 Striosome-Matrix Hybrid Medium Spiny Neuron",
  "STRd D2 Striosome MSN": "Dorsal Striatum D2 Striosome Medium Spiny Neuron",
  "STRv D1 MSN": "Ventral Striatum D1 Medium Spiny Neuron",
  "STRv D1 NUDAP MSN": "Ventral Striatum D1 NUDAP-type Medium Spiny Neuron",
  "STRv D2 MSN": "Ventral Striatum D2 Medium Spiny Neuron",
  "T cells": "T Lymphocytes",
  "VIP GABA": "VIP+ GABAergic Interneuron",
  "VLMC": "Vascular Leptomeningeal Cell",
  "VTR-HTH Glut": "Ventral Tegmental Region / Hypothalamus Glutamatergic Neuron",
  "ZI-HTH GABA": "Zona Incerta / Hypothalamus GABAergic Neuron"
};

// Helper functions to get full names with fallback to original key
export function getRegionFullName(key: string): string {
  return regionNames[key] || key;
}

export function getSubclassFullName(key: string): string {
  return subclassNames[key] || key;
}

export function getGroupFullName(key: string): string {
  return groupNames[key] || key;
}
