import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

class AIcon extends Component {
  static options = {
    addGlobalClass: true
  };
  render() {
    const { type } = this.props;
    return <View className={`a-icon icon-${type}`} />;
  }
}
export default AIcon;
