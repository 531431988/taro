import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';

class WXflex extends Component {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    // 自动方向
    auto: 'right',
    // 主轴起点
    dir: 'left',
    // 是否换行
    wrap: true,
    // 换行，第一行在下方
    reverse: false,
    // 水平对齐方式
    justify: 'left',
    // 垂直对齐方式
    align: 'top'
  };
  render() {
    const { children } = this.props;
    let className = classnames({
      'wxui-flex': true,
      'wxui-flex-dir-left': this.props.dir === 'left',
      'wxui-flex-dir-right': this.props.dir === 'right',
      'wxui-flex-dir-top': this.props.dir === 'top',
      'wxui-flex-dir-bottom': this.props.dir === 'bottom',
      'wxui-flex-left': this.props.justify === 'left',
      'wxui-flex-right': this.props.justify === 'right',
      'wxui-flex-center': this.props.justify === 'center',
      'wxui-flex-between': this.props.justify === 'between',
      'wxui-flex-around': this.props.justify === 'around',
      'wxui-flex-top': this.props.align === 'top',
      'wxui-flex-middle': this.props.align === 'middle',
      'wxui-flex-bottom': this.props.align === 'bottom',
      'wxui-flex-baseline': this.props.align === 'baseline',
      'wxui-flex-stretch': this.props.align === 'stretch',
      'wxui-flex-reverse': this.props.align === 'reverse',
      // 'wxui-flex-ver': $slots['scroll-y'] || $slots['scroll-x'],
      'wxui-flex-nowrap': !this.props.wrap,
      'wxui-flex-wrap': this.props.wrap
    });
    return <View className={className}>{children}</View>;
  }
}

export default WXflex;
