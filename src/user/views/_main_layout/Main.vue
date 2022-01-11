<template>
  <header-vue></header-vue>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
  <footer-vue v-if="$router.currentRoute.value.meta.footer"></footer-vue>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

import HeaderVue from "./components/header/Header.vue";
import FooterVue from "./components/footer/Footer.vue";

import local_locale from "./plugins/locale/locale";
import { addLocale } from "@/user/plugins/locale/locale";

export default defineComponent({
  components: { HeaderVue, FooterVue },
  setup() {
    addLocale(local_locale.en, "en");
    addLocale(local_locale.ru, "ru");
    addLocale(local_locale.kz, "kz");
  },
});
</script>
