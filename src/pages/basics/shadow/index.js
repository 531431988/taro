import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { WXheader, WXcard, WXshadow } from 'wxui';

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
        <WXcard title='默认效果' className='mb20'>
          <WXshadow size='sm' className='ml20 mr20 mt20 mb20'>
            <View className='pd20 bg-white'>阴影组件</View>
          </WXshadow>

          <WXshadow className='ml20 mr20 mt20 mb20'>
            <View className='pd20 bg-white'>默认阴影</View>
          </WXshadow>

          <WXshadow size='lg' className='ml20 mr20 mt20 mb20'>
            <View className='pd20 bg-white'>阴影组件</View>
          </WXshadow>

          <WXshadow long className='ml20 mr20 mt20 mb20'>
            <View className='pd20 bg-white'>阴影组件</View>
          </WXshadow>
          <View className='mb20' />
        </WXcard>
      </View>
    );
  }
}
