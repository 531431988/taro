import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import './index.scss';

class WXheader extends Component {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    className: '',
    isBack: false,
    src: '',
    backText: '返回',
    title: ''
  };
  constructor(props) {
    super(props);
    this.state = {
      statusBar: 1,
      customBar: 1
    };
  }
  componentWillMount() {
    Taro.getSystemInfo({
      success: e => {
        let { statusBar, customBar } = this.state;
        statusBar = e.statusBarHeight;
        let custom = Taro.getMenuButtonBoundingClientRect();
        customBar = custom.bottom + custom.top - e.statusBarHeight;
        this.setState({
          statusBar,
          customBar
        });
      }
    });
  }
  render() {
    const { statusBar, customBar } = this.state;
    const style = () => {
      var style = {
        height: `${customBar}px`,
        paddingTop: `${statusBar}px`
      };
      if (this.props.src) {
        style = { ...style, ...{ backgroundImage: `url(${this.props.src})` } };
      }
      return style;
    };
    return (
      <View className='wx-header' style={{ height: customBar + 'px' }}>
        <View
          className={`wx-header-bar fixed ${this.props.src !== '' ? 'none-bg t-white bg-img' : ''} ${
            this.props.className
          }`}
          style={style()}
        >
          <View className='back' onClick={this.onClick} v-if={this.props.isBack}>
            <AtIcon value='chevron-left' />
            <text>{this.props.backText}</text>
          </View>
          <View className='title' style={{ top: statusBar + 'px' }}>
            {this.props.title || this.props.children}
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
