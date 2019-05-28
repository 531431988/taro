import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { WXtitle, WXflex, WXcard, WXavatar, WXshadow } from 'wxui';
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
        <WXshadow size='sm'>
          <WXtitle title='我是标题' type='line' className='mb20'>
            <WXtitle title='自定义内容' level='4' />
          </WXtitle>
          <WXtitle title='我是标题' type='dot'>
            自定义内容
          </WXtitle>
        </WXshadow>
        <WXavatar />
        <WXcard />
      </View>
    );
  }
}
