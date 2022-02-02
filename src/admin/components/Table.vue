<template>
  <table class="table">
    <thead>
      <tr
        class="fw-bold text-muted text-nowrap bg-light rounded-3"
        :class="[{ 'sticky-top': options?.header?.sticky }, options?.header?.tr?.class]"
        :style="options?.header?.tr?.style"
      >
        <th v-if="options?.row_num" v-html="'#'"></th>
        <th
          v-for="(link, index) in header_links"
          :key="index"
          @click="
            () => {
              if (link.header.on_click) {
                link.header.on_click(link);
              }
            }
          "
          :class="[{ 'sticky-top': options?.header?.sticky }, options?.header?.th?.class]"
          :style="options?.header?.th?.style"
        >
          <span v-html="$t(link.header.label)"></span>
          <span v-if="link.header.icon">
            <component
              :is="link.header.icon.component"
              v-bind="link.header.icon.props"
              :class="link.header.icon.class"
              :style="link.header.icon.style"
            ></component>
          </span>
        </th>
        <th v-if="options?.buttons">
          <span v-html="$t(options.buttons.header?.label ?? 'actions')"></span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(elem, index) in data"
        :key="index"
        :class="[{ 'sticky-bottom': options?.data?.sticky }, options?.data?.tr?.class]"
        :style="options?.data?.tr?.style"
        @click="options?.data?.tr?.on_click ? options?.data?.tr?.on_click(elem) : () => {}"
      >
        <td v-if="options?.row_num" v-html="index + 1"></td>
        <td
          v-for="(link, index) in header_links"
          :key="index"
          @click="
            () => {
              if (link.data.on_click) {
                link.data.on_click(elem);
              }
            }
          "
          :class="link.data.class"
          :style="link.data.style"
        >
          <span v-if="link.data.display_func" v-html="link.data.display_func()"></span>
          <span v-else v-html="$t(elem[link.data.label])"></span>
          <span v-if="link.data.icon">
            <component
              :is="link.data.icon.component"
              v-bind="link.data.icon.props"
              :class="link.data.icon.class"
              :style="link.data.icon.style"
            ></component>
          </span>
        </td>
        <td v-if="options?.buttons">
          <button
            v-for="(button, index) in options.buttons.buttons"
            :key="index"
            @click="button.on_click(elem)"
          >
            <span v-html="$t(button.data?.label ?? '')"></span>
            <span v-if="button.icon">
              <component
                :is="button.icon.component"
                v-bind="button.icon.props"
                :class="button.icon.class"
                :style="button.icon.style"
              ></component>
            </span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import { Component, defineComponent, PropType } from "@vue/runtime-core";
type ClassStyleType = string | Record<string, boolean> | Array<string>;

type Link = {
  header: {
    label: string;
    display_func?: CallableFunction;
    on_click?: CallableFunction;
    icon?: {
      component: Component;
      props?: Record<string, unknown>;
      class?: ClassStyleType;
      style?: ClassStyleType;
    };
  };
  data: {
    label: string;
    display_func?: CallableFunction;
    on_click?: CallableFunction;
    class?: ClassStyleType;
    style?: ClassStyleType;
    icon?: {
      component: Component;
      props?: Record<string, unknown>;
      class?: ClassStyleType;
      style?: ClassStyleType;
    };
  };
};

type Options = {
  row_num?: boolean;
  header?: {
    sticky?: boolean;
    tr?: {
      class?: ClassStyleType;
      style?: ClassStyleType;
    };
    th?: {
      class?: ClassStyleType;
      style?: ClassStyleType;
    };
  };
  data?: {
    sticky?: boolean;
    tr?: {
      class?: ClassStyleType;
      style?: ClassStyleType;
      on_click?: CallableFunction;
    };
    td?: {
      class?: ClassStyleType;
      style?: ClassStyleType;
    };
  };
  buttons?: {
    header?: {
      label?: string;
    };
    buttons: Array<{
      data?: {
        label?: string;
      };
      on_click: CallableFunction;
      icon?: {
        component: Component;
        props?: Record<string, unknown>;
        class?: ClassStyleType;
        style?: ClassStyleType;
      };
    }>;
  };
};

export default defineComponent({
  props: {
    header_links: {
      type: Array as PropType<Array<Link>>,
      required: true,
    },
    data: {
      type: Array as PropType<Array<Record<string, string>>>,
      required: true,
    },
    options: {
      type: Object as PropType<Options>,
      required: false,
    },
  },
});
</script>

<style lang="scss" scoped>
td,
th {
  padding: 1em 1.25em;
  border: 0.0625em solid var(--grey);
}

th {
  text-align: left;
  font-weight: 500;
}

tbody tr:hover {
  box-shadow: 0 0 0.4375em rgba(8, 38, 115, 0.2);
}

input {
  width: unset;
  height: unset;
}

.table {
  position: relatvie;
  max-height: max(68vh, 31.25em);
  overflow: auto;
}
.sticky-top {
  top: 0;
  &,
  .sticky-bottom {
    position: sticky;
  }
}
.sticky-bottom {
  bottom: 0;
}
</style>
