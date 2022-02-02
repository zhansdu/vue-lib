import { i18n } from "@/user/locale/locale";

export function changeLocale(): void {
  localStorage.setItem("lang", i18n.global.locale);
}

export const dropdown_items = Object.keys(i18n.global.messages).map((lang_name: string) => {
  const lang = {
    label: "",
    value: "",
  };
  lang.label = lang_name.toUpperCase();
  lang.value = lang_name;
  return lang;
});
