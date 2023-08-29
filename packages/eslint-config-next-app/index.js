module.exports = {
	extends: [
		"base",
		"plugin:@tanstack/eslint-plugin-query/recommended",
		"next",
		"prettier",
	],
	plugins: ["@tanstack/query"],
	rules: {},
	parserOptions: {
		babelOptions: {
			presets: [require.resolve("next/babel")],
		},
	},
}
