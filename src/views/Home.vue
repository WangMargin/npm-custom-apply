<template>
  <div class="home" style="max-width: 1200px;margin: 0 auto">
    <a-row style="width: 100%">
      <a-col :span="24">
        <a-card style="border: none">
          <template #title>数据管理</template>
          <a-button @click="handleAuthorization" size="default" type="primary">授权</a-button>
          <a-divider style="border-color: #7cb305" dashed orientation="left">
            <a-tag color="blue">剩余点击量：45454545</a-tag>
          </a-divider>
          <a-table
            class="ant-table-striped"
            :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)"
            :columns="state.columns"
            :dataSource="state.data"
            :locale="{ emptyText: '暂无数据' }"
            size="middle"
          ></a-table>
        </a-card>
      </a-col>
    </a-row>
    <!--    授权modal-->
    <a-modal
      :visible="state.visible"
      centered
      cancelText="取消"
      okText="确定"
      @cancel="state.visible = !state.visible"
      @ok="confirmFn"
    >
      <template #title>授权</template>
      <div>
        <a-form v-bind="state.layout" :colon="false">
          <a-form-item label="密码">
            <a-input v-model:value="state.password" placeholder="请输入授权密码"></a-input>
          </a-form-item>
          <a-row>
            <a-col :sm="0" :xs="24" :md="0">
              <a-tag color="#cd201f">
                <template #icon>
                  <youtube-outlined />
                </template>
                此授权为永久授权，若非信任设备请手动退出
              </a-tag>
            </a-col>
            <a-col :sm="18" :xs="0" :md="18" :push="4">
              <a-tag color="#cd201f">
                <template #icon>
                  <youtube-outlined />
                </template>
                此授权为永久授权，若非信任设备请手动退出
              </a-tag>
            </a-col>
          </a-row>
        </a-form>
      </div>
    </a-modal>
  </div>
</template>

<script>
import { getList } from '@/api/common';
import { reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { message } from 'ant-design-vue';
export default {
  name: 'Home',
  components: {},
  setup() {
    const route = useRoute();
    const state = reactive({
      visible: false,
      password: '',
      layout: {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 18,
        },
      },
      columns: [
        { dataIndex: 'date', title: '日期' },
        { dataIndex: 'num', title: '点击数' },
      ],
      data: [
        { date: '2020-03-12', num: parseFloat((Math.random() * 10000).toFixed(0)) },
        { date: '2020-03-12', num: parseFloat((Math.random() * 10000).toFixed(0)) },
        { date: '2020-03-12', num: parseFloat((Math.random() * 10000).toFixed(0)) },
      ],
    });
    onMounted(() => {
      const params = {
        id: route.query.id,
        v: route.query.v,
      };
      getList(params)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    });
    const handleAuthorization = () => {
      state.visible = true;
    };
    const confirmFn = () => {
      if (!state.password || state.password.length < 4) {
        message.warning('请输入正确的授权密码');
      }
    };

    return { state, handleAuthorization, confirmFn };
  },
};
</script>
<style scoped>
.ant-table-striped :deep(.table-striped) td {
  background-color: #fafafa;
}
</style>
