import { useCallback } from "react";

export function Input({
	onSubmit,
	placeholder,
	label,
	defaultValue,
	onBlur,
	registerOptions,
	children,
}) {
	const handleBlur = useCallback(() => {
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
			{children}
			<label className="visually-hidden" htmlFor="todo-input">
				{label}
			</label>
		</div>
	);
}
