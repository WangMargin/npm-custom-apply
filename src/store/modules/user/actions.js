import { RESET_CURRENT_USER, SET_INFO, SET_ROUTERS, SET_TOKEN } from './mutations';
import { getCurrentUser, postAccountLogin } from '@/api/user/login';
import { default as router, routes } from '@/router';
import { filterMenu } from '@/utils/menu-util';
import { hasAuthority } from '@/utils/authority';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const GET_INFO = 'GET_INFO';
export const GENERATE_ROUTES = 'GenerateRoutes';
export const actions = {
  [LOGIN]({ commit }, info) {
    return new Promise((resolve, reject) => {
      // call ajax
      postAccountLogin(info)
        .then(res => {
          commit(SET_TOKEN, res.token);
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  [GET_INFO]({ commit }) {
    return new Promise((resolve, reject) => {
      getCurrentUser(531)
        .then(res => {
          commit(SET_INFO, res);
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  // 重新格式化路由展示
  [GENERATE_ROUTES]({ commit }, info) {
    return new Promise(resolve => {
      const { permissions } = info.roles;
      const allRoutes = filterMenu(routes);
      const permissionsKey = permissions?.map(permission => permission.name);
      const allowRoutes = !permissionsKey
        ? allRoutes
        : allRoutes.filter(route => hasAuthority(route, permissionsKey)); // 添加到路由表
      //

      const {
        // eslint-disable-next-line
        children: _,
        ...mainRoute
      } = routes[0];
      const route = { ...mainRoute, children: allowRoutes };
      router.addRoute(route);
      commit(SET_ROUTERS, allowRoutes);
      resolve(allowRoutes);
    });
  },

  [LOGOUT]({ commit }) {
    return new Promise(resolve => {
      commit(SET_TOKEN, null);
      commit(RESET_CURRENT_USER);
      resolve();
    });
  },
};
