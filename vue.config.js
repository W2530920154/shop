const { mapState } = require("vuex");

module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        //添加代理服务器，解决跨域问题
        target: "http://182.92.128.115",
      },
    },
  },
};
