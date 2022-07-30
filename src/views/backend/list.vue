<template>
  <a-card :bodyStyle="{ padding: '10px' }">
    <a-card :bodyStyle="{ padding: '10px' }">
      <a-form ref="createRef" :model="createForm" :rules="rules">
        <a-row :gutter="[15, 15]">
          <a-col :xs="24" :sm="24" :md="12">
            <a-form-item name="name" label="姓名">
              <a-input v-model:value="createForm.name" placeholder="请填写姓名"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="12">
            <a-form-item name="phone" label="手机号">
              <a-input
                v-model:value="createForm.phone"
                placeholder="请填写手机号"
                style="width: 100%"
              ></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="12">
            <a-form-item name="idNo" label="身份证号">
              <a-input v-model:value="createForm.idNo" placeholder="请填写身份证号"></a-input>
            </a-form-item>
          </a-col>
          <a-col>
            <a-button @click="handleCancel">重置</a-button>
            <a-button type="primary" @click="handleOK" class="mg-l10" :loading="state.loading">
              筛选
            </a-button>
          </a-col>
        </a-row>
      </a-form>
    </a-card>
    <a-card style="margin: 20px 0 0 0;" :bodyStyle="{ padding: '10px' }">
      <a-table
        class="ant-table-striped"
        size="middle"
        :scroll="{ x: 800 }"
        :pagination="state.pagination"
        @change="handleChangeTable"
        :columns="columns"
        :dataSource="state.dataSource"
        :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'action'">
            <a-button type="link" @click="handleDetail(record)">详情</a-button>
          </template>
        </template>
      </a-table>
    </a-card>
    <session-module></session-module>
  </a-card>
</template>

<script>
import { onMounted, reactive, ref, watchEffect } from 'vue';
import { postPageList } from '@/api/suojing';
import SessionModule from './modules/session';
import { useRouter } from 'vue-router';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '身份证号',
    dataIndex: 'idNo',
  },
  {
    title: '手机号',
    dataIndex: 'phone',
  },
  {
    title: '地址',
    dataIndex: 'address',
    customRender: row => {
      return `${row.record.sourceProvinceName || ''} ${row.record.sourceCityName || ''} ${row.record
        .sourceAreaName || ''}`;
    },
  },
  {
    title: '在外事由',
    dataIndex: 'externalCauses',
    customRender: ({ text }) => {
      if (text === 1) {
        return '务工';
      } else if (text === 2) {
        return '求学';
      } else if (text === 3) {
        return '旅游';
      } else if (text === 4) {
        return '就医';
      } else {
        return '其他';
      }
    },
  },
  {
    title: '返程日期',
    dataIndex: 'comeDate',
  },
  {
    title: '健康码状态',
    dataIndex: 'healthCode',
    customRender: ({ text }) => {
      if (text === 1) {
        return '绿码';
      } else if (text === 2) {
        return '黄码';
      } else {
        return '红码';
      }
    },
  },
  {
    title: '疫苗接种情况',
    dataIndex: 'vaccination',
    customRender: ({ text }) => {
      if (text === 1) {
        return '已接种第一针';
      } else if (text === 2) {
        return '已接种第二针';
      } else {
        return '已接种第三针';
      }
    },
  },
  {
    title: '填报时间',
    dataIndex: 'createTime',
  },
  {
    title: '操作',
    dataIndex: 'action',
  },
];
export default {
  name: 'list',
  components: {
    SessionModule,
  },
  setup() {
    const createRef = ref();
    const router = useRouter();
    const state = reactive({
      dataSource: [],
      loading: false,
      data: undefined,
      pagination: {
        current: 1,
        pageSize: 10,
        pageSizeOptions: ['1', '2', '4', '100'],
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} 条数据`,
        total: 100,
        showSizeChanger: true,
      },
    });
    watchEffect(() => {
      if (state.loading) {
        setTimeout(() => {
          state.loading = false;
        }, 3000);
      }
    });
    const FunPageList = data => {
      state.loading = true;
      const params = {
        pageSize: state.pagination.pageSize,
        pageNo: state.pagination.current,
      };
      if (data) {
        Object.assign(params, data);
      }
      postPageList(params)
        .then(res => {
          if (res.resultCode === '200') {
            state.dataSource = res.data.list;
            state.pagination.total = res.data.total;
            state.loading = false;
          }
        })
        .catch(err => {
          console.error(err);
        });
    };
    onMounted(() => {
      FunPageList();
    });

    const createForm = reactive({
      name: '',
      phone: '',
      idNo: '',
    });
    const rules = {
      name: [
        {
          required: false,
          trigger: 'blur',
        },
      ],
      phone: [
        {
          required: false,
          validator: (rule, value) => {
            if (value !== '' && value.length !== 11) {
              return Promise.reject('请填写正确的手机号');
            } else {
              return Promise.resolve();
            }
          },
          trigger: 'blur',
        },
      ],
      idNo: [
        {
          required: false,
          validator: (rule, value) => {
            if (value !== '' && value.length !== 18) {
              return Promise.reject('请填写正确的身份证号');
            } else {
              return Promise.resolve();
            }
          },
          trigger: 'blur',
        },
      ],
    };
    const handleCancel = () => {
      createRef.value.resetFields();
      state.data = undefined;
      FunPageList();
    };
    const handleOK = () => {
      createRef.value
        .validate()
        .then(res => {
          const data = {
            name: res.name || '',
            phone: res.phone || '',
            idNo: res.idNo || '',
          };
          state.data = data;
          FunPageList(data);
        })
        .catch(err => {
          console.error(err);
        });
    };

    const handleChangeTable = e => {
      state.pagination.current = e.current;
      state.pagination.pageSize = e.pageSize;
      FunPageList(state.data);
    };
    const handleDetail = record => {
      console.log(record);
      router.push({
        name: 'backend_detail',
        query: {
          id: record.id,
        },
      });
    };
    return {
      handleDetail,
      handleChangeTable,
      rules,
      createForm,
      handleOK,
      handleCancel,
      createRef,
      state,
      columns,
      FunPageList,
    };
  },
};
</script>

<style scoped>
.ant-table-striped :deep(.table-striped) td {
  background-color: #fafafa;
}
.mg-l10 {
  margin-left: 10px;
}
</style>
