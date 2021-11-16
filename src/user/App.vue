<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="scale">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import "vue-i18n";
export default defineComponent({});
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
