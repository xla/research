<script lang="ts">
  import type { Feasibility } from '$lib/data/types';

  const labels: Record<Feasibility, string> = {
    excellent: 'Excellent',
    comfortable: 'Comfortable',
    compromised: 'Feasible with compromises',
    'background-only': 'Background only',
    impractical: 'Technically possible but impractical',
    'not-feasible': 'Not feasible'
  };

  let { value }: { value: Feasibility } = $props();
</script>

<span class={`badge feasibility ${value}`}>{labels[value]}</span>

<style>
  .feasibility {
    color: var(--ink);
  }

  .excellent,
  .comfortable {
    border-color: var(--accent-2);
  }

  .compromised,
  .background-only {
    border-color: #9b7b25;
  }

  .impractical,
  .not-feasible {
    border-color: var(--accent);
  }
</style>
