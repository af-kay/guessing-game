import path from 'path';

import { defineConfig } from 'vitest/config';
import { AliasOptions } from 'vite';

// TODO: Duplicated code from vite.config.ts. Do not RY
const makeAliases = (): AliasOptions => {
  const prefix = '$';
  const srcDirsToAlias = ['components', 'features', 'shared'];

  return srcDirsToAlias.map(dir => {
    const aliasedPath = `${prefix}${dir}`;
    const actualDirPath = path.resolve(__dirname, `src/${dir}`);

    return { find: aliasedPath, replacement: actualDirPath };
  });
};

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: makeAliases(),
  },
});
