<template>
  <nav class="navbar navbar-expand-lg padding text-white bg-darkblue">
    <router-link :to="{ name: 'home' }">
      <img src="@common/assets/images/logo_white.png" class="logo" />
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center py-4">
      <div class="navbar-nav">
        <div class="font-weight-bold link" v-for="(link, index) in links" :key="index">
          <dropdown-vue
            class="nav-link"
            :items="link.dropdown.links"
            :title="{ label: link.label, uppercase: true }"
            :options="{
              title: {
                class: 'text-decoration-none text-white dropdown-toggle',
              },
            }"
            v-if="link.dropdown"
          ></dropdown-vue>
          <a
            v-else
            class="nav-link text-white"
            :href="link.link"
            :target="link.target ?? '_blank'"
            >{{ $t(link.label).toUpperCase() }}</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { links } from "../../composables/links";
import DropdownVue from "@/common/components/Dropdown.vue";
export default defineComponent({
  components: { DropdownVue },
  setup() {
    return { links };
  },
});
</script>
