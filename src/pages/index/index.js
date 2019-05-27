import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import WXicon from 'wx/icon';
import WXflex from 'wx/flex';
import WXtitle from 'wx/title';
import WXheader from 'wx/header';
// import api from '@/api';
import { AtIcon, AtButton } from 'taro-ui';
import './index.scss';
import hotDog from '@/assets/hot-dog.svg';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
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
        {/* <WXheader src='https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg'>标题</WXheader> */}
        <WXheader className='bg-gradual-blue t-white'>布局</WXheader>
        <AtIcon value='clock' />
        <AtButton type='primary'>按钮文案</AtButton>
        <Text>Hello world!</Text>
        <WXicon type='like' />
        <WXflex align='middle'>
          <Image src={hotDog} style={{ width: '200px' }} />
        </WXflex>
        <WXtitle>111</WXtitle>
      </View>
    );
  }
}
