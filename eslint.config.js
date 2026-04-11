import globals from 'globals'
import eslint from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
    {
        ignores: ['build/**', 'coverage/**']
    },
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: { jsx: true }
            },
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            'react-hooks': reactHooksPlugin,
            prettier: prettierPlugin
        },
        rules: {
            ...eslint.configs.recommended.rules,
            ...tsPlugin.configs.recommended.rules,
            '@typescript-eslint/naming-convention': [
                'warn',
                {
                    selector: 'parameter',
                    format: ['camelCase'],
                    trailingUnderscore: 'allowSingleOrDouble'
                },
                {
                    selector: 'class',
                    format: ['PascalCase']
                },
                {
                    selector: 'enum',
                    format: ['PascalCase', 'UPPER_CASE']
                },
                {
                    selector: 'enumMember',
                    format: ['PascalCase', 'UPPER_CASE']
                },
                {
                    selector: 'interface',
                    format: ['PascalCase']
                },
                {
                    selector: 'typeAlias',
                    format: ['PascalCase']
                },
                {
                    selector: 'typeParameter',
                    format: ['PascalCase']
                }
            ],
            '@typescript-eslint/no-explicit-any': 'warn',
            'react-hooks/rules-of-hooks': 'warn',
            'react-hooks/exhaustive-deps': 'warn'
        },
        settings: {
            react: {
                version: 'detect'
            }
        }
    },
    {
        files: ['**/__tests__/**/*.{ts,tsx}', '**/*.test.{ts,tsx}'],
        languageOptions: {
            globals: {
                test: 'readonly',
                expect: 'readonly',
                describe: 'readonly',
                it: 'readonly',
                vi: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
                beforeAll: 'readonly',
                afterAll: 'readonly'
            }
        }
    }
]
