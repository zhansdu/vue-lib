import { createSSRApp } from "vue";

import App from "@user/app/App.vue";

const app = createSSRApp(App);

app.mount("#app");
