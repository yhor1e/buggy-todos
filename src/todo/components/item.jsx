import { memo, useState, useCallback } from "react";
import classnames from "classnames";
import { useForm } from "react-hook-form";
import { Input } from "./input";
import { useTranslation } from "react-i18next";

import { TOGGLE_ITEM, REMOVE_ITEM, UPDATE_ITEM } from "../constants";

export const Item = memo(function Item({ todo, dispatch }) {
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
		<li
			className={classnames({ completed: todo.completed })}
			data-testid="todo-item"
		>
			<div className="view">
				{errors[`title${id}`] && <span>{errors[`title${id}`].message}</span>}
				{isWritable ? (
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
					/>
				) : (
					<>
						<input
							className="toggle"
							type="checkbox"
							data-testid="todo-item-toggle"
							checked={completed}
							onChange={toggleItem}
						/>
						<label
							data-testid="todo-item-label"
							onDoubleClick={handleDoubleClick}
						>
							{title}
						</label>
						<button
							className="destroy"
							data-testid="todo-item-button"
							onClick={removeItem}
						/>
					</>
				)}
			</div>
		</li>
	);
});
