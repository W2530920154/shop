//哪个组件需要使用，就在那个vuex模块进行应用
import { apiCategory, apiBannerList, apiFloorList } from "@/api";

const state = {
  //定义三级页面数据
  categoryList: [],
  bannerList: [],
  floorList: [],
};
const actions = {
  // getCategotyList({commit}){
  //   apiCategory().then((req)=>{
  //     commit("GETAPICATEGORY",req.data)
  //   })
  // }
  //使用async来实现异步代码同步使用
  async getCategotyList({ commit }) {
    const config = await apiCategory();
    // console.log(config);
    //当ajax成功放回数据，并且放回响应状态码为200时，将返回数据的data数据赋值给categoryList
    if (config.code === 200) {
      commit("GETAPICATEGORY", config.data);
    }
  },
  async getBannerList({ commit }) {
    const config = await apiBannerList();
    //当ajax成功放回数据，并且放回响应状态码为200时，将返回数据的data数据赋值给categoryList
    if (config.code === 200) {
      commit("GETAPIBANNERLIST", config.data);
    }
  },
  async getFloorList({ commit }) {
    const config = await apiFloorList();
    //当ajax成功放回数据，并且放回响应状态码为200时，将返回数据的data数据赋值给categoryList
    if (config.code === 200) {
      commit("GETAPIFLOORLIST", config.data);
    }
  },
};
const mutations = {
  GETAPICATEGORY(state, data) {
    state.categoryList = data;
  },
  GETAPIBANNERLIST(state, data) {
    state.bannerList = data;
  },
  GETAPIFLOORLIST(state, data) {
    state.floorList = data;
  },
};
const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
};
