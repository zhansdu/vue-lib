import NotFound from "@/common/components/NotFound.vue";
import Home from "@/admin/views/home/Home.vue";
export const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];
