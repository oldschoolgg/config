/**
 * Default ESLint configuration for oldschoolgg Projects
 * @example
 * ```json
 * {
 *   "extends": "@oldschoolgg"
 * }
 * ```
 */
export const config = {
	parser: '@typescript-eslint/parser',
	plugins: ['simple-import-sort'],
	extends: ['@skyra', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
	env: {
		jest: true
	},
	rules: {
		'no-mixed-operators': 'off',
		'consistent-return': 'off',
		'array-callback-return': 'off',
		'id-length': 'off',
		complexity: 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/prefer-for-of': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/require-await': 'off',
		radix: 'off',
		'no-throw-literal': 'off',
		'no-negated-condition': 'off',
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: 'import', next: 'const' },
			{ blankLine: 'always', prev: 'import', next: 'export' },
			{ blankLine: 'always', prev: 'const', next: 'export' }
		],
		'simple-import-sort/sort': 'error',
		'prettier/prettier': [
			'error',
			{
				semi: true,
				trailingComma: 'none',
				useTabs: true,
				singleQuote: true,
				printWidth: 100,
				tabWidth: 4
			}
		]
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	}
};

module.exports = config;
export default config;
