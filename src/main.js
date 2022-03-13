import { createApp } from 'vue';
import App from './App.vue';

import router from '@/router';

import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
import { Input, Button } from 'ant-design-vue';

const app = createApp(App);
app.use(router)
    .use(Input)
    .use(Button);
app.mount('#app');
