import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"

import en from "./en.json"
import es from "./es.json"

export const defaultNS = "translation";
export const resources = {
    en: { translation: en },
    es: { translation: es }
} as const;

i18n
    .use( LanguageDetector)
    .use( initReactI18next )
    .init({
        resources,
        defaultNS,
        fallbackLng: "en",
        interpolation : {
            escapeValue: false
        }
    })

    export default i18n;