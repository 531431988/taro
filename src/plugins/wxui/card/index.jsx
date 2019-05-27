import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';

class WXcard extends Component {
  static options = {
    addGlobalClass: true
  };
  render() {
    return (
      <View>
        <View>标题</View>
        <View />
        <View>脚</View>
      </View>
    );
  }
}
export default WXcard;
