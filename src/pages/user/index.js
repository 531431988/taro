import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

class Index extends Component {
  config = {
    navigationBarTitleText: '',
    usingComponents: {}
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  componentDidNotFound() {}
  render() {
    return <View>用户中心</View>;
  }
}
export default Index;
