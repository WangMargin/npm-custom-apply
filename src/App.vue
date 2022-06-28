<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>
<script>
import { computed, provide } from 'vue';
import { useStore } from 'vuex';
import { STORAGE_LANG_KEY } from '@/store/mutation-type';
import { localStorage } from '@/utils/local-storage';
import useMediaQuery from '@/utils/hooks/useMediaQuery';
import { useI18n } from 'vue-i18n';
import useMenuState, { MenuStateSymbol } from './layouts/use-menu-state';
export default {
  name: 'App',

  setup() {
    const store = useStore();
    const i18n = useI18n();
    const colSize = useMediaQuery();
    const isMobile = computed(() => colSize.value === 'sm' || colSize.value === 'xs');
    const menuState = useMenuState({
      collapsed: isMobile.value,
      openKeys: [],
      selectedKeys: [],
      isMobile,
    });
    const lang = localStorage.get(STORAGE_LANG_KEY, 'zh-CN');

    if (lang) {
      store.dispatch('app/SET_LANG', lang);
    }

    provide('isMobile', isMobile);
    provide(MenuStateSymbol, menuState);
    const locale = computed(() => {
      return i18n.getLocaleMessage(i18n.locale.value).antd;
    });
    return {
      locale,
    };
  },
};
</script>
