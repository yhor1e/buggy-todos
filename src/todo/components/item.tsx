// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { memo, useState, useCallback } from "react";
import classnames from "classnames";
import { useForm } from "react-hook-form";
// @ts-expect-error TS(6142): Module './input' was resolved to '/Users/yhorie/wo... Remove this comment to see the full error message
import { Input } from "./input";
import { useTranslation } from "react-i18next";

import { TOGGLE_ITEM, REMOVE_ITEM, UPDATE_ITEM } from "../constants";

export const Item = memo(function Item({
    todo,
    dispatch
}: any) {
	const [isWritable, setIsWritable] = useState(false);
	const { title, completed, id } = todo;
	const { t } = useTranslation();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ reValidateMode: "onSubmit" });

	const toggleItem = useCallback(
		() => dispatch({ type: TOGGLE_ITEM, payload: { id } }),
		[dispatch]
	);
	const removeItem = useCallback(
		() => dispatch({ type: REMOVE_ITEM, payload: { id } }),
		[dispatch]
	);

	const updateItem = useCallback(() => {
		handleSubmit(
			(fields) => {
				const title = fields[`title${id}`];
				if (title.length === 0) {
					removeItem(id);
					return;
				}
				dispatch({ type: UPDATE_ITEM, payload: { id, title } });
				setIsWritable(false);
			},
			() => {
				console.log("errors", errors);
			}
		)();
	}, [dispatch]);

	const handleDoubleClick = useCallback(() => {
		setIsWritable(true);
	}, []);

	const handleBlur = useCallback(() => {
		console.log("handlebur");
		setIsWritable(false);
	}, []);

	const handleUpdate = useCallback(() => {
		updateItem(id, title);
	}, [id, removeItem, updateItem]);

	return (
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
		<li
			className={classnames({ completed: todo.completed })}
			data-testid="todo-item"
		>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
			<div className="view">
				{isWritable ? (
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
					<Input
						onSubmit={handleUpdate}
						label="Edit Todo Input"
						defaultValue={title}
						registerOptions={register(`title${id}`, {
							minLength: { value: 2, message: t("minLength") },
							onBlur: () => {
								handleBlur();
							},
						})}
					>
						{errors[`title${id}`] && (
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
							<span>{errors[`title${id}`].message}</span>
						)}
					</Input>
				) : (
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
					<>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
						<input
							className="toggle"
							type="checkbox"
							data-testid="todo-item-toggle"
							checked={completed}
							onChange={toggleItem}
						/>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
						<label
							data-testid="todo-item-label"
							onDoubleClick={handleDoubleClick}
						>
							{title}
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
						</label>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
						<button
							className="destroy"
							data-testid="todo-item-button"
							onClick={removeItem}
						/>
					</>
				)}
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
			</div>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
		</li>
	);
});
