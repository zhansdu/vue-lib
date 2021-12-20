<template>
  <div
    ref="slide_items"
    class="position-relative d-none d-lg-flex align-items-center w-min-0 w-100"
  >
    <div class="overflow-hidden w-100">
      <div ref="events" class="d-flex justify-content-between align-items-start transition">
        <div
          class="bg-lightgrey rounded flex-shrink-0 transition font-size-18 p-3"
          :class="index == events.length - 1 ? 'ml-2' : 'mr-2'"
          :style="{ width: itemWidth + 'px' }"
          v-for="(event, index) in events"
          :key="index"
        >
          <div class="d-flex">
            <div class="mr-5 d-flex flex-column">
              <span class="font-size-32 m-auto">{{ (event.date as Date).getDate() }}</span>
              <span
                class="mt-2"
                v-html="$t('months[' + (event.date  as Date).getMonth() + ']') + ', '  + (event.date  as Date).getFullYear()"
              />
            </div>
            <div class="text-grey d-flex flex-column justify-content-around">
              <div v-html="$t('news[' + index + '].place')" />
              <div class="d-flex">
                {{ event.time_from }}
                <span v-if="event.time_until">
                  &nbsp;
                  {{ "- " + event.time_until }}
                  <span
                    v-if="event.date_until"
                    v-html="' (' +
                    (event.date_until as Date).getDate() +
                    ' ' +
                    $t('months[' + (event.date_until as Date).getMonth() + ']') +
                    ')'"
                  />
                </span>
              </div>
            </div>
          </div>
          <div class="bg-orange my-3 height-1"></div>
          <div>
            <div class="text-grey">{{ $t(event.type) }}</div>
            <router-link
              :to="{ name: 'full_event', params: { index: index }, query: { index: index } }"
              class="d-flex align-items-center justify-content-between text-black cursor-pointer"
              v-if="event.type == 'announcement'"
            >
              <div class="font-weight-bold font-size-24" v-html="$t('news[' + index + '].title')" />
              <div
                class="rounded-circle bg-white fixed-size d-flex align-items-center justify-content-center"
              >
                <right-little />
              </div>
            </router-link>
            <a
              :href="event.link"
              target="_blank"
              class="d-flex align-items-center justify-content-between text-black cursor-pointer"
              v-else
            >
              <div class="font-weight-bold font-size-24" v-html="$t('news[' + index + '].title')" />
              <div
                class="rounded-circle bg-white fixed-size d-flex align-items-center justify-content-center"
              >
                <right-little />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="left_button rotate cursor-pointer"
      @click="move(-1)"
      v-if="current_item_number != 0"
    >
      <right-little />
    </div>
    <div
      class="right_button cursor-pointer"
      @click="move(1)"
      v-if="
        current_item_number != events.length - number_shown &&
        current_item_number != events.length - 1
      "
    >
      <right-little />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount, onBeforeUnmount, PropType, ref } from "@vue/runtime-core";
// icons
import RightLittle from "@/common/assets/icons/RightLittle.vue";

type Event = {
  date: Date | string;
  type: string;
  link: string;
  time_from: Date | string;
  time_until?: Date | string;
  date_until?: Date | string;
};
export default defineComponent({
  props: {
    events: {
      type: Array as PropType<Array<Event>>,
      required: true,
    },
    number_shown: {
      type: Number,
      required: false,
      default: (): number => {
        return 3;
      },
    },
  },
  components: {
    RightLittle,
  },
  setup(props) {
    const itemWidth = ref(300);
    const current_item_number = ref(0);
    const events_div = ref({} as HTMLDivElement);
    const slide_items = ref({} as HTMLDivElement);
    function setDates(): void {
      props.events.forEach((event: Event) => {
        event.date = new Date(event.date);
        if (event.date_until) {
          event.date_until = new Date(event.date_until);
        }
      });
    }
    function move(num: number): void {
      if (
        current_item_number.value + num >= 0 &&
        current_item_number.value + num + props.number_shown <= props.events.length
      ) {
        current_item_number.value += num;
        events_div.value.style.transform =
          "translateX(" +
          (-current_item_number.value * itemWidth.value + -current_item_number.value * 10) +
          "px) translateY(0px)";
      }
    }
    function changeItemWidth(): void {
      setTimeout(() => {
        let divide_num =
          props.number_shown < props.events.length ? props.number_shown : props.events.length;
        itemWidth.value = (slide_items.value.offsetWidth - (divide_num - 1) * 10) / divide_num;
      }, 300);
    }
    function resize() {
      changeItemWidth();
      setTimeout(() => {
        move(0);
      }, 310);
    }

    setDates();
    onBeforeMount(() => {
      window.addEventListener("resize", resize);
      changeItemWidth();
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", resize);
    });

    return { itemWidth, move, current_item_number, events_div, slide_items };
  },
});
</script>
<style scoped>
.right_button,
.left_button {
  position: absolute;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0 0.125em 0.625em rgba(141, 155, 164, 0.32);
}
.right_button {
  right: -1.5em;
}
.left_button {
  left: -1.5em;
}
.fixed-size {
  width: 2.125em;
  height: 2.125em;
}
</style>
