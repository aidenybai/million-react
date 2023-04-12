import { defineConfig } from 'vite';
import million from 'million/compiler';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite()],
});
