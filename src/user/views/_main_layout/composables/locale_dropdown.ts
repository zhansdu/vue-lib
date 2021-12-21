import { i18n } from "@/user/plugins/locale/locale";

export function changeLocale(): void {
  localStorage.setItem("lang", i18n.global.locale);
}
const languages = Object.keys(i18n.global.messages);
export const dropdown_items = languages.map((lang_name: string) => {
  const lang = {
    label: "",
    value: "",
  };
  lang.label = lang_name.toUpperCase();
  lang.value = lang_name;
  return lang;
});
