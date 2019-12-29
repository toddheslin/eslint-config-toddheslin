module.exports = {
	env: {
		es6: true,
		node: true
	},
	globals: {
		__root: 'writable'
	},
	plugins: ['prettier', 'standard'],
	extends: ['standard', 'prettier'],
	rules: {
		'prettier/prettier': ['error', {
			trailingComma: 'es5',
			singleQuote: true,
			printWidth: 120,
			semi: false
		}]
	}
}

