module.exports = {
  env: {
    browser: true,
    'shared-node-browser': true,
    node: true,
    es6: true,
  },
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'prettier',
    'react-hooks',
    'import',
    'jest',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    rules: {
      curly: ['warn', 'multi-line', 'consistent'],
      'no-console': 'off',
      'no-empty-pattern': 'warn',
      'no-duplicate-imports': 'error',
      'import/no-unresolved': ['error', { commonjs: true, amd: true }],
      'import/export': 'error',
      'import/named': 'off',
      'import/namespace': 'off',
      'import/default': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'jest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        paths: ['src'],
      },
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        map: [['zustand', './src/index.ts']],
      },
    },
  },
  overrides: [
    {
      files: ['src'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
}
