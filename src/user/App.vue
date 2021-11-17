<template>
  <app-vue></app-vue>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import AppVue from "@user/views/main_layout/App.vue";
import "vue-i18n";
export default defineComponent({
  components: { AppVue },
});
</script>
<style lang="scss" scoped>
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
