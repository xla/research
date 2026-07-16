import type { FeasibilityResult, ModelEntry } from '../types';

const compactMac: FeasibilityResult[] = [
  {
    target: 'm1-max',
    status: 'comfortable',
    quantisation: 'Q4-Q6',
    context: '32K-64K practical',
    offload: 'Metal full or partial GPU offload',
    tokensPerSecond: 'Interactive',
    peakMemory: '20-46 GB',
    power: 'Sustained battery use is possible with reduced throughput.',
    evidenceClass: 'hardware-estimate',
    confidence: 'medium'
  },
  {
    target: 'm4-pro-mini',
    status: 'compromised',
    quantisation: 'Q4',
    context: '16K-32K practical',
    offload: 'Metal offload with memory pressure',
    tokensPerSecond: 'Interactive for smaller models',
    peakMemory: '18-23 GB',
    power: 'Quiet desktop operation; memory is the binding constraint.',
    evidenceClass: 'hardware-estimate',
    confidence: 'medium'
  },
  {
    target: 'g14-2024',
    status: 'comfortable',
    quantisation: '4-bit GPU plus CPU spill where needed',
    context: '32K practical',
    offload: 'CUDA for hot layers',
    tokensPerSecond: 'Interactive',
    peakMemory: '8 GB VRAM plus system RAM',
    power: 'Thermal headroom depends on plugged-in performance mode.',
    evidenceClass: 'hardware-estimate',
    confidence: 'medium'
  },
  {
    target: 'threadripper-5090',
    status: 'excellent',
    quantisation: 'FP8, AWQ, GPTQ or GGUF depending runtime',
    context: '64K-256K model-dependent',
    offload: 'CUDA primary, CPU RAM for spill and retrieval services',
    tokensPerSecond: 'High for local serving',
    peakMemory: 'Model dependent',
    power: 'High wall power; suitable for scheduled and batch workloads.',
    evidenceClass: 'hardware-estimate',
    confidence: 'medium'
  }
];

const giantMoE: FeasibilityResult[] = [
  {
    target: 'm1-max',
    status: 'background-only',
    quantisation: 'Heavy GGUF quantisation',
    context: 'Short contexts only',
    offload: 'Partial Metal plus CPU spill',
    tokensPerSecond: 'Slow',
    peakMemory: 'Near or above practical memory ceiling',
    power: 'Thermally sustained but latency is poor.',
    evidenceClass: 'hardware-estimate',
    confidence: 'low'
  },
  {
    target: 'm4-pro-mini',
    status: 'impractical',
    quantisation: 'Extreme quantisation required',
    context: 'Short contexts',
    offload: 'Memory constrained',
    tokensPerSecond: 'Not suitable for interactive use',
    peakMemory: 'Exceeds comfortable 24 GB envelope',
    power: 'Low power does not offset latency.',
    evidenceClass: 'hardware-estimate',
    confidence: 'low'
  },
  {
    target: 'g14-2024',
    status: 'background-only',
    quantisation: 'Aggressive 4-bit with CPU spill',
    context: 'Short-to-medium contexts',
    offload: 'CUDA partial',
    tokensPerSecond: 'Slow to moderate',
    peakMemory: 'VRAM-bound, system RAM spill required',
    power: 'High fan and wall power under sustained load.',
    evidenceClass: 'hardware-estimate',
    confidence: 'low'
  },
  {
    target: 'threadripper-5090',
    status: 'comfortable',
    quantisation: '4-bit or FP8 depending checkpoint and runtime',
    context: '128K feasible when runtime supports it',
    offload: 'CUDA plus abundant system RAM',
    tokensPerSecond: 'Interactive to serving-class, model-dependent',
    peakMemory: 'Large but manageable with 512 GB RAM',
    power: 'High but acceptable for lab operation.',
    evidenceClass: 'hardware-estimate',
    confidence: 'medium'
  }
];

