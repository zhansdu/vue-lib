<template>
  <header-vue></header-vue>
  <router-view v-slot="{ Component }">
    <transition name="scale">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import HeaderVue from "./components/Header.vue";
export default defineComponent({
  components: { HeaderVue },
});
</script>
