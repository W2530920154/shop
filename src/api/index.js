import Ajax from "@/ajax/Ajax";
import MockAjax from "@/ajax/MockAjax";
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
