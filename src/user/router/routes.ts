import Home from "@/user/views/home/Home.vue";
import Search from "@/user/views/search/Search.vue";
import NotFound from "@/common/components/NotFound.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/search",
    name: "search",
    component: Search,
    meta: {
      no_footer: true,
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
    meta: {
      no_footer: true,
      no_header: true,
    },
  },
];
