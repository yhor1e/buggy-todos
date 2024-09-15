import { useTranslation } from "react-i18next";

export const I18n = function I18n({}) {
	const { i18n } = useTranslation();
	return (
		<div>
			<div>選択言語：{i18n.language === "en" ? "English" : "日本語"}</div>
			<button
				type="button"
				title="change language"
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
