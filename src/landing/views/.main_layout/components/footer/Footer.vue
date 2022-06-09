<template>
  <div class="bg-darkblue text-white">
    <div class="padding py-5">
      <div class="d-flex justify-content-between">
        <section tag="logo">
          <img src="@/common/assets/images/logo_white.png" class="logo" />
          <div class="mt-5 text-darkgrey">
            <span v-t="'footer.sdu'"></span>
            <span v-t="'footer.city'" class="d-block fw-bold"></span>
          </div>
        </section>
        <section tag="links">
          <div v-for="(link, index) in links" :key="index" class="mb-2 link">
            <dropdown-vue
              v-if="link.dropdown"
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
            ></dropdown-vue>
            <a v-else v-t="link.label" :href="link.link" :target="link.target ?? '_blank'" />
          </div>
        </section>
        <section tag="contacts">
          <div v-t="'contacts.title'" class="mb-3" />
          <div
            v-for="(contact, index) in en.contacts.data"
            :key="index"
            class="mb-2 text-darkgrey font-size-14"
          >
            <div>
              <span v-t="contact" />
            </div>
          </div>
        </section>
        <section tag="follow">
          <div>
            <div v-t="'follow_us'" class="mb-3" />
            <div class="d-flex justify-content-around">
              <a
                v-for="(icon, index) in icons"
                :key="index"
                class="d-flex align-items-center justify-content-center me-3 transition icon_wrapper"
                :href="icon.link"
                target="_blank"
              >
                <component :is="icon.component" class="text-blue icon" />
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
            v-model="$i18n.locale"
            :items="dropdown_items"
            :options="dropdown_options"
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
import DropdownVue, { DropdownOptions } from "@/common/components/Dropdown.vue";
// icons
import Instagram from "@/user/assets/icons/Instagram.vue";
import Facebook from "@/user/assets/icons/Facebook.vue";
import Telegram from "@/user/assets/icons/Telegram.vue";
import Youtube from "@/user/assets/icons/Youtube.vue";

export default defineComponent({
  name: "FooterVue",
  components: { DropdownVue },
  setup() {
    const dropdown_options: DropdownOptions = {
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
