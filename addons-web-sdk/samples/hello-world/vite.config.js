import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Set the base path to relative
  build: {
    rollupOptions: {
      input: {
        main: './index.html' // Adjust to your project's HTML entry point
      },
    },
    outDir: '../dist/hello-world', // Matches the current output directory structure
  },
});

