<template>
  <section tag="bg_images">
    <div class="home bg-darkblue padding text-white">
      <div>Hello kitty</div>
      <checkbox-vue v-model="model"></checkbox-vue>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import CheckboxVue from "@/common/components/Checkbox.vue";
export default defineComponent({
  components: {
    CheckboxVue,
  },
  setup() {
    const model = ref(23);
    return { model };
  },
});
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  min-height: max(calc(100vh - 163px), 660px);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
