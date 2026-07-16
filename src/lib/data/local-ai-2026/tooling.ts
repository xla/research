import type { ComparisonEntry } from '../types';

export const agentFrameworks: ComparisonEntry[] = [
  {
    id: 'hermes-agent',
    name: 'Hermes Agent',
    category: 'Model-agnostic personal agent',
    platforms: 'CLI, TUI, desktop, server and messaging gateways',
    localFirst: 'Endpoint dependent; supports local and hosted models',
    api: 'Local endpoints, Nous Portal, OpenRouter, OpenAI and other providers',
    strengths:
      'Memory, skills, scheduling, subagents, terminal backends and cross-channel continuity.',
    constraints:
      'Broad tool authority requires explicit approvals, isolation and operational review.',
    license: 'MIT',
    maturity: 'Emerging',
    evidence: 'vendor-reported',
    confidence: 'medium'
  },
  {
    id: 'open-webui',
    name: 'Open WebUI',
    category: 'Assistant interface',
    platforms: 'Web app, local deployment',
    localFirst: 'Yes with local endpoints',
    api: 'Ollama and OpenAI-compatible endpoints',
    strengths:
      'Strong local chat UI, users, RAG integrations and model endpoint flexibility.',
    constraints: 'More assistant interface than autonomous agent loop.',
    license: 'Open source',
    maturity: 'High',
    evidence: 'community-reproduced',
    confidence: 'high'
  },
  {
    id: 'anythingllm',
    name: 'AnythingLLM',
    category: 'Knowledge assistant',
    platforms: 'Desktop/server',
    localFirst: 'Yes with local models',
    api: 'Multiple LLM providers and local endpoints',
    strengths: 'Practical document/RAG workflow for local knowledge work.',
    constraints:
      'Agentic coding and shell/browser control are not the primary design center.',
    license: 'Open source plus commercial packaging',
    maturity: 'Medium-high',
    evidence: 'community-reproduced',
    confidence: 'medium'
  },
  {
    id: 'aider',
    name: 'Aider',
    category: 'Coding agent',
    platforms: 'CLI',
    localFirst: 'Endpoint dependent',
    api: 'OpenAI-compatible and provider APIs',
    strengths: 'Mature repository editing workflow and Git integration.',
    constraints:
      'Local quality depends heavily on model context, coding skill and latency.',
    license: 'Apache 2.0',
    maturity: 'High',
    evidence: 'community-reproduced',
    confidence: 'high'
  },
  {
    id: 'opencode',
    name: 'OpenCode',
    category: 'Coding agent',
    platforms: 'TUI/CLI',
    localFirst: 'Endpoint dependent',
    api: 'Provider and compatible endpoints',
    strengths: 'Terminal-native coding workflow with lower UI overhead.',
    constraints:
      'Local endpoint compatibility and maturity need per-release verification.',
    license: 'Open source',
    maturity: 'Medium',
    evidence: 'community-reproduced',
    confidence: 'medium'
  },
  {
    id: 'openhands',
    name: 'OpenHands',
    category: 'Software agent environment',
    platforms: 'Web/server',
    localFirst: 'Partial',
    api: 'Provider and local-compatible endpoints',
    strengths:
      'Fuller software-engineering environment with browser/shell style loops.',
    constraints: 'Heavier deployment and stronger sandboxing requirements.',
    license: 'MIT',
    maturity: 'Medium-high',
    evidence: 'community-reproduced',
    confidence: 'medium'
  },
  {
    id: 'n8n',
    name: 'n8n',
    category: 'Automation orchestrator',
    platforms: 'Server/self-hosted',
    localFirst: 'Can be self-hosted',
    api: 'Many integrations',
    strengths:
      'Scheduling, retry, credentials and business workflow automation.',
    constraints: 'Not a local model agent framework by itself.',
    license: 'Sustainable Use License',
    maturity: 'High',
    evidence: 'community-reproduced',
    confidence: 'high'
  },
  {
    id: 'flowise',
    name: 'Flowise',
    category: 'LLM flow builder',
    platforms: 'Web/server',
    localFirst: 'Endpoint dependent',
    api: 'Provider and local-compatible endpoints',
    strengths: 'Visual composition for RAG and assistant workflows.',
    constraints:
      'Visual flow abstractions can obscure reproducibility and error handling.',
    license: 'Apache 2.0',
    maturity: 'Medium',
    evidence: 'community-reproduced',
    confidence: 'medium'
  },
  {
    id: 'letta',
    name: 'Letta',
    category: 'Stateful agents and memory',
    platforms: 'Server/local development',
    localFirst: 'Endpoint dependent',
    api: 'Agent and memory APIs',
    strengths:
      'Persistent memory model and agent state are first-class concepts.',
    constraints:
      'Operational fit depends on the surrounding model endpoint and data policies.',
    license: 'Open source',
    maturity: 'Medium',
    evidence: 'community-reproduced',
    confidence: 'medium'
  }
];

