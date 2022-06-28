import axios, { AxiosResponse } from 'axios';
import { localStorage } from '@/utils/local-storage';
import { STORAGE_TOKEN_KEY } from '@/store/mutation-type';
import { notification } from 'ant-design-vue';
export const REQUEST_TOKEN_KEY = 'Authorization';

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 60000, // 请求超时时间
});

// 异常拦截处理器
const errorHandler = error => {
  if (error.response) {
    const { data = {}, status, statusText } = error.response;
    // 403 无权限
    if (status === 403) {
      notification.error({
        message: '未授权',
        description: '您没有该操作的权限，如有疑问，请联系管理员。',
      });
    } else if (status === 401) {
      // 401 未登录/未授权
      notification.error({
        message: '登录失效',
        description: (data && data.msg) || statusText,
      });
      window.location.href =
        process.env.VUE_APP_SYCAMORE_WEB_URL + '/user/login?redirect=' + window.location.href;
    } else {
      notification.error({
        message: '系统错误',
        description: '系统错误，请您稍后再试。',
      });
    }
  }

  return Promise.reject(error);
};

// 请求拦截器
const requestHandler = config => {
  const savedToken = localStorage.get(STORAGE_TOKEN_KEY);
  // 如果 token 存在
  // 让每个请求携带自定义 token, 请根据实际情况修改
  if (savedToken) {
    config.headers[REQUEST_TOKEN_KEY] = 'bearer ' + savedToken;
  }

  return config;
};

// Add a request interceptor
request.interceptors.request.use(requestHandler, errorHandler);

// 响应拦截器
const responseHandler = response => {
  return response.data;
};

// Add a response interceptor
request.interceptors.response.use(responseHandler, errorHandler);
export { AxiosResponse };
export default request;
