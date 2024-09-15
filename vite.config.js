import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import simpleHtmlPlugin from "vite-plugin-simple-html";

// https://vitejs.dev/config/
export default defineConfig((command, mode) => {
	const env = loadEnv(mode, process.cwd(), "");
	console.log(env.NODE_ENV.toUpperCase());
	return {
		plugins: [
			react(),
			simpleHtmlPlugin({
				inject: {
					data: {
						title:
							env.NODE_ENV === "production"
								? "TodoMVC: React"
								: `[${env.NODE_ENV}] TodoMVC: React`,
					},
				},
			}),
		],
	};
});
