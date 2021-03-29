import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    cups: 0
  },
  mutations: {
    countClicks(state) {
      state.count++;
    },
    savePreviousCups(state, cups) {
      state.cups = cups;
    }
  },
  getters: {
    cups: state => state.cups
  },
  actions: {
    countClicks: ({ commit }) => commit("countClicks")
  },
  modules: {}
});
