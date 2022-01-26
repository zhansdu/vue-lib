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
      title: "SDU library - Admin page",
      scss_link: "<link rel='stylesheet' href='/styles/sass/admin.css' />",
    },
    auth: {
      entry: "src/auth/main.ts",
      template: "public/index.html",
      title: "SDU library - Authentication page",
      scss_link: "<link rel='stylesheet' href='/styles/sass/auth.css' />",
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
      },
    },
  },
};
