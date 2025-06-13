import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.js',
      name: 'JodUI',
      fileName: (format) => `index${format === 'es' ? '.esm' : ''}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'auto'
      }
    },
    css: {
      output: 'jod.css'
    }
  }
});
