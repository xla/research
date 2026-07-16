import { describe, expect, it } from 'vitest';
import {
  defaultWeights,
  compositeScore,
  rankScores,
  validateScores,
  validateWeights
} from '../src/lib/utils/scoring';

describe('scoring', () => {
  it('validates weight totals', () => {
    expect(() => validateWeights(defaultWeights)).not.toThrow();
    expect(() =>
      validateWeights({ ...defaultWeights, capability: 0.5 })
    ).toThrow(RangeError);
  });

  it('validates score ranges', () => {
    expect(() =>
      validateScores({
        capability: 100,
        hardwareFit: 90,
        operationalQuality: 80,
        security: 70,
        ecosystem: 60,
        interoperability: 50,
        tco: 40,
        crossDeviceViability: 30
      })
    ).not.toThrow();
    expect(() =>
      validateScores({
        capability: 101,
        hardwareFit: 90,
        operationalQuality: 80,
        security: 70,
        ecosystem: 60,
        interoperability: 50,
        tco: 40,
        crossDeviceViability: 30
      })
    ).toThrow(RangeError);
  });

  it('calculates a weighted composite score', () => {
    const score = compositeScore({
      capability: 80,
      hardwareFit: 70,
      operationalQuality: 60,
      security: 50,
      ecosystem: 40,
      interoperability: 30,
      tco: 20,
      crossDeviceViability: 10
    });
    expect(score).toBe(55.7);
  });

  it('keeps stable ordering for equal scores', () => {
    const scores = {
      capability: 50,
      hardwareFit: 50,
      operationalQuality: 50,
      security: 50,
      ecosystem: 50,
      interoperability: 50,
      tco: 50,
      crossDeviceViability: 50
    };
    const ranked = rankScores([
      { id: 'a', scores },
      { id: 'b', scores }
    ]);
    expect(ranked.map((entry) => entry.id)).toEqual(['a', 'b']);
  });
});
