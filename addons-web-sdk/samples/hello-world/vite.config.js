import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html' // Adjust to your project's HTML entry point
      },
    },
    outDir: '../dist/hello-world', // Matches the current output directory structure
  },
});

