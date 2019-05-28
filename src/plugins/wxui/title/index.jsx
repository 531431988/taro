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
    type: '',
    color: ''
  };
  constructor() {}
  render() {
    const { className, type, level, title, color } = this.props;
    let renderDom = null;
    if (type === 'line') renderDom = <View className='wxui-title-type-line' />;
    else if (type === 'dot') renderDom = <View className='wxui-title-type-dot' />;
    return (
      <View className={`wxui-title ${className} wxui-title-level-${level} ${type !== '' ? 'bg-white' : ''}`}>
        <View>
          {renderDom}{' '}
          <Text className={`wxui-title-text ${type !== '' ? 'ml30' : ''}`} style={{ color }}>
            {title}
          </Text>
        </View>
        <View>{this.props.children}</View>
      </View>
    );
  }
}
export default WXtitle;
