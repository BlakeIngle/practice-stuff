module.exports = {
	extends: ["base", "prettier"],
	env: {
		browser: false,
		node: true,
	},
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
}
