<template>
  <div class="bg-lightgrey padding py-5">
    <div class="position-relative overflow-hidden">
      <section tag="texts">
        <div class="text-blue">
          <span
            class="font-size-32 font-weight-bold"
            v-html="$t('video_content.title').toUpperCase()"
          />
        </div>
        <div class="my-3">
          <span v-html="$t('video_content.content')" />
        </div>
      </section>
      <section tag="videos">
        <div v-for="(video, index) in videos" :key="index">
          <div class="rounded border border-blue p-3 bg-white fixed-size">
            <a
              class="cursor-pointer text-darkblue"
              :href="video.link"
              target="_blank"
              v-html="$t('video_content.videos[' + index + '].title')"
            />
            <div class="border-top border-darkblue pt-3 mt-3">
              <iframe
                class="video-size"
                :src="video.link_embed"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </section>
      <section tag="bottom"></section>
    </div>
  </div>
</template>
<script lang="ts">
// core
import { defineComponent } from "@vue/runtime-core";

type Video = {
  link_embed: string;
  link: string;
};

export default defineComponent({
  setup() {
    const videos: Array<Video> = [
      {
        link: "https://www.youtube.com/watch?v=IS3jYEzgb4A",
        link_embed: "https://www.youtube.com/embed/IS3jYEzgb4A",
      },
    ];
    return {
      videos,
    };
  },
});
</script>
<style scoped>
.fixed-size {
  width: 25vw;
  min-width: 18.75em;
}
.video-size {
  width: max(100%, 25em);
  max-width: 100%;
  height: 12.5em;
}
</style>
