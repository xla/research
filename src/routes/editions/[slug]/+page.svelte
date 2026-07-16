<script lang="ts">
  import EditionIntro from '$lib/content/editions/local-ai-2026/index.md';
  import EvidenceBadge from '$lib/components/EvidenceBadge.svelte';
  import FeasibilityBadge from '$lib/components/FeasibilityBadge.svelte';
  import ScoreBreakdown from '$lib/components/ScoreBreakdown.svelte';
  import SortableTable from '$lib/components/SortableTable.svelte';
  import TableOfContents, {
    type TocSection
  } from '$lib/components/TableOfContents.svelte';
  import { hardwareTargets } from '$lib/data/local-ai-2026/hardware';
  import { models } from '$lib/data/local-ai-2026/models';
  import { runtimes } from '$lib/data/local-ai-2026/runtimes';
  import {
    agentFrameworks,
    interoperabilityComparisons,
    securityComparisons,
    tcoComparisons
  } from '$lib/data/local-ai-2026/tooling';
  import { scoreEntries } from '$lib/data/local-ai-2026/scores';
  import { sources } from '$lib/data/local-ai-2026/sources';
  import { compositeScore, defaultWeights } from '$lib/utils/scoring';

  let { data } = $props();

  const sections: TocSection[] = [
    ['executive-summary', '01', 'Executive summary'],
    ['scope-methodology', '02', 'Scope and methodology'],
    ['market-taxonomy', '03', 'Market taxonomy'],
    ['coding-models', '04', 'Coding and agentic models'],
    ['multimodal-models', '05', 'Secondary multimodal models'],
    ['inference-runtimes', '06', 'Inference runtimes'],
    ['model-managers', '07', 'Model managers'],
    ['local-agent-frameworks', '08', 'Local agent frameworks'],
    ['coding-agents', '09', 'Coding agents'],
    ['assistant-tooling', '10', 'Assistant and orchestration tooling'],
    ['hermes-agent', '11', 'Hermes Agent analysis'],
    ['memory-rag', '12', 'Memory and RAG systems'],
    ['customisation', '13', 'Model customisation'],
    ['security', '14', 'Security and operational reliability'],
    ['interoperability', '15', 'Interoperability'],
    ['ios-remote', '16', 'iOS and remote control'],
    ['hardware-feasibility', '17', 'Hardware feasibility'],
    ['benchmark-evidence', '18', 'Benchmark evidence'],
    ['scoring-framework', '19', 'Scoring framework'],
    ['tco', '20', 'Total cost of ownership'],
    ['trends', '21', '6-12 month trend analysis'],
    ['sources', '22', 'Source appendix']
  ].map(([id, number, title]) => ({ id, number, title }));

  const hardwareRows = hardwareTargets.map((target) => ({
    Machine: target.name,
    OS: target.os,
    CPU: target.cpu,
    GPU: target.gpu,
    Memory: target.memory,
    Role: target.role
  }));

  const modelRows = models.map((model) => ({
    Model: model.name,
    Provider: model.provider,
    Release: model.release,
    Architecture: model.architecture,
    Parameters: model.totalParameters,
    Active: model.activeParameters,
    Context: model.contextLength,
    Licence: model.license,
    Evidence: model.evidence,
    Confidence: model.confidence
  }));

  const comparisonColumns = [
    { key: 'Name', label: 'Name', sortable: true },
    { key: 'Category', label: 'Category', sortable: true },
    { key: 'Platforms', label: 'Platforms', sortable: true },
    { key: 'Local', label: 'Local-first', sortable: true },
    { key: 'API', label: 'API', sortable: true },
    { key: 'Strengths', label: 'Strengths' },
    { key: 'Constraints', label: 'Constraints' },
    { key: 'Licence', label: 'Licence', sortable: true },
    { key: 'Maturity', label: 'Maturity', sortable: true }
  ];

  function comparisonRows(entries: typeof runtimes) {
    return entries.map((entry) => ({
      Name: entry.name,
      Category: entry.category,
      Platforms: entry.platforms,
      Local: entry.localFirst,
      API: entry.api,
      Strengths: entry.strengths,
      Constraints: entry.constraints,
      Licence: entry.license,
      Maturity: entry.maturity
    }));
  }

  const jsonLd = $derived(
    JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Report',
      headline: data.edition.title,
      datePublished: data.edition.publishedAt,
      dateModified: data.edition.revisedAt,
      version: data.edition.version,
      url: `https://xla.github.io/research/editions/${data.edition.slug}/`
    }).replaceAll('<', '\\u003c')
  );
</script>

