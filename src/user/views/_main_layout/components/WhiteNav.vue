<template>
  <div class="bg-white padding">
    <div class="d-flex flex-wrap justify-content-between align-items-center">
      <section>
        <div class="text-darkblue">Time</div>
      </section>
      <section class="d-flex align-items-center">
        <dropdown-vue
          :items="dropdown_items"
          :title="dropdown_title"
          v-model="$i18n.locale"
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
import { defineComponent, ref } from "@vue/runtime-core";
import DropdownVue from "@/common/components/Dropdown.vue";
import i18n from "@/user/plugins/locale/locale";

export default defineComponent({
  components: {
    DropdownVue,
  },
  setup() {
    const locale = ref("");
    function changeLocale() {
      localStorage.setItem("lang", i18n.global.locale);
    }
    const languages = Object.keys(i18n.global.messages);
    const dropdown_items = ref(
      languages.map((lang_name: string) => {
        let lang = {
          name: "",
          value: "",
        };
        lang.name = lang_name.toUpperCase();
        lang.value = lang_name;
        return lang;
      })
    );
    const dropdown_title = ref({
      class: "text-decoration-none text-black dropdown-toggle",
    });
    return { dropdown_items, dropdown_title, locale, changeLocale };
  },
});
</script>
