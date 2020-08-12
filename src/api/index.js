import Ajax from "@/ajax/Ajax";

export const apiCategory = () => {
  return Ajax({
    url: "/product/getBaseCategoryList",
    method: "get",
  });
};
// apiCategory();
