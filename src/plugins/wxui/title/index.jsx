import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

class WXtitle extends Component {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    className: '',
    title: '',
    level: '1',
    type: ''
  };
  constructor() {}
  render() {
    const { className, type, level, title } = this.props;
    let renderDom = null;
    if (type === 'line') renderDom = <View className='wxui-title-type-line' />;
    else if (type === 'dot') renderDom = <View className='wxui-title-type-dot' />;
    return (
      <View className={`wxui-title pd20 ${className} wxui-title-level-${level} ${type !== '' ? 'bg-white' : ''}`}>
        <View>
          {renderDom} <Text className='wxui-title-text'>{title}</Text>
        </View>
        <View>{this.props.children}</View>
      </View>
    );
  }
}
export default WXtitle;
