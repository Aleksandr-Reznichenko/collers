import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import { sync } from 'glob';

export default defineConfig({
  base: '/collers/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: true,
    rollupOptions: {
      input: sync('./*.html'),
      output: {
        assetFileNames: 'assets/[name][extname]',
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/[name].js',
      },
    },
  },
  plugins: [injectHTML()],
});
