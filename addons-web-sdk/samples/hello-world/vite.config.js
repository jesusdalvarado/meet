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
        index: './index.html', // Entry point for index.html
        mainStage: './src/MainStage.html', // Entry point for MainStage.html
      },
    },
    outDir: '../dist/hello-world', // Matches the current output directory structure
  },
});

