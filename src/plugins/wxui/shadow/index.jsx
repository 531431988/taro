import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';

class WXshadow extends Component {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    size: ''
  };
  constructor() {
    this.state = {};
  }
  render() {
    const { size } = this.props;
    return <View className={`wxui-shadow wxui-shadow-${size}`}>{this.props.children}</View>;
  }
}
export default WXshadow;
