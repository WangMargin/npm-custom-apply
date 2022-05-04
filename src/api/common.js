import request from '@/utils/request';
import api from '@/api';
export async function getList(params) {
  return request({
    url: api.getList,
    method: 'get',
    params: params,
  });
}
