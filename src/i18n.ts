import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
	en: {
		translation: {
			placeholder: "What needs to be done?",
			all: "All",
			active: "Active",
			completed: "Completed",
			"clear-completed": "Clear completed",
			left: "left!",
			item: "item",
			items: "items",
			required: "This field is required",
			minLength: "2 or more characters",
		},
	},
	ja: {
		translation: {
			placeholder: "しなければいけないことは何？",
			all: "すべて",
			active: "未実施",
			completed: "完了済み",
			"clear-completed": "完了済みを削除",
			left: "残っています!",
			item: "やること",
			items: "やること",
			required: "必須項目です。",
			minLength: "2文字以上入力してください。",
		},
	},
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
		// you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
		// if you're using a language detector, do not define the lng option

		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
