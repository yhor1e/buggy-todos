// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from "react";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { render } from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";

import "todomvc-app-css/index.css";
import "todomvc-common/base.css";
// @ts-expect-error TS(6142): Module './todo/app' was resolved to '/Users/yhorie... Remove this comment to see the full error message
import { App } from "./todo/app";
import "./i18n";

render(
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
	<HashRouter>
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
		<Routes>
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			<Route path="*" element={<App />} />
		</Routes>
	</HashRouter>,
	document.getElementById("root")
);
