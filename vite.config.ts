import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import simpleHtmlPlugin from "vite-plugin-simple-html";

// https://vitejs.dev/config/
export default defineConfig((mode: any) => {
	const env = loadEnv(mode, process.cwd(), "");
	console.log(env.NODE_ENV.toUpperCase());
	return {
		base: "",
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
