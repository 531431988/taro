import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import api from '@/api';
import styles from './index.module.scss';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
    usingComponents: {
      'wux-button': '../../plugins/wux-weapp/button/index'
    }
  };
  componentWillMount() {
    api.$get('user').then(res => {
      console.log(res.data);
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View>
        <Text className={styles.text}>Hello world!</Text>
        <wux-button>按钮</wux-button>
      </View>
    );
  }
}
