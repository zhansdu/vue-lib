import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

export const router = createRouter({
  history: createWebHistory(import.meta.env.MODE == "development" ? "admin.html" : "admin"),
  routes: routes,
});
