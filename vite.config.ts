import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const rootDir = resolve(__dirname);

export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  resolve: {
    alias: [
      { find: '@components', replacement: resolve(rootDir, './src/components') },
      { find: '@views', replacement: resolve(rootDir, './src/views') },
      { find: '@assets', replacement: resolve(rootDir, './src/assets') },
      { find: '@utils', replacement: resolve(rootDir, './src/utils') },
    ],
  },
});
