<script lang="ts">
  import { stableSort, type SortDirection } from '$lib/utils/sorting';

  export interface Column<T extends Record<string, unknown>> {
    key: keyof T;
    label: string;
    sortable?: boolean;
  }

  let {
    caption,
    columns,
    rows
  }: {
    caption: string;
    columns: Column<Record<string, unknown>>[];
    rows: Record<string, unknown>[];
  } = $props();

  let sortKey = $state<string>('');
  let direction = $state<SortDirection>('asc');

  const sortedRows = $derived(
    sortKey ? stableSort(rows, (row) => row[sortKey], direction) : rows
  );

  function sort(column: Column<Record<string, unknown>>) {
    if (!column.sortable) return;
    const nextKey = String(column.key);
    if (sortKey === nextKey) {
      direction = direction === 'asc' ? 'desc' : 'asc';
    } else {
      sortKey = nextKey;
      direction = 'asc';
    }
  }
</script>

<div class="table-wrap">
  <table>
    <caption>
      {caption}
    </caption>
    <thead>
      <tr>
        {#each columns as column (column.key)}
          <th
            scope="col"
            aria-sort={column.sortable
              ? sortKey === String(column.key)
                ? direction === 'asc'
                  ? 'ascending'
                  : 'descending'
                : 'none'
              : undefined}
          >
            {#if column.sortable}
              <button type="button" class="sort" onclick={() => sort(column)}>
                {column.label}
                <span aria-hidden="true"
                  >{sortKey === String(column.key)
                    ? direction === 'asc'
                      ? '↑'
                      : '↓'
                    : '↕'}</span
                >
              </button>
            {:else}
              {column.label}
            {/if}
          </th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each sortedRows as row (row)}
        <tr tabindex="0">
          {#each columns as column (column.key)}
            <td>{row[column.key]}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  caption {
    padding: 0.8rem;
    text-align: left;
    font-weight: 700;
  }

  .sort {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    border: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
    padding: 0;
    text-align: left;
    text-transform: inherit;
    letter-spacing: inherit;
    font-size: inherit;
  }
</style>
