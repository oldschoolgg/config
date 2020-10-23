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
	plugins: ['@typescript-eslint', 'simple-import-sort'],
	extends: ['prettier/@typescript-eslint', 'plugin:prettier/recommended'],
	env: {
		es6: true,
		es2017: true,
		es2020: true,
		node: true,
		jest: true
	},
	rules: {
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': 'off',
		'@typescript-eslint/await-thenable': 'off',
		'@typescript-eslint/ban-ts-comment': [
			'error',
			{
				'ts-expect-error': 'allow-with-description',
				'ts-ignore': 'allow-with-description',
				'ts-nocheck': true,
				'ts-check': true,
				minimumDescriptionLength: 3
			}
		],
		'@typescript-eslint/class-literal-property-style': 'error',
		'@typescript-eslint/comma-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'@typescript-eslint/consistent-type-definitions': 'error',
		'@typescript-eslint/default-param-last': 'error',
		'@typescript-eslint/dot-notation': [
			'error',
			{
				allowKeywords: true,
				allowPattern: '(^[A-Z])|(^[a-z]+(_[a-z]+)+$)',
				allowPrivateClassPropertyAccess: true
			}
		],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/init-declarations': 'error',
		'@typescript-eslint/keyword-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'semi',
					requireLast: true
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false
				}
			}
		],
		'@typescript-eslint/member-ordering': [
			'error',
			{
				default: [
					'signature',
					'public-instance-field',
					'protected-instance-field',
					'private-instance-field',
					'instance-field',
					'public-constructor',
					'protected-constructor',
					'private-constructor',
					'constructor',
					'public-instance-method',
					'protected-instance-method',
					'private-instance-method',
					'instance-method',
					'public-static-field',
					'protected-static-field',
					'private-static-field',
					'static-field',
					'public-static-method',
					'protected-static-method',
					'private-static-method',
					'static-method'
				]
			}
		],
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'default',
				format: ['camelCase'],
				leadingUnderscore: 'forbid',
				trailingUnderscore: 'forbid',
				filter: {
					regex: '^(?:VariableDeclarator|AssignmentExpression)$',
					match: false
				}
			},
			{
				selector: 'parameter',
				format: ['camelCase'],
				leadingUnderscore: 'allow'
			},
			{
				selector: 'property',
				modifiers: ['readonly'],
				prefix: ['k'],
				format: ['PascalCase']
			},
			{
				selector: 'enumMember',
				format: ['PascalCase']
			},
			{
				selector: 'typeLike',
				format: ['PascalCase']
			}
		],
		'@typescript-eslint/no-base-to-string': 'error',
		'@typescript-eslint/no-dupe-class-members': 'error',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-extra-non-null-assertion': 'error',
		'@typescript-eslint/no-extra-parens': 'off',
		'@typescript-eslint/no-extra-semi': 'error',
		'@typescript-eslint/no-extraneous-class': 'error',
		'@typescript-eslint/no-for-in-array': 'error',
		'@typescript-eslint/no-implied-eval': 'error',
		'@typescript-eslint/no-invalid-this': 'error',
		'@typescript-eslint/no-invalid-void-type': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
		'@typescript-eslint/no-unnecessary-qualifier': 'error',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-use-before-define': [
			'error',
			{
				typedefs: false,
				functions: false
			}
		],
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/prefer-as-const': 'error',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-reduce-type-parameter': 'error',
		'@typescript-eslint/prefer-string-starts-ends-with': 'error',
		'@typescript-eslint/promise-function-async': 'off',
		'@typescript-eslint/restrict-plus-operands': 'error',
		'@typescript-eslint/semi': 'error',
		'@typescript-eslint/switch-exhaustiveness-check': 'warn',
		'@typescript-eslint/type-annotation-spacing': 'error',
		'@typescript-eslint/unbound-method': 'error',
		'@typescript-eslint/unified-signatures': 'error',
		'accessor-pairs': 'off',
		'array-bracket-newline': ['error', 'consistent'],
		'array-bracket-spacing': [
			'error',
			'never',
			{
				singleValue: false,
				objectsInArrays: false,
				arraysInArrays: false
			}
		],
		'array-element-newline': 'off',
		'arrow-body-style': ['error', 'as-needed'],
		'arrow-parens': [
			'error',
			'as-needed',
			{
				requireForBlockBody: false
			}
		],
		'arrow-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'block-scoped-var': 'error',
		'block-spacing': ['error', 'always'],
		'brace-style': [
			'error',
			'1tbs',
			{
				allowSingleLine: true
			}
		],
		'callback-return': 'off',
		'capitalized-comments': 'off',
		'class-methods-use-this': 'off',
		'comma-dangle': ['error', 'never'],
		'comma-spacing': 'off',
		'comma-style': ['error', 'last'],
		complexity: 'off',
		'computed-property-spacing': ['error', 'never'],
		'consistent-return': 'off',
		'consistent-this': ['error', 'self'],
		'constructor-super': 'off',
		curly: ['error', 'multi-line', 'consistent'],
		'default-case': 'off',
		'dot-location': ['error', 'property'],
		'dot-notation': 'off',
		'eol-last': ['error', 'always'],
		eqeqeq: ['error', 'smart'],
		'for-direction': 'off',
		'func-call-spacing': ['error', 'never'],
		'func-name-matching': ['warn', 'always'],
		'func-names': ['warn', 'as-needed'],
		'func-style': 'off',
		'function-paren-newline': ['error', 'consistent'],
		'generator-star-spacing': ['error', 'before'],
		'getter-return': 'off',
		'global-require': 'off',
		'guard-for-in': 'warn',
		'handle-callback-err': 'off',
		'id-blacklist': 'off',
		'id-length': 'off',
		'id-match': 'off',
		indent: 'off',
		'init-declarations': 'off',
		'jsx-quotes': ['error', 'prefer-double'],
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true,
				mode: 'strict'
			}
		],
		'keyword-spacing': 'off',
		'line-comment-position': 'off',
		'linebreak-style': ['error', 'unix'],
		'lines-around-comment': 'off',
		'lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true
			}
		],
		'max-depth': 'off',
		'max-len': 'off',
		'max-lines': 'off',
		'max-nested-callbacks': 'off',
		'max-params': 'off',
		'max-statements': 'off',
		'max-statements-per-line': [
			'error',
			{
				max: 1
			}
		],
		'multiline-comment-style': 'off',
		'multiline-ternary': ['error', 'always-multiline'],
		'new-cap': 'off',
		'new-parens': 'error',
		'newline-per-chained-call': [
			'error',
			{
				ignoreChainWithDepth: 3
			}
		],
		'no-alert': 'error',
		'no-array-constructor': 'off',
		'no-await-in-loop': 'off',
		'no-bitwise': 'off',
		'no-buffer-constructor': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-catch-shadow': 'error',
		'no-class-assign': 'warn',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'warn',
		'no-confusing-arrow': 'off',
		'no-console': 'off',
		'no-const-assign': 'off',
		'no-constant-condition': 'off',
		'no-control-regex': 'off',
		'no-debugger': 'error',
		'no-delete-var': 'error',
		'no-div-regex': 'off',
		'no-dupe-args': 'off',
		'no-dupe-class-members': 'off',
		'no-dupe-keys': 'off',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': [
			'error',
			{
				includeExports: false
			}
		],
		'no-else-return': 'warn',
		'no-empty': 'off',
		'no-empty-character-class': 'error',
		'no-empty-function': 'off',
		'no-empty-pattern': 'off',
		'no-eq-null': 'warn',
		'no-eval': 'warn',
		'no-ex-assign': 'off',
		'no-extend-native': 'warn',
		'no-extra-bind': 'off',
		'no-extra-boolean-cast': 'off',
		'no-extra-label': 'warn',
		'no-extra-parens': 'off',
		'no-extra-semi': 'off',
		'no-fallthrough': 'off',
		'no-floating-decimal': 'error',
		'no-func-assign': 'off',
		'no-global-assign': 'off',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'off',
		'no-implied-eval': 'off',
		'no-import-assign': 'off',
		'no-inline-comments': 'off',
		'no-inner-declarations': 'off',
		'no-invalid-regexp': 'warn',
		'no-invalid-this': 'off',
		'no-irregular-whitespace': [
			'error',
			{
				skipStrings: true,
				skipComments: true,
				skipRegExps: true,
				skipTemplates: true
			}
		],
		'no-iterator': 'off',
		'no-label-var': 'error',
		'no-labels': 'off',
		'no-lone-blocks': 'off',
		'no-lonely-if': 'error',
		'no-loop-func': 'off',
		'no-magic-numbers': 'off',
		'no-mixed-requires': 'error',
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-multi-assign': 'warn',
		'no-multi-spaces': [
			'error',
			{
				ignoreEOLComments: true
			}
		],
		'no-multi-str': 'error',
		'no-multiple-empty-lines': 'error',
		'no-nested-ternary': 'off',
		'no-new': 'off',
		'no-new-func': 'warn',
		'no-new-object': 'error',
		'no-new-require': 'error',
		'no-new-symbol': 'off',
		'no-new-wrappers': 'warn',
		'no-obj-calls': 'off',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'off',
		'no-path-concat': 'warn',
		'no-plusplus': 'off',
		'no-process-env': 'off',
		'no-process-exit': 'off',
		'no-proto': 'off',
		'no-prototype-builtins': 'off',
		'no-redeclare': 'off',
		'no-regex-spaces': 'warn',
		'no-restricted-globals': 'off',
		'no-restricted-imports': 'off',
		'no-restricted-modules': 'off',
		'no-restricted-properties': 'off',
		'no-restricted-syntax': 'off',
		'no-return-assign': 'off',
		'no-return-await': 'warn',
		'no-script-url': 'off',
		'no-self-assign': 'error',
		'no-self-compare': 'warn',
		'no-sequences': 'error',
		'no-setter-return': 'off',
		'no-shadow': 'off',
		'no-shadow-restricted-names': 'error',
		'no-sparse-arrays': 'warn',
		'no-sync': 'off',
		'no-tabs': 'off',
		'no-template-curly-in-string': 'error',
		'no-ternary': 'off',
		'no-this-before-super': 'off',
		'no-throw-literal': 'off',
		'no-trailing-spaces': 'error',
		'no-undef': 'off',
		'no-undef-init': 'off',
		'no-undefined': 'off',
		'no-underscore-dangle': 'off',
		'no-unexpected-multiline': 'error',
		'no-unmodified-loop-condition': 'off',
		'no-unneeded-ternary': 'off',
		'no-unreachable': 'off',
		'no-unsafe-finally': 'warn',
		'no-unsafe-negation': 'off',
		'no-unused-expressions': 'off',
		'no-unused-labels': 'error',
		'no-unused-vars': 'off',
		'no-use-before-define': 'off',
		'no-useless-call': 'off',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'warn',
		'no-useless-constructor': 'off',
		'no-useless-escape': 'off',
		'no-useless-rename': 'error',
		'no-useless-return': 'warn',
		'no-var': 'error',
		'no-void': 'off',
		'no-warning-comments': 'off',
		'no-whitespace-before-property': 'error',
		'no-with': 'error',
		'nonblock-statement-body-position': 'off',
		'object-curly-newline': [
			'error',
			{
				multiline: true,
				consistent: true
			}
		],
		'object-curly-spacing': ['error', 'always'],
		'object-property-newline': 'off',
		'object-shorthand': ['error', 'always'],
		'one-var': ['error', 'never'],
		'one-var-declaration-per-line': 'off',
		'operator-assignment': ['error', 'always'],
		'operator-linebreak': [
			'error',
			'before',
			{
				overrides: {
					'+': 'after',
					'-': 'after'
				}
			}
		],
		'padded-blocks': [
			'error',
			{
				classes: 'always'
			}
		],
		'prefer-arrow-callback': 'error',
		'prefer-const': 'off',
		'prefer-destructuring': [
			'error',
			{
				VariableDeclarator: {
					array: false,
					object: true
				},
				AssignmentExpression: {
					array: true,
					object: false
				}
			}
		],
		'prefer-numeric-literals': 'off',
		'prefer-promise-reject-errors': 'error',
		'prefer-rest-params': 'off',
		'prefer-spread': 'off',
		'prefer-template': 'warn',
		'quote-props': [
			'error',
			'as-needed',
			{
				keywords: false,
				unnecessary: true,
				numbers: false
			}
		],
		quotes: [
			'error',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true
			}
		],
		'require-await': 'off',
		'require-jsdoc': 'off',
		'require-yield': 'warn',
		'rest-spread-spacing': ['error', 'never'],
		semi: 'off',
		'semi-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'semi-style': ['error', 'last'],
		'sort-imports': 'off',
		'sort-keys': 'off',
		'sort-vars': 'off',
		'space-before-blocks': ['error', 'always'],
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always'
			}
		],
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': [
			'error',
			{
				int32Hint: true
			}
		],
		'space-unary-ops': [
			'error',
			{
				words: true,
				nonwords: false
			}
		],
		'spaced-comment': ['error', 'always'],
		strict: ['error', 'never'],
		'switch-colon-spacing': [
			'error',
			{
				after: true,
				before: false
			}
		],
		'symbol-description': 'warn',
		'template-curly-spacing': ['error', 'never'],
		'template-tag-spacing': ['error', 'never'],
		'unicode-bom': ['error', 'never'],
		'use-isnan': 'error',
		'valid-jsdoc': 'off',
		'valid-typeof': 'off',
		'vars-on-top': 'off',
		'wrap-iife': ['error', 'inside'],
		'wrap-regex': 'off',
		'yield-star-spacing': ['error', 'before'],
		yoda: 'error',
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
		],
		'no-mixed-operators': 'off',
		'array-callback-return': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/prefer-for-of': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/require-await': 'off',
		radix: 'off',
		'no-negated-condition': 'off',
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: 'import', next: 'const' },
			{ blankLine: 'always', prev: 'import', next: 'export' },
			{ blankLine: 'always', prev: 'const', next: 'export' }
		]
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		project: './tsconfig.eslint.json'
	}
};

module.exports = config;
export default config;
