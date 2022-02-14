<template>
  <div class="d-flex">
    <sidebar-vue />

    <div>
      <navbar-vue />
      <div id="main" class="bg-lightgrey h-100">
        <router-view :key="$route.fullPath" class="h-min-100" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import SidebarVue from "./sidebar/Sidebar.vue";
import NavbarVue from "./navbar/Navbar.vue";
export default defineComponent({
  components: {
    SidebarVue,
    NavbarVue,
  },
});
</script>
