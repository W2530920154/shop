import {
  apiAddShopCart,
  apiGetShopCartList,
  apiUpdateChenck,
  apiDelCart,
} from "@/api";

const state = {
  shopcartList: [],
};
const actions = {
  async addShopCart({ commit }, { skuId, skuNum }) {
    const result = await apiAddShopCart(skuId, skuNum);
    if (result.code === 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },
  async getShopcartList({ commit }) {
    const result = await apiGetShopCartList();
    if (result.code === 200) {
      commit("GETSHOPCARTLIST", result.data);
    }
  },
  async updateChenck({ commit }, { skuId, isChecked }) {
    const result = await apiUpdateChenck(skuId, isChecked);
    if (result.code === 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },
  async updateAllChenck({ commit, state, dispatch }, isChecked) {
    let promises = [];

    state.shopcartList.forEach((item) => {
      if (isChecked === item.isChecked) return;
      let promise = dispatch("updateChenck", {
        skuId: item.skuId,
        isChecked: isChecked,
      });

      promises.push(promise);
    });

    return Promise.all(promises);
  },
  async deleteCart({ commit }, skuId) {
    const result = await apiDelCart(skuId);
    if (result.code === 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },
  async deleteAllCart({ commit, state, dispatch }) {
    let promises = [];
    state.shopcartList.forEach((item) => {
      if (item.isChecked !== 1) return;
      let promise = dispatch("deleteCart", item.skuId);
      promises.push(promise);
    });
    return Promise.all(promises);
  },
};
const mutations = {
  GETSHOPCARTLIST(state, shopcartList) {
    state.shopcartList = shopcartList;
  },
};
const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
};
