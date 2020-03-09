import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    minSalary: null,
    maxOffer: null,
  },
  mutations: {
    setMinSalary(state, value) {
      console.log('minSalary: ', value);
      state.minSalary = value;
    },
    setMaxOffer(state, value) {
      console.log('maxOffer: ', value);
      state.maxOffer = value;
    },
  },
  actions: {
  },
  modules: {
  },
});
