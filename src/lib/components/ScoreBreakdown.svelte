<script lang="ts">
  import {
    scoreEntries,
    workloadWeights
  } from '$lib/data/local-ai-2026/scores';
  import { compositeScore, defaultWeights } from '$lib/utils/scoring';
  import EvidenceBadge from './EvidenceBadge.svelte';
  import ScoreBars from './ScoreBars.svelte';
</script>

<div class="score-grid">
  {#each scoreEntries as entry (entry.id)}
    <section class="score-item">
      <div>
        <p class="meta">{entry.profile}</p>
        <h3>{entry.name}</h3>
      </div>
      <p class="score">
        {compositeScore(
          entry.scores,
          workloadWeights[entry.profile] ?? defaultWeights
        ).toFixed(1)}
      </p>
      <ScoreBars scores={entry.scores} />
      <p>
        <EvidenceBadge value={entry.evidence} />
        <span class="badge">Confidence: {entry.confidence}</span>
      </p>
    </section>
  {/each}
</div>

<style>
  .score-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
    gap: 1px;
    background: var(--rule);
    border: 1px solid var(--rule);
    margin: 1.5rem 0;
  }

  .score-item {
    background: var(--table);
    padding: 1rem;
  }

  .score {
    font-size: 3rem;
    line-height: 1;
    margin: 0.8rem 0;
  }
</style>
