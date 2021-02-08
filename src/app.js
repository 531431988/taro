import Vue from "vue";
import "./app.less";
import store from "./store";

const App = new Vue({
  store,
  onShow(options) {},
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h("block", this.$slots.default);
  }
});

export default App;
