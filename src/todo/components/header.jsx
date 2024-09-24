import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "./input";

import { ADD_ITEM } from "../constants";
import { useForm } from "react-hook-form";

export function Header({ dispatch }) {
	const { t } = useTranslation();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ reValidateMode: "onSubmit" });
	const registerOptions = {
		...register("title", {
			required: t("required"),
			minLength: { value: 2, message: t("minLength") },
		}),
	};
	const addItem = useCallback(() => {
		handleSubmit(
			(fields) => {
				const title = fields.title;
				dispatch({ type: ADD_ITEM, payload: { title } });
				reset({ title: "" });
			},
			() => {
				console.log("errors", errors);
			}
		)();
	}, [dispatch]);

	return (
		<>
			<header className="header" data-testid="header">
				<h1>todos</h1>
				{errors.title && <span>{errors.title.message}</span>}
				<Input
					onSubmit={addItem}
					label="New Todo Input"
					placeholder={t("placeholder")}
					registerOptions={registerOptions}
				></Input>
			</header>
		</>
	);
}
