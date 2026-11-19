import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://lisannbecker.com',
  // Fonts are downloaded at build time and served from your own site.
  fonts: [
    // Display face for the name, headings and project titles.
    // This used to be the serif Erode (also on Fontshare: name 'Erode', weight 400, styles normal
    // and italic, fallbacks Georgia, serif). It looked best at letter-spacing -0.01em and full size,
    // so switching back also means setting --display-tracking to -0.01em and --display-scale to 1
    // in global.css.
    {
      provider: fontProviders.fontshare(),
      name: 'Satoshi',
      cssVariable: '--font-display',
      weights: [400],
      styles: ['normal', 'italic'],
      fallbacks: ['system-ui', 'sans-serif'],
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
