<template>
  <table-vue :header_links="header_links" :data="data"></table-vue>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import TableVue from "@/admin/components/Table.vue";
export default defineComponent({
  components: {
    TableVue,
  },
  setup() {
    const header_links = ref([
      {
        header: {
          label: "name",
          class: "cursor-pointer",
        },
        data: {
          label: "name",
          on_click: (elem: typeof data.value[0]) => {
            console.log("hello, " + elem.name);
          },
          class: "text-red",
        },
      },
      {
        header: {
          label: "id",
        },
        data: {
          label: "name",
        },
      },
    ]);
    const data = ref([
      {
        name: "Zhan",
        id: "1",
      },
      {
        name: "Zhon",
        id: "2",
      },
    ]);
    return {
      header_links,
      data,
    };
  },
});
</script>
