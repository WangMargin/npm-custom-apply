<template>
  <div :class="baseClassName" :style="{ width }">
    <div :class="`${baseClassName}-left`">
      <slot name="extra">{{ extra }}</slot>
    </div>
    <div :class="`${baseClassName}-right`">
      <slot />
    </div>
  </div>
</template>
<script>
import { defineComponent, computed } from 'vue';
import { useProProvider } from '@/components/base-layouts/pro-provider';
export default defineComponent({
  name: 'FooterToolBar',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-pro',
    },
    collapsed: {
      type: Boolean,
      default: false,
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
    hasSiderMenu: {
      type: Boolean,
      default: false,
    },
    siderWidth: {
      type: Number,
      default: undefined,
    },
    extra: {
      type: [String, Object],
      default: '',
    },
  },

  setup(props) {
    const { getPrefixCls } = useProProvider();
    const baseClassName = getPrefixCls('footer-bar');
    const width = computed(() => {
      if (!props.hasSiderMenu) {
        return undefined;
      } // 0 or undefined

      if (!props.siderWidth) {
        return '100%';
      }

      return props.isMobile ? '100%' : `calc(100% - ${props.siderWidth}px)`;
    });
    return {
      baseClassName,
      width,
    };
  },
});
</script>

<style lang="less" scoped>
@import './index.less';
</style>
