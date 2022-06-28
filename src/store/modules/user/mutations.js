import { state as initState } from './state';
import ls from '@/utils/local-storage';
import { STORAGE_TOKEN_KEY, STORAGE_USER_ID } from '@/store/mutation-type';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_AVATAR = 'SET_AVATAR';
export const SET_ROLE = 'SET_ROLE';
export const SET_INFO = 'SET_INFO';
export const SET_ROUTERS = 'SET_ROUTERS';
export const RESET_CURRENT_USER = 'RESET_CURRENT_USER';
export const mutations = {
  [SET_TOKEN]: (state, token) => {
    state.token = token;
    ls.set(STORAGE_TOKEN_KEY, token);
  },
  [SET_INFO]: (state, info) => {
    if (info.roles) {
      state.role = info.roles;
    }

    if (info.id) {
      // 存在用户ID时, 优先赋值, 再根据下面的逻辑进行替换
      state.username = info.id;
      state.nickname = info.id;
      ls.set(STORAGE_USER_ID, info.id);
    }

    if (info.username) {
      state.username = info.username;
    }

    if (info.name) {
      state.nickname = info.name;
    }

    if (info.avatar) {
      state.avatar = info.avatar;
    }

    state.extra = { ...info };
  },
  [SET_ROLE]: (state, roles) => {
    state.roles = roles;
  },
  [SET_AVATAR]: (state, avatar) => {
    state.avatar = avatar;
  },
  [SET_ROUTERS]: (state, allowRoutes) => {
    state.allowRouters = allowRoutes;
  },
  [RESET_CURRENT_USER]: state => {
    Object.assign(state, initState);
  },
};
