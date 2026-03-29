import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import arTranslation from "./locales/ar/translation.json";
i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                title: "Welcome",
                desc: "This is English",
            },
        },
        ar: {
            translation: arTranslation
        },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;