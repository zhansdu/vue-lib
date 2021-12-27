import Home from "@user/views/home/Home.vue";
import Search from "@user/views/search/Search.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      footer: true,
    },
  },
  {
    path: "/search",
    name: "search",
    component: Search,
  },
];
