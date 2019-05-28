import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { WXheader, WXflex } from 'wxui';

export default class Index extends Component {
  static options = {
    addGlobalClass: true
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View className='page'>
        <WXheader className='bg-gradual-blue t-white'>辅助类</WXheader>
        <WXflex className='mb10' auto='left' renderAuto={<View className='demo-flex-item '>Welcome!</View>}>
          <View className='demo-flex-item'>左边自动</View>
        </WXflex>

        <WXflex renderAuto={<View className='demo-flex-item '>Welcome!</View>}>
          <View className='demo-flex-item'>右边自动</View>
        </WXflex>
      </View>
    );
  }
}
