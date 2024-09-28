import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import "todomvc-app-css/index.css";
import "todomvc-common/base.css";
import { App } from "./todo/app";
import "./i18n";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<HashRouter>
		<Routes>
			<Route path="*" element={<App />} />
		</Routes>
	</HashRouter>
);
