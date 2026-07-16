export type Confidence = 'high' | 'medium' | 'low';

export type EvidenceClass =
  | 'independent-measured'
  | 'vendor-reported'
  | 'community-reproduced'
  | 'hardware-estimate'
  | 'inferred';

export type Feasibility =
  | 'excellent'
  | 'comfortable'
  | 'compromised'
  | 'background-only'
  | 'impractical'
  | 'not-feasible';

export interface Edition {
  slug: string;
  title: string;
  subtitle: string;
  publishedAt: string;
  revisedAt: string;
  version: string;
  status: 'published' | 'draft';
  summary: string;
  topics: string[];
  hardwareTargets: string[];
  sourceCount: number;
  current: boolean;
}

export interface Source {
  id: string;
  title: string;
  publisher: string;
  url: string;
  accessedAt: string;
  sourceType: string;
  sections: string[];
  notes?: string;
}

export interface HardwareTarget {
  id: string;
  name: string;
  os: string;
  cpu: string;
  gpu: string;
  memory: string;
  storage: string;
  role: string;
}

export interface FeasibilityResult {
  target: string;
  status: Feasibility;
  quantisation: string;
  context: string;
  offload: string;
  tokensPerSecond: string;
  peakMemory: string;
  power: string;
  evidenceClass: EvidenceClass;
  confidence: Confidence;
}

export interface ModelEntry {
  id: string;
  name: string;
  provider: string;
  release: string;
  architecture: string;
  totalParameters: string;
  activeParameters: string;
  contextLength: string;
  modalities: string;
  license: string;
  commercialUse: string;
  runtimeSupport: string;
  toolUse: string;
  structuredOutput: string;
  evidence: EvidenceClass;
  confidence: Confidence;
  strengths: string;
  limitations: string;
  feasibility: FeasibilityResult[];
}

export interface ComparisonEntry {
  id: string;
  name: string;
  category: string;
  platforms: string;
  localFirst: string;
  api: string;
  strengths: string;
  constraints: string;
  license: string;
  maturity: string;
  evidence: EvidenceClass;
  confidence: Confidence;
}

export interface ScoreDimensions {
  capability: number;
  hardwareFit: number;
  operationalQuality: number;
  security: number;
  ecosystem: number;
  interoperability: number;
  tco: number;
  crossDeviceViability: number;
}

export interface ScoreWeights {
  capability: number;
  hardwareFit: number;
  operationalQuality: number;
  security: number;
  ecosystem: number;
  interoperability: number;
  tco: number;
  crossDeviceViability: number;
}

export interface ScoreEntry {
  id: string;
  name: string;
  profile: string;
  scores: ScoreDimensions;
  evidence: EvidenceClass;
  confidence: Confidence;
}
