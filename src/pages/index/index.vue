<template>
  <view class="index">
    <view class="index">
      <AtNoticebar marquee>
        欢迎使用 Taro UI Vue
      </AtNoticebar>
      <AtButton type="primary" :on-click="handleClick">
        AtButton
      </AtButton>
      <AtToast :is-opened="show" :text="msg" :on-close="handleClose" />
    </view>
    {{ getNumbers }}
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import { AtButton, AtToast, AtNoticebar } from 'taro-ui-vue'
export default {
  components: {
    AtButton,
    AtToast,
    AtNoticebar
  },
  data () {
    return {
      msg: 'Hello world!',
      show: false
    }
  },
  computed: {
    getNumbers () {
      return this.$store.getters.getNumbers;
    }
  },
  methods: {
    handleClick () {
      this.show = true
      this.$store.dispatch('addNumber', parseInt(Math.random() * 100))
    },
    handleClose () {
      this.show = false
    }
  },
}
</script>
<style lang="scss" scoped>
.index {
  background: red;
}
</style>
