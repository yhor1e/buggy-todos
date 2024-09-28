import globals from "globals";
// @ts-expect-error TS(7016): Could not find a declaration file for module '@esl... Remove this comment to see the full error message
import pluginJs from "@eslint/js";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'esli... Remove this comment to see the full error message
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
