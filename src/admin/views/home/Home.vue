<template>
  <table-vue :header_links="header_links" :data="data" :options="options"></table-vue>
  <!-- <input-vue /> -->
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import TableVue, { Options, Link } from "@/admin/components/Table.vue";
// import InputVue from "@/admin/components/Input.vue";
export default defineComponent({
  components: {
    TableVue,
    // InputVue,
  },
  setup() {
    const header_links = ref<Array<Link>>([
      {
        header: {
          label: "name",
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
    const options = ref<Options>({
      header: {
        th: {
          class: "cursor-pointer",
        },
      },
    });
    return {
      header_links,
      data,
      options,
    };
  },
});
</script>
