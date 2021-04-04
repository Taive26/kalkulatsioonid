import Vue from 'vue';
import VueRouter from 'vue-router';
import Coffee from './../views/Coffee'
import Fuel from './../views/Fuel'
import Salary from './../views/Salary'

Vue.use(VueRouter);

export const routes = [
  {
    path: '/coffee',
    name: 'Kohv',
    components: { default: Coffee }
  },
  {
    path: '/fuel',
    name: 'Kütus',
    components: { default: Fuel }
  },
  {
    path: '/salary',
    name: 'Palk',
    components: { default: Salary }
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
});

export default router;
