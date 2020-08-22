import Home from "@/pages/Home";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
export default [
  {
    path: "/paysuccess",
    component: PaySuccess,
  },

  {
    path: "/pay/:orderId",
    component: Pay,
  },
  {
    path: "/trade",
    component: Trade,
  },
  {
    path: "/shopcart",
    component: ShopCart,
  },
  {
    path: "/addcartsuccess",
    component: AddCartSuccess,
  },
  {
    path: "/detail/:skuId",
    component: Detail,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    //当使用params传参时，需要添加 :传递参数的名称
    //为了防止params参数可传可不传，解决方案为：添加？
    path: "/search/:keyword?",
    component: Search,
    name: "Search",
    //props三种方式
    //布尔值，将params传递的参数以属性的方式添加
    //对象，在额外传递静态资源的时候使用
    //函数，可以自定义传递的参数形式(参数为最新生成的路由对象)
    props(route) {
      return { keyword: route.params.keyword };
    },
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
