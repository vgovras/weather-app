module.exports = {
    extends: [
        'airbnb-base',
        'airbnb-typescript/base',
    ],
    rules: {
        camelcase: 'off',
        'no-underscore-dangle': ['error', { 'allowAfterThis': true }],
        'object-curly-newline': 0,
        'class-methods-use-this': 0,
        'arrow-parens': 0,
        'max-len': ['error', { code: 120 }],
        'import/prefer-default-export': 0,
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/lines-between-class-members': 0,
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                overrides: {
                    interface: {
                        multiline: {
                            delimiter: 'semi',
                            requireLast: true
                        }
                    }
                }
            }
        ],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE'],
            }
        ]
    },
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.eslint.json',
    },
};
