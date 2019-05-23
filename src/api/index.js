import Taro from '@tarojs/taro';
import { logError } from '../utils';
import config from './config';

const token = '';

export default {
  baseOptions(params, method = 'GET') {
    let { url, data } = params;
    // let token = getApp().globalData.token
    // if (!token) login()
    let contentType = 'application/json';
    contentType = params.contentType || contentType;
    const option = {
      // isShowLoading: false,
      // loadingText: '正在加载',
      url: config.url + url,
      data: data,
      method: method,
      header: { 'content-type': contentType, token: token },
      success(res) {
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
    return Taro.request(option);
  },
  $get(url, data = '') {
    let option = { url, data };
    return this.baseOptions(option);
  },
  $post: function(url, data, contentType) {
    let params = { url, data, contentType };
    return this.baseOptions(params, 'POST');
  }
};

// 调用方式
// import api from '../api'
// api.$get('news/list', params)
