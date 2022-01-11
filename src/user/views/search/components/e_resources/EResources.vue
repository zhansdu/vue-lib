<template>
  <form action="https://searchbox.ebsco.com/search/" target="_blank" class="d-flex">
    <input class="input" name="schemaId" value="search" type="hidden" />
    <input class="input" name="custid" value="ns242285" type="hidden" />
    <input class="input" name="groupid" value="main" type="hidden" />
    <input class="input" name="profid" value="eds" type="hidden" />
    <input class="input" name="authtype" value="ip,guest" type="hidden" />
    <input class="input" name="scope" value="site" type="hidden" />
    <input class="input" name="site" value="eds-live" type="hidden" />
    <input class="input" name="direct" value="true" type="hidden" />
    <input
      name="bquery"
      type="text"
      class="w-100 border-grey me-n2 input"
      :placeholder="$t('search.search_eresources')"
    />
    <button
      type="submit"
      class="button p-3 px-5 w-min-120"
      v-if="!check_mobile()"
      v-html="$t('search.search')"
    />
  </form>
</template>
<script lang="ts">
import { defineComponent, inject } from "@vue/runtime-core";

export default defineComponent({
  setup() {
    const check_mobile = inject("$check_mobile") as CallableFunction;
    return {
      check_mobile,
    };
  },
});
</script>
<style scoped>
.me-n2 {
  margin-right: -0.5em;
}
</style>
