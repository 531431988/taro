import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { WXheader, WXtitle, WXcard } from 'wxui';

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
        <WXcard title='填充' full={false} renderFooter={<WXtitle className='pd20' level='3' title='页脚' />}>
          <Image src='https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg' />
        </WXcard>
      </View>
    );
  }
}
