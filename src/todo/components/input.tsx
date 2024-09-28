// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useCallback } from "react";

export function Input({
// @ts-expect-error TS(7031): Binding element 'onSubmit' implicitly has an 'any'... Remove this comment to see the full error message
	onSubmit,
// @ts-expect-error TS(7031): Binding element 'placeholder' implicitly has an 'a... Remove this comment to see the full error message
	placeholder,
// @ts-expect-error TS(7031): Binding element 'label' implicitly has an 'any' ty... Remove this comment to see the full error message
	label,
// @ts-expect-error TS(7031): Binding element 'defaultValue' implicitly has an '... Remove this comment to see the full error message
	defaultValue,
// @ts-expect-error TS(7031): Binding element 'onBlur' implicitly has an 'any' t... Remove this comment to see the full error message
	onBlur,
// @ts-expect-error TS(7031): Binding element 'registerOptions' implicitly has a... Remove this comment to see the full error message
	registerOptions,
// @ts-expect-error TS(7031): Binding element 'children' implicitly has an 'any'... Remove this comment to see the full error message
	children,
}) {
	const handleBlur = useCallback(() => {
		if (onBlur) onBlur();
	}, [onBlur]);

	const handleKeyDown = useCallback(
// @ts-expect-error TS(7006): Parameter 'e' implicitly has an 'any' type.
		(e) => {
			if (e.key === "Enter") {
				onSubmit();
			}
		},
		[onSubmit]
	);

	return (
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
		<div className="input-container">
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
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
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
			<label className="visually-hidden" htmlFor="todo-input">
				{label}
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
			</label>
			{children}
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
		</div>
	);
}
