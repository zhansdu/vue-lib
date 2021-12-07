<template>
  <header-vue></header-vue>
  <router-view v-slot="{ Component }">
    <transition name="scale">
      <div>
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import HeaderVue from "./components/header/Header.vue";
import locale from "./locale/locale";
import { addLocale } from "@/user/plugins/locale/locale";
import DropdownVue from "@/common/components/Dropdown.vue";
import SelectVue from "@/user/components/Select.vue";

export default defineComponent({
  components: { HeaderVue, DropdownVue, SelectVue },
  setup() {
    addLocale(locale.en, "en");
    addLocale(locale.ru, "ru");
    addLocale(locale.kz, "kz");
    const dropdown_items = [{ label: "aa" }, { label: "string" }];
    return {
      dropdown_items,
    };
  },
});
</script>
<style scoped>
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
