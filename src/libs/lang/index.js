import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import cn from "./cn.json";
import mm from "./en.json";
i18n.use(initReactI18next).init({
compatibilityJSON: 'v3',
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: en,
    cn: cn,
    mm:mm,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n; 