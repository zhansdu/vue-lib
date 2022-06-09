import { I18n } from "vue-i18n";

type I18nType = I18n<any, any, any, boolean>;

export default class LocaleService {
  public i18n: I18nType;

  public constructor(i18n: I18nType) {
    this.i18n = i18n;
  }

  public getLocale(): string {
    return this.i18n.global.locale as string;
  }

  public setLocale(locale?: string): void {
    if (locale) {
      this.i18n.global.locale = locale;
    }
    window.localStorage.setItem("locale", this.getLocale());
  }

  public get value(): I18nType {
    return this.i18n;
  }

  public set value(v: I18nType) {
    this.i18n = v;
  }
}
