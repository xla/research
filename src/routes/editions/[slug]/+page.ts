import { error } from '@sveltejs/kit';
import { getEdition } from '$lib/data/editions';

export function entries() {
  return [{ slug: 'local-ai-2026' }];
}

export function load({ params }) {
  const edition = getEdition(params.slug);
  if (!edition) error(404, 'Edition not found');
  return { edition };
}
