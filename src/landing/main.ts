import { createApp } from "vue";
import { router } from "./router";
import { i18n } from "./locale";
import App from "./App.vue";
import globals from "./globals";
import { LocaleService, RouterService } from "@/.common/services";

export const app = createApp(App);

app.use(router);
app.use(i18n);

// provide globals
for (const [key, value] of Object.entries(globals)) {
  app.provide(key, value);
}

// initialize services
export const localeService = new LocaleService(i18n);
export const routerService = new RouterService(router);

localeService.setLocale(window.localStorage.getItem("locale") ?? "en");

app.mount("#app");
