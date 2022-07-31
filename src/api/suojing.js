import request from '@/utils/request';

const api = {
  pagelist: '/api-record/journeyRecord/pageList',
  district: '/api-record/select/district',
  add: '/api-record/journeyRecord/add',
  detail: '/api-record/journeyRecord/detail',
};
export async function postPageList(params) {
  return request({
    url: api.pagelist,
    method: 'post',
    data: params,
  });
}

// 省市区 联动接口
export async function getDistrict(params) {
  return request({
    url: api.district,
    method: 'get',
    params: params,
  });
}

// 提交填写信息
export async function postAdd(params) {
  return request({
    url: api.add,
    method: 'post',
    data: params,
  });
}

// 填写数据详情
export async function getDetail(params) {
  return request({
    url: api.detail,
    method: 'get',
    params: params,
  });
}
