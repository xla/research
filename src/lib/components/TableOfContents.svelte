<script lang="ts">
  import { onMount } from 'svelte';

  export interface TocSection {
    id: string;
    number: string;
    title: string;
  }

  let { sections }: { sections: TocSection[] } = $props();
  let active = $state('');
  let open = $state(false);

  onMount(() => {
    active = sections[0]?.id ?? '';
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) active = visible.target.id;
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    for (const section of sections) {
      const node = document.getElementById(section.id);
      if (node) observer.observe(node);
    }

    const onKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') open = false;
    };
    window.addEventListener('keydown', onKeydown);

    return () => {
      observer.disconnect();
      window.removeEventListener('keydown', onKeydown);
    };
  });
</script>

<button
  class="button mobile-toc no-print"
  type="button"
  onclick={() => (open = true)}
  aria-expanded={open}>Contents</button
>

<nav class="toc no-print" aria-label="Report contents" data-pagefind-ignore>
  {#each sections as section (section.id)}
    <a class:active={active === section.id} href={`#${section.id}`}>
      <span>{section.number}</span>
      {section.title}
    </a>
  {/each}
</nav>

{#if open}
  <div class="drawer no-print" role="dialog" aria-label="Report contents">
    <button class="button" type="button" onclick={() => (open = false)}
      >Close</button
    >
    <nav aria-label="Mobile report contents">
      {#each sections as section (section.id)}
        <a href={`#${section.id}`} onclick={() => (open = false)}>
          <span>{section.number}</span>
          {section.title}
        </a>
      {/each}
    </nav>
  </div>
{/if}

<style>
  .toc {
    position: sticky;
    top: 5rem;
    display: grid;
    gap: 0.1rem;
    align-self: start;
    max-height: calc(100vh - 6rem);
    overflow: auto;
    font-size: 0.86rem;
  }

  .toc a,
  .drawer a {
    display: grid;
    grid-template-columns: 2.4rem 1fr;
    gap: 0.4rem;
    padding: 0.35rem 0;
    color: var(--muted);
    text-decoration: none;
  }

  .toc a.active,
  .toc a:hover,
  .drawer a:hover {
    color: var(--accent);
  }

  .mobile-toc {
    display: none;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    z-index: 8;
    background: var(--paper);
  }

  .drawer {
    position: fixed;
    inset: 0;
    z-index: 20;
    overflow: auto;
    background: var(--paper);
    padding: 1rem;
  }

  .drawer nav {
    display: grid;
    margin-top: 1rem;
  }

  @media (max-width: 860px) {
    .toc {
      display: none;
    }

    .mobile-toc {
      display: inline-flex;
    }
  }
</style>
