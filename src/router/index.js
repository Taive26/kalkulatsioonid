import Vue from 'vue';
import VueRouter from 'vue-router';
import Coffee from './../views/Coffee'
import Fuel from './../views/Fuel'
import Salary from './../views/Salary'

Vue.use(VueRouter);

export const routes = [
  {
    path: '/coffee',
    name: 'Kofeiinikalkulaator',
    components: { default: Coffee }
  },
  {
    path: '/fuel',
    name: 'Kütusekalkulaator',
    components: { default: Fuel }
  },
  {
    path: '/salary',
    name: 'Palgakalkulaator',
    components: { default: Salary }
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
});

export default router;
