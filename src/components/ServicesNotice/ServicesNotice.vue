<template>
  <a-card title="学院公共服务公告栏" class="services-box">
    <a-list item-layout="horizontal" :data-source="data">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta
              description="3天前发布"
          >
            <template #title>
              <strong>{{ item.title }}</strong>
              <span>于2022年08月15日在北京召开讲座，需要三位老师参加。</span>
            </template>
            <template #avatar>
              <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </a-card>
</template>
<script>
import { defineComponent } from 'vue';
const data = [
    {
        title: 'Ant Design Title 1'
    },
    {
        title: 'Ant Design Title 2'
    },
    {
        title: 'Ant Design Title 3'
    },
    {
        title: 'Ant Design Title 4'
    }
];
export default defineComponent({
    setup() {
        return {
            data
        };
    }
});
</script>
<style lang="less" scoped>
.services-box {
  text-align: left;
}
</style>