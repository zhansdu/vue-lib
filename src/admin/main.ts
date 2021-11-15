import { createSSRApp } from "@vue/runtime-dom";
import App from "./App.vue";
const app = createSSRApp(App);
app.mount("#app");
