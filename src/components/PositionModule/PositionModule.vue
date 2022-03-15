<template>
  <a-card>
    <a-row algin="middle">
      <a-col :sm="24" :xs="24" :md="24" :lg="10" class="position-left">
        <div>
          <a-avatar size="large" style="background-color: #87d068">
            <template #icon>
              <UserOutlined />
            </template>
          </a-avatar>
        </div>
        <div class="decs">
          <div class="font-20 font-700">早上好，xxx老师</div>
          <div class="font-14">我的职务信息是。。。。。。</div>
        </div>
      </a-col>
      <a-col :sm="24" :xs="24" :md="24" :lg="14">
        <a-row>
          <a-col :span="8">
            <div class="font-14">本学年未完成公服时长</div>
            <div class="font-28">
              <span>56小时</span>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="font-14">已完成公服时长</div>
            <div class="font-28">
              <span>56</span>
              <span class="font-16">/324</span>
              <span class="font-16">小时</span>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="font-14">职务类公服时长</div>
            <div class="font-28">
              <span>33小时</span>
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </a-card>
</template>

<script>
export default {
    name: 'PositionModule'
};
</script>

<style scoped lang="less">
.position-left {
  display: flex;
  align-items: center;
  .decs {
    text-align: left;
    margin-left: 15px;
  }
}

</style>