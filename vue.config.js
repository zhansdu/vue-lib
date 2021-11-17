const path = require("path");
module.exports = {
  pages: {
    index: {
      entry: "src/user/main.ts",
      template: "public/index.html",
      title: "SDU library",
    },
    admin: {
      entry: "src/admin/main.ts",
      template: "public/index.html",
      title: "SDU library admin page",
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
        "@user": path.resolve(__dirname, "src/user/"),
        "@admin": path.resolve(__dirname, "src/admin/"),
        "@common": path.resolve(__dirname, "src/common/"),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@common/assets/styles/common.scss";
          @import "@common/assets/styles/colors.scss";
          @import "@common/assets/styles/fonts.scss";
        `,
      },
    },
  },
};
