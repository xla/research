import type { ScoreDimensions, ScoreWeights } from '$lib/data/types';

export const defaultWeights: ScoreWeights = {
  capability: 0.28,
  hardwareFit: 0.18,
  operationalQuality: 0.12,
  security: 0.1,
  ecosystem: 0.09,
  interoperability: 0.09,
  tco: 0.08,
  crossDeviceViability: 0.06
};

const scoreKeys = Object.keys(defaultWeights) as (keyof ScoreDimensions)[];

export function validateWeights(weights: ScoreWeights): void {
  const total = scoreKeys.reduce((sum, key) => sum + weights[key], 0);
  if (Math.abs(total - 1) > 0.0001) {
    throw new RangeError(
      `Score weights must sum to 1. Received ${total.toFixed(4)}.`
    );
  }
  for (const key of scoreKeys) {
    if (weights[key] < 0) {
      throw new RangeError(`Score weight ${key} must be non-negative.`);
    }
  }
}

export function validateScores(scores: ScoreDimensions): void {
  for (const key of scoreKeys) {
    const value = scores[key];
    if (value < 0 || value > 100) {
      throw new RangeError(
        `Score ${key} must be between 0 and 100. Received ${value}.`
      );
    }
  }
}

export function compositeScore(
  scores: ScoreDimensions,
  weights: ScoreWeights = defaultWeights
): number {
  validateWeights(weights);
  validateScores(scores);
  const raw = scoreKeys.reduce(
    (sum, key) => sum + scores[key] * weights[key],
    0
  );
  return Math.round(raw * 10) / 10;
}

export function rankScores<T extends { scores: ScoreDimensions }>(
  entries: T[],
  weights: ScoreWeights = defaultWeights
): T[] {
  return entries
    .map((entry, index) => ({
      entry,
      index,
      score: compositeScore(entry.scores, weights)
    }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map(({ entry }) => entry);
}
