import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import WXicon from '../icon';

class WXtitle extends Component {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    className: '',
    icon: '',
    iconColor: '',
    title: '',
    level: '1',
    type: '',
    color: '',
    inline: false
  };
  constructor() {}
  render() {
    const { className, icon, type, level, title, color, iconColor, inline } = this.props;
    let renderDom = null;
    if (type === 'line') renderDom = <View className='wxui-title-type-line' />;
    else if (type === 'dot') renderDom = <View className='wxui-title-type-dot' />;
    return (
      <View className={`wxui-title ${className} wxui-title-level-${level} ${(type !== '' || icon !== '') ? 'bg-white' : ''}`} style={{display: inline ? 'inline-block' : '', padding: inline ? '10px': ''}}>
        <View>
          {renderDom} {icon ? <WXicon type={icon} className='mr10' color={iconColor} /> : ''}
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
