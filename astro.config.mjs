// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import postcssCriticalCss from 'postcss-critical-css';

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      postcss: {
        plugins: [
          postcssCriticalCss({
            inline: true,
            
          }),
        ],
      },
    },
  },
  integrations: [tailwind(), react()]
});