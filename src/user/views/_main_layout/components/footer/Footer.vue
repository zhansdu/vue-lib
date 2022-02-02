<template>
  <div class="bg-darkblue text-white">
    <div class="padding py-5">
      <div class="d-flex justify-content-between">
        <section tag="logo">
          <img src="@/common/assets/images/logo_white.png" class="logo" />
          <div class="mt-5 text-darkgrey">
            <span v-html="$t('footer.sdu')"></span>
            <span class="d-block fw-bold" v-html="$t('footer.city')"></span>
          </div>
        </section>
        <section tag="links">
          <div class="mb-2 link" v-for="(link, index) in links" :key="index">
            <dropdown-vue
              :items="link.dropdown.links"
              :title="{ label: link.label }"
              :options="{
                title: {
                  class: 'text-decoration-none dropdown-toggle link',
                },
                item: {
                  class: 'link',
                },
              }"
              v-if="link.dropdown"
            ></dropdown-vue>
            <a v-else :href="link.link" :target="link.target ?? '_blank'" v-html="$t(link.label)" />
          </div>
        </section>
        <section tag="contacts">
          <div class="mb-3" v-html="$t('contacts.title')" />
          <div
            class="mb-2 text-darkgrey font-size-14"
            v-for="(contact, index) in en.contacts.data"
            :key="index"
          >
            <div>
              <span v-html="$t(contact)" />
            </div>
          </div>
        </section>
        <section tag="follow">
          <div>
            <div class="mb-3" v-html="$t('follow_us')" />
            <div class="d-flex justify-content-around">
              <a
                class="d-flex align-items-center justify-content-center me-3 transition icon_wrapper"
                :href="icon.link"
                target="_blank"
                v-for="(icon, index) in icons"
                :key="index"
              >
                <component class="text-blue icon" :is="icon.component" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="border-top border-lightblue py-3">
      <div class="d-flex justify-content-center align-items-center">
        <div class="text-darkgrey">YEAR</div>
        <div class="ms-2">
          <dropdown-vue
            :items="dropdown_items"
            :options="dropdown_options"
            v-model="$i18n.locale"
            @click="changeLocale"
          ></dropdown-vue>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// boot
import { defineComponent } from "@vue/runtime-core";
import en from "../../locale/en";
// composables
import { links } from "../../composables/links";
import { dropdown_items, changeLocale } from "../../composables/locale_dropdown";
// components
import DropdownVue from "@/common/components/Dropdown.vue";
// icons
import Instagram from "@/user/assets/icons/Instagram.vue";
import Facebook from "@/user/assets/icons/Facebook.vue";
import Telegram from "@/user/assets/icons/Telegram.vue";
import Youtube from "@/user/assets/icons/Youtube.vue";

export default defineComponent({
  components: { DropdownVue },
  setup() {
    const dropdown_options = {
      title: {
        class: "cursor-pointer text-decoration-none text-darkgrey dropdown-toggle",
      },
      dropup: true,
    };
    const icons = [
      { component: Telegram, link: "https://t.me/sdu_library" },
      {
        component: Instagram,
        link: "https://instagram.com/sdu_library?igshid=1spec8pmcepnw",
      },
      {
        component: Youtube,
        link: "https://www.youtube.com/channel/UCmuuTTBkfi8aUgUc56VY8kA",
      },
      { component: Facebook, link: "https://www.facebook.com/librarysdu" },
    ];
    return { links, en, icons, dropdown_items, dropdown_options, changeLocale };
  },
});
</script>
<style scoped lang="scss">
.icon_wrapper {
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  cursor: pointer;
  background-color: var(--white);
  &:hover {
    transform: rotate(180deg);
    background-color: var(--orange) !important;
    & > .icon {
      transform: rotate(180deg);
      color: var(--white) !important;
      font-size: 1.6em;
    }
  }
}
.icon {
  font-size: 1.4em;
}
</style>
