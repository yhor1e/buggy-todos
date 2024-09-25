import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
	{ ignores: ["dist/**"] },
	{ files: ["src/**/*.{js,mjs,cjs,jsx}"] },
	{ languageOptions: { globals: { ...globals.browser, process: true } } },
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		settings: {
			react: {
				version: "17.0.2",
			},
		},
		rules: {
			"no-extra-parens": 0,
			"react/prop-types": 0,
			"react/react-in-jsx-scope": 0,
		},
	},
];
