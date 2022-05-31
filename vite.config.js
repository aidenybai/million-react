import { defineConfig } from 'vite';
import { million } from 'million/vite-plugin-million';
import { resolve } from 'path';

export default defineConfig({
  plugins: [million()],
  resolve: {
    alias: {
      react: resolve(__dirname, './node_modules/million/dist/react.mjs'),
      'react-dom': resolve(__dirname, './node_modules/million/dist/react.mjs'),
    },
  },
});
