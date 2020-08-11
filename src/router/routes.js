import Home from "@/pages/Home";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Search from "@/pages/Search";

export default [
  {
    path: "/home",
    component: Home,
  },
  {
    //当使用params传参时，需要添加 :传递参数的名称
    //为了防止params参数
    path: "/search:keyword?",
    component: Search,
    name: "Search",
  },
  {
    path: "/login",
    component: Login,
    meta: {
      isHide: true,
    },
  },
  {
    path: "/register",
    component: Register,
    meta: {
      isHide: true,
    },
  },
  {
    path: "/",
    redirect: "/home",
  },
];
