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
import Center from "@/pages/Center";
import MyOrder from "@/pages/Center/MyOrder";
import GroupOrder from "@/pages/Center/GroupOrder";
import store from "@/store";
export default [
  {
    path: "/paysuccess",
    component: PaySuccess,
    beforeEnter: (to, from, next) => {
      // ...
      if (from.path === "/pay") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/center",
    component: Center,
    children: [
      {
        path: "myorder",
        component: MyOrder,
      },
      {
        path: "grouporder",
        component: GroupOrder,
      },
      {
        path: "",
        redirect: "myorder",
      },
    ],
  },
  {
    path: "/pay/:orderId",
    component: Pay,
    beforeEnter: (to, from, next) => {
      // ...
      if (from.path === "/trade") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/trade",
    component: Trade,
    beforeEnter: (to, from, next) => {
      if (from.path === "/shopcart") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/shopcart",
    component: ShopCart,
  },
  {
    path: "/addcartsuccess",
    component: AddCartSuccess,
    //路由独享守卫
    beforeEnter: (to, from, next) => {
      let skuInfo = sessionStorage.getItem("SKUINFO_KEY");
      if (to.query.skuNum && skuInfo) {
        next();
      } else {
        next(false);
      }
    },
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
    beforeEnter: (to, from, next) => {
      // ...
      if (store.state.user.user.name) {
        next("/");
      } else {
        next();
      }
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
  {
    path: "/communication",
    component: () => import("@/pages/Communication/Communication"),
    children: [
      {
        path: "event",
        component: () => import("@/pages/Communication/EventTest/EventTest"),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: "model",
        component: () => import("@/pages/Communication/ModelTest/ModelTest"),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: "sync",
        component: () => import("@/pages/Communication/SyncTest/SyncTest"),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: "attrs-listeners",
        component: () =>
          import("@/pages/Communication/AttrsListenersTest/AttrsListenersTest"),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: "children-parent",
        component: () =>
          import("@/pages/Communication/ChildrenParentTest/ChildrenParentTest"),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: "scope-slot",
        component: () =>
          import("@/pages/Communication/ScopeSlotTest/ScopeSlotTest"),
        meta: {
          isHideFooter: true,
        },
      },
    ],
  },
];
