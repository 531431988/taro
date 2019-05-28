import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { WXtitle, WXflex, WXcard, WXavatar, WXshadow } from 'wxui';

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
      <WXshadow>
        <WXflex dir='right'>111</WXflex>
        <WXtitle title={title} />
        <WXtitle title={subTitle} level='4' />
      </WXshadow>
    );
  }
}
export default DemoCard;
