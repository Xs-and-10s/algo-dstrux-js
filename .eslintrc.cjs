module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // "eslint:recommended",
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/lines-between-class-members': 0,
    'no-plusplus': 0,
    'max-classes-per-file': 0,
  },
};