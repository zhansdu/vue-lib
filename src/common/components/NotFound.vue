<template>
  <div class="d-flex flex-column">
    <div class="m-5">
      <a :href="prod_link">
        <img class="img_width" src="@/common/assets/images/logo_blue.png" />
      </a>
    </div>
    <div class="align-self-end text-end m-5 p-5">
      <span class="title_404">404</span>
      <span class="title_error">&nbsp;error</span>
      <div class="description">The page you are looking for is not found</div>
      <button class="go_back mt-5 px-5 py-4" @click="goBack()">Go back</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  setup() {
    function goBack(): void {
      window.history.back();
    }
    const prod_link = process.env.VUE_APP_BASE_URL_PROD;
    return {
      goBack,
      prod_link,
    };
  },
});
</script>
<style scoped>
.img_width {
  width: 9.375em;
}
.title_404 {
  font-size: 9em;
  font-weight: 900;
}
.title_error {
  font-size: 6em;
  font-weight: 800;
}
.description {
  font-size: 3em;
  font-weight: 700;
  margin-top: -1em;
}
.go_back {
  border: 1px solid var(--grey);
  border-radius: 5px;
  font-size: 1.5em;
}
</style>
