import Vue from "vue";
import App from "./App.vue";
//注册路由
import router from "@/router";
//注册vuex实例
import store from "@/store";
import { MessageBox, Message } from 'element-ui';
import "@/mock/mockServer";
Vue.config.productionTip = false;
import "swiper/css/swiper.css";
//导航组件多个页面需要使用，所以定义为全局组件
import TypeNav from "@/components/TypeNav";
import Pagination from '@/components/Pagination'
import * as API from "@/api";

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;
//注册组件
Vue.component("TypeNav", TypeNav);
Vue.component("Pagination",Pagination)
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  //使用路由
  router,
  //使用vuex
  store,
  render: (h) => h(App),
}).$mount("#app");
