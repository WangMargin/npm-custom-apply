<template>
  <div class="suojing-box">
    <a-card>
      <a-divider>{{ createForm.name || '' }} 报备详情</a-divider>
      <a-form ref="createRef" :model="createForm">
        <a-row :gutter="[15, 15]">
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="name" label="姓名">
              <a-input readonly v-model:value="createForm.name" placeholder="请填写姓名"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="idNo" label="身份证号" :maxlength="18">
              <a-input
                readonly
                v-model:value="createForm.idNo"
                placeholder="请填写身份证号"
              ></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="phone" label="手机号">
              <a-input
                readonly
                v-model:value="createForm.phone"
                placeholder="请填写手机号"
              ></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="temperature" label="体温">
              <a-input
                readonly
                v-model:value="createForm.temperature"
                placeholder="请填写体温"
              ></a-input>
            </a-form-item>
          </a-col>
          <a-divider></a-divider>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="sourceProvinceName" label="省">
              <a-input
                v-model:value="createForm.sourceProvinceName"
                placeholder="请选择省"
                readonly
              ></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="sourceCityName" label="市">
              <a-input
                readonly
                v-model:value="createForm.sourceCityName"
                placeholder="请选择市"
              ></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="sourceAreaName" label="县区">
              <a-input
                readonly
                v-model:value="createForm.sourceAreaName"
                placeholder="请选择县区"
              ></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="sourceDetail" label="详细地址">
              <a-input
                v-model:value="createForm.sourceDetail"
                placeholder="请填写详细地址"
                readonly
              ></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="externalCauses" label="在外事由">
              <a-select
                v-model:value="createForm.externalCauses"
                placeholder="请填写在外事由"
                block
                readonly
                :options="pageData.externalCauses"
              ></a-select>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="comeDate" label="返程日期">
              <a-date-picker
                v-model:value="createForm.comeDate"
                block
                readonly
                style="width: 100%"
                value-format="YYYY-MM-DD"
                :inputReadOnly="true"
                placeholder="请选择返程日期"
              />
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="comeWay" label="返程方式">
              <template #extra>示例：高铁-G999</template>
              <a-input
                readonly
                v-model:value="createForm.comeWay"
                placeholder="请填写返程方式"
              ></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="carNumber" label="车牌号">
              <a-input
                readonly
                v-model:value="createForm.carNumber"
                placeholder="请填写车牌号"
              ></a-input>
            </a-form-item>
          </a-col>
          <a-divider></a-divider>

          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="firstCheck" label="第一次核酸检测结果">
              <a-select
                v-model:value="createForm.firstCheck"
                placeholder="请选择第一次核酸检测结果"
                block
                readonly
                :options="pageData.firstCheck"
              ></a-select>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="firstCheckDate" label="第一次核酸检测日期">
              <a-date-picker
                v-model:value="createForm.firstCheckDate"
                block
                style="width: 100%"
                value-format="YYYY-MM-DD"
                :inputReadOnly="true"
                placeholder="请选择第一次核酸检测日期"
              />
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="secondCheck" label="第二次核酸检测结果">
              <a-select
                v-model:value="createForm.secondCheck"
                placeholder="请选择第二次核酸检测结果"
                block
                readonly
                :options="pageData.firstCheck"
              ></a-select>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="secondCheckDate" label="第二次核酸检测日期">
              <a-date-picker
                v-model:value="createForm.secondCheckDate"
                block
                readonly
                style="width: 100%"
                value-format="YYYY-MM-DD"
                :inputReadOnly="true"
                placeholder="请选择第二次核酸检测日期"
              />
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="healthCode" label="健康码">
              <a-select
                v-model:value="createForm.healthCode"
                placeholder="请选择您的健康码状态"
                block
                readonly
                :options="pageData.healthCode"
              ></a-select>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="vaccination" label="疫苗接种情况">
              <a-select
                v-model:value="createForm.vaccination"
                placeholder="请选择第二次核酸检测结果"
                block
                :options="pageData.vaccination"
              ></a-select>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <div style="text-align: center" v-if="false">
        <a-space align="center">
          <a-popconfirm
            title="您确定重置已填写信息？"
            ok-text="确定"
            cancel-text="取消"
            @confirm="handleCancel"
          >
            <a-button size="large" style="width: 150px;">重置</a-button>
          </a-popconfirm>
          <a-button
            size="large"
            type="primary"
            @click="handleOK"
            class="mg-l10"
            style="width: 150px;"
            :loading="state.loading"
          >
            提交
          </a-button>
        </a-space>
      </div>
    </a-card>
  </div>
</template>

<script>
import { reactive, ref, onMounted, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { getDetail } from '@/api/suojing';
// import moment from 'moment';
export default defineComponent({
  name: '展示填写数据详情',
  components: {},
  props: {},
  setup() {
    const route = useRoute();
    const state = reactive({
      visible: false,
      location_options_1: undefined,
      location_options_2: undefined,
      location_options_3: undefined,
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
      firstCheck: [
        { label: '阴性', value: 0 },
        { label: '阳性', value: 1 },
      ],
      healthCode: [
        { label: '绿码', value: 1 },
        { label: '黄码', value: 2 },
        { label: '红码', value: 3 },
      ],
      vaccination: [
        { label: '一针', value: 1 },
        { label: '两针', value: 2 },
        { label: '三针', value: 3 },
      ],
    });
    const createRef = ref();

    const createForm = reactive({
      sourceAddress: undefined,
      //
      name: '',
      idNo: '',
      phone: '',
      temperature: '',
      sourceProvinceCode: '001',
      sourceProvinceName: '',
      sourceCityCode: '002',
      sourceCityName: '',
      sourceAreaCode: '003',
      sourceAreaName: '',
      sourceDetail: '',
      externalCauses: undefined,
      comeDate: undefined,
      comeWay: '',
      firstCheck: undefined,
      firstCheckDate: undefined,
      secondCheck: undefined,
      secondCheckDate: undefined,
      healthCode: undefined,
      carNumber: '',
      vaccination: undefined,
    });

    onMounted(() => {
      const data = {
        id: route.query.id,
      };
      getDetail(data)
        .then(res => {
          console.log(res);
          Object.assign(createForm, res);
        })
        .catch(err => {
          console.error(err);
        });
    });

    return {
      pageData,
      state,
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
