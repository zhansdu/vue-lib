import { createApp } from "vue";
import { router } from "./router/router";
import { i18n } from "./locale/locale";
import App from "./App.vue";

export const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount("#app");
