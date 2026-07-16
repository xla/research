import type { ComparisonEntry } from '../types';

export const runtimes: ComparisonEntry[] = [
  {
    id: 'llama-cpp',
    name: 'llama.cpp',
    category: 'Inference runtime',
    platforms: 'macOS, Linux, CPU, Metal, CUDA',
    localFirst: 'Yes',
    api: 'Server mode, OpenAI-compatible surfaces through wrappers',
    strengths:
      'Best general-purpose local quantised runtime and GGUF ecosystem.',
    constraints:
      'Operational management, version pinning and observability need external tooling.',
    license: 'MIT',
    maturity: 'High',
    evidence: 'community-reproduced',
    confidence: 'high'
  },
  {
    id: 'ollama',
    name: 'Ollama',
    category: 'Runtime and model manager',
    platforms: 'macOS, Linux',
    localFirst: 'Yes',
    api: 'Local HTTP API and OpenAI-compatible endpoints',
    strengths:
      'Simple lifecycle management, broad community model catalogue, good developer ergonomics.',
    constraints:
      'Less transparent than direct llama.cpp for reproducibility and advanced scheduling.',
    license: 'MIT',
    maturity: 'High',
    evidence: 'community-reproduced',
    confidence: 'high'
  },
  {
    id: 'mlx-lm',
    name: 'MLX-LM',
    category: 'Apple Silicon runtime',
    platforms: 'macOS Apple Silicon',
    localFirst: 'Yes',
    api: 'Python-first, community servers',
    strengths:
      'Strong Apple Silicon optimisation and efficient unified-memory use.',
    constraints:
      'Apple-only; operational API layer is less standardised than Ollama or vLLM.',
    license: 'MIT',
    maturity: 'Medium-high',
    evidence: 'community-reproduced',
    confidence: 'high'
  },
  {
    id: 'vllm',
    name: 'vLLM',
    category: 'Serving runtime',
    platforms: 'Linux CUDA first',
    localFirst: 'Yes, server-oriented',
    api: 'OpenAI-compatible server',
    strengths:
      'Continuous batching, high-throughput serving, strong production serving posture.',
    constraints:
      'NVIDIA workstation or server is the natural target; poor fit for small Macs.',
    license: 'Apache 2.0',
    maturity: 'High',
    evidence: 'community-reproduced',
    confidence: 'high'
  },
  {
    id: 'sglang',
    name: 'SGLang',
    category: 'Serving and structured generation runtime',
    platforms: 'Linux CUDA first',
    localFirst: 'Yes, server-oriented',
    api: 'OpenAI-compatible server and structured generation APIs',
    strengths:
      'Strong structured generation, agent-serving and high-performance inference direction.',
    constraints:
      'Operational complexity and hardware expectations are higher than desktop managers.',
    license: 'Apache 2.0',
    maturity: 'Medium-high',
    evidence: 'community-reproduced',
    confidence: 'medium'
  },
  {
    id: 'lm-studio',
    name: 'LM Studio',
    category: 'Desktop manager',
    platforms: 'macOS, Linux, Windows',
    localFirst: 'Yes',
    api: 'Local server',
    strengths:
      'Accessible GUI and quick model testing for non-specialist users.',
    constraints:
      'Closed application surface and weaker automation posture than scriptable stacks.',
    license: 'Proprietary application',
    maturity: 'Medium-high',
    evidence: 'community-reproduced',
    confidence: 'medium'
  },
  {
    id: 'jan',
    name: 'Jan',
    category: 'Desktop manager',
    platforms: 'macOS, Linux',
    localFirst: 'Yes',
    api: 'Local API surfaces',
    strengths:
      'Local-first desktop assistant direction with user-friendly packaging.',
    constraints: 'Less mature than Ollama for automation-heavy workflows.',
    license: 'Open source',
    maturity: 'Medium',
    evidence: 'community-reproduced',
    confidence: 'medium'
  }
];
