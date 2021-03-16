import Vuex from 'vuex';
import Vue from 'vue';
import selections from './modules/selections';

Vue.use (Vuex);

export default new Vuex.Store ({
  modules: {
    selections,
  },
});
