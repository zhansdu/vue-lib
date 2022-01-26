import { createApp } from "@vue/runtime-dom";
import { router } from "./plugins/router";
import App from "./App.vue";

const app = createApp(App);

app.use(router);

app.mount("#app");
