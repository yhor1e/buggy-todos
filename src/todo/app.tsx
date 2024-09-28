// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useReducer } from "react";
// @ts-expect-error TS(6142): Module './components/header' was resolved to '/Use... Remove this comment to see the full error message
import { Header } from "./components/header";
// @ts-expect-error TS(6142): Module './components/main' was resolved to '/Users... Remove this comment to see the full error message
import { Main } from "./components/main";
// @ts-expect-error TS(6142): Module './components/footer' was resolved to '/Use... Remove this comment to see the full error message
import { Footer } from "./components/footer";
// @ts-expect-error TS(6142): Module './components/footnote' was resolved to '/U... Remove this comment to see the full error message
import { FootNote } from "./components/footnote";
import { todoReducer } from "./reducer";

import "./app.css";

export function App() {
	const [todos, dispatch] = useReducer(todoReducer, []);
	return (
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
		<>
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			<Header dispatch={dispatch} />
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			<Main todos={todos} dispatch={dispatch} />
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			<Footer todos={todos} dispatch={dispatch} />
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			<FootNote />
		</>
	);
}
