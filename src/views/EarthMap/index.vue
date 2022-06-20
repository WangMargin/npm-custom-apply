<template>
  <div>
    <h1>MAP</h1>
    <div style="width:800px;height:900px;background: #f5f5f5;margin: 100px" id="earth_map"></div>
    <!--    <div-->
    <!--      style="justify-content: center; position: relative;width:100%;height:90%;background: #f5f5f5"-->
    <!--      id="map"-->
    <!--    ></div>-->
  </div>
</template>

<script>
import { reactive, onUpdated, onMounted, defineComponent } from 'vue';
// 1、引入对应模块
import { Scene, Earth, EarthLayer, LineLayer } from '@antv/l7';
export default defineComponent({
  name: 'index',
  setup() {
    const state = reactive({});

    const installMap = () => {
      // 2、构建 Earth Map
      const scene = new Scene({
        id: 'earth_map',
        map: new Earth({}),
      });

      // 3、构建地球图层，当前的 shape 为 base，表示基础球体
      const earthlayer = new EarthLayer()
        .source(
          // 地球表面的纹理
          'https://gw.alipayobjects.com/mdn/rms_23a451/afts/img/A*3-3NSpqRqUoAAAAAAAAAAAAAARQnAQ',
          {
            parser: {
              type: 'image',
              extent: [121.168, 30.2828, 121.384, 30.421],
            },
          },
        )
        .color('#f5f5f5')
        .shape('base')
        .style({
          opacity: 1.0,
          radius: 40,
          globelOtions: {
            ambientRatio: 0, // 环境光
            diffuseRatio: 0, // 漫反射
            specularRatio: 0, // 高光反射
            earthTime: 0.1,
          },
        })
        .animate(true);

      const atomLayer = new EarthLayer()
        .color('#2E8AE6')
        .shape('atomSphere')
        .style({
          opacity: 1,
        });

      const bloomLayer = new EarthLayer()
        .color('#fff')
        .shape('bloomSphere')
        .style({
          opacity: 0.7,
        });

      scene.on('loaded', () => {
        console.log(earthlayer, '======');
        // 4、添加基础地球球体
        scene.addLayer(earthlayer);
        //   添加线条
        scene.addLayer(atomLayer);
        scene.addLayer(bloomLayer);
        //   接口中调用展示线条
        fetch('https://gw.alipayobjects.com/os/bmw-prod/20a69b46-3d6d-4ab5-b8b5-150b6aa52c88.json')
          .then(res => res.json())
          .then(flydata => {
            const flyLine = new LineLayer({ blend: 'normal' })
              .source(flydata, {
                parser: {
                  type: 'json',
                  coordinates: 'coord',
                },
              })
              .color('#b97feb')
              .shape('arc3d')
              .size(0.5)
              .active(true)
              .animate({
                interval: 2,
                trailLength: 2,
                duration: 1,
              })
              .style({
                opacity: 1,
                segmentNumber: 60,
                globalArcHeight: 20,
              });
            scene.addLayer(flyLine);
          });

        earthlayer.setEarthTime(4.0);
      });
      // 经过上述的步骤，我们就可以在场景中添加一个基础的地球了
    };
    onMounted(() => {
      console.log('000000');
      installMap();
    });
    onUpdated(() => {
      // installMap();
    });
    return {
      state,
    };
  },
});
</script>

<style scoped></style>
