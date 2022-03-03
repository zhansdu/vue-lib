<template>
  <div class="d-flex flex-column align-items-center justify-content-center h-100">
    <div class="mb-5">
      <a :href="prod_link">
        <img class="img_width" src="@/common/assets/images/logo_blue.png" />
      </a>
    </div>
    <form
      class="d-flex flex-column align-items-center bg-lightgrey col-4 p-5 mb-5"
      @submit.prevent="login"
    >
      <div class="flex-fill p-4 text-center">
        <span v-t="'auth.description'"></span>
      </div>
      <div class="col-10 mt-4">
        <input class="input w-100" :placeholder="$t('auth.login')" />
      </div>
      <div class="col-10 mt-4">
        <input class="input w-100" :placeholder="$t('auth.password')" type="password" />
      </div>
      <div class="col-8 mt-5">
        <button v-t="'auth.submit'" class="button bg-white outline-green w-100"></button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "HomeVue",
  setup() {
    function login(): void {
      alert("login");
    }

    const prod_link = import.meta.env.BASE_URL;
    return {
      login,
      prod_link,
    };
  },
});
</script>
<style scoped>
.img_width {
  width: 9.375em;
}
</style>
