<script lang="ts">
  import { base } from '$app/paths';
  import { onMount, tick } from 'svelte';

  interface PagefindResult {
    id: string;
    data: () => Promise<{
      url: string;
      meta: { title?: string };
      excerpt: string;
      sub_results?: { title?: string; url: string; excerpt: string }[];
    }>;
  }

  interface Pagefind {
    search: (query: string) => Promise<{ results: PagefindResult[] }>;
  }

  let { open = $bindable(false) }: { open: boolean } = $props();
  let query = $state('');
  let loading = $state(false);
  let results = $state<Awaited<ReturnType<PagefindResult['data']>>[]>([]);
  let dialog: HTMLDialogElement;
  let input: HTMLInputElement;
  let pagefind: Pagefind | null = null;

  async function loadPagefind() {
    if (!pagefind) {
      pagefind = (await import(
        /* @vite-ignore */ `${base}/pagefind/pagefind.js`
      )) as Pagefind;
    }
    return pagefind;
  }

  async function runSearch() {
    if (query.trim().length < 2) {
      results = [];
      return;
    }
    loading = true;
    try {
      const pf = await loadPagefind();
      const search = await pf.search(query);
      const loaded = await Promise.all(
        search.results.slice(0, 8).map((result) => result.data())
      );
      results = loaded;
    } finally {
      loading = false;
    }
  }

  async function show() {
    if (!dialog.open) dialog.showModal();
    await tick();
    input?.focus();
  }

  function close() {
    open = false;
    dialog.close();
  }

  $effect(() => {
    if (open && dialog) show();
    if (!open && dialog?.open) dialog.close();
  });

  onMount(() => {
    const onKeydown = (event: KeyboardEvent) => {
      if (
        event.key === '/' &&
        !open &&
        event.target instanceof HTMLElement &&
        !['INPUT', 'TEXTAREA'].includes(event.target.tagName)
      ) {
        event.preventDefault();
        open = true;
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        open = true;
      }
      if (event.key === 'Escape' && open) close();
    };
    window.addEventListener('keydown', onKeydown);
    return () => window.removeEventListener('keydown', onKeydown);
  });
</script>

<dialog bind:this={dialog} onclose={() => (open = false)} data-pagefind-ignore>
  <form
    method="dialog"
    class="search"
    onsubmit={(event) => event.preventDefault()}
  >
    <div class="search-head">
      <label for="site-search">Search report</label>
      <button type="button" class="button" onclick={close}>Close</button>
    </div>
    <input
      id="site-search"
      bind:this={input}
      bind:value={query}
      oninput={runSearch}
      placeholder="Models, runtimes, Hermes, hardware..."
      autocomplete="off"
    />
    <div class="results" aria-live="polite">
      {#if loading}
        <p>Searching...</p>
      {:else if results.length === 0 && query.length > 1}
        <p>No results.</p>
      {:else}
        {#each results as result (result.url)}
          <a class="result" href={`${base}${result.url}`} onclick={close}>
            <strong>{result.meta.title ?? 'Local AI Landscape'}</strong>
            {@html result.excerpt}
          </a>
        {/each}
      {/if}
    </div>
  </form>
</dialog>

<style>
  dialog {
    width: min(760px, calc(100vw - 2rem));
    border: 1px solid var(--ink);
    background: var(--paper);
    color: var(--ink);
    padding: 0;
  }

  dialog::backdrop {
    background: rgb(0 0 0 / 0.45);
  }

  .search {
    display: grid;
    gap: 1rem;
    padding: 1rem;
  }

  .search-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  label {
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  input {
    width: 100%;
    border: 1px solid var(--ink);
    background: var(--table);
    color: var(--ink);
    padding: 0.8rem;
    font-size: 1.1rem;
  }

  .results {
    display: grid;
    gap: 0.5rem;
    max-height: 60vh;
    overflow: auto;
  }

  .result {
    border-top: 1px solid var(--rule);
    padding: 0.8rem 0;
    text-decoration: none;
  }

  .result :global(mark) {
    background: color-mix(in srgb, var(--accent) 22%, transparent);
    color: inherit;
  }
</style>
