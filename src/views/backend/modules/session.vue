<template>
  <div></div>
</template>

<script>
import { useRouter } from 'vue-router';
import { onMounted, reactive } from 'vue';
import { message } from 'ant-design-vue';

export default {
  name: 'session',
  setup() {
    const router = useRouter();
    const state = reactive({});
    onMounted(() => {
      if (!sessionStorage.getItem(process.env.VUE_APP_SJ_LOGIN)) {
        message.warn('登录过期，请重新登录！');
        router.replace({
          name: 'backend_sign_in',
        });
      }
    });
    return {
      state,
    };
  },
};
</script>

<style scoped></style>
