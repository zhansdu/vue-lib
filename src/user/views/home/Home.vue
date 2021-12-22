<template>
  <section tag="bg_images">
    <div
      class="home bg-darkblue padding text-white d-flex align-items-center justify-content-center"
    >
      <tabs-vue :tabs="tabs"></tabs-vue>
    </div>
  </section>
  <section tag="upcoming_events">
    <upcoming-events-vue></upcoming-events-vue>
  </section>
  <section tag="video_content">
    <video-content-vue></video-content-vue>
  </section>
  <section tag="faq">
    <faq-vue></faq-vue>
  </section>
  <section tag="chat">
    <chat-vue></chat-vue>
  </section>
</template>
<script lang="ts">
// boot
import { defineComponent } from "@vue/runtime-core";
// common components
import TabsVue from "@/common/components/Tabs.vue";
import DropdownVue from "@/common/components/Dropdown.vue";
// local components
import UpcomingEventsVue from "./components/upcoming_events/UpcomingEvents.vue";
import VideoContentVue from "./components/video_content/VideoContent.vue";
import FaqVue from "./components/faq/FAQ.vue";
import ChatVue from "./components/chat/Chat.vue";

export default defineComponent({
  components: {
    TabsVue,
    UpcomingEventsVue,
    VideoContentVue,
    FaqVue,
    ChatVue,
  },
  setup() {
    const items = [{ label: "Zhax" }];
    const items_1 = [{ label: "Zhaxes" }, { label: "AAH" }];
    const tabs = [
      {
        label: "Zhan",
        component: {
          component: DropdownVue,
          props: {
            items: items,
          },
        },
      },
      {
        label: "Men",
        component: {
          component: DropdownVue,
          props: {
            items: items_1,
          },
        },
      },
    ];
    return { tabs };
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
