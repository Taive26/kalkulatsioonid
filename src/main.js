import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueApexCharts from 'vue-apexcharts'
import vSelect from "vue-select";

Vue.use(VueApexCharts);
Vue.component('v-select', vSelect.VueSelect);

Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  vSelect,
  render: h => h(App)
}).$mount("#app");

  