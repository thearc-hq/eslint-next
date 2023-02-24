/**
 * @fileoverview Index file to allow YAML file to be loaded
 * @author Nico Hülscher
 */
'use strict';

module.exports = {
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'react/react-in-jsx-scope': 'off',
    "react-in-jsx-scope": 'off'
  },
  reportUnusedDisableDirectives: true,
  ignorePatterns: ['**/node_modules/', '**/dist/', '**/build/', '**/*.config.js'],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    'jsdoc',
    'react',
    'sort-keys-fix'
  ],
  extends: [
    '@the-arc-gmbh/eslint-config',
    'plugin:import/recommended',
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:prettier/recommended",
    'next/core-web-vitals',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
};