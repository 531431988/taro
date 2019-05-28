import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';

class WXshadow extends Component {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    className: '',
    size: '',
    long: false
  };
  constructor() {
    this.state = {};
  }
  render() {
    const { className, size, long } = this.props;
    return (
      <View className={`wxui-shadow wxui-shadow-${size} ${long ? 'wxui-shadow-long' : ''} ${className}`}>
        {this.props.children}
      </View>
    );
  }
}
export default WXshadow;
