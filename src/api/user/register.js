import request from '@/utils/request';
export async function postRegister(data) {
  return request({
    url: '/register',
    method: 'POST',
    data,
  });
}
