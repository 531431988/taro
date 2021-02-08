<template>
  <view>
    <input v-model="number" type="number" class="input">
    <AtButton @tap="addNumber">
      Add new number
    </AtButton>
  </view>
</template>

<script>
import { AtButton } from 'taro-ui-vue'
import 'taro-ui/dist/style/index.scss'
export default {
  name: 'NumberSubmit',
  components: {
    AtButton
  },
  data () {
    return {
      number: 0
    }
  },
  methods: {
    addNumber () {
      this.$store.dispatch('addNumber', Number(this.number))
    }
  }
}
</script>

<style>
.input {
  border: 1px solid lightgray;
  margin: 10px;
}
</style>
