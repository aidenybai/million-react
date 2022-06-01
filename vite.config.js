import { million } from 'million/vite-plugin-million';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const reactCompatPath = resolve(__dirname, './node_modules/million/dist/react.mjs');

export default defineConfig({
  plugins: [million()],
  resolve: {
    alias: {
      react: reactCompatPath,
      'react-dom': reactCompatPath,
    },
  },
});
