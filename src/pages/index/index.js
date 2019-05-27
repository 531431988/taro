import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtTabBar } from 'taro-ui';
import About from '../about';
import Basics from '../basics/home';

export default class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0
    };
  }
  render() {
    const { current } = this.state;
    let renderDom = null;
    if (current) {
      renderDom = <About />;
    } else {
      renderDom = <Basics />;
    }
    return (
      <View>
        {renderDom}
        <AtTabBar
          fixed
          tabList={[
            { title: '基础', iconType: 'bullet-list', text: 'new' },
            { title: '通用', iconType: 'camera', text: '100', max: '99' },
            { title: '扩展', iconType: 'folder' },
            { title: '关于', iconType: 'alert-circle' }
          ]}
          onClick={this.onClick}
          current={this.state.current}
        />
      </View>
    );
  }
  onClick = current => {
    console.log(current);
    this.setState({
      current
    });
  };
}
