import path from 'path';

import { AliasOptions, ConfigEnv, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isProdMode = (mode: ConfigEnv['mode']) => mode === 'production';
const isDevMode = (mode: ConfigEnv['mode']) => mode === 'development';

const getAppBase = (mode: ConfigEnv['mode']) =>
  isProdMode(mode) ? '/guessing-game' : '';

const makeAliases = (): AliasOptions => {
  const prefix = '$';
  const srcDirsToAlias = ['components', 'features', 'shared'];

  return srcDirsToAlias.map(dir => {
    const aliasedPath = `${prefix}${dir}`;
    const actualDirPath = path.resolve(__dirname, `src/${dir}`);

    return { find: aliasedPath, replacement: actualDirPath };
  });
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => ({
  plugins: [react()],
  base: getAppBase(mode),
  resolve: {
    alias: makeAliases(),
  },
  define: {
    IS_DEV_MODE: JSON.stringify(isDevMode(mode)),
  },
  server: {
    port: 3000,
  },
}));
