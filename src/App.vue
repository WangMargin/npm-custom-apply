<template>
  <a-config-provider :locale="zhCN">
    <router-view></router-view>
  </a-config-provider>
</template>
<script>
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { defineComponent } from 'vue';
dayjs.locale('en');
export default defineComponent({
  setup() {
    return {
      dayjs,
      enUS,
      zhCN,
    };
  },
});
</script>
<style scoped>
.site-config-provider-calendar-wrapper {
  width: 319px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
}
.locale-components {
  border-top: 1px solid #d9d9d9;
  padding-top: 16px;
}

.example {
  margin: 16px 0;
}

.example > * {
  margin-right: 8px;
}

.change-locale {
  margin-bottom: 16px;
}
[data-theme='dark'] .locale-components {
  border-top: 1px solid #303030;
}
[data-theme='dark'] .site-config-provider-calendar-wrapper {
  border: 1px solid #303030;
}
</style>
