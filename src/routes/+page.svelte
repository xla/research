<script lang="ts">
  import { editions } from '$lib/data/editions';
  import { sitePath } from '$lib/utils/paths';
</script>

<svelte:head>
  <title>Local AI Research</title>
  <meta
    name="description"
    content="Versioned research editions on local AI models, runtimes, tooling, hardware feasibility, scoring and operations."
  />
  <link rel="canonical" href="https://xla.github.io/research/" />
  <meta property="og:title" content="Local AI Research" />
  <meta
    property="og:description"
    content="Versioned research editions for local AI systems."
  />
  <meta property="og:type" content="website" />
</svelte:head>

<main id="main">
  <section class="hero">
    <div class="wrap">
      <p class="meta">Public research editions</p>
      <h1>Local AI Research</h1>
      <p>
        Static, versioned publications on local model execution, hardware fit,
        agents, memory, security, interoperability and cost.
      </p>
    </div>
  </section>

  <section
    class="wrap"
    aria-labelledby="editions-heading"
    style="padding: 3rem 0 5rem"
  >
    <p class="meta">Editions</p>
    <h2 id="editions-heading">Published reports</h2>
    <div class="grid" style="margin-top: 1.5rem">
      {#each editions as edition (edition.slug)}
        <article class="edition-card">
          <div>
            <p class="meta">{edition.version} · {edition.status}</p>
            <h3>{edition.title}</h3>
            <p>{edition.summary}</p>
          </div>
          <div>
            <p class="meta">
              {edition.publishedAt} · {edition.sourceCount} sources
            </p>
            <a class="button" href={sitePath(`/editions/${edition.slug}/`)}
              >Read edition</a
            >
          </div>
        </article>
      {/each}
    </div>
  </section>
</main>