export const models: ModelEntry[] = [
  {
    id: 'devstral-small',
    name: 'Devstral Small',
    provider: 'Mistral AI',
    release: '2025 technical report',
    architecture: 'Dense coding-agent model',
    totalParameters: '24B',
    activeParameters: '24B',
    contextLength: 'Model-card dependent; verify per checkpoint',
    modalities: 'Text/code',
    license:
      'Open model release; Apache-style terms reported for related Mistral small releases',
    commercialUse: 'Permitted where checkpoint license allows',
    runtimeSupport:
      'llama.cpp, Ollama, MLX-LM and Transformers likely via community conversions',
    toolUse: 'Agentic coding fine-tune',
    structuredOutput: 'Runtime-mediated',
    evidence: 'vendor-reported',
    confidence: 'medium',
    strengths:
      'Best fit among named coding models for 24 GB to 64 GB local machines.',
    limitations:
      'Not a frontier general model; long-context claims must be checked per released checkpoint.',
    feasibility: compactMac
  },
  {
    id: 'qwen3-coder-30b-a3b',
    name: 'Qwen3-Coder 30B-A3B',
    provider: 'Qwen',
    release: '2025 checkpoint',
    architecture: 'Sparse MoE coding model',
    totalParameters: '30.5B',
    activeParameters: '3.3B',
    contextLength: '256K native; up to 1M with YaRN',
    modalities: 'Text/code',
    license: 'Apache 2.0 reported for Qwen3 Coder family checkpoints',
    commercialUse: 'Permitted under Apache 2.0 checkpoints',
    runtimeSupport:
      'Transformers, vLLM and SGLang first; local conversions are runtime-dependent',
    toolUse: 'Strong coding-agent orientation',
    structuredOutput: 'Prompt and runtime mediated',
    evidence: 'vendor-reported',
    confidence: 'medium',
    strengths:
      'Small active parameter count makes it attractive for local coding loops.',
    limitations:
      'MoE support and quantised conversion quality vary by runtime.',
    feasibility: compactMac
  },
  {
    id: 'qwen3-coder-next',
    name: 'Qwen3-Coder-Next',
    provider: 'Qwen',
    release: '2026 technical report',
    architecture: '80B total sparse MoE coding-agent model',
    totalParameters: '80B',
    activeParameters: '3B',
    contextLength: '256K for released base and instruct checkpoints',
    modalities: 'Text/code',
    license: 'Open-weight release reported by Qwen technical report',
    commercialUse: 'Verify checkpoint license before deployment',
    runtimeSupport:
      'Transformers first; local runtimes need explicit support for hybrid sparse architecture',
    toolUse: 'Trained for agent-centric benchmarks',
    structuredOutput: 'Runtime mediated',
    evidence: 'vendor-reported',
    confidence: 'medium',
    strengths:
      'Strong candidate for local coding agents if runtime support catches up.',
    limitations:
      'Newer architecture increases conversion and reproducibility risk.',
    feasibility: compactMac
  },
  {
    id: 'magistral-small',
    name: 'Magistral Small',
    provider: 'Mistral AI',
    release: '2025 technical report',
    architecture: 'Reasoning model',
    totalParameters: 'Small open model; exact checkpoint metadata governs',
    activeParameters: 'Dense',
    contextLength: 'Model-card dependent',
    modalities: 'Text',
    license: 'Apache 2.0 reported for Magistral Small',
    commercialUse: 'Permitted under Apache 2.0 release',
    runtimeSupport: 'Transformers and community local conversions',
    toolUse: 'Function calling retained per report',
    structuredOutput: 'Runtime mediated',
    evidence: 'vendor-reported',
    confidence: 'medium',
    strengths: 'Useful secondary reasoning model for planning and critique.',
    limitations:
      'Less specifically tuned for coding-agent loops than Devstral or Qwen coder variants.',
    feasibility: compactMac
  },
  {
    id: 'glm-45-air',
    name: 'GLM-4.5-Air',
    provider: 'Z.ai / GLM Team',
    release: '2025 technical report',
    architecture: 'MoE ARC model',
    totalParameters: '106B',
    activeParameters: 'Report dependent',
    contextLength: 'Checkpoint dependent',
    modalities: 'Text/code',
    license: 'Open-source release reported by technical report',
    commercialUse: 'Verify model license before production',
    runtimeSupport: 'Transformers/vLLM/SGLang class runtimes expected first',
    toolUse: 'Agentic, reasoning and coding orientation',
    structuredOutput: 'Runtime mediated',
    evidence: 'vendor-reported',
    confidence: 'medium',
    strengths:
      'Strong agentic benchmark claims in a smaller-than-flagship MoE.',
    limitations:
      'Not a natural fit for 24 GB machines without severe compromises.',
    feasibility: giantMoE
  },
  {
    id: 'deepseek-v31',
    name: 'DeepSeek V3.1',
    provider: 'DeepSeek AI',
    release: '2025 lineage after V3',
    architecture: 'Large sparse MoE',
    totalParameters: 'V3 lineage: 671B class',
    activeParameters: 'V3 lineage: 37B class',
    contextLength: '128K',
    modalities: 'Text/code',
    license: 'DeepSeek model license / checkpoint specific',
    commercialUse: 'Supported under the checkpoint model license',
    runtimeSupport:
      'vLLM/SGLang/Transformers class; quantised local support varies',
    toolUse: 'Strong coding and reasoning capability via prompt/tool wrappers',
    structuredOutput: 'Runtime mediated',
    evidence: 'vendor-reported',
    confidence: 'low',
    strengths:
      'High-capability open-weight family for workstation-class experiments.',
    limitations: 'Too large for comfortable laptop-local interactive use.',
    feasibility: giantMoE
  },
  {
    id: 'kimi-k2',
    name: 'Kimi K2',
    provider: 'Moonshot AI',
    release: '2025 technical report',
    architecture: '1T total sparse MoE',
    totalParameters: '1T',
    activeParameters: '32B',
    contextLength: '128K to 256K depending checkpoint generation',
    modalities: 'Text/code',
    license: 'Modified MIT reported for K2 checkpoints',
    commercialUse: 'Check modified MIT terms before deployment',
    runtimeSupport:
      'vLLM/SGLang/Transformers class; local quantised support is workstation-oriented',
    toolUse: 'Agentic post-training',
    structuredOutput: 'Runtime mediated',
    evidence: 'vendor-reported',
    confidence: 'medium',
    strengths: 'Strong open agentic intelligence benchmark claims.',
    limitations:
      'Large memory footprint and license nuance reduce general local fit.',
    feasibility: giantMoE
  }
];
