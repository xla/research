import type { ScoreEntry, ScoreWeights } from '../types';

export const workloadWeights: Record<string, ScoreWeights> = {
  'Interactive coding': {
    capability: 0.32,
    hardwareFit: 0.22,
    operationalQuality: 0.1,
    security: 0.07,
    ecosystem: 0.1,
    interoperability: 0.08,
    tco: 0.06,
    crossDeviceViability: 0.05
  },
  'Long-running agents': {
    capability: 0.24,
    hardwareFit: 0.13,
    operationalQuality: 0.18,
    security: 0.14,
    ecosystem: 0.08,
    interoperability: 0.1,
    tco: 0.07,
    crossDeviceViability: 0.06
  },
  'Knowledge work': {
    capability: 0.22,
    hardwareFit: 0.18,
    operationalQuality: 0.12,
    security: 0.12,
    ecosystem: 0.1,
    interoperability: 0.08,
    tco: 0.1,
    crossDeviceViability: 0.08
  }
};

export const scoreEntries: ScoreEntry[] = [
  {
    id: 'devstral-ollama',
    name: 'Devstral Small via Ollama',
    profile: 'Interactive coding',
    scores: {
      capability: 78,
      hardwareFit: 88,
      operationalQuality: 82,
      security: 76,
      ecosystem: 80,
      interoperability: 78,
      tco: 86,
      crossDeviceViability: 82
    },
    evidence: 'hardware-estimate',
    confidence: 'medium'
  },
  {
    id: 'qwen-coder-vllm',
    name: 'Qwen3-Coder 30B-A3B via vLLM/SGLang',
    profile: 'Repository-scale coding',
    scores: {
      capability: 84,
      hardwareFit: 74,
      operationalQuality: 74,
      security: 72,
      ecosystem: 76,
      interoperability: 80,
      tco: 72,
      crossDeviceViability: 68
    },
    evidence: 'hardware-estimate',
    confidence: 'medium'
  },
  {
    id: 'kimi-workstation',
    name: 'Kimi K2 on workstation-class serving',
    profile: 'Long-running agents',
    scores: {
      capability: 90,
      hardwareFit: 58,
      operationalQuality: 70,
      security: 68,
      ecosystem: 65,
      interoperability: 72,
      tco: 48,
      crossDeviceViability: 42
    },
    evidence: 'vendor-reported',
    confidence: 'medium'
  },
  {
    id: 'open-webui-ollama',
    name: 'Open WebUI plus Ollama',
    profile: 'Document and knowledge work',
    scores: {
      capability: 74,
      hardwareFit: 86,
      operationalQuality: 80,
      security: 76,
      ecosystem: 84,
      interoperability: 78,
      tco: 84,
      crossDeviceViability: 70
    },
    evidence: 'community-reproduced',
    confidence: 'high'
  },
  {
    id: 'hermes-agent-local',
    name: 'Hermes Agent local stack',
    profile: 'Tool-using assistant routines',
    scores: {
      capability: 76,
      hardwareFit: 72,
      operationalQuality: 62,
      security: 64,
      ecosystem: 58,
      interoperability: 66,
      tco: 74,
      crossDeviceViability: 62
    },
    evidence: 'vendor-reported',
    confidence: 'medium'
  }
];
