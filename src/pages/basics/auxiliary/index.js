import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { WXheader, WXtitle, WXflex, WXcard, WXavatar, WXshadow } from 'wxui';
import DemoCard from '_c/demo-card';

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
      <View>
        <WXheader className='bg-gradual-blue t-white'>辅助类</WXheader>1
      </View>
    );
  }
}
