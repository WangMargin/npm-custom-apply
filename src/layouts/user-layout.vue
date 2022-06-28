<template>
  <div class="ant-pro-user-layout">
    <div class="container">
      <div class="top">
        <div class="header">
          <a href="/">
            <img src="~@/assets/logo.svg" class="logo" alt="logo" />
            <span class="title">Admin Pro</span>
          </a>
        </div>
        <div class="desc">
          Admin Pro 是针对 Vue3 语法开发的企业级脚手架
        </div>
      </div>
      <div class="main-container">
        <a-row style="height: 100%;align-items: center;justify-content: center;">
          <a-col :span="12" style="text-align: center; height: 416px;">
            <a-carousel>
              <template #customPaging>
                <span class="dot"></span>
              </template>
              <div class="banner-item"><img style="width: 378px;" src="@/assets/user/1.png" /></div>
              <div class="banner-item"><img style="width: 378px;" src="@/assets/user/2.png" /></div>
              <div class="banner-item"><img style="width: 378px;" src="@/assets/user/3.png" /></div>
              <div class="banner-item"><img style="width: 378px;" src="@/assets/user/1.png" /></div>
            </a-carousel>
          </a-col>
          <a-col :span="12">
            <div style="margin: 0 40px;">
              <h2>登录</h2>
              <p>手机号验证登录</p>
              <a-input-group size="large" compact>
                <a-select size="large" defaultValue="86" style="width: 25%">
                  <a-select-option value="86">
                    +86
                  </a-select-option>
                  <a-select-option value="87">
                    +87
                  </a-select-option>
                </a-select>
                <a-input style="width: 75%" />
              </a-input-group>
              <a-button block size="large" type="primary" style="margin-top: 24px;">
                下一步
              </a-button>
            </div>
          </a-col>
        </a-row>
      </div>
      <global-footer />
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { Carousel } from 'ant-design-vue';
import { GlobalFooter } from '@/components';
export default defineComponent({
  components: {
    GlobalFooter,
    [Carousel.name]: Carousel,
  },
});
</script>

<style lang="less" scoped>
.ant-pro-user-layout {
  height: 100vh;
  background: #f0f2f5;

  .container {
    width: 100%;
    min-height: 100%;
    background: #f0f2f5 url(~@/assets/background.svg) no-repeat 50%;
    background-size: 100%;
    padding: 110px 0 0;
    position: relative;
    a {
      text-decoration: none;
    }
    .top {
      text-align: center;
      .header {
        height: 44px;
        line-height: 44px;
        .badge {
          position: absolute;
          display: inline-block;
          line-height: 1;
          vertical-align: middle;
          margin-left: -12px;
          margin-top: -10px;
          opacity: 0.8;
        }
        .logo {
          height: 44px;
          vertical-align: top;
          margin-right: 16px;
          border-style: none;
        }
        .title {
          font-size: 33px;
          color: rgba(0, 0, 0, 0.85);
          font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
          font-weight: 600;
          position: relative;
          top: 2px;
        }
      }
      .desc {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.45);
        margin-top: 12px;
        margin-bottom: 40px;
      }
    }

    .main-container {
      background: #ffffff;
      min-width: 1000px;
      width: 1000px;
      height: 508px;
      margin: 0 auto;

      ::v-deep(.slick-active) {
        .dot {
          background-color: #999999;
        }
      }

      .dot {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #d8d8d8;
      }

      .banner-item {
        text-align: center;
        height: 416px;

        > img {
          margin: 0 auto;
          height: 394px;
        }
      }
    }

    .footer {
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 0 16px;
      margin: 48px 0 24px;
      text-align: center;
      .links {
        margin-bottom: 8px;
        font-size: 14px;
        a {
          color: rgba(0, 0, 0, 0.45);
          transition: all 0.3s;
          &:not(:last-child) {
            margin-right: 40px;
          }
        }
      }
      .copyright {
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
      }
    }
  }
}
</style>
