import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { WXtitle, WXflex, WXshadow } from 'wxui';

class DemoCard extends Component {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    title: '',
    subTitle: ''
  };
  render() {
    const { title, subTitle } = this.props;
    return (
      <WXshadow className='wxui-radius-sm bg-white demo-card'>
        <WXflex dir='right'>
          <View className='title' />
        </WXflex>
        <WXtitle title={title} />
        <WXtitle title={subTitle} level='4' color='#999' className='pt10' />
      </WXshadow>
    );
  }
}
export default DemoCard;
