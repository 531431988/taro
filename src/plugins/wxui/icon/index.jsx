import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';

class WXicon extends Component {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    className: '',
    type: '',
    color: ''
  };

  render() {
    const { className, type, color } = this.props;
    return <View className={`a-icon icon-${type} ${className}`} style={{ color }} />;
  }
}
export default WXicon;
