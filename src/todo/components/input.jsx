import { useCallback } from "react";

const sanitize = (string) => {
	const map = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#x27;",
		"/": "&#x2F;",
	};
	const reg = /[&<>"'/]/gi;
	return string.replace(reg, (match) => map[match]);
};

export function Input({
	onSubmit,
	placeholder,
	label,
	defaultValue,
	onBlur,
	registerOptions,
}) {
	const handleBlur = useCallback(() => {
		console.log("handleblur");
		if (onBlur) onBlur();
	}, [onBlur]);

	const handleKeyDown = useCallback(
		(e) => {
			if (e.key === "Enter") {
				onSubmit();
			}
		},
		[onSubmit]
	);

	return (
		<div className="input-container">
			<input
				className="new-todo"
				id="todo-input"
				type="text"
				data-testid="text-input"
				autoFocus
				placeholder={placeholder}
				defaultValue={defaultValue}
				onBlur={handleBlur}
				onKeyDown={handleKeyDown}
				{...registerOptions}
			/>
			<label className="visually-hidden" htmlFor="todo-input">
				{label}
			</label>
		</div>
	);
}
