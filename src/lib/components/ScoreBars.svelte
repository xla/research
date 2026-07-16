<script lang="ts">
  import type { ScoreDimensions } from '$lib/data/types';

  let { scores }: { scores: ScoreDimensions } = $props();

  const labels: Record<keyof ScoreDimensions, string> = {
    capability: 'Capability',
    hardwareFit: 'Hardware fit',
    operationalQuality: 'Operations',
    security: 'Security',
    ecosystem: 'Ecosystem',
    interoperability: 'Interop',
    tco: 'TCO',
    crossDeviceViability: 'Cross-device'
  };
</script>

<div class="bars">
  {#each Object.entries(scores) as [key, value] (key)}
    <div class="score-bar">
      <span>{labels[key as keyof ScoreDimensions]}: {value}</span>
      <div class="score-track" aria-hidden="true">
        <div class="score-fill" style={`width: ${value}%`}></div>
      </div>
    </div>
  {/each}
</div>

<style>
  .bars {
    display: grid;
    gap: 0.55rem;
  }
</style>
