<template>
  <div ref="parent" class="chat_parent bg-white hoverable">
    <div
      class="d-flex align-items-center cursor-pointer h-100"
      @click="showChat()"
      v-if="!chat_shown"
    >
      <div class="d-flex justify-content-center align-items-center flex-shrink-0 chat_icon">
        <span class="font-size-20">
          <Chat />
        </span>
      </div>
      <div class="mx-3 text-nowrap">
        <span v-html="$t('chat.title')" />
      </div>
    </div>
    <div class="h-100 d-flex flex-column w-0" :class="{ 'w-100': chat_shown }">
      <div class="d-flex justify-content-between p-4">
        <div class="font-weight-bold" v-html="$t('chat.action')" />
        <div @click="closeChat()" class="cursor-pointer"><X /></div>
      </div>
      <div
        class="border-top border-lightgrey align-self-start mb-40 w-100 h-100"
        style="z-index: 1"
      >
        <div
          :id="link.id"
          class="border h-100"
          :class="$i18n.locale == link.language ? 'd-block' : 'd-none'"
          v-for="(link, index) in chat_links"
          :key="index"
        ></div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript" lang="ts">
// core
import { defineComponent, ref } from "@vue/runtime-core";

// icons
import Chat from "@/user/assets/icons/Chat.vue";
import X from "@/common/assets/icons/X.vue";

// composables
import { chatScripts, loadScript, Link } from "../../composables/links";

export default defineComponent({
  components: {
    X,
    Chat,
  },
  setup(){
    const chat_shown=ref(false);
    const chat_links: Array<Link> = [
      {
        id: "libchat_591323eae0c67c543ac18bf22cf2e1a7",
        language: "en",
      },
      {
        id: "libchat_26182d2d0a7628dba14f5685b439f7b5",
        language: "ru",
      },
      {
        id: "libchat_2bd2632bd2b55389a65a46993bf9f779",
        language: "kz",
      },
    ];
    const parent=ref({} as HTMLDivElement);



    function showChat():void{
      chat_shown.value = true;
      parent.value.classList.remove("hoverable");
      parent.value.classList.add("chat");
    }

    function closeChat():void {
      chat_shown.value = false;
      parent.value.classList.remove("chat");
      setTimeout(() => {
        parent.value.classList.add("hoverable");
      }, 400);
    }
    function loadExternalLibguideScripts():void {
      chatScripts.forEach((item) => {
        loadScript(item);
      });
    }

    loadExternalLibguideScripts();

    return{
      chat_shown,
      chat_links,
      parent,
      showChat,
      closeChat
    }
  },
});
</script>
<style lang="scss" scoped>
@use "@/common/assets/styles/color_variables.scss" as v;
$transition: 400ms;
$icon_width: 3.75em;

// box shadow color used before
// rgba(141, 155, 164, 0.6)

$box_shadow: 0 0.25em 1.875em v.$darkblue;

.chat_parent {
  position: fixed;
  bottom: $icon_width;
  right: $icon_width;
  z-index: 10;
  height: $icon_width;
  max-width: $icon_width;
  overflow: hidden;
  border-radius: $icon_width;
  box-shadow: $box_shadow;
  transition: $transition;
}
.hoverable {
  width: unset;
  &:hover {
    max-width: 18em;
    & .chat_icon {
      transform: rotate(-360deg);
      color: v.$white;
      background-color: v.$darkblue;
    }
  }
}
.chat_icon {
  width: $icon_width;
  height: $icon_width;
  border-radius: $icon_width;
  transition: $transition;
}

.chat {
  height: 26em;
  width: 25em;
  background-color: v.$white;
  border-radius: 0;
  border-top-right-radius: 1.875em;
  border-top-left-radius: 1.875em;
  box-shadow: $box_shadow;
  max-width: 62.5em;
}
.w-0 {
  width: 0;
}
</style>
