import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { WXheader } from 'wxui';

export default class Index extends Component {
  static options = {
    addGlobalClass: true
  };
  render() {
    return (
      <View>
        <WXheader className='bg-gradual-blue t-white'>关于</WXheader>
      </View>
    );
  }
}
