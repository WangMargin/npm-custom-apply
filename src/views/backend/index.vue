<template>
  <div style="padding: 100px 0;max-width: 400px;margin: 20px auto;">
    <a-divider>统计后台</a-divider>
    <a-card>
      <a-form
        ref="createRef"
        :rules="createRule"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        :model="createForm"
      >
        <a-row :gutter="[15, 15]">
          <a-col :xs="24" :sm="24">
            <a-form-item name="account">
              <a-input v-model:value="createForm.account" placeholder="请填写账号" size="large">
                <template #prefix>
                  <user-outlined />
                </template>
              </a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24">
            <a-form-item name="password">
              <a-input-password
                v-model:value="createForm.password"
                placeholder="请填写密码"
                style="width: 100%"
                size="large"
              >
                <template #prefix>
                  <question-circle-outlined />
                </template>
              </a-input-password>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <div style="text-align: center; padding: 30px 0">
        <a-button @click="handleCancel" v-if="false">取消</a-button>
        <a-button
          size="large"
          block
          type="primary"
          @click="handleOK"
          class="mg-l10"
          :loading="state.loading"
        >
          登录
        </a-button>
      </div>
    </a-card>
  </div>
</template>

<script>
import { reactive, ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import moment from 'moment';
export default {
  name: '返乡登记',
  components: {},
  props: {},
  setup() {
    const router = useRouter();
    const state = reactive({
      loading: false,
    });
    watch(
      () => state.loading,
      () => {
        if (state.loading) {
          setTimeout(() => {
            state.loading = false;
          }, 3500);
        }
      },
    );
    const createRef = ref();

    const createRule = reactive({
      account: [
        {
          required: true,
          message: '请填写账号',
          type: 'string',
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: true,
          message: '请填写密码',
          type: 'string',
          trigger: 'blur',
        },
      ],
    });
    const createForm = reactive({
      account: '',
      password: '',
    });
    onMounted(() => {});

    const handleCancel = () => {
      createRef.value.resetFields();
    };
    const handleOK = () => {
      state.loading = true;
      console.log(
        moment()
          .format('YYYY-MM-DD')
          .replace(/-/g, ''),
      );
      createRef.value
        .validate()
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    };
    return {
      handleOK,
      handleCancel,
      router,
      state,
      createRule,
      createForm,
      createRef,
    };
  },
};
</script>

<style scoped></style>
