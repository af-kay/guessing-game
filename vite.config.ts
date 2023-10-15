import { AliasOptions, ConfigEnv, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const isProd = (mode: ConfigEnv['mode']) => mode === 'production';

const getAppBase = (mode: ConfigEnv['mode']) =>
  isProd(mode) ? '/guessing-game' : '';

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
  server: {
    port: 3000,
  },
}));
