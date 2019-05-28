import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { WXtitle, WXflex, WXcard, WXavatar, WXshadow } from 'wxui';
import DemoCard from '_c/demo-card';
import './index.scss';

export default class Index extends Component {
  static options = {
    addGlobalClass: true
  };
  render() {
    return (
      <View>
        <Image src='https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg' />

        <DemoCard title='辅助类' subTitle='内置快速布局样式' />
        {/* <WXflex className='mb10' auto='left' renderAuto={<View className='demo-flex-item '>Welcome!</View>}>
          <View className='demo-flex-item'>左边自动</View>
        </WXflex>

        <WXflex renderAuto={<View className='demo-flex-item '>Welcome!</View>}>
          <View className='demo-flex-item'>右边自动</View>
        </WXflex> */}

        <WXflex col>
          <View className='pd10 wxui-col-4'>
            <View class='demo-flex-item'>4</View>
          </View>
          <View className='pd10 wxui-col-4'>
            <View class='demo-flex-item'>4</View>
          </View>
          <View className='pd10 wxui-col-4'>
            <View class='demo-flex-item'>4</View>
          </View>
          <View className='pd10 wxui-col-4'>
            <View class='demo-flex-item'>4</View>
          </View>
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
