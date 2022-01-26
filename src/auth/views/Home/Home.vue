<template>
  <div class="d-flex flex-column align-items-center justify-content-center h-100">
    <div class="mb-4">
      <img class="img_width" src="@/common/assets/images/logo_blue.png" />
    </div>
    <form
      @submit.prevent="login"
      class="d-flex flex-column align-items-center bg-lightgrey col-4 p-5 mb-5"
    >
      <div class="flex-fill p-4 text-center">
        <span v-html="$t('auth.description')"></span>
      </div>
      <div class="col-10 mt-4">
        <input class="input" :placeholder="$t('auth.login')" />
      </div>
      <div class="col-10 mt-4">
        <input type="password" class="input" :placeholder="$t('auth.password')" />
      </div>
      <div class="col-8 mt-5">
        <button class="button bg-white outline-green w-100" v-html="$t('auth.submit')"></button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  setup() {
    function login(): void {
      alert("login");
    }
    return {
      login,
    };
  },
});
</script>
<style scoped>
.img_width {
  width: 9.375em;
}
</style>
