import { million } from 'million/vite-plugin-million';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [million({ react: true })],
});
