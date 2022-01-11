<template>
  <div class="d-flex">
    <select-vue
      class="border-grey border-width w-min-120 border-end-0 border-end-radius-0 p-3 me-n1"
      :options="select_options"
      :items="select_items"
      v-model="select_types"
    ></select-vue>
    <input
      class="input border-grey flex-fill border-end-0 border-end-radius-0 border-start-radius-0 p-3 me-n1"
      type="text"
    />
    <button class="button px-5" v-html="$t('search.search')"></button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import SelectVue from "@/user/components/Select.vue";
export default defineComponent({
  components: { SelectVue },
  setup() {
    const select_types = ref();
    const select_options = ref({
      placeholder: "Zhan",
      label: "name",
      value: "id",
      title: {
        class: "text-nowrap",
      },
      items: {
        class: "border text-nowrap",
      },
      item: {
        class: "border-bottom px-3",
      },
    });
    const select_items = ref([
      {
        name: "Zhon Zhonskiy",
        age: "45",
        id: "145",
      },
      {
        name: "Nubrek",
        age: "55",
        id: "zhon",
      },
      {
        name: "Aidark",
        age: "55",
        id: "men",
      },
    ]);
    return {
      select_types,
      select_options,
      select_items,
    };
  },
});
</script>
<style scoped>
.w-min-120 {
  min-width: 8.125em;
}

.border-width {
  border-width: 0.125em !important;
}

.border-end-radius-0 {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.border-start-radius-0 {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}

.me-n1 {
  margin-right: -0.25em;
}
</style>
