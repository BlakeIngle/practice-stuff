module.exports = {
	extends: [
		"base",
		"plugin:react-hooks/recommended",
		"plugin:@tanstack/eslint-plugin-query/recommended",
		"prettier",
	],
	plugins: ["react-refresh", "@tanstack/query"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
	},
}
