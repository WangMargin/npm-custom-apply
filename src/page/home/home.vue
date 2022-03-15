<template>
  <div>
    <HeaderModule></HeaderModule>
    <PositionModule></PositionModule>
    <a-row>
      <a-col :xs="24" :sm="24" :md="24" :lg="16">
<!--        学院公共服务公告栏-->
        <ServicesNotice></ServicesNotice>
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="8">
<!--        我参加的公共服务事物-->

<!--        我的管理职务-->
      </a-col>
    </a-row>
  </div>
</template>

<script>
import HeaderModule from '@/components/HeaderModule/HeaderModule';
import PositionModule from '@/components/PositionModule/PositionModule';
import ServicesNotice from '@/components/ServicesNotice/ServicesNotice';
export default {
    components: {
        HeaderModule,
        PositionModule,
        ServicesNotice
    }
};
</script>

<style>

</style>