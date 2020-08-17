//哪个组件需要使用，就在那个vuex模块进行应用
import { apiGoodsList } from "@/api";

const state = {
  categotyInfo: {},
};
const actions = {
  async getGoodsListInfo({ commit }, data) {
    const config = await apiGoodsList(data);
    //当ajax成功放回数据，并且放回响应状态码为200时，将返回数据的data数据赋值给categoryList
    if (config.code === 200) {
      commit("GETGOODSLISTINFO", config.data);
    }
  },
};
const mutations = {
  GETGOODSLISTINFO(state, data) {
    state.categotyInfo = data;
  },
};
const getters = {
  attrsList(state) {
    return state.categotyInfo.attrsList;
  },

  goodsList(state) {
    return state.categotyInfo.goodsList;
  },
  trademarkList(state) {
    return state.categotyInfo.trademarkList;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
