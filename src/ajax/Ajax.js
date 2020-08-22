// 前后台交互模块ajax模块，对axios的二次封装
// 	获取数据离不开ajax，所以先把ajax工具搞定

// 		配置基础路径和超时限制

// 		添加进度条信息  nprogress

// 		返回的响应不再需要从data属性当中拿数据，而是响应就是我们要的数据

// 		统一处理请求错误, 具体请求也可以选择处理或不处理
import store from "@/store";
import axios from "axios";
import NProgress from "nprogress";
//需要再次导入css文件
import "../../node_modules/nprogress/nprogress.css";
//创建一个新的axios实例对象
const instance = axios.create({
  baseURL: "/api",
  timeout: 20000,
});
//请求拦截
instance.interceptors.request.use(function(config) {
  let userTempId = store.state.user.userTempId;
  config.headers.userTempId = userTempId;
  //给请求头添加token标识
  let token = store.state.user.user.token;
  if (token) {
    config.headers.token = token;
  }
  NProgress.start();
  // 返回config
  return config;
});

// 响应拦截
instance.interceptors.response.use(
  function(response) {
    NProgress.done();
    // 返回response响应数据的data
    return response.data;
  },
  //统一处理失败
  function(error) {
    NProgress.done();
    alert("请求失败：" + error.message || "未知错误");
    //如果还想处理失败，可以返回一个失败的promise
    //return Promise.reject(new Error('请求失败'));
    //如果不想再处理，可以返回一个pending的promise
    return new Promise();
  }
);
export default instance;