<svelte:head>
  <title>{data.edition.title} · {data.edition.version}</title>
  <meta name="description" content={data.edition.summary} />
  <link
    rel="canonical"
    href={`https://xla.github.io/research/editions/${data.edition.slug}/`}
  />
  <meta
    property="og:title"
    content={`${data.edition.title} ${data.edition.version}`}
  />
  <meta property="og:description" content={data.edition.summary} />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
  {@html '<script type="application/ld+json">' + jsonLd + '</' + 'script>'}
</svelte:head>

<main id="main">
  <article data-pagefind-body>
    <section class="hero">
      <div class="wrap">
        <p class="meta">
          {data.edition.version} · {data.edition.status} · revised {data.edition
            .revisedAt}
        </p>
        <h1 data-pagefind-meta="title">{data.edition.title}</h1>
        <p>{data.edition.subtitle}</p>
      </div>
    </section>

    <div class="wrap report-layout">
      <TableOfContents {sections} />
      <div class="report-main">
        <section id="executive-summary" class="section-block">
          <p class="section-number">01</p>
          <div>
            <h2>Executive summary</h2>
            <div class="prose"><EditionIntro /></div>
            <div class="callout">
              The practical baseline is hybrid: a small local coding model for
              fast iteration, a local manager for day-to-day use, a workstation
              endpoint for large MoE experiments, and explicit approval gates
              around shell, browser, filesystem and network actions.
            </div>
          </div>
        </section>

        <section id="scope-methodology" class="section-block">
          <p class="section-number">02</p>
          <div class="prose">
            <h2>Scope and methodology</h2>
            <p>
              The primary scope is macOS and Linux local AI. Windows and WSL are
              excluded from the primary analysis. Claims are classified as
              independent measured, community reproduced, vendor reported,
              hardware estimate or inferred. Hardware estimates assume current
              quantised local inference practice, not vendor cloud serving.
            </p>
            <p>
              The edition compares systems by workload profile rather than
              declaring a single universal winner. Scores are derived from typed
              dimensions and workload weights.
            </p>
          </div>
        </section>

        <section id="market-taxonomy" class="section-block">
          <p class="section-number">03</p>
          <div class="prose">
            <h2>Market taxonomy</h2>
            <p>
              The market separates into checkpoints, quantisation formats,
              runtimes, managers, assistant shells, agent frameworks, workflow
              orchestrators, memory systems and remote-control layers. Confusing
              these layers leads to brittle stack choices: a strong model cannot
              compensate for weak sandboxing, and a polished UI cannot fix a
              runtime that lacks the required context or structured generation
              behavior.
            </p>
          </div>
        </section>

        <section id="coding-models" class="section-block">
          <p class="section-number">04</p>
          <div>
            <h2>Coding and agentic models</h2>
            <p class="prose">
              Coding and agentic models are judged on tool use, repository-scale
              context, structured output, runtime support and practical hardware
              fit. Vendor benchmark claims are retained as directional evidence.
            </p>
            <SortableTable
              caption="Model comparison matrix"
              columns={[
                { key: 'Model', label: 'Model', sortable: true },
                { key: 'Provider', label: 'Provider', sortable: true },
                { key: 'Release', label: 'Release', sortable: true },
                { key: 'Architecture', label: 'Architecture', sortable: true },
                { key: 'Parameters', label: 'Parameters', sortable: true },
                { key: 'Active', label: 'Active', sortable: true },
                { key: 'Context', label: 'Context', sortable: true },
                { key: 'Licence', label: 'Licence', sortable: true },
                { key: 'Evidence', label: 'Evidence', sortable: true },
                { key: 'Confidence', label: 'Confidence', sortable: true }
              ]}
              rows={modelRows}
            />
          </div>
        </section>

        <section id="multimodal-models" class="section-block">
          <p class="section-number">05</p>
          <div class="prose">
            <h2>Secondary multimodal models</h2>
            <p>
              Multimodal work should be separated from primary coding loops.
              Local document vision, image captioning, OCR, transcription and
              image generation are better treated as specialist services beside
              the coding model. ComfyUI, whisper.cpp and faster-whisper remain
              relevant secondary components.
            </p>
          </div>
        </section>

        <section id="inference-runtimes" class="section-block">
          <p class="section-number">06</p>
          <div>
            <h2>Inference runtimes</h2>
            <SortableTable
              caption="Runtime comparison"
              columns={comparisonColumns}
              rows={comparisonRows(runtimes)}
            />
          </div>
        </section>

        <section id="model-managers" class="section-block">
          <p class="section-number">07</p>
          <div class="prose">
            <h2>Model managers</h2>
            <p>
              Ollama is the strongest default manager for repeatable local use.
              LM Studio and Jan are useful GUI-first managers. Direct llama.cpp,
              MLX-LM, vLLM and SGLang remain better when reproducibility, batch
              behavior or serving throughput matter more than desktop
              convenience.
            </p>
          </div>
        </section>

        <section id="local-agent-frameworks" class="section-block">
          <p class="section-number">08</p>
          <div>
            <h2>Local agent frameworks</h2>
            <SortableTable
              caption="Agent framework and assistant comparison"
              columns={comparisonColumns}
              rows={comparisonRows(agentFrameworks)}
            />
          </div>
        </section>

        <section id="coding-agents" class="section-block">
          <p class="section-number">09</p>
          <div class="prose">
            <h2>Coding agents</h2>
            <p>
              Aider remains the most proven local-compatible repository editing
              workflow. OpenCode is attractive for terminal-native users.
              OpenHands offers a fuller environment but requires stricter
              sandboxing and more operational care. Local coding agents need
              smaller, lower-latency models for edit loops and larger models for
              planning or review.
            </p>
          </div>
        </section>

        <section id="assistant-tooling" class="section-block">
          <p class="section-number">10</p>
          <div class="prose">
            <h2>Assistant and orchestration tooling</h2>
            <p>
              Open WebUI is a strong local assistant interface. AnythingLLM is
              stronger for document knowledge work. n8n is a better scheduler
              and integration runner than a model agent. Flowise is useful for
              visual prototyping but needs discipline around reproducibility,
              logs and error handling.
            </p>
          </div>
        </section>

        <section id="hermes-agent" class="section-block">
          <p class="section-number">11</p>
          <div class="prose">
            <h2>Hermes Agent analysis</h2>
            <p>
              Hermes Agent is evaluated as a model-agnostic personal agent
              runtime with local and hosted model endpoints, persistent memory,
              skills, scheduling, subagents, terminal backends and messaging
              gateways. Its repository reported release v0.18.2 on 8 July 2026.
              It is a serious comparison anchor, not an automatic winner.
            </p>
            <p>
              The strongest use case is controlled routines where the user wants
              one agent layer across local infrastructure and remote channels.
              The main review points are approval policy, terminal isolation,
              credential scope, gateway exposure and the trust boundary around
              self-created or imported skills.
            </p>
          </div>
        </section>

        <section id="memory-rag" class="section-block">
          <p class="section-number">12</p>
          <div class="prose">
            <h2>Memory and RAG systems</h2>
            <p>
              Memory should be explicit and inspectable. Letta is the clearest
              stateful-agent reference in this set. AnythingLLM and Open WebUI
              cover practical RAG workflows. For research use, embeddings,
              source retention, deletion behavior and provenance matter more
              than conversational polish.
            </p>
          </div>
        </section>

        <section id="customisation" class="section-block">
          <p class="section-number">13</p>
          <div class="prose">
            <h2>Model customisation</h2>
            <p>
              For the target machines, prompt scaffolds, retrieval, tool schemas
              and small LoRA experiments are more practical than full
              fine-tuning. The workstation can support heavier experiments, but
              evaluation data and rollback plans should be created before
              training begins.
            </p>
          </div>
        </section>

        <section id="security" class="section-block">
          <p class="section-number">14</p>
          <div>
            <h2>Security and operational reliability</h2>
            <p class="prose">
              Local execution reduces third-party data exposure but increases
              responsibility for patching, secrets, logs, backups, sandboxing
              and network policy.
            </p>
            <SortableTable
              caption="Security comparison"
              columns={comparisonColumns}
              rows={comparisonRows(securityComparisons)}
            />
          </div>
        </section>

        <section id="interoperability" class="section-block">
          <p class="section-number">15</p>
          <div>
            <h2>Interoperability</h2>
            <SortableTable
              caption="Interoperability comparison"
              columns={comparisonColumns}
              rows={comparisonRows(interoperabilityComparisons)}
            />
          </div>
        </section>

        <section id="ios-remote" class="section-block">
          <p class="section-number">16</p>
          <div class="prose">
            <h2>iOS and remote control</h2>
            <p>
              iOS is best treated as a remote control surface, not the execution
              host. The practical design is a LAN or VPN-reached local endpoint
              with authentication, limited tools and approval gates for
              destructive actions. Mobile access without audit logs and secret
              boundaries is not production-grade autonomy.
            </p>
          </div>
        </section>

        <section id="hardware-feasibility" class="section-block">
          <p class="section-number">17</p>
          <div>
            <h2>Hardware feasibility</h2>
            <SortableTable
              caption="Hardware targets"
              columns={[
                { key: 'Machine', label: 'Machine', sortable: true },
                { key: 'OS', label: 'OS', sortable: true },
                { key: 'CPU', label: 'CPU', sortable: true },
                { key: 'GPU', label: 'GPU', sortable: true },
                { key: 'Memory', label: 'Memory', sortable: true },
                { key: 'Role', label: 'Role' }
              ]}
              rows={hardwareRows}
            />
            <div class="table-wrap">
              <table>
                <caption> Model hardware feasibility </caption>
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Target</th>
                    <th>Status</th>
                    <th>Quantisation</th>
                    <th>Context</th>
                    <th>Offload</th>
                    <th>Throughput</th>
                    <th>Evidence</th>
                  </tr>
                </thead>
                <tbody>
                  {#each models as model (model.id)}
                    {#each model.feasibility as fit (fit.target)}
                      <tr>
                        <td>{model.name}</td>
                        <td
                          >{hardwareTargets.find(
                            (target) => target.id === fit.target
                          )?.name}</td
                        >
                        <td><FeasibilityBadge value={fit.status} /></td>
                        <td>{fit.quantisation}</td>
                        <td>{fit.context}</td>
                        <td>{fit.offload}</td>
                        <td>{fit.tokensPerSecond}</td>
                        <td
                          ><EvidenceBadge value={fit.evidenceClass} />
                          <span class="badge">{fit.confidence}</span></td
                        >
                      </tr>
                    {/each}
                  {/each}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="benchmark-evidence" class="section-block">
          <p class="section-number">18</p>
          <div class="prose">
            <h2>Benchmark evidence</h2>
            <p>
              SWE-bench, Terminal-Bench, TAU-Bench, LiveCodeBench, AIME and GPQA
              claims are included only by evidence class. Vendor-reported
              benchmark numbers show what the publisher claims. They do not
              replace local measurement under target context length,
              quantisation and tool-loop settings.
            </p>
          </div>
        </section>

        <section id="scoring-framework" class="section-block">
          <p class="section-number">19</p>
          <div>
            <h2>Scoring framework</h2>
            <p class="prose">
              Scores use capability, hardware fit, operational quality,
              security, ecosystem, interoperability, TCO and cross-device
              viability. Default weights sum to one and tests enforce range and
              weight validation.
            </p>
            <ScoreBreakdown />
            <SortableTable
              caption="Composite scoring table"
              columns={[
                { key: 'Stack', label: 'Stack', sortable: true },
                { key: 'Profile', label: 'Profile', sortable: true },
                { key: 'Composite', label: 'Composite', sortable: true },
                { key: 'Evidence', label: 'Evidence', sortable: true },
                { key: 'Confidence', label: 'Confidence', sortable: true }
              ]}
              rows={scoreEntries.map((entry) => ({
                Stack: entry.name,
                Profile: entry.profile,
                Composite: compositeScore(entry.scores, defaultWeights),
                Evidence: entry.evidence,
                Confidence: entry.confidence
              }))}
            />
          </div>
        </section>

        <section id="tco" class="section-block">
          <p class="section-number">20</p>
          <div>
            <h2>Total cost of ownership</h2>
            <SortableTable
              caption="TCO comparison"
              columns={comparisonColumns}
              rows={comparisonRows(tcoComparisons)}
            />
          </div>
        </section>

        <section id="trends" class="section-block">
          <p class="section-number">21</p>
          <div class="prose">
            <h2>6-12 month trend analysis</h2>
            <p>
              Expect more small-active-parameter MoE coding models, stronger
              structured generation in serving runtimes, more OpenAI-compatible
              local endpoints, broader MCP adoption and sharper separation
              between desktop assistants and sandboxed autonomous agents.
              Hardware pressure will remain concentrated in context length, KV
              cache size and reliable tool-loop latency.
            </p>
          </div>
        </section>

        <section id="sources" class="section-block">
          <p class="section-number">22</p>
          <div>
            <h2>Source appendix</h2>
            <div class="table-wrap">
              <table>
                <caption> Evidence register and sources </caption>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Publisher</th>
                    <th>Type</th>
                    <th>Accessed</th>
                    <th>Sections</th>
                  </tr>
                </thead>
                <tbody>
                  {#each sources as source (source.id)}
                    <tr>
                      <td
                        ><a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer">{source.title}</a
                        ></td
                      >
                      <td>{source.publisher}</td>
                      <td>{source.sourceType}</td>
                      <td>{source.accessedAt}</td>
                      <td>{source.sections.join(', ')}</td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  </article>
</main>
