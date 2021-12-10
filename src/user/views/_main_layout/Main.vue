<template>
  <header-vue></header-vue>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import HeaderVue from "./components/header/Header.vue";
import local_locale from "./locale/locale";
import { addLocale } from "@/user/plugins/locale/locale";

export default defineComponent({
  components: { HeaderVue },
  setup() {
    addLocale(local_locale.en, "en");
    addLocale(local_locale.ru, "ru");
    addLocale(local_locale.kz, "kz");
  },
});
</script>
