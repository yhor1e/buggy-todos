import { useTranslation } from "react-i18next";

export const I18n = function I18n() {
	const { i18n } = useTranslation();
	return (
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
		<div className="toggle-lang">
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
			<button
				type="button"
				title={i18n.language === "en" ? "日本語" : "English"}
				onClick={
					i18n.language === "en"
						? () => i18n.changeLanguage("ja")
						: () => i18n.changeLanguage("en")
				}
			>
				{i18n.language === "en" ? "日本語" : "English"}
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
			</button>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
		</div>
	);
};
