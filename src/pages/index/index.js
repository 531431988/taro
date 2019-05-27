import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import WXicon from 'wx/icon';
import WXflex from 'wx/flex';
import WXtitle from 'wx/title';
import WXheader from 'wx/header';
// import api from '@/api';
import styles from './index.module.scss';
import hotDog from '@/assets/hot-dog.svg';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
    usingComponents: {
      'wux-button': '../../plugins/wux-weapp/button/index'
    }
  };
  componentWillMount() {
    // api.$get('user').then(res => {
    //   console.log(res.data);
    // });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View>
        <WXheader bgImage='https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg'>标题</WXheader>
        <Text className={styles.text}>Hello world!</Text>
        <WXicon type='like' />
        <WXflex align='middle'>
          <wux-button long>按钮</wux-button>
          <Image src={hotDog} style={{ width: '200px' }} />
        </WXflex>
        <WXtitle>111</WXtitle>
      </View>
    );
  }
}