export const securityComparisons: ComparisonEntry[] = [
  {
    id: 'local-desktop',
    name: 'Single-user local desktop',
    category: 'Deployment method',
    platforms: 'macOS/Linux workstation',
    localFirst: 'Yes',
    api: 'Loopback only',
    strengths: 'Lowest network exposure; simplest secrets boundary.',
    constraints: 'Weak collaboration, weak audit trails and manual patching.',
    license: 'N/A',
    maturity: 'High',
    evidence: 'inferred',
    confidence: 'medium'
  },
  {
    id: 'lan-server',
    name: 'LAN inference server',
    category: 'Deployment method',
    platforms: 'Linux workstation',
    localFirst: 'Yes',
    api: 'OpenAI-compatible HTTP',
    strengths: 'Centralises expensive GPUs and model cache.',
    constraints:
      'Requires authentication, network segmentation, logging and upgrade discipline.',
    license: 'N/A',
    maturity: 'High',
    evidence: 'inferred',
    confidence: 'medium'
  },
  {
    id: 'agent-sandbox',
    name: 'Sandboxed agent workspace',
    category: 'Deployment method',
    platforms: 'Linux containers or macOS sandbox substitutes',
    localFirst: 'Yes',
    api: 'Tool-gated',
    strengths:
      'Best fit for shell, browser and filesystem tools with approval gates.',
    constraints:
      'Needs deliberate filesystem mounts, network egress policy and secret isolation.',
    license: 'N/A',
    maturity: 'Medium',
    evidence: 'inferred',
    confidence: 'medium'
  }
];

export const interoperabilityComparisons: ComparisonEntry[] = [
  {
    id: 'openai-compatible',
    name: 'OpenAI-compatible local HTTP API',
    category: 'Interoperability',
    platforms: 'Ollama, vLLM, SGLang, LM Studio and others',
    localFirst: 'Yes',
    api: 'Chat/completions-compatible',
    strengths: 'Most practical bridge for existing tools.',
    constraints:
      'Tool calling, JSON mode and streaming behavior differ by implementation.',
    license: 'N/A',
    maturity: 'High',
    evidence: 'community-reproduced',
    confidence: 'high'
  },
  {
    id: 'mcp',
    name: 'Model Context Protocol',
    category: 'Interoperability',
    platforms: 'Clients and servers across desktop and developer tools',
    localFirst: 'Yes',
    api: 'Tool/resource protocol',
    strengths: 'Clean boundary for tools, data sources and approval surfaces.',
    constraints:
      'Client support is uneven; security policy remains implementation-specific.',
    license: 'N/A',
    maturity: 'Medium',
    evidence: 'community-reproduced',
    confidence: 'medium'
  },
  {
    id: 'a2a',
    name: 'Agent-to-agent protocols',
    category: 'Interoperability',
    platforms: 'Emerging agent ecosystems',
    localFirst: 'Partial',
    api: 'Protocol dependent',
    strengths: 'Potentially useful for multi-agent delegation.',
    constraints: 'Immature for durable local production use.',
    license: 'N/A',
    maturity: 'Early',
    evidence: 'inferred',
    confidence: 'low'
  }
];

export const tcoComparisons: ComparisonEntry[] = [
  {
    id: 'mac-mini',
    name: 'Mac Mini M4 Pro local node',
    category: 'TCO',
    platforms: 'macOS',
    localFirst: 'Yes',
    api: 'Ollama or MLX-LM',
    strengths: 'Low power, quiet, low operational burden.',
    constraints: '24 GB memory caps model size and concurrent services.',
    license: 'N/A',
    maturity: 'High',
    evidence: 'hardware-estimate',
    confidence: 'medium'
  },
  {
    id: 'g14',
    name: 'RTX 4070 laptop node',
    category: 'TCO',
    platforms: 'Linux',
    localFirst: 'Yes',
    api: 'llama.cpp, Ollama, vLLM light use',
    strengths: 'CUDA access in portable form.',
    constraints: 'VRAM and thermals limit sustained serving.',
    license: 'N/A',
    maturity: 'High',
    evidence: 'hardware-estimate',
    confidence: 'medium'
  },
  {
    id: 'workstation',
    name: 'Threadripper Pro RTX 5090 workstation',
    category: 'TCO',
    platforms: 'Linux',
    localFirst: 'Yes',
    api: 'vLLM, SGLang, llama.cpp, Ollama',
    strengths: 'Largest local experiment envelope and best batch throughput.',
    constraints: 'Capital cost, power, cooling and maintenance overhead.',
    license: 'N/A',
    maturity: 'High',
    evidence: 'hardware-estimate',
    confidence: 'medium'
  }
];
