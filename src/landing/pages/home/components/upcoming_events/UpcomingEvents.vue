<template>
  <div class="padding bg-white py-5">
    <section tag="texts">
      <div class="d-flex justify-content-between align-items-center">
        <div class="text-darkblue">
          <span class="font-size-32 fw-bold" v-html="$t('upcoming_events').toUpperCase()" />
        </div>
        <a class="text-darkblue" :href="$t('libguide.digest.link')">
          <span v-html="$t('libguide.digest.title')" />
          <span class="font-size-14 ms-2">
            <right-normal></right-normal>
          </span>
        </a>
      </div>
    </section>
    <section tag="events">
      <div class="d-flex py-5">
        <div>
          <div class="p-0 bg-white me-5 rounded">
            <iframe
              class="border-0 calendar-height"
              src="https://api3-eu.libcal.com/embed_mini_calendar.php?mode=month&iid=4105&cal_id=7853&l=5&tar=0&h=457&audience=&c=&z="
            />
          </div>
        </div>
        <div class="flex-fill">
          <events-slide :events="events"></events-slide>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import EventsSlide, { Event } from "./EventsSlide.vue";
import RightNormal from "@/common/assets/icons/RightNormal.vue";
export default defineComponent({
  components: { EventsSlide, RightNormal },
  setup() {
    const events = ref<Array<Event>>([
      {
        date: new Date(),
        type: "event",
        link: "https://library.sdu.edu.kz",
        time_from: new Date(),
      },
    ]);
    return { events };
  },
});
</script>
<style scoped lang="scss">
$calendar_height: 18.75em;
.calendar-height {
  height: $calendar_height;
}
</style>
