import { FlatCompat } from '@eslint/eslintrc';
import nextPlugin from 'eslint-plugin-next';
import tseslint from 'typescript-eslint';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert the directory name URL to a path string
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create a compatibility instance to load legacy config
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Convert legacy configs
  ...compat.config({
    extends: ['next/core-web-vitals'],
  }),
  
  // Add TypeScript support
  ...tseslint.configs.recommended,
  
  // Next.js plugin config
  { plugins: { next: nextPlugin } },
  { rules: { ...nextPlugin.configs.recommended.rules } },
  
  // Custom rule overrides
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
  
  // Ignore patterns
  {
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'public/',
      '**/*.config.js',
      'scripts/netlify-build.js',
    ],
  },
]; 