import { ReactNode, useCallback } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types";

export function Input({
	onSubmit,
	placeholder,
	label,
	defaultValue,
	registerOptions,
	children,
}: {
	onSubmit: () => void;
	placeholder?: string;
	label: string;
	defaultValue?: string;
	registerOptions: UseFormRegisterReturn<string>;
	children: ReactNode;
}) {
	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent<HTMLInputElement>) => {
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
				onKeyDown={handleKeyDown}
				{...registerOptions}
			/>
			<label className="visually-hidden" htmlFor="todo-input">
				{label}
			</label>
			{children}
		</div>
	);
}
