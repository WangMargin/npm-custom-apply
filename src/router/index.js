import { createRouter, createWebHashHistory } from 'vue-router';
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
    path: '/backend',
    name: 'backend',
    redirect: '/backend/sign_in',
    component: () => import('@/views/backend/index.vue'),
    children: [
      {
        component: () => import('@/views/backend/sign.vue'),
        path: '/backend/sign_in',
        name: 'backend_sign_in',
      },
      {
        component: () => import('@/views/backend/list.vue'),
        path: '/backend/pagelist',
        name: 'backend_pagelist',
      },
      {
        component: () => import('@/views/backend/detail.vue'),
        path: '/backend/detail',
        name: 'backend_detail',
      },
    ],
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
  // base: '/ppp/',
  history: createWebHashHistory('/ppp/'),
  routes,
});

export default router;
