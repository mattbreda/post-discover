import data from '@/api/data.js';
/* import _ from 'lodash';
 */
const state = {
  datumSelected: null,
  fetchingData: true,
  dataSet: null
};

const mutations = {
  setDatumSelected(state, value) {
    state.datumSelected = value;
  },
  setData(state, value) {
    state.dataSet = value.data_set;
  },
  fetchingData(state, value) {
    state.fetchingData = value;
  },
};
const getters = {
  datumSelected: state => state.datumSelected,
  fetchingData: state => state.fetchingData,
  getDataSet: state => state.dataSet
};

const actions = {
  setDatumSelected({ commit }, value) {
    commit('setDatumSelected', value);
  },
  setData({ commit }, value) {
    commit('setData', value);
  },
  getData({ commit }) {
    data.getData().then(d => {
      commit('setData', d);
      commit('fetchingData', false);
    });
  },
};
export default {
  state,
  mutations,
  getters,
  actions,
};
