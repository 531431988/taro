import Taro from '@tarojs/taro';
import { logError } from '../utils';
import config from './config';

const token = '';

const baseOptions = (params, method = 'GET') => {
  Taro.showLoading({
    title: '玩命加载中…'
  });
  let { url, data } = params;
  // let token = getApp().globalData.token
  // if (!token) login()
  let contentType = 'application/json';
  contentType = params.contentType || contentType;
  const option = {
    url: config.url + url,
    data: data,
    method: method,
    header: { 'content-type': contentType, token: token },
    success(res) {
      Taro.hideLoading();
      if (res.statusCode === 200) {
        return res.data;
      } else {
        return logError('api', config.codeMessage[res.statusCode]);
      }
    },
    error(err) {
      logError('api', '请求接口出现问题', err);
    }
  };
  return Taro.request(option).then(res => res.data);
};

export default {
  $get(url, data = '') {
    let option = { url, data };
    return baseOptions(option);
  },
  $post(url, data, contentType) {
    let params = { url, data, contentType };
    return baseOptions(params, 'POST');
  }
};
