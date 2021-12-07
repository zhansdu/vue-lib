import { createApp } from "vue";
import { router } from "./plugins/router/router";
import { i18n } from "./plugins/locale/locale";
import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount("#app");
