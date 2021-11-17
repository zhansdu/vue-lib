import Home from "@user/views/home/Home.vue";
// import Search from "@user/pages/search/Search.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/search",
    name: "search",
    component: {},
  },
];

export default routes;
