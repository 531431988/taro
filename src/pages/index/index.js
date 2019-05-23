import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import api from '@/api';
import styles from './index.module.scss';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
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
      </View>
    );
  }
}
