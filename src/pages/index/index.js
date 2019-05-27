import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { WXheader } from 'wxui';
import { AtTabBar } from 'taro-ui';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  };
  constructor() {
    super(...arguments);
    this.state = {
      current: 0
    };
  }
  render() {
    return (
      <View>
        <WXheader src='https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg'>标题</WXheader>
        <AtTabBar
          fixed
          tabList={[
            { title: '自定义图标', iconType: 'bullet-list', text: 'new' },
            { title: '拍照', iconType: 'camera' },
            { title: '文件夹', iconType: 'folder', text: '100', max: '99' }
          ]}
          onClick={this.onClick}
          current={this.state.current}
        />
      </View>
    );
  }
  handleClick = value => {
    this.setState({
      current: value
    });
  };
}
