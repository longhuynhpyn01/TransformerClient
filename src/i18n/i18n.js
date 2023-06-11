import { initReactI18next } from "react-i18next";

import i18n from "i18next";
import HOME_EN from "../locales/en/home.json";
import ABOUT_EN from "../locales/en/about.json";
import CONTACT_EN from "../locales/en/contact.json";
import COMMON_EN from "../locales/en/common.json";
import HOME_VI from "../locales/vi/home.json";
import ABOUT_VI from "../locales/vi/about.json";
import CONTACT_VI from "../locales/vi/contact.json";
import COMMON_VI from "../locales/vi/common.json";
import { getLocaleFromLS } from "../utils/utils";

export const locales = {
  en: "English",
  vi: "Tiếng Việt"
};

export const resources = {
  en: {
    home: HOME_EN,
    about: ABOUT_EN,
    contact: CONTACT_EN,
    common: COMMON_EN
  },
  vi: {
    home: HOME_VI,
    about: ABOUT_VI,
    contact: CONTACT_VI,
    common: COMMON_VI
  }
};

export const defaultNS = "home";

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  resources,
  lng: getLocaleFromLS(),
  ns: ["home", "about", "contact", "common"],
  fallbackLng: getLocaleFromLS(),
  defaultNS,
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});
