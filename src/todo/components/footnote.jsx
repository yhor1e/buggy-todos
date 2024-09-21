import { I18n } from "./i18n";

export function FootNote() {
	return (
		<footer className="info">
			<I18n />
			<p>Double-click to edit a todo</p>
			<p>Created by the TodoMVC Team</p>
			<p>
				Part of <a href="http://todomvc.com">TodoMVC</a>
			</p>
		</footer>
	);
}
