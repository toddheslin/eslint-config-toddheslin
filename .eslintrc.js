module.exports = {
	env: {
		es6: true,
		node: true
	},
	plugins: ['prettier', 'standard'],
	extends: ['standard', 'prettier'],
	rules: {
		'prettier/prettier': ['error', {
      trailingComma: 'es5',
      arrowParens: 'avoid',
      singleQuote: true,
      semi: false,
		}]
	}
}

