<template>
  <template v-if="store.cacheList.length">
    <div class="ant-pro-multi-tab-fixed" v-if="fixed"></div>
    <a-tabs
      type="editable-card"
      v-bind="$attrs"
      :activeKey="activeKey"
      :style="{
        background: '#FFF',
        margin: 0,
        paddingTop: '6px',
        width: sideWidth,
      }"
      hide-add
      :class="{ 'ant-pro-multi-tab-wrap': true, 'ant-pro-multi-tab-wrap-fixed': fixed }"
      @change="handleActiveKeyChange"
      @edit="handleEdit"
    >
      <template #tabBarExtraContent>
        <a-dropdown>
          <ellipsis-outlined
            :rotate="90"
            class="ant-dropdown-link ant-pro-multi-tab-dropdown-menu-btn"
          />
          <template #overlay>
            <a-menu>
              <a-menu-item @click="handleCloseAll">
                <a href="javascript:;">关闭全部</a>
              </a-menu-item>
              <a-menu-item @click="handleReloadPage(undefined)">
                <a href="javascript:;">刷新当前页</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </template>
      <a-tab-pane :key="item.route.path" v-for="item in store.cacheList" :closable="!item.lock">
        <template #tab>
          <a-dropdown :trigger="['contextmenu']">
            <span>
              <!--              {{ t(`${item.route.meta.title}`) }}-->
              {{ `${item.route.meta.title}` }}
              <reload-outlined
                v-if="store.current === item.route.path"
                class="ant-pro-multi-tab-reload-btn"
                @click="handleReloadPage(item.route.path)"
                :spin="spin"
              />
            </span>
            <template #overlay>
              <a-menu>
                <a-menu-item @click="handleCloseAll">
                  <a href="javascript:;">关闭全部</a>
                </a-menu-item>
                <a-menu-item @click="handleReloadPage(item.route.path)">
                  <a href="javascript:;">刷新当前页</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </template>
      </a-tab-pane>
    </a-tabs>
  </template>
</template>
<script>
import { defineComponent, ref, computed, inject } from 'vue';
import { ReloadOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
import { useI18n } from 'vue-i18n';
import { useMultiTab } from './multi-tab-store';
import { injectMenuState } from '@/layouts/use-menu-state';
export default defineComponent({
  name: 'MultiTab',
  inheritAttrs: false,
  props: {
    store: {
      type: Object,
      default: () => undefined,
    },
    fixed: {
      type: Boolean,
      default: () => false,
    },
    defaultHomePage: {
      type: String,
      default: () => '/dashboard/analysis',
    },
  },

  setup(props) {
    const menuState = injectMenuState();
    const activeKey = computed(() => {
      return (
        menuState.selectedKeys &&
        menuState.selectedKeys.value[menuState.selectedKeys.value.length - 1]
      );
    });
    const isMobile = inject('isMobile', ref(false));
    const sideWidth = computed(
      () =>
        (menuState.sideWidth &&
          menuState.sideWidth.value &&
          !isMobile.value &&
          props.fixed &&
          `calc(100% - ${menuState.sideWidth.value}px)`) ||
        '100%',
    );
    const { t } = useI18n();
    const spin = ref(false);
    const [{ refresh, close, closeAll }] = useMultiTab();

    const handleActiveKeyChange = key => {
      menuState.selectedKeys.value = [key];
    };

    const handleReloadPage = async key => {
      spin.value = true;
      await refresh(key);
      spin.value = false;
    };

    const handleCloseAll = () => {
      closeAll();
    };

    const handleEdit = (target, action) => {
      if (action === 'remove') {
        close(target);
      }
    };

    return {
      t,
      activeKey,
      handleActiveKeyChange,
      handleReloadPage,
      handleCloseAll,
      handleEdit,
      spin,
      sideWidth,
    };
  },

  components: {
    ReloadOutlined,
    EllipsisOutlined,
  },
});
</script>

<style lang="less" scoped>
@import '../base-layouts/basic-layout.less';

@multi-tab-height: 62px;
.ant-pro-multi-tab-wrap :deep(.ant-tabs-bar) {
  padding-left: 16px;
}
.ant-pro-multi-tab-fixed {
  width: 100%;
  height: @multi-tab-height;
  background: transparent;
}
.ant-pro-multi-tab-wrap-fixed {
  height: @multi-tab-height;
  width: 100%;
  position: fixed;
  top: @pro-layout-header-height;
  z-index: 9;
  transition: width 0.2s;
  right: 0;
}
.ant-pro-multi-tab-dropdown-menu-btn {
  padding: 12px;
  margin-right: 8px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: @primary-color;
  }
}

.ant-pro-multi-tab-reload-btn {
  margin-left: 8px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 12px;

  &:hover {
    color: @primary-color;
  }
}
</style>
