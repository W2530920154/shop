import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router/routes";
import store from "@/store";
Vue.use(VueRouter);
//保存之前的方法
const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;
//修改原型上的方法
VueRouter.prototype.push = function(config, OnResovled, OnRejected) {
  //如果push没有传递解决方案，自定义函数调用
  if (OnResovled === undefined && OnRejected === undefined) {
    return originPush.call(this, config).catch(() => {});
  } else {
    return originPush.call(this, config, OnResovled, OnRejected);
  }
};
VueRouter.prototype.replace = function(config, OnResovled, OnRejected) {
  if (OnResovled === undefined && OnRejected === undefined) {
    return originReplace.call(this, config).catch(() => {});
  } else {
    return originReplace.call(this, config, OnResovled, OnRejected);
  }
};
const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes,
});
router.beforeEach((to, from, next) => {
  // ...
  let localpath = to.path;
  if (
    localpath.startsWith("/center") ||
    localpath.startsWith("/pay") ||
    localpath.startsWith("/trade")
  ) {
    if (store.state.user.user.name) {
      next();
    } else {
      next('/login?redirect='+localpath);
    }
  } else {
    next();
  }
});
export default router;
