import Vue from "vue";
import Vuex from "vuex";
import home from "./home";
import search from "./search";
import detail from "./detail";
Vue.use(Vuex);
const state = {};
const actions = {};
const mutations = {};
const getters = {};

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    home,
    search,
    detail,
  },
});
export default store;
