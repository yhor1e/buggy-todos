import { useEffect, useReducer } from "react";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import { FootNote } from "./components/footnote";
import { todoReducer } from "./reducer";
import { Excalidraw } from "@excalidraw/excalidraw";

import "./app.css";

export function App() {
	const [todos, dispatch] = useReducer(todoReducer, []);
	useEffect(() => {
		const onBeforeUnload = (event: BeforeUnloadEvent) => {
			event.preventDefault();
		};
		window.addEventListener("beforeunload", onBeforeUnload);
		return () => {
			window.removeEventListener("beforeunload", onBeforeUnload);
		};
	}, []);
	return (
		<div className="grid-container-element">
			<div className="grid-child-element">
				<Header dispatch={dispatch} />
				<Main todos={todos} dispatch={dispatch} />
				<Footer todos={todos} dispatch={dispatch} />
				<FootNote />
			</div>
			<div className="grid-child-element">
				<div style={{ height: "500px" }}>
					<Excalidraw />
				</div>
			</div>
		</div>
	);
}
