import Vue from 'vue';
import Vuex from 'vuex';

import util from '../utils/util';

Vue.use(Vuex);

const { mutations } = util;
export default () => {
  return new Vuex.Store({
    state: {
      minSalary: null,
      maxOffer: null,
    },
    mutations: {
      [mutations.SET_MIN_SALARY](state, value) {
        state.minSalary = value;
      },
      [mutations.SET_MAX_OFFER](state, value) {
        state.maxOffer = value;
      },
    },
    actions: {
    },
    modules: {
    },
  });
};

