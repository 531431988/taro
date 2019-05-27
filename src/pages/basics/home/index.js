import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { WXheader } from 'wxui';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  };
  render() {
    return (
      <View>
        <WXheader src='https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg'>标题</WXheader>111
      </View>
    );
  }
}
