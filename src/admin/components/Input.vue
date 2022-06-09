<template>
  <div class="position-relative h-100" tabindex="1" @focusout="close()">
    <div class="position-relative h-100">
      <input
        :type="type"
        class="text-ellipsis px-3"
        :class="options."
        v-model="text"
        @input="onInput()"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :min="min"
        :max="max"
        :step="step"
      />
      <span
        v-if="options.selectable"
        class="d-flex align-items-center icon cursor-pointer selectable"
      >
        <span @click="showList()">
          <CaretUp class="down" />
        </span>
      </span>
      <span v-if="search" class="d-flex align-items-center icon cursor-pointer">
        <span @click="reset" v-if="value">
          <Cancel />
        </span>
        <span @click="submitTotal" v-else>
          <Search />
        </span>
      </span>
    </div>
    <div
      class="results"
      :class="{ bordered: shown }"
      :style="'max-height:' + (shown ? maxHeight : '0')"
    >
      <div
        class="result text-ellipsis"
        :class="{ no_border_bottom: index == results.length - 1 }"
        v-for="(result, index) in results"
        :key="index"
        @click="select(result)"
      >
        {{ $t(head ? result[head] : result) }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// identication in sublime 3
// // icons
// import Search from "@/common/assets/icons/Search.vue";
// import Cancel from "@/common/assets/icons/Cancel.vue";
// import CaretUp from "@/common/assets/icons/CaretUp.vue";
import { defineComponent, PropType } from "vue";
type ClassStyleType = string | Record<string, boolean> | Array<string>;

type InputOptions = {
  maxHeight?: string;
  autocomplete?: {};
  selectable?: {};
  input: {
    class: ClassStyleType;
    style: ClassStyleType;
  };
  results: {};
  item: {};
};

export default defineComponent({
  emits: ["change", "update:modelValue"],
  // components: { Search, Cancel, CaretUp },
  props: {
    options: Object as PropType<InputOptions>,
  },
});
</script>
<style scoped>
.icon {
  font-size: 1.2em;
  position: absolute;
  top: 0;
  height: 100%;
  right: 1.25em;
}
.selectable {
  /*hard..*/
  right: 0.86em;
}
.padding-right {
  padding-right: 2.3em !important;
}
.down {
  transform: rotate(180deg);
}
.results {
  position: absolute;
  top: 110%;
  width: 100%;
  background: white;
  overflow: auto;
  transition: 0.3s;
  border-radius: 0.3125em;
  z-index: 998;
  max-height: 0em;
}
.result {
  padding: 0.4em 0.625em;
  border-bottom: 0.03125em solid #b5bac7;
  cursor: pointer;
}
.bordered {
  border: 0.03125em solid #b5bac7;
}
.result:hover {
  background-color: rgba(100, 100, 100, 0.1);
  color: #ff9d29;
}
.no_border_bottom {
  border-bottom: none;
}
</style>
