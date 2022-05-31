import { defineConfig } from 'vite';
import { million } from 'million/vite-plugin-million';

export default defineConfig({
  plugins: [million()],
});
