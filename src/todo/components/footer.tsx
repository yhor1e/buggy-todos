// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";
import classnames from "classnames";
import { useTranslation } from "react-i18next";

import { REMOVE_COMPLETED_ITEMS } from "../constants";

export function Footer({
    todos,
    dispatch
}: any) {
	const { pathname: route } = useLocation();
	const { t } = useTranslation();
	const activeTodos = useMemo(
// @ts-expect-error TS(7006): Parameter 'todo' implicitly has an 'any' type.
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
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
		<footer className="footer" data-testid="footer">
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
			<span className="todo-count">
				{`${activeTodos.length} ${
					activeTodos.length === 1 ? t("item") : t("items")
				}`}{" "}
				{t("left")}
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
			</span>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
			<ul className="filters" data-testid="footer-navigation">
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
				<li>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
					<a className={classnames({ selected: route === "/" })} href="#/">
						{t("all")}
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
					</a>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
				</li>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
				<li>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
					<a
						className={classnames({ selected: route === "/active" })}
						href="#/active"
					>
						{t("active")}
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
					</a>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
				</li>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
				<li>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
					<a
						className={classnames({ selected: route === "/completed" })}
						href="#/completed"
					>
						{t("completed")}
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
					</a>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
				</li>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
			</ul>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
			<button
				className="clear-completed"
				disabled={activeTodos.length === todos.length}
				onClick={removeCompleted}
			>
				{t("clear-completed")}
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
			</button>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
		</footer>
	);
}
