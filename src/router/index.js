import Vue from "vue";
import VueRouter from "vue-router";
import People from "../views/People.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/people",
  },
  {
    path: "/people",
    name: "people",
    component: People,
  },
  {
    path: "/companies",
    name: "companies",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Companies.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
