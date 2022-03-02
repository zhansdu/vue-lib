<template>
  <section tag="bg_images">
    <bg-images-vue></bg-images-vue>
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
import { defineComponent } from "@vue/runtime-core";

// components
import UpcomingEventsVue from "./components/upcoming_events/UpcomingEvents.vue";
import VideoContentVue from "./components/video_content/VideoContent.vue";
import FaqVue from "./components/faq/FAQ.vue";
import ChatVue from "./components/chat/Chat.vue";
import BgImagesVue from "./components/bg_images/BgImages.vue";

export default defineComponent({
  components: {
    UpcomingEventsVue,
    VideoContentVue,
    FaqVue,
    ChatVue,
    BgImagesVue,
  },
});
</script>
