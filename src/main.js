import Vue from "vue";
import App from "./App.vue";
//注册路由
import router from "@/router";
//注册vuex实例
import store from "@/store";
import "@/mock/mockServer";
Vue.config.productionTip = false;
import "swiper/css/swiper.css";
//导航组件多个页面需要使用，所以定义为全局组件
import TypeNav from "@/components/TypeNav";
// import "@/api";
//注册组件
Vue.component("TypeNav", TypeNav);
new Vue({
  //使用路由
  router,
  //使用vuex
  store,
  render: (h) => h(App),
}).$mount("#app");
