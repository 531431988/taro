import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';

class WXflex extends Component {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    className: '',
    // 自动宽的方向
    auto: 'right',
    col: false,
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
    const { className, auto, col, dir, justify, align, wrap } = this.props;
    let classNames = classnames({
      'wxui-flex': true,
      'wxui-flex-dir-left': dir === 'left',
      'wxui-flex-dir-right': dir === 'right',
      'wxui-flex-dir-top': dir === 'top',
      'wxui-flex-dir-bottom': dir === 'bottom',
      'wxui-flex-left': justify === 'left',
      'wxui-flex-right': justify === 'right',
      'wxui-flex-center': justify === 'center',
      'wxui-flex-between': justify === 'between',
      'wxui-flex-around': justify === 'around',
      'wxui-flex-top': align === 'top',
      'wxui-flex-middle': align === 'middle',
      'wxui-flex-bottom': align === 'bottom',
      'wxui-flex-baseline': align === 'baseline',
      'wxui-flex-stretch': align === 'stretch',
      'wxui-flex-reverse': align === 'reverse',
      // 'wxui-flex-ver': $slots['scroll-y'] || $slots['scroll-x'],
      'wxui-flex-nowrap': !wrap,
      'wxui-flex-wrap': wrap
    });
    // 自动宽度的方向
    let renderDom = null;
    if (auto === 'right' && !col) {
      renderDom = (
        <View className={`${classNames} ${className}`}>
          <View>{this.props.children}</View>
          <View className='wxui-flex-item'>{this.props.renderAuto}</View>
        </View>
      );
    }
    if (auto === 'left') {
      renderDom = (
        <View className={`${classNames} ${className}`}>
          <View className='wxui-flex-item'>{this.props.renderAuto}</View>
          <View>{this.props.children}</View>
        </View>
      );
    } else if (col) {
      renderDom = <View className={`${classNames} ${className}`}>{this.props.children}</View>;
    }
    return renderDom;
  }
}

export default WXflex;
