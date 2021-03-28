import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    countClicks(state) {
      state.count++
    }
  },
  actions: {
    countClicks: ({ commit }) => commit('countClicks')
  },
  modules: {}
});
