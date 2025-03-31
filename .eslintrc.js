/* eslint-env node */

require('@uniswap/eslint-config/load')

module.exports = {
	extends: '@uniswap/eslint-config/react',
	env: {
		node: true,
	},
	rules: {
		'@typescript-eslint/no-unused-vars': 'off',
		'import/no-unused-modules': 'off',
		'react/no-unescaped-entities': 'off',
		'unused-imports/no-unused-imports': 'off',
	},
}
