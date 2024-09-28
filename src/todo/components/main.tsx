import { useMemo, useCallback, SetStateAction } from "react";
import { useLocation } from "react-router-dom";

import { Item } from "./item";
import classnames from "classnames";

import { TOGGLE_ALL } from "../constants";

export function Main({
	todos,
	dispatch,
}: {
	todos: Todo[];
	dispatch: React.Dispatch<{
		type: string;
		payload: { completed: boolean };
	}>;
}) {
	const { pathname: route } = useLocation();

	const visibleTodos = useMemo(
		() =>
			todos.filter((todo: Todo) => {
				if (route === "/active") return !todo.completed;

				if (route === "/completed") return todo.completed;

				return todo;
			}),
		[todos, route]
	);

	const toggleAll = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) =>
			dispatch({ type: TOGGLE_ALL, payload: { completed: e.target.checked } }),
		[dispatch]
	);

	return (
		<main className="main" data-testid="main">
			{visibleTodos.length > 0 ? (
				<div className="toggle-all-container">
					<input
						className="toggle-all"
						type="checkbox"
						id="toggle-all"
						data-testid="toggle-all"
						checked={visibleTodos.every((todo) => todo.completed)}
						onChange={toggleAll}
					/>
					<label className="toggle-all-label" htmlFor="toggle-all"></label>
				</div>
			) : null}
			<ul className={classnames("todo-list")} data-testid="todo-list">
				{visibleTodos.map((todo: Todo, index: number) => (
					<Item todo={todo} key={todo.id} dispatch={dispatch} />
				))}
			</ul>
		</main>
	);
}
