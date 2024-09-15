import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "./input";

import { ADD_ITEM } from "../constants";

export function Header({ dispatch }) {
	const { t } = useTranslation();
	const addItem = useCallback(
		(title) => dispatch({ type: ADD_ITEM, payload: { title } }),
		[dispatch]
	);

	return (
		<>
			<header className="header" data-testid="header">
				<h1>todos</h1>
				<Input
					onSubmit={addItem}
					label="New Todo Input"
					placeholder={t("placeholder")}
				></Input>
			</header>
		</>
	);
}
