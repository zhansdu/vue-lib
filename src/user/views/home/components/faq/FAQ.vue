<template>
  <div class="padding bg-white py-5">
    <div class="d-flex flex-wrap justify-content-between">
      <section class="col-12 col-md-4" tag="search">
        <div class="text-darkblue">
          <span class="font-size-32 font-weight-bold" v-html="$t('faq.title').toUpperCase()" />
        </div>
        <div class="mt-5">
          <span class="font-weight-bold" v-html="$t('faq.question')" />
        </div>
        <div class="mt-1">
          <span class="font-size-14" v-html="$t('faq_answer')" />
        </div>

        <div class="mt-4">
          <div
            :id="link.id"
            class="mt-20 full-width width-100-lg s-la-widget s-la-widget-embed"
            :class="$i18n.locale == link.language ? 'd-block' : 'd-none'"
            v-for="(link, index) in search_links"
            :key="index"
          ></div>
        </div>
      </section>
      <section class="col-12 col-md-6 mt-3 mt-md-0" tag="questions">
        <div
          :id="link.id"
          class="no-border-top s-la-widget s-la-widget-embed"
          :class="$i18n.locale == link.language ? 'd-block' : 'd-none'"
          v-for="(link, index) in question_links"
          :key="index"
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
