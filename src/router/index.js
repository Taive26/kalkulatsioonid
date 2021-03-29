import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/palk",
    name: "Palgakalkulaator",
    component: () => import("../views/Salary.vue")
  },
  {
    path: "/kytus",
    name: "Kütusekalkulaator",
    component: () => import("../views/Fuel.vue")
  },
  {
    path: "/kohv",
    name: "Kofeiinikalkulaator",
    component: () => import("../views/Coffee.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
