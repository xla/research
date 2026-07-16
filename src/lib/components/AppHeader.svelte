<script lang="ts">
  import { sitePath } from '$lib/utils/paths';
  import PrintButton from './PrintButton.svelte';
  import SearchDialog from './SearchDialog.svelte';
  import ThemeToggle from './ThemeToggle.svelte';

  let searchOpen = $state(false);
</script>

<header class="site-header no-print" data-pagefind-ignore>
  <a class="brand" href={sitePath('/')}>Local AI Research</a>
  <nav aria-label="Primary navigation">
    <a href={sitePath('/editions/local-ai-2026/')}>Current edition</a>
  </nav>
  <div class="actions">
    <button
      class="button"
      type="button"
      onclick={() => (searchOpen = true)}
      aria-keyshortcuts="/ Control+K Meta+K">Search</button
    >
    <ThemeToggle />
    <PrintButton />
  </div>
</header>

<SearchDialog bind:open={searchOpen} />

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 10;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 1rem;
    border-bottom: 1px solid var(--rule);
    background: color-mix(in srgb, var(--paper) 92%, transparent);
    backdrop-filter: blur(12px);
    padding: 0.7rem clamp(1rem, 3vw, 2rem);
  }

  .brand {
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
  }

  nav {
    display: flex;
    gap: 1rem;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: end;
  }

  @media (max-width: 760px) {
    .site-header {
      grid-template-columns: 1fr;
      position: static;
    }

    .actions {
      justify-content: start;
    }
  }
</style>
