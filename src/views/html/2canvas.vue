<template>
  <div>
    <div ref="canvasContentRef">
      <div class="canvas-content">
        <h1>DETAIL</h1>
        <h1>DETAIL</h1>
        <h1>DETAIL</h1>
        <h1>DETAIL</h1>
        <h1>DETAIL</h1>
        <h1>DETAIL</h1>
        <h1>DETAIL</h1>
        <h1>DETAIL</h1>
        <h1>DETAIL</h1>
      </div>
    </div>
    //需要画成图片的内容
    <a-button @click="htmlCanvasFn">截图</a-button>
    <div class="canvas_img " v-if="state.canvasImg">
      //展示画出的图片
      <img :src="state.canvasImg" />
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import { onMounted, reactive, ref, defineComponent } from 'vue';
export default defineComponent({
  name: '2canvas',
  setup() {
    const state = reactive({
      canvasImg: '',
    });
    const htmlRef = ref();
    const canvasContentRef = ref();
    onMounted(() => {});
    const htmlCanvasFn = () => {
      const canvasContent = canvasContentRef.value;
      html2canvas(canvasContent, {
        dpi: window.devicePixelRatio * 2,
        scale: 2,
        width: canvasContent.offsetWidth,
        height: canvasContent.offsetHeight,
        scrollY: 0,
        scrollX: 0,
        useCORS: true,
      }).then(canvas => {
        const url = canvas.toDataURL('image/png');
        console.log(url);
      });
    };
    return {
      canvasContentRef,
      htmlCanvasFn,
      state,
      htmlRef,
    };
  },
});
</script>

<style scoped>
.canvas-content {
  width: 375px;
  height: 700px;
  background: red;
}
</style>
