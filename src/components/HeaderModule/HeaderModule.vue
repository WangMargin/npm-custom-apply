<template>
  <div class="header-module">
    <div class="logo">
      <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
      <span>教师公共服务</span>
    </div>
    <div class="handle">
<!--      通知-->
      <div style="margin-right: 30px;">
        <a-badge count="11" :offset="[10, 0]">
          <BellOutlined />
        </a-badge>
      </div>
<!--      主体切换-->
      <a-button type="primary" ghost >
        <template #icon>
          <SwapOutlined />
        </template>
        某某某老师
      </a-button>
<!--      切换操作员-->
      <a-dropdown placement="bottomRight">
        <template #overlay>
          <a-menu @click="handleMenuClick">
            <a-menu-item key="1">
              <UserOutlined />
              1st menu item
            </a-menu-item>
            <a-menu-item key="2">
              <UserOutlined />
              2nd menu item
            </a-menu-item>
            <a-menu-item key="3">
              <UserOutlined />
              3rd item
            </a-menu-item>
          </a-menu>
        </template>
        <a-button class="handle-user" type="link">
          <a-avatar style="background-color: #87d068" size="small" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <span>操作员</span>
<!--          <DownOutlined />-->
        </a-button>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
    name: 'HeaderModule',
    setup () {
        const state = reactive({});
        return {
            state
        };
    }
};
</script>

<style scoped lang="less">
  .header-module {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    .logo {
      font-size: 20px;
      color: #bb133e;
      display: flex;
      align-items: center;
       img {
         margin-right: 10px;
         width: 30px;
         height: 30px;
         display: inline-block;
         background: #2c3e50;
       }
    }
    .handle {
      display: flex;
      align-items: center;
    }
    .handle-user {
      display: flex;
      align-items: center;
      span {
        margin-right: 15px;
      }
    }
  }
</style>