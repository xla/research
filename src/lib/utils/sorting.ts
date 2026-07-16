import type { EvidenceClass, Feasibility } from '$lib/data/types';

const feasibilityRank: Record<Feasibility, number> = {
  excellent: 6,
  comfortable: 5,
  compromised: 4,
  'background-only': 3,
  impractical: 2,
  'not-feasible': 1
};

const evidenceRank: Record<EvidenceClass, number> = {
  'independent-measured': 5,
  'community-reproduced': 4,
  'vendor-reported': 3,
  'hardware-estimate': 2,
  inferred: 1
};

export type SortDirection = 'asc' | 'desc';

export function compareValues(a: unknown, b: unknown): number {
  if (typeof a === 'number' && typeof b === 'number') return a - b;
  return String(a ?? '').localeCompare(String(b ?? ''), undefined, {
    numeric: true,
    sensitivity: 'base'
  });
}

export function stableSort<T>(
  rows: T[],
  selector: (row: T) => unknown,
  direction: SortDirection = 'asc'
): T[] {
  const multiplier = direction === 'asc' ? 1 : -1;
  return rows
    .map((row, index) => ({ row, index }))
    .sort(
      (a, b) =>
        compareValues(selector(a.row), selector(b.row)) * multiplier ||
        a.index - b.index
    )
    .map(({ row }) => row);
}

export function feasibilityOrder(value: Feasibility): number {
  return feasibilityRank[value];
}

export function evidenceOrder(value: EvidenceClass): number {
  return evidenceRank[value];
}
