import type { Edition } from './types';

export const editions: Edition[] = [
  {
    slug: 'local-ai-2026',
    title: 'Local AI Landscape',
    subtitle:
      'Execution, management, customisation, orchestration and productive use of local AI models',
    publishedAt: '2026-07-16',
    revisedAt: '2026-07-16',
    version: '2026.07',
    status: 'published',
    summary:
      'A comparative research edition on local model execution, coding agents, managers, runtimes, memory systems, security posture, hardware fit and total cost of ownership.',
    topics: ['Models', 'Runtimes', 'Agents', 'Hardware', 'Security', 'TCO'],
    hardwareTargets: [
      'M1 Max 64 GB',
      'Mac Mini M4 Pro 24 GB',
      'Zephyrus G14 RTX 4070',
      'Threadripper Pro RTX 5090'
    ],
    sourceCount: 19,
    current: true
  }
];

export function getEdition(slug: string): Edition | undefined {
  return editions.find((edition) => edition.slug === slug);
}
