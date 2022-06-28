import request from '@/utils/request';

/**
 * 获取当前用户的信息
 * @param userId: 用户ID
 */
export async function getCurrentUser(userId) {
  return request.get('/api/v1/identity/user/' + userId);
}

export async function postAccountLogin(params) {
  return request.post('/login/account', params);
}

export async function getSmsCaptcha(params) {
  request.get('/message/captcha/sms', {
    params,
  });
}
