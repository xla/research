<script lang="ts">
  import '../app.css';
  import AppHeader from '$lib/components/AppHeader.svelte';

  let { children } = $props();
</script>

<a class="skip-link" href="#main">Skip to content</a>
<div class="page-shell">
  <AppHeader />
  {@render children()}
</div>
