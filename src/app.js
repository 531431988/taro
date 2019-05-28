import Taro, { Component } from '@tarojs/taro';
import api from '@/api';
import Index from './pages/index';
import './scss/WMlib.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/basics/auxiliary/index',
      'pages/basics/title/index',
      'pages/basics/shadow/index',
      'pages/basics/flex/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white',
      navigationStyle: 'custom'
    }
  };

  componentDidMount() {
    Taro.$get = api.$get;
    Taro.$post = api.$post;
    Taro.getSystemInfo({
      success: e => {
        let statusBar = e.statusBarHeight;
        let custom = Taro.getMenuButtonBoundingClientRect();
        let customBar = custom.bottom + custom.top - e.statusBarHeight;
        Taro.statusBar = statusBar;
        Taro.customBar = customBar;
      }
    });
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById('app'));
