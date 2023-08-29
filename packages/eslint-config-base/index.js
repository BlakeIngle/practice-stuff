module.exports = {
	parser: "@typescript-eslint/parser",
	ignorePatterns: ["dist"],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "simple-import-sort"],
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	rules: {
		"simple-import-sort/imports": "warn",
	},
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
}
