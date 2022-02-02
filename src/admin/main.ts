import { createApp } from "vue";
import { router } from "./router/router";
import { i18n } from "./locale/locale";
import App from "./App.vue";
import globals from "./globals";

export const app = createApp(App);

app.use(router);
app.use(i18n);

// provide globals
for (const [key, value] of Object.entries(globals)) {
  app.provide(key, value);
}

app.mount("#app");
