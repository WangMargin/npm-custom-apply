import { createApp } from 'vue';
import App from './App.vue';
import { useIcons } from '@/icon';

import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
const app = createApp(App);
useIcons(app);
app
  .use(Antd)
  .use(store)
  .use(router);
app.mount('#app');
