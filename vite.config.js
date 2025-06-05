import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // github actions and setting base url
  base: 'https://jwvdriel.github.io/testimonial-page/',

  // The Vue plugin will parse absolute URLs and treat them
  // as absolute paths to files on disk. Setting this to
  // `false` will leave absolute URLs un-touched so they can
  // reference assets in the public directory as expected.
  includeAbsolute: false,
});
