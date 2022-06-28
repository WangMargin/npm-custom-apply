<template>
  <a-tooltip :title="(title && title) || undefined">
    <div :class="className" :style="disabled ? disableStyle : null" v-bind="$attrs">
      <div class="inner"></div>
      <span
        role="img"
        aria-label="check"
        class="anticon anticon-check select-icon"
        :style="{ display: checked ? 'block' : 'none' }"
      >
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="check"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
          ></path>
        </svg>
      </span>
    </div>
  </a-tooltip>
</template>
<script>
import { computed, defineComponent } from 'vue';
import { useProProvider } from '../base-layouts/pro-provider';
export default defineComponent({
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: 'light',
    },
    title: {
      type: [Boolean, String, Function],
      default: key => key,
    },
  },
  inheritAttrs: false,

  setup(props) {
    const { i18n: locale, getPrefixCls } = useProProvider();
    const baseClassName = getPrefixCls('checkbox-item');
    const disableStyle = {
      cursor: 'not-allowed',
    };
    const className = computed(() => {
      return {
        [baseClassName]: true,
        [`${baseClassName}-${props.theme}`]: props.theme,
        [`${baseClassName}-disabled`]: props.disabled,
      };
    });
    return {
      baseClassName,
      className,
      disableStyle,
      locale,
    };
  },
});
</script>

<style lang="less" scoped>
@import '~ant-design-vue/es/style/themes/default.less';
@block-item-prefix-cls: ~'@{ant-prefix}-pro-checkbox-item';

.@{block-item-prefix-cls} {
  position: relative;
  margin-right: 16px;
  box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.18);
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  width: 44px;
  height: 36px;
  background-color: #f0f2f5;

  > .inner {
    display: none;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 33%;
    height: 100%;
    background-color: #fff;
    content: '';
  }
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 25%;
    background-color: #fff;
    content: '';
  }

  &-light {
    &::before {
      background-color: #fff;
      content: '';
    }
    &::after {
      background-color: #fff;
    }
  }
  &-dark,
  &-side {
    &::before {
      background-color: #001529;
      content: '';
      z-index: 1;
    }
    &::after {
      background-color: #fff;
    }
  }
  &-top {
    &::before {
      background-color: unset;
      content: none;
    }
    &::after {
      background-color: #001529;
    }
  }
  &-mix {
    &::before {
      background-color: #fff;
      content: ' ';
    }
    &::after {
      background-color: #001529;
    }
  }
  &-realDark {
    background-color: #001529;

    &::before {
      background-color: #001529;
      content: '';
      z-index: 1;
    }
    &::after {
      background-color: #001529;
    }
  }
  &-left {
    &::before {
      background-color: #001529;
      width: 16%;
      content: '';
      z-index: 1;
    }
    > .inner {
      display: block;
      background-color: #fff;
      position: absolute;
      top: 0;
      left: 0;
      width: 33%;
      height: 100%;
      content: '';
    }
  }

  .select-icon {
    position: absolute;
    bottom: 4px;
    right: 6px;
    color: #1890ff;
    font-weight: 700;
    font-size: 14px;
    pointer-events: none;
  }
}
</style>
