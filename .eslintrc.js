// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: {
    es2021: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:vue/recommended",
    "eslint:recommended",
    // "@vue/standard",
    "@vue/typescript/recommended",
    "@vue/prettier",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "vue/no-v-html": "off",
    "vue/prop-name-casing": "off",
    "vue/require-default-prop": "off",
    "vue/multi-word-component-names": "off",
  },
};
