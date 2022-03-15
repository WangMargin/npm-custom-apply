import { createApp } from 'vue';
import App from './App.vue';

import router from '@/router';
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
import '@/style/common.less';
import {
    Input, Button, Dropdown, Avatar, Menu, MenuItem, Badge, Row,
    Col,
    List,
    Card
} from 'ant-design-vue';

import { useIcons } from '@/icons';
const app = createApp(App);
app.use(router)
    .use(Menu)
    .use(List)
    .use(Row)
    .use(Col)
    .use(Card)
    .use(Badge)
    .use(MenuItem)
    .use(Input)
    .use(Dropdown)
    .use(Avatar)
    .use(Button);
useIcons(app);
app.mount('#app');
