module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/order': [1, { 'newlines-between': 'always' }],
    'import/newline-after-import': [1, { count: 1 }],

    // TODO: enable and make exceptions for styled & react where needed
    'import/no-named-as-default': 0,
    // TODO: enable and make exceptions for styled & react where needed
    'import/default': 0,
    // TODO: enable and make exceptions for styled & react where needed
    'import/no-named-as-default-member': 0,
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
};
