import { createI18n } from "vue-i18n";

import en from "./en";
import ru from "./ru";
import kz from "./kz";

const i18n = createI18n({
  locale: localStorage.getItem("locale") ?? "en",
  fallbackLocale: "en",
  messages: {
    en,
    ru,
    kz,
  },
  silentTranslationWarn: true,
});

export default i18n;
