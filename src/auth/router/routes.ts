import NotFound from "@/common/components/NotFound.vue";
import Home from "@/auth/views/home/Home.vue";
export const routes = [
  {
    path: "",
    name: "home",
    component: Home,
  },
  {
    path: "/:catchAll(.*)",
    name: "not_found",
    component: NotFound,
  },
];
