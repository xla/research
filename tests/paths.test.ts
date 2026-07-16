import { describe, expect, it } from 'vitest';

function safePath(base: string, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}

describe('base path helpers', () => {
  it('keeps internal URLs under a GitHub Pages project base', () => {
    expect(safePath('/research', '/editions/local-ai-2026/')).toBe(
      '/research/editions/local-ai-2026/'
    );
    expect(safePath('', 'editions/local-ai-2026/')).toBe(
      '/editions/local-ai-2026/'
    );
  });
});
