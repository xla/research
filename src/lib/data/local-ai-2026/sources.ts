import type { Source } from '../types';

export const sources: Source[] = [
  {
    id: 'svelte-static',
    title: 'SvelteKit static site generation and GitHub Pages guidance',
    publisher: 'Svelte',
    url: 'https://svelte.dev/docs/kit/adapter-static',
    accessedAt: '2026-07-16',
    sourceType: 'Official documentation',
    sections: ['Search engine and metadata', 'Static generation']
  },
  {
    id: 'github-pages-actions',
    title: 'Using custom workflows with GitHub Pages',
    publisher: 'GitHub Docs',
    url: 'https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages',
    accessedAt: '2026-07-16',
    sourceType: 'Official documentation',
    sections: ['GitHub Actions']
  },
  {
    id: 'pagefind',
    title: 'Installing and running Pagefind',
    publisher: 'Pagefind',
    url: 'https://pagefind.app/docs/installation/',
    accessedAt: '2026-07-16',
    sourceType: 'Official documentation',
    sections: ['Full-text search']
  },
  {
    id: 'hermes-agent',
    title: 'Hermes Agent repository',
    publisher: 'NousResearch',
    url: 'https://github.com/NousResearch/hermes-agent',
    accessedAt: '2026-07-16',
    sourceType: 'Repository',
    sections: ['Hermes Agent analysis', 'Assistant and orchestration tooling']
  },
  {
    id: 'hermes-agent-site',
    title: 'Hermes Agent documentation site',
    publisher: 'NousResearch',
    url: 'https://hermes-agent.nousresearch.com/',
    accessedAt: '2026-07-16',
    sourceType: 'Official documentation',
    sections: ['Hermes Agent analysis']
  },
  {
    id: 'qwen3-coder-30b',
    title: 'Qwen3-Coder-30B-A3B-Instruct model card',
    publisher: 'Qwen Team',
    url: 'https://huggingface.co/Qwen/Qwen3-Coder-30B-A3B-Instruct',
    accessedAt: '2026-07-16',
    sourceType: 'Official model card',
    sections: ['Coding and agentic models']
  },
  {
    id: 'qwen3-coder-next',
    title: 'Qwen3-Coder-Next Technical Report',
    publisher: 'Qwen Team',
    url: 'https://arxiv.org/abs/2603.00729',
    accessedAt: '2026-07-16',
    sourceType: 'Technical report',
    sections: ['Coding and agentic models', 'Benchmark evidence'],
    notes:
      'Vendor-authored report; benchmark claims are classified as vendor-reported unless independently reproduced.'
  },
  {
    id: 'devstral',
    title:
      'Devstral: Fine-tuning Language Models for Coding Agent Applications',
    publisher: 'Mistral AI',
    url: 'https://arxiv.org/abs/2509.25193',
    accessedAt: '2026-07-16',
    sourceType: 'Technical report',
    sections: ['Coding and agentic models']
  },
  {
    id: 'magistral',
    title: 'Magistral',
    publisher: 'Mistral AI',
    url: 'https://arxiv.org/abs/2506.10910',
    accessedAt: '2026-07-16',
    sourceType: 'Technical report',
    sections: ['Coding and agentic models']
  },
  {
    id: 'glm-45',
    title: 'GLM-4.5: Agentic, Reasoning, and Coding Foundation Models',
    publisher: 'Z.ai / GLM Team',
    url: 'https://arxiv.org/abs/2508.06471',
    accessedAt: '2026-07-16',
    sourceType: 'Technical report',
    sections: ['Coding and agentic models', 'Benchmark evidence']
  },
  {
    id: 'kimi-k2',
    title: 'Kimi K2: Open Agentic Intelligence',
    publisher: 'Moonshot AI',
    url: 'https://arxiv.org/abs/2507.20534',
    accessedAt: '2026-07-16',
    sourceType: 'Technical report',
    sections: ['Coding and agentic models', 'Benchmark evidence']
  },
  {
    id: 'deepseek-v31',
    title: 'DeepSeek-V3.1 model card',
    publisher: 'DeepSeek AI',
    url: 'https://huggingface.co/deepseek-ai/DeepSeek-V3.1',
    accessedAt: '2026-07-16',
    sourceType: 'Official model card',
    sections: ['Coding and agentic models']
  },
  {
    id: 'llama-cpp',
    title: 'llama.cpp repository',
    publisher: 'ggml-org',
    url: 'https://github.com/ggml-org/llama.cpp',
    accessedAt: '2026-07-16',
    sourceType: 'Repository',
    sections: ['Inference runtimes']
  },
  {
    id: 'ollama',
    title: 'Ollama repository',
    publisher: 'Ollama',
    url: 'https://github.com/ollama/ollama',
    accessedAt: '2026-07-16',
    sourceType: 'Repository',
    sections: ['Inference runtimes', 'Model managers']
  },
  {
    id: 'mlx-lm',
    title: 'MLX LM repository',
    publisher: 'Apple MLX',
    url: 'https://github.com/ml-explore/mlx-lm',
    accessedAt: '2026-07-16',
    sourceType: 'Repository',
    sections: ['Inference runtimes']
  },
  {
    id: 'vllm',
    title: 'vLLM documentation',
    publisher: 'vLLM Project',
    url: 'https://docs.vllm.ai/',
    accessedAt: '2026-07-16',
    sourceType: 'Official documentation',
    sections: ['Inference runtimes']
  },
  {
    id: 'sglang',
    title: 'SGLang documentation',
    publisher: 'SGLang Project',
    url: 'https://docs.sglang.ai/',
    accessedAt: '2026-07-16',
    sourceType: 'Official documentation',
    sections: ['Inference runtimes']
  },
  {
    id: 'open-webui',
    title: 'Open WebUI repository',
    publisher: 'Open WebUI',
    url: 'https://github.com/open-webui/open-webui',
    accessedAt: '2026-07-16',
    sourceType: 'Repository',
    sections: ['Assistant and orchestration tooling']
  },
  {
    id: 'letta',
    title: 'Letta repository',
    publisher: 'Letta',
    url: 'https://github.com/letta-ai/letta',
    accessedAt: '2026-07-16',
    sourceType: 'Repository',
    sections: ['Memory and RAG systems']
  }
];
