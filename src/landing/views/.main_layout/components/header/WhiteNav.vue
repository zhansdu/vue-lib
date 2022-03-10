<template>
  <div class="bg-white padding">
    <div class="d-flex flex-wrap justify-content-between align-items-center">
      <section>
        <div class="text-darkblue">Time</div>
      </section>
      <section class="d-flex align-items-center">
        <dropdown-vue
          v-model="$i18n.locale"
          :items="dropdown_items"
          :options="dropdown_options"
          @click="changeLocale"
        ></dropdown-vue>
        <div class="bg-lightblue p-3 ms-3">
          <div class="link font-size-18">Login</div>
        </div>
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import DropdownVue, { DropdownOptions } from "@/common/components/Dropdown.vue";
import { dropdown_items, changeLocale } from "../../composables/locale_dropdown";

export default defineComponent({
  components: {
    DropdownVue,
  },
  setup() {
    const dropdown_options: DropdownOptions = {
      title: {
        class: "cursor-pointer text-decoration-none text-black dropdown-toggle",
      },
    };
    return {
      dropdown_items,
      dropdown_options,
      changeLocale,
    };
  },
});
</script>
