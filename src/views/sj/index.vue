<template>
  <div>
    <a-form ref="createRef" :rules="createRule" :model="createForm">
      <a-row :gutter="[15, 15]">
        <a-col :xs="24" :sm="24">
          <a-form-item name="category" label="类型名称">
            <a-input v-model:value="createForm.category" placeholder="请填写职务类型名称"></a-input>
          </a-form-item>
        </a-col>
        <a-col :xs="24" :sm="24">
          <a-form-item name="standard" label="时长标准">
            <a-input-number
              v-model:value="createForm.standard"
              placeholder="请填写时长标准"
              style="width: 100%"
            ></a-input-number>
          </a-form-item>
        </a-col>
        <a-col :xs="24" :sm="24">
          <a-form-item name="desc" label="类型描述">
            <a-input v-model:value="createForm.desc" placeholder="请填写职务类型描述"></a-input>
          </a-form-item>
        </a-col>
        <a-col :xs="24" :sm="24">
          <a-form-item name="comment" label="备注">
            <a-textarea v-model:value="createForm.comment" placeholder="请填写备注信息" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <div style="text-align: center; padding: 30px 0">
      <a-button @click="handleCancel">取消</a-button>
      <a-button type="primary" @click="handleOK" class="mg-l10" :loading="state.loading">
        确定
      </a-button>
    </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted, inject } from 'vue';
import { useRouter } from 'vue-router';
// import { message, Modal } from 'ant-design-vue';
export default {
  name: '编辑职务类型数据',
  components: {},
  props: {},
  setup() {
    const router = useRouter();
    const state = reactive({
      loading: false,
      subject: undefined,
      flag: false,
    });
    const createRef = ref();

    const createRule = reactive({
      category: [
        {
          required: true,
          message: '请填写职务类型名称',
          type: 'string',
          trigger: 'blur',
        },
      ],
      standard: [
        {
          required: true,
          message: '请填写时长标准',
          type: 'number',
          min: 0,
          trigger: 'blur',
        },
      ],
      desc: [
        {
          required: true,
          message: '请填写职务类型描述',
          type: 'string',
          trigger: 'blur',
        },
      ],
      comment: [
        {
          required: false,
          message: '请填写备注',
          type: 'string',
          trigger: 'blur',
        },
      ],
    });
    const createForm = reactive({
      category: '', // 职务类型名称
      standard: '', // 时长标准
      desc: '', // 职务类型描述
      comment: '', // 备注
    });
    onMounted(() => {});

    const handleCancel = () => {
      // console.log('====');
      createRef.value.resetFields();
    };
    const handleOK = () => {
      createRef.value
        .validate()
        .then(res => {
          console.log(res, '====checkout===');
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
