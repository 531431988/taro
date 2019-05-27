import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import WXicon from 'wx/icon';

class WXheader extends Component {
  static defaultProps = {
    bgColor: '',
    isBack: false,
    bgImage: '',
    content: '',
    right: ''
  };
  constructor(props) {
    super(props);
    this.state = {
      statusBar: 1,
      customBar: 1
    };
  }
  render() {
    const { statusBar, customBar } = this.state;
    const style = () => {
      var style = {
        height: `${customBar}px`,
        paddingTop: `${statusBar}px`
      };
      if (this.props.bgImage) {
        style = { ...style, ...{ backgroundImage: `url(${this.props.bgImage})` } };
      }
      return style;
    };
    return (
      <View>
        <View className='cu-custom' style={{ height: customBar + 'px' }}>
          <View
            className={`cu-bar fixed ${this.props.bgImage != '' ? 'none-bg text-white bg-img' : ''} ${
              this.props.bgColor
            }`}
            style={style()}
          >
            <View className='action' onClick={this.onClick} v-if={this.props.isBack}>
              <WXicon type='left' />
              {this.props.left}
            </View>
            <View className='content' style={{ top: statusBar + 'px' }}>
              {this.props.children}
            </View>
            {this.props.right}
          </View>
        </View>
      </View>
    );
  }
  onClick = () => {
    Taro.navigateBack({
      delta: 1
    });
  };
}
export default WXheader;
