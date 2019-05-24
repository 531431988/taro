import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import './index.scss';

class Aflex extends Component {
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
      'vui-flex': true,
      'vui-flex-dir-left': this.props.dir === 'left',
      'vui-flex-dir-right': this.props.dir === 'right',
      'vui-flex-dir-top': this.props.dir === 'top',
      'vui-flex-dir-bottom': this.props.dir === 'bottom',
      'vui-flex-left': this.props.justify === 'left',
      'vui-flex-right': this.props.justify === 'right',
      'vui-flex-center': this.props.justify === 'center',
      'vui-flex-between': this.props.justify === 'between',
      'vui-flex-around': this.props.justify === 'around',
      'vui-flex-top': this.props.align === 'top',
      'vui-flex-middle': this.props.align === 'middle',
      'vui-flex-bottom': this.props.align === 'bottom',
      'vui-flex-baseline': this.props.align === 'baseline',
      'vui-flex-stretch': this.props.align === 'stretch',
      'vui-flex-reverse': this.props.align === 'reverse',
      // 'vui-flex-ver': $slots['scroll-y'] || $slots['scroll-x'],
      'vui-flex-nowrap': !this.props.wrap,
      'vui-flex-wrap': this.props.wrap
    });

    return (
      <View className={className}>
        {/* {auto === 'right' ? <view></view> :  } */}
        {children}
      </View>
    );
  }
}

export default Aflex;
