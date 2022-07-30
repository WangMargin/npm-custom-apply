<template>
  <div style="padding: 100px 0;max-width: 400px;margin: 20px auto;">
    <a-divider>统计后台</a-divider>
    <a-card>
      <a-form
        ref="createRef"
        :rules="createRule"
        :label-col="{ span: 0 }"
        :wrapper-col="{ span: 24 }"
        :model="createForm"
      >
        <a-row :gutter="[15, 15]">
          <a-col :xs="24" :sm="24">
            <a-form-item name="account">
              <a-input
                v-model:value="createForm.account"
                placeholder="请填写账号"
                size="large"
                block
              >
                <template #prefix>
                  <user-outlined />
                </template>
              </a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24">
            <a-form-item name="password">
              <a-input-password
                block
                v-model:value="createForm.password"
                placeholder="请填写密码"
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
import { message } from 'ant-design-vue';
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
      createRef.value
        .validate()
        .then(res => {
          console.log(res);
          const u_name = res.account;
          const u_pw = res.password;
          const _date_ = moment()
            .format('YYYY-MM-DD')
            .replace(/-/g, '');
          console.log(_date_);
          if (u_name === 'admin' && u_pw === _date_) {
            console.log(_date_);
            sessionStorage.setItem(
              process.env.VUE_APP_SJ_LOGIN,
              moment().format('YYYY-MM-DD HH:mm'),
            );
            router.replace({
              name: 'backend_pagelist',
            });
          } else {
            message.warn('账号或密码填写错误');
          }
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
