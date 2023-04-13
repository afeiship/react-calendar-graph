import { defineConfig } from 'vite';
import path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
// https://github.com/antfu/vite-plugin-pwa

export default defineConfig({
  root: 'public',
  base: '',
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  build: {
    outDir: '../docs',
    emptyOutDir: true
  },
  plugins: [reactRefresh()]
});
