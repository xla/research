import { describe, expect, it } from 'vitest';
import {
  evidenceOrder,
  feasibilityOrder,
  stableSort
} from '../src/lib/utils/sorting';

describe('sorting', () => {
  it('sorts text and numbers stably', () => {
    const rows = [
      { name: 'b', score: 2 },
      { name: 'a', score: 2 },
      { name: 'c', score: 1 }
    ];
    expect(
      stableSort(rows, (row) => row.score, 'desc').map((row) => row.name)
    ).toEqual(['b', 'a', 'c']);
    expect(
      stableSort(rows, (row) => row.name, 'asc').map((row) => row.name)
    ).toEqual(['a', 'b', 'c']);
  });

  it('orders feasibility statuses', () => {
    expect(feasibilityOrder('excellent')).toBeGreaterThan(
      feasibilityOrder('compromised')
    );
    expect(feasibilityOrder('impractical')).toBeGreaterThan(
      feasibilityOrder('not-feasible')
    );
  });

  it('orders evidence classes', () => {
    expect(evidenceOrder('independent-measured')).toBeGreaterThan(
      evidenceOrder('vendor-reported')
    );
    expect(evidenceOrder('hardware-estimate')).toBeGreaterThan(
      evidenceOrder('inferred')
    );
  });
});
