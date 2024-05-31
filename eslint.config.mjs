//@ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import storybook from 'eslint-plugin-storybook';
import {fixupConfigRules, fixupPluginRules} from '@eslint/compat';
import {FlatCompat} from '@eslint/eslintrc';

const compat = new FlatCompat();

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(compat.extends('plugin:@next/next/core-web-vitals')),
  {
    plugins: {
      storybook: fixupPluginRules(storybook),
    },
    rules: {
      'no-restricted-imports': [
        'error',
        {
          'patterns': [
            '@/features/*/*',
          ],
        },
      ],
    },
  },
);
