import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Canvas2 from '@/views/html/2canvas.vue';
import MapModules from '@/views/EarthMap/index.vue';
import ChnMapModules from '@/views/EarthMap/chn.map.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/canvas2',
    name: 'canvas2',
    component: Canvas2,
  },
  {
    path: '/map',
    name: 'map',
    component: MapModules,
  },
  {
    path: '/chn_map',
    name: 'chn_map',
    component: ChnMapModules,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
