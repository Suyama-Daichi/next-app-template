module.exports = {
  ignorePatterns: ['next-env.d.ts'],
  plugins: ['@typescript-eslint', 'autofix'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  extends: [
    'next/core-web-vitals',
    'plugin:import/recommended',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '{react,react-dom/**,react-router-dom}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@src/**',
            group: 'parent',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
    quotes: ['error', 'single'],
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unused-vars': 'off', // autofix/no-unused-varsとの干渉防止
    'autofix/no-unused-vars': 'error',
    'import/named': 'off',
  },
};
