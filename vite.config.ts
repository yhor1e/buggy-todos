import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import simpleHtmlPlugin from "vite-plugin-simple-html";

// https://vitejs.dev/config/
export default defineConfig((mode: any) => {
	const env = loadEnv(mode, process.cwd(), "");
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
		define: {
			// https://docs.excalidraw.com/docs/@excalidraw/excalidraw/integration
			"process.env.IS_PREACT": JSON.stringify("true"),
		},
	};
});
