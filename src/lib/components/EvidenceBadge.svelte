<script lang="ts">
  import type { EvidenceClass } from '$lib/data/types';

  const labels: Record<EvidenceClass, string> = {
    'independent-measured': 'Independent measured',
    'vendor-reported': 'Vendor reported',
    'community-reproduced': 'Community reproduced',
    'hardware-estimate': 'Hardware estimate',
    inferred: 'Inferred'
  };

  let { value }: { value: EvidenceClass } = $props();
</script>

<span class="badge" title={`Evidence class: ${labels[value]}`}
  >{labels[value]}</span
>
