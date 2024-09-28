// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
// @ts-expect-error TS(6142): Module './input' was resolved to '/Users/yhorie/wo... Remove this comment to see the full error message
import { Input } from "./input";

import { ADD_ITEM } from "../constants";
import { useForm } from "react-hook-form";
// @ts-expect-error TS(6142): Module './i18n' was resolved to '/Users/yhorie/wor... Remove this comment to see the full error message
import { I18n } from "./i18n";

export function Header({
    dispatch
}: any) {
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
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
		<>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
			<header className="header" data-testid="header">
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
				<h1>todos</h1>
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
				<I18n />
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
				<Input
					onSubmit={addItem}
					label="New Todo Input"
					placeholder={t("placeholder")}
					registerOptions={registerOptions}
				>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
					{errors.title && <span>{errors.title.message}</span>}
				</Input>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
			</header>
		</>
	);
}
