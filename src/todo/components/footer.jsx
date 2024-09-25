import { useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";
import classnames from "classnames";
import { useTranslation } from "react-i18next";

import { REMOVE_COMPLETED_ITEMS } from "../constants";

export function Footer({ todos, dispatch }) {
	const { pathname: route } = useLocation();
	const { t } = useTranslation();
	const activeTodos = useMemo(
		() => todos.filter((todo) => !todo.completed),
		[todos],
	);

	const removeCompleted = useCallback(
		() => dispatch({ type: REMOVE_COMPLETED_ITEMS }),
		[dispatch],
	);

	// prettier-ignore
	if (todos.length === 0)
        return null;

	return (
		<footer className="footer" data-testid="footer">
			<span className="todo-count">
				{`${activeTodos.length} ${
					activeTodos.length === 1 ? t("item") : t("items")
				}`}{" "}
				{t("left")}
			</span>
			<ul className="filters" data-testid="footer-navigation">
				<li>
					<a className={classnames({ selected: route === "/" })} href="#/">
						{t("all")}
					</a>
				</li>
				<li>
					<a
						className={classnames({ selected: route === "/active" })}
						href="#/active"
					>
						{t("active")}
					</a>
				</li>
				<li>
					<a
						className={classnames({ selected: route === "/completed" })}
						href="#/completed"
					>
						{t("completed")}
					</a>
				</li>
			</ul>
			<button
				className="clear-completed"
				disabled={activeTodos.length === todos.length}
				onClick={removeCompleted}
			>
				{t("clear-completed")}
			</button>
		</footer>
	);
}
