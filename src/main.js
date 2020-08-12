import Vue from "vue";
import App from "./App.vue";
//注册路由
import router from "@/router";
//注册vuex实例
import store from "@/store";
Vue.config.productionTip = false;
import TypeNav from "@/components/TypeNav";
Vue.component("TypeNav", TypeNav);
new Vue({
  //使用路由
  router,
  //使用vuex
  store,
  render: (h) => h(App),
}).$mount("#app");
