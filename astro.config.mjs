import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  // Fonts are downloaded at build time and served from your own site.
  fonts: [
    {
      provider: fontProviders.fontshare(),
      name: 'Erode',
      cssVariable: '--font-serif',
      weights: [400, 500],
      styles: ['normal', 'italic'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'DM Sans',
      cssVariable: '--font-sans',
      weights: [400, 500],
      styles: ['normal'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'DM Mono',
      cssVariable: '--font-mono',
      weights: [400],
      styles: ['normal'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
});
