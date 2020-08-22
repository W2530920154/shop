import { getUserTempId } from "@/utils/userabout";
import { apiRegister, apiLogin, apiLoginOut } from "@/api";
const state = {
  userTempId: getUserTempId(),
  user: JSON.parse(localStorage.getItem("USERINFO_KEY")) || {},
};
const actions = {
  async register({ commit }, user) {
    const result = await apiRegister(user);
    if (result.code === 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("注册失败"));
    }
  },
  async loginOut({ commit }) {
    const result = await apiLoginOut();
    if (result.code === 200) {
      commit("GETUSERINFO", {});
      localStorage.removeItem("USERINFO_KEY");
      return "ok";
    } else {
      return Promise.reject(new Error("退出失败"));
    }
  },
  async login({ commit }, user) {
    const result = await apiLogin(user);
    if (result.code === 200) {
      commit("GETUSERINFO", result.data);
      localStorage.setItem("USERINFO_KEY", JSON.stringify(result.data));
      return "ok";
    } else {
      return Promise.reject(new Error("登陆失败"));
    }
  },
};
const mutations = {
  GETUSERINFO(state, user) {
    state.user = user;
  },
};
const getters = {};
export default {
  state,
  actions,
  mutations,
  getters,
};
