import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { WXheader, WXtitle, WXshadow, WXcard, WXicon } from 'wxui';

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
        <WXheader className='bg-gradual-blue t-white'>标题组件</WXheader>
        <WXcard title='默认效果' className='mb20'>
          <WXtitle title='我是标题1' level='1' />
          <WXtitle title='我是标题2' level='2' />
          <WXtitle title='我是标题3' level='3' />
          <WXtitle title='我是标题4' level='4' />
          <WXtitle title='我是标题5' level='5' />
          <WXtitle title='我是标题6' level='6' />
        </WXcard>

        <WXtitle title='骚气的红色带边框效果' type='line' color='red' className='mb20' />

        <WXtitle title='另一种边框' type='dot' className='mb20'>
          <WXtitle title='自定义右侧' level='5' color='#999' />
        </WXtitle>

        <WXtitle title='自定义右侧' type='dot' className='mb20'>
          <WXtitle title='可定制效果' level='5' color='red' inline />
          <WXicon type='right' color='#999' />
        </WXtitle>

        <WXtitle title='自定义图标' icon='smile' iconColor='red'  className='mb20'>
          <WXicon type='right' color='#999' />
        </WXtitle>

        <WXshadow>
          <WXtitle title='带阴影的' icon='right'className='mb20'>
          </WXtitle>
        </WXshadow>

      </View>
    );
  }
}
