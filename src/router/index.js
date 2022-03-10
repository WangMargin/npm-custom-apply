import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/page/home/home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }
]

// 创建路由
const router = createRouter({
    history: createWebHistory('/'),
    routes
})

/**
 * 路由守卫
 */
 router.beforeEach((to, from, next) => {
    console.log(to, from, next);
    next()
  });
   
  /**
   * 路由错误回调
   */
  router.onError((handler) => {
    console.log("error:", handler);
  });

  export default router