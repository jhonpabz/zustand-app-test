import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const _dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // '@api': path.resolve(_dirname, './src/api'),
      // '@assets': path.resolve(_dirname, './src/assets'),
      '@components': path.resolve(_dirname, './src/components'),
      // '@context': path.resolve(_dirname, './src/context'),
      // '@helper': path.resolve(_dirname, './src/helper'),
      // '@lib': path.resolve(_dirname, './src/lib'),
      '@pages': path.resolve(_dirname, './src/pages'),
      // '@hooks': path.resolve(_dirname, './src/hooks'),
      // '@routes': path.resolve(_dirname, './src/routes'),
      // '@styles': path.resolve(_dirname, './src/styles'),
      '@stores': path.resolve(_dirname, './src/stores'),
    },
  },
  build: {
    outDir: './build',
  },
});
