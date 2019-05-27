import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import { WXflex, WXcard } from 'wxui';
import './index.scss';

export default class Index extends Component {
  static options = {
    addGlobalClass: true
  };
  render() {
    return (
      <View>
        <Image src='https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg' />
        <WXflex>
          <View className='demo-flex-item wxui-flex-item'>2</View>
          <View className='demo-flex-item wxui-flex-item'>1</View>
        </WXflex>
      </View>
    );
  }
}
