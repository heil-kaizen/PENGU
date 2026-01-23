export interface PenguinSpecies {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  height: string;
  weight: string;
  habitat: string;
  region: 'Antarctic' | 'Sub-Antarctic' | 'Temperate';
  population: string;
  funFact: string;
  imagePlaceholderColor: string;
  imageUrl?: string;
}

export interface AdoptionRecord {
  id: string; // Acts as the Name (e.g., AP177)
  img_link: string;
  age: string;
  date_admitted: string;
  reason_for_admission: string;
  area_found: string;
  adopted?: boolean;
  proof_link?: string;
}

export interface VoteOption {
  id: string;
  name: string;
  votes: number;
}

export enum SectionId {
  HERO = 'hero',
  MISSION = 'mission',
  MIGRATION = 'migration',
  ADOPTION = 'adoption',
}
