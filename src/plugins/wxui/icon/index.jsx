import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';

class WXicon extends Component {
  static options = {
    addGlobalClass: true
  };
  render() {
    const { type } = this.props;
    return <View className={`a-icon icon-${type}`} />;
  }
}
export default WXicon;
