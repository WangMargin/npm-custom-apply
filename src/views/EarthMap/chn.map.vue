<template>
  <div>
    <h1>chn.map</h1>
    <div style="width:500px;height:600px;background: #f5f5f5" id="map"></div>
    <!--    <div-->
    <!--      style="justify-content: center; position: relative;width:100%;height:90%;background: #f5f5f5"-->
    <!--      id="map"-->
    <!--    ></div>-->
  </div>
</template>

<script>
import { Scene } from '@antv/l7';
import { DrillDownLayer } from '@antv/l7-district';
import { Mapbox } from '@antv/l7-maps';
import { onUpdated, defineComponent, onActivated, onMounted } from 'vue';
export default defineComponent({
  name: 'chn.map',
  setup() {
    function drawMap() {
      const colors = ['#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70'];
      const scene = new Scene({
        id: 'map',
        map: new Mapbox({
          center: [116.2825, 39.9],
          pitch: 0,
          style: 'blank',
          zoom: 3,
          minZoom: 3,
          maxZoom: 10,
        }),
      });
      scene.on('loaded', () => {
        new DrillDownLayer(scene, {
          data: [],
          viewStart: 'Country',
          viewEnd: 'County',
          fill: {
            color: {
              field: 'NAME_CHN',
              values: colors,
            },
          },
          popup: {
            enable: true,
            Html: props => {
              return `<span>${props.NAME_CHN}</span>`;
            },
          },
        });
      });
      scene.on('click', e => {
        console.log(e);
      });
    }
    onMounted(() => {
      drawMap();
    });
    onActivated(() => {
      // drawMap();
    });
    onUpdated(() => {
      // drawMap();
    });
  },
});
</script>

<style scoped></style>
