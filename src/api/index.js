import Ajax from "@/ajax/Ajax";
import MockAjax from "@/ajax/MockAjax";

// /order/auth/{page}/{limit}
export const apiGetOrderList = (page,limit) => {
  return Ajax({
    url: `/order/auth/${page}/${limit}`,
  });
};

//payment/weixin/queryPayStatus/{orderId}
export const apiQueryPayStatus = (orderId) => {
  return Ajax({
    url: `payment/weixin/queryPayStatus/${orderId}`,
  });
};
//payment/weixin/createNative/{orderId}
export const apiPayMent = (orderId) => {
  return Ajax({
    url: `/payment/weixin/createNative/${orderId}`,
    method: "get",
  });
};
export const apiSubmitOrder = (tradeNo, trade) => {
  return Ajax({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method: "post",
    data: trade,
  });
};
export const apiTrade = () => {
  return Ajax({
    url: "/order/auth/trade",
    method: "get",
  });
};
export const apiLoginOut = () => {
  return Ajax({
    url: "/user/passport/logout",
    method: "get",
  });
};
export const apiLogin = (user) => {
  return Ajax({
    url: "/user/passport/login",
    method: "post",
    data: user,
  });
};
export const apiRegister = (user) => {
  return Ajax({
    url: "/user/passport/register",
    method: "post",
    data: user,
  });
};
export const apiDelCart = (skuId) => {
  return Ajax({
    url: `/cart/deleteCart/${skuId}`,
    method: "delete",
  });
};
export const apiUpdateChenck = (skuId, isChecked) => {
  return Ajax({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: "get",
  });
};
export const apiGetShopCartList = () => {
  return Ajax({
    url: "/cart/cartList",
    method: "get",
  });
};
export const apiAddShopCart = (skuId, skuNum) => {
  return Ajax({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: "post",
  });
};
export const apiItem = (skuId) => {
  return Ajax({
    url: `/item/${skuId}`,
    method: "get",
  });
};
export const apiCategory = () => {
  return Ajax({
    url: "/product/getBaseCategoryList",
    method: "get",
  });
};
export const apiGoodsList = (goods) => {
  return Ajax({
    url: "/list",
    method: "post",
    data: goods,
  });
};
export const apiBannerList = () => {
  return MockAjax({
    url: "/banner",
    method: "get",
  });
};
export const apiFloorList = () => {
  return MockAjax({
    url: "/floor",
    method: "get",
  });
};
// apiCategory();
// apiGoodsList({});
