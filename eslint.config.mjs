import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});

const config = [...compat.extends('next/core-web-vitals', 'next/typescript'), {
	rules: {
		quotes: ['error', 'single'],
		'jsx-quotes': ['error', 'prefer-double'],
		semi: ['error', 'always'],
		'comma-dangle': ['error', 'never']
	}
}];

export default config;
