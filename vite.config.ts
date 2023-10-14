import { ConfigEnv, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isProd = (mode: ConfigEnv['mode']) => mode === 'production';

const getAppBase = (mode: ConfigEnv['mode']) =>
  isProd(mode) ? '/guessing-game' : '';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => ({
  plugins: [react()],
  base: getAppBase(mode),
  server: {
    port: 3000,
  },
}));
