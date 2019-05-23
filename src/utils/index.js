import Taro from '@tarojs/taro';

export const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
};

export const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n;
};
// 增加异常错误logError日志
export const logError = (name, action, info) => {
  if (!info) {
    info = 'empty';
  }
  try {
    let deviceInfo = Taro.getSystemInfoSync();
    var device = JSON.stringify(deviceInfo);
  } catch (err) {
    console.error('not support getSystemInfoSync api', err.message);
  }
  let time = formatTime(new Date());
  console.error(time, name, action, info, device);
  // 如果使用了 第三方日志自动上报
  // if (typeof action !== 'object') {
  // fundebug.notify(name, action, info)
  // }
  // fundebug.notifyError(info, { name, action, device, time })
  if (typeof info === 'object') {
    info = JSON.stringify(info);
  }
};
