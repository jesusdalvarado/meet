import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  base: './', // Set the base path to relative

  build: {
    rollupOptions: {
      plugins: [
        copy({
          targets: [
            { src: 'src/**/*', dest: '../dist/hello-world' },
          ],
        }),
      ],
      input: {
        main: './index.html' // Adjust to your project's HTML entry point
      },
    },
    outDir: '../dist/hello-world', // Matches the current output directory structure
  },
});

