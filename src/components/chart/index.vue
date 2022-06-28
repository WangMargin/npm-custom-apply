<template>
  <div ref="chartDom" />
</template>
<script>
import { defineComponent, onMounted, onUnmounted, ref, watch } from 'vue';
import echarts from 'echarts';
import debounce from 'lodash/debounce';
import { addListener, removeListener } from 'resize-detector';
export default defineComponent({
  props: {
    option: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },

  setup(props) {
    const chartDom = ref(null);
    let chart = null;

    const resizeChart = () => {
      chart?.resize();
    };

    const resize = debounce(resizeChart, 300);
    onMounted(() => {
      if (chartDom.value) {
        watch(
          () => props.option,
          () => {
            chart?.setOption(props.option);
          },
          {
            deep: true,
          },
        ); // init echarts

        chart = echarts.init(chartDom.value);
        chart.setOption(props.option);
        addListener(chartDom.value, resize);
      }
    });
    onUnmounted(() => {
      if (chartDom.value) {
        removeListener(chartDom.value, resize);
      }

      chart?.dispose();
      chart = null;
    });
    return {
      chartDom,
    };
  },
});
</script>
