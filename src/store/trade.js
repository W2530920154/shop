import { apiTrade } from "@/api";
const state = {
  tradeInfo: {},
};
const actions = {
  async getTradeInfo({ commit }) {
    const result = await apiTrade();
    if (result.code === 200) {
      commit("GETTRADEINFO", result.data);
    }
  },
};
const mutations = {
  GETTRADEINFO(state, data) {
    state.tradeInfo = data;
  },
};
const getters = {};
export default {
  state,
  actions,
  mutations,
  getters,
};
