<script lang="ts">
  import { onMount } from 'svelte';

  type ThemeMode = 'system' | 'light' | 'dark';
  let mode: ThemeMode = $state('system');

  function apply(next: ThemeMode) {
    mode = next;
    localStorage.setItem('theme-mode', next);
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme =
      next === 'system' ? (dark ? 'dark' : 'light') : next;
    document.documentElement.dataset.themeMode = next;
  }

  onMount(() => {
    mode = (localStorage.getItem('theme-mode') as ThemeMode | null) ?? 'system';
  });
</script>

<label class="theme no-print">
  <span class="meta">Theme</span>
  <select
    value={mode}
    onchange={(event) => apply(event.currentTarget.value as ThemeMode)}
    aria-label="Theme mode"
  >
    <option value="system">System</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
</label>

<style>
  .theme {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  select {
    border: 1px solid var(--ink);
    border-radius: 999px;
    background: transparent;
    color: var(--ink);
    padding: 0.35rem 0.6rem;
  }
</style>
