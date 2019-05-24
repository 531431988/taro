import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';

class Atitle extends Component {
  static defaultProps = {
    level: 1
  };
  constructor(props) {
    super(props);
    this.state = {
      size: {
        1: 36,
        2: 32,
        3: 28,
        4: 24,
        5: 22,
        6: 20
      }
    };
  }
  render() {
    const { children } = this.props;
    const { size } = this.state;
    return (
      <View className='a-title' style={{ fontSize: `${size[this.props.level]}rpx` }}>
        {children}
      </View>
    );
  }
}
export default Atitle;
