import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';

class WXavatar extends Component {
  static options = {
    addGlobalClass: true
  };
  render() {
    return <View>头像</View>;
  }
}
export default WXavatar;
