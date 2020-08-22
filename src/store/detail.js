//哪个组件需要使用，就在那个vuex模块进行应用
import { apiItem } from "@/api";

const state = {
  items: {},
};
const actions = {
  async getItemList({ commit }, data) {
    const config = await apiItem(data);
    //当ajax成功放回数据，并且放回响应状态码为200时，将返回数据的data数据赋值给categoryList
    if (config.code === 200) {
      commit("GETITEMLIST", config.data);
    }
  },
};
const mutations = {
  GETITEMLIST(state, data) {
    state.items = data;
  },
};
const getters = {
  categoryView(state) {
    return state.items.categoryView || {};
  },
  skuInfo(state) {
    return state.items.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.items.spuSaleAttrList || {};
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
