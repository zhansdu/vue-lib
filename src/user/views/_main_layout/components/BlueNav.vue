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
        <a
          class="nav-link link font-weight-bold"
          href="#"
          v-for="(link, index) in links"
          :key="index"
          >{{ link.name.toUpperCase() }}</a
        >
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { links } from "../composables/links";
export default defineComponent({
  setup() {
    return { links };
  },
});
</script>
<style scoped lang="scss">
$logo_width: 7.5em;

a {
  color: inherit;
}
.logo {
  width: $logo_width;
}
</style>
