/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
module.exports = {
  pages: {
    index: {
      entry: "src/user/main.ts",
      template: "public/index.html",
      title: "SDU library",
      scss_link: "<link rel='stylesheet' href='/styles/sass/user.css' />",
    },
    admin: {
      entry: "src/admin/main.ts",
      template: "public/index.html",
      title: "SDU library admin page",
      scss_link: "<link rel='stylesheet' href='/styles/sass/admin.css' />",
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
};
