import { describe, expect, it } from 'vitest';
import { getEdition } from '../src/lib/data/editions';

describe('editions', () => {
  it('finds an edition by immutable slug', () => {
    expect(getEdition('local-ai-2026')?.version).toBe('2026.07');
  });

  it('returns undefined for missing editions', () => {
    expect(getEdition('missing')).toBeUndefined();
  });
});
