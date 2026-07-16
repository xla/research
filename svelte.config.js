import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const base =
  process.env.BASE_PATH ??
  (process.env.NODE_ENV === 'production' ? '/research' : '');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.svx', '.md']
    })
  ],
  kit: {
    adapter: adapter({
      fallback: '404.html',
      pages: 'build',
      assets: 'build'
    }),
    paths: {
      base
    }
  }
};

export default config;
