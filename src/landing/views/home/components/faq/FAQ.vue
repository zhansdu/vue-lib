<template>
  <div class="padding bg-white py-5">
    <div class="d-flex flex-wrap justify-content-between">
      <section class="col-12 col-md-4" tag="search">
        <div class="text-darkblue">
          <span class="font-size-32 fw-bold" v-html="$t('faq.title').toUpperCase()" />
        </div>
        <div class="mt-5">
          <span v-t="'faq.question'" class="fw-bold" />
        </div>
        <div class="mt-1">
          <span v-t="'faq.answer'" class="font-size-14" />
        </div>

        <div class="mt-4">
          <div
            v-for="(link, index) in search_links"
            :id="link.id"
            :key="index"
            class="mt-20 full-width width-100-lg s-la-widget s-la-widget-embed"
            :class="$i18n.locale == link.language ? 'd-block' : 'd-none'"
          ></div>
        </div>
      </section>
      <section class="col-12 col-md-6 mt-3 mt-md-0" tag="questions">
        <div
          v-for="(link, index) in question_links"
          :id="link.id"
          :key="index"
          class="no-border-top s-la-widget s-la-widget-embed"
          :class="$i18n.locale == link.language ? 'd-block' : 'd-none'"
        ></div>
      </section>
    </div>
  </div>
</template>
<script lang="ts">
// core
import { defineComponent } from "@vue/runtime-core";

// composables
import { faqQuestionScripts, faqAskScripts, loadScript, Link } from "../../composables/links";

export default defineComponent({
  setup() {
    const search_links: Array<Link> = [
      {
        id: "s-la-widget-7614",
        language: "en",
      },
      {
        id: "s-la-widget-7815",
        language: "ru",
      },
      {
        id: "s-la-widget-7814",
        language: "kz",
      },
    ];

    const question_links: Array<Link> = [
      {
        id: "s-la-widget-7615",
        language: "en",
      },
      {
        id: "s-la-widget-7792",
        language: "ru",
      },
      {
        id: "s-la-widget-7809",
        language: "kz",
      },
    ];

    function loadAllScripts() {
      let srcs = faqAskScripts.concat(faqQuestionScripts);

      srcs.forEach((item) => {
        loadScript(item);
      });
    }

    loadAllScripts();

    return {
      search_links,
      question_links,
    };
  },
});
</script>
