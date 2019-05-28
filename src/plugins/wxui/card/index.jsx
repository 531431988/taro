import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import WXtitle from '../title';

class WXcard extends Component {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    className: '',
    full: true,
    title: '',
    shadow: true,
    renderFooter: null
  };
  render() {
    const { title, className, full, shadow } = this.props;

    return (
      <View className={`wxui-card ${className} ${full ? '' : 'wxui-card-full'} ${shadow ? 'wxui-card-shadow' : ''}`}>
        {title ? <WXtitle className='wxui-card-header' title={title} type='dot' /> : ''}
        <View className='wxui-card-body pd20'>{this.props.children}</View>
        <View className='wxui-card-footer'>{this.props.renderFooter}</View>
      </View>
    );
  }
}
export default WXcard;
