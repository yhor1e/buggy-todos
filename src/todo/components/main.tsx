// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useMemo, useCallback } from "react";
import { useLocation } from "react-router-dom";

// @ts-expect-error TS(6142): Module './item' was resolved to '/Users/yhorie/wor... Remove this comment to see the full error message
import { Item } from "./item";
import classnames from "classnames";

import { TOGGLE_ALL } from "../constants";

export function Main({
    todos,
    dispatch
}: any) {
	const { pathname: route } = useLocation();

	const visibleTodos = useMemo(
		() =>
// @ts-expect-error TS(7006): Parameter 'todo' implicitly has an 'any' type.
			todos.filter((todo) => {
				if (route === "/active") return !todo.completed;

				if (route === "/completed") return todo.completed;

				return todo;
			}),
		[todos, route],
	);

	const toggleAll = useCallback(
// @ts-expect-error TS(7006): Parameter 'e' implicitly has an 'any' type.
		(e) =>
			dispatch({ type: TOGGLE_ALL, payload: { completed: e.target.checked } }),
		[dispatch],
	);

	return (
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
		<main className="main" data-testid="main">
			{visibleTodos.length > 0 ? (
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
				<div className="toggle-all-container">
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
					<input
						className="toggle-all"
						type="checkbox"
						id="toggle-all"
						data-testid="toggle-all"
// @ts-expect-error TS(7006): Parameter 'todo' implicitly has an 'any' type.
						checked={visibleTodos.every((todo) => todo.completed)}
						onChange={toggleAll}
					/>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
					<label className="toggle-all-label" htmlFor="toggle-all">
						Toggle All Input
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
					</label>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
				</div>
			) : null}
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
			<ul className={classnames("todo-list")} data-testid="todo-list">
// @ts-expect-error TS(7006): Parameter 'todo' implicitly has an 'any' type.
				{visibleTodos.map((todo, index) => (
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
					<Item todo={todo} key={todo.id} dispatch={dispatch} index={index} />
				))}
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
			</ul>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
		</main>
	);
}
