import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Canvas2 from '@/views/html/2canvas.vue';
import suojing from '@/views/sj/index.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/suojing',
    name: 'suojing',
    component: suojing,
  },
  {
    path: '/canvas2',
    name: 'canvas2',
    component: Canvas2,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
