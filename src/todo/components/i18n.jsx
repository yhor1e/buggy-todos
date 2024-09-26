import { useTranslation } from "react-i18next";

export const I18n = function I18n() {
	const { i18n } = useTranslation();
	return (
		<div className="toggle-lang">
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
			</button>
		</div>
	);
};
