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
<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
