import Taro, { Component } from '@tarojs/taro';
import { View, Image, Navigator } from '@tarojs/components';
import { WXtitle, WXflex, WXcard, WXavatar, WXshadow } from 'wxui';
import DemoCard from '_c/demo-card';

export default class Index extends Component {
  static options = {
    addGlobalClass: true
  };
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          url: 'auxiliary/index',
          title: '辅助类',
          subTitle: 'wxui class'
        },
        {
          url: 'title/index',
          title: '标题组件',
          subTitle: 'WXtitle'
        },
        {
          url: 'shadow/index',
          title: '阴影组件',
          subTitle: 'WXshadow'
        },
        {
          url: 'flex/index',
          title: '弹性布局',
          subTitle: 'WXflex'
        }
      ]
    };
  }
  render() {
    const { list } = this.state;
    return (
      <View>
        <Image src='https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg' />

        {/* <WXflex className='mb10' auto='left' renderAuto={<View className='demo-flex-item '>Welcome!</View>}>
          <View className='demo-flex-item'>左边自动</View>
          </WXflex>
          
          <WXflex renderAuto={<View className='demo-flex-item '>Welcome!</View>}>
          <View className='demo-flex-item'>右边自动</View>
        </WXflex> */}

        <WXflex col className='pl5 pr5'>
          {list.map(item => (
            <View className='wxui-col-6' key={item.title}>
              <Navigator hover-class='none' url={`../../pages/basics/${item.url}`}>
                <DemoCard title={item.title} subTitle={item.subTitle} />
              </Navigator>
            </View>
          ))}
        </WXflex>

        {/* <WXshadow size='sm'>
          <WXtitle title='我是标题' type='line' className='mb20'>
            <WXtitle title='自定义内容' level='4' />
          </WXtitle>
          <WXtitle title='我是标题' type='dot'>
            自定义内容
          </WXtitle>
        </WXshadow>
        <WXavatar />
        <WXcard /> */}
      </View>
    );
  }
}
