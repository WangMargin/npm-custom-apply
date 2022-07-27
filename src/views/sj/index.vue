<template>
  <div class="suojing-box">
    <a-card>
      <a-divider>
        报备数据统计
      </a-divider>
      <a-form ref="createRef" :rules="createRule" :model="createForm">
        <a-row :gutter="[15, 15]">
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="name" label="姓名">
              <a-input v-model:value="createForm.name" placeholder="请填写姓名"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="idNo" label="身份证号">
              <a-input v-model:value="createForm.idNo" placeholder="请填写身份证号"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="phone" label="手机号">
              <a-input v-model:value="createForm.phone" placeholder="请填写手机号"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="temperature" label="体温">
              <a-input v-model:value="createForm.temperature" placeholder="请填写体温"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="sourceAddress" label="何地返乡">
              <a-input v-model:value="createForm.idNo" placeholder="请填写身份证号"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="externalCauses" label="在外事由">
              <a-select
                v-model:value="createForm.externalCauses"
                placeholder="请填写在外事由"
                block
                :options="pageData.externalCauses"
              ></a-select>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="comeDate" label="返程日期">
              <a-date-picker
                v-model:value="createForm.comeDate"
                block
                style="width: 100%"
                :format="'YYYY-MM-DD'"
                placeholder="请选择返程日期"
              />
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="idNo" label="身份证号">
              <a-input v-model:value="createForm.idNo" placeholder="请填写身份证号"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="idNo" label="身份证号">
              <a-input v-model:value="createForm.idNo" placeholder="请填写身份证号"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="idNo" label="身份证号">
              <a-input v-model:value="createForm.idNo" placeholder="请填写身份证号"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="idNo" label="身份证号">
              <a-input v-model:value="createForm.idNo" placeholder="请填写身份证号"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="idNo" label="身份证号">
              <a-input v-model:value="createForm.idNo" placeholder="请填写身份证号"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="idNo" label="身份证号">
              <a-input v-model:value="createForm.idNo" placeholder="请填写身份证号"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="idNo" label="身份证号">
              <a-input v-model:value="createForm.idNo" placeholder="请填写身份证号"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="idNo" label="身份证号">
              <a-input v-model:value="createForm.idNo" placeholder="请填写身份证号"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="idNo" label="身份证号">
              <a-input v-model:value="createForm.idNo" placeholder="请填写身份证号"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="idNo" label="身份证号">
              <a-input v-model:value="createForm.idNo" placeholder="请填写身份证号"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="idNo" label="身份证号">
              <a-input v-model:value="createForm.idNo" placeholder="请填写身份证号"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="idNo" label="身份证号">
              <a-input v-model:value="createForm.idNo" placeholder="请填写身份证号"></a-input>
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
    </a-card>
  </div>
</template>

<script>
import { reactive, ref, onMounted, defineComponent } from 'vue';
import { useRouter } from 'vue-router';
// import { message, Modal } from 'ant-design-vue';
export default defineComponent({
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
    const pageData = reactive({
      externalCauses: [
        { label: '务工', value: 1 },
        { label: '求学', value: 2 },
        { label: '旅游', value: 3 },
        { label: '就医', value: 4 },
        { label: '其他', value: 5 },
      ],
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
      name: '王宜涛',
      idNo: '13042719900325691X',
      phone: '13601358946',
      temperature: '36.2',
      sourceProvinceCode: '001',
      sourceProvinceName: '河北省',
      sourceCityCode: '002',
      sourceCityName: '邯郸市',
      sourceAreaCode: '003',
      sourceAreaName: '磁县',
      sourceDetail: '振兴路复原小区A栋501',
      externalCauses: 1,
      comeDate: undefined,
      comeWay: '电动自行车',
      firstCheck: 0,
      firstCheckDate: '2022-07-26 12:03:12',
      secondCheck: 0,
      secondCheckDate: '2022-07-26 12:03:12',
      healthCode: 1,
      carNumber: 'DS7A07',
      vaccination: 2,
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
      pageData,
      router,
      state,
      createRule,
      createForm,
      createRef,
    };
  },
});
</script>

<style scoped>
.suojing-box {
  max-width: 1000px;
  margin: 20px auto;
}
</style>
