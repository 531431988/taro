import Taro, { Component } from '@tarojs/taro';
import { View, Navigator } from '@tarojs/components';
import { WXflex } from 'wxui';
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
      <View style={{ paddingTop: `${Taro.customBar}px` }}>
        <WXflex col className='pl5 pr5'>
          {list.map(item => (
            <View className='wxui-col-6' key={item.title}>
              <Navigator hover-class='none' url={`../../pages/basics/${item.url}`}>
                <DemoCard title={item.title} subTitle={item.subTitle} />
              </Navigator>
            </View>
          ))}
        </WXflex>
      </View>
    );
  }
}
