import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kjh-1125.github.io',
  base: '/kjh_Portfolio',
  output: 'static',
  build: {
    assets: '_astro',
  },
});
