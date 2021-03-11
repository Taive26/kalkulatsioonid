import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../App.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/palgakalkulaator",
    name: "Palgakalkulaator",
    component: () => import("../views/Salary.vue"),
  },
  {
    path: "/kütusekalkulaator",
    name: "Kütusekalkulaator",
    component: () => import("../views/Fuel.vue"),
  },
  {
    path: "/kohvi",
    name: "Mitu tassi kohvi?",
    component: () => import("../views/Coffee.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
