<template>
  <div class="suojing-box">
    <a-card>
      <a-divider>
        毛演堡镇人员返乡信息
      </a-divider>
      <a-form ref="createRef" :rules="createRule" :model="createForm">
        <a-row :gutter="[15, 8]">
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="name" label="姓名">
              <a-input v-model:value="createForm.name" placeholder="请填写姓名"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="idNo" label="身份证号" :maxlength="18">
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
          <a-divider></a-divider>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="sourceProvinceName" label="省">
              <a-select
                v-model:value="createForm.sourceProvinceName"
                placeholder="请选择省"
                @change="handleOptions"
                :options="state.location_options_1"
              ></a-select>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="sourceCityName" label="市">
              <a-select
                v-model:value="createForm.sourceCityName"
                placeholder="请选择市"
                @change="handleOptions2"
                :disabled="!state.location_options_2"
                :options="state.location_options_2"
              ></a-select>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="sourceAreaName" label="县区">
              <a-select
                v-model:value="createForm.sourceAreaName"
                placeholder="请选择县区"
                :disabled="!state.location_options_3"
                :options="state.location_options_3"
              ></a-select>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="sourceDetail" label="详细地址">
              <a-input
                v-model:value="createForm.sourceDetail"
                placeholder="请填写返程地区的住址"
              ></a-input>
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
                value-format="YYYY-MM-DD"
                :inputReadOnly="true"
                placeholder="请选择返程日期"
              />
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="comeWay" label="返程方式">
              <template #extra>示例：高铁-G999</template>
              <a-input v-model:value="createForm.comeWay" placeholder="请填写返程方式"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="carNumber" label="车牌号">
              <a-input v-model:value="createForm.carNumber" placeholder="请填写车牌号"></a-input>
            </a-form-item>
          </a-col>
          <a-divider></a-divider>

          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="firstCheck" label="第一次核酸检测结果">
              <a-select
                v-model:value="createForm.firstCheck"
                placeholder="请选择第一次核酸检测结果"
                block
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
                :options="pageData.firstCheck"
              ></a-select>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="12">
            <a-form-item name="secondCheckDate" label="第二次核酸检测日期">
              <a-date-picker
                v-model:value="createForm.secondCheckDate"
                block
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
      <div style="text-align: center;margin-top: 20px;">
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
    <a-modal :visible="state.visible" :footer="null" centered>
      <a-result status="success" title="提交成功"></a-result>
    </a-modal>
  </div>
</template>

<script>
import { reactive, ref, onMounted, defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { commonRule } from './js/rule';
import { getDistrict, postAdd } from '@/api/suojing';
import moment from 'moment';
export default defineComponent({
  name: '编辑职务类型数据',
  components: {},
  props: {},
  setup() {
    const router = useRouter();
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

    const createRule = reactive(commonRule);
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

    /**
     * 获取省市区三级联动数据
     */
    const getDistrictFun = data => {
      getDistrict(data)
        .then(res => {
          console.log(res, data);
          if (res.resultCode === '200') {
            if (data.type === 1) {
              //  省份
              state.location_options_1 = res.data.map(item => {
                return Object.assign(item, {
                  label: item.name,
                  value: item.name,
                });
              });
            }
            if (data.type === 2) {
              //  市区
              state.location_options_2 = res.data.map(item => {
                return Object.assign(item, {
                  label: item.name,
                  value: item.name,
                });
              });
            }
            if (data.type === 3) {
              //  县区
              state.location_options_3 = res.data.map(item => {
                return Object.assign(item, {
                  label: item.name,
                  value: item.name,
                });
              });
            }
          }
        })
        .catch(err => {
          console.error(err);
        });
    };
    onMounted(() => {
      getDistrictFun({ type: 1 });
    });

    const handleCancel = () => {
      // console.log('====');
      createRef.value.resetFields();
    };
    const handleOK = () => {
      console.log(createForm);
      createRef.value
        .validate()
        .then(res => {
          const data = Object.assign(createForm, res);
          data.firstCheckDate = moment(data.firstCheckDate).format('YYYY-MM-DD HH:mm:ss');
          data.secondCheckDate = moment(data.secondCheckDate).format('YYYY-MM-DD HH:mm:ss');
          data.comeDate = moment(data.comeDate).format('YYYY-MM-DD HH:mm:ss');
          postAdd(data)
            .then(r => {
              if (r.resultCode === '200') {
                state.visible = true;
              }
            })
            .catch(err => {
              console.error(err);
            });
        })
        .catch(err => {
          console.error(err);
        });
    };

    // 选择省
    const handleOptions = (val, s) => {
      state.location_options_2 = undefined;
      state.location_options_3 = undefined;
      createForm.sourceCityName = undefined;
      createForm.sourceAreaName = undefined;
      const data = {
        type: 2,
        parentCode: s.code,
      };
      getDistrictFun(data);
    };
    // 选择市区
    const handleOptions2 = (val, s) => {
      state.location_options_3 = undefined;
      createForm.sourceAreaName = undefined;
      const data = {
        type: 3,
        parentCode: s.code,
      };
      getDistrictFun(data);
    };

    return {
      handleOptions,
      handleOptions2,
      getDistrictFun,
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
.suojing-box .ant-form-item {
  margin-bottom: 0 !important;
}
.suojing-box .ant-divider-horizontal {
  margin: 0 !important;
}
</style>
