<template>
  <view :class="{'fab-menu': true, 'fab-menu-active': visible}" @tap="onClick" @click="onClick">
    <view class="fab-icon">
      <text class="at-icon at-icon-add" />
    </view>
    <view class="fab-menu-list">
      <view v-for="(item, index) in data" :key="index" class="fab-menu-item" :style="`transition-delay: ${index / 10}s`">
        <view :class="`at-icon at-icon-${item.icon}`" />
        <view class="text">
          {{ item.text }}
        </view>
      </view>
    </view>
  </view>
</template>

<script>

export default {
  components: {
  },
  model: {
    event: 'click',
    prop: 'visible'
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {

    }
  },
  mounted () {
  },
  methods: {
    onClick () {
      this.$emit('click', !this.visible)
    }
  },
}
</script>

<style lang="less">
.fab-menu {
  position: fixed;
  right: 16px;
  bottom: 16px;
  text-align: center;
  .fab-icon {
    background-image: linear-gradient(
      135deg,
      #f6682f 0%,
      #f6682f 60%,
      #fc4275 100%
    );
    transition: background-position 0.4s, transform 0.16s;
    .at-icon {
      color: #fff;
      transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    }
  }
  .fab-icon,
  &-item {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: #ffffff;
    box-shadow: 0 0 10px #e2e8ed;
  }
  &-list {
    position: absolute;
    left: 0;
    bottom: 124px;
  }
  &-item {
    pointer-events: none;
    margin: 0 auto 24px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.24s, transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    .text {
      font-size: 24px;
    }
  }
  &-active {
    .fab-icon {
      transform: scale(0.9);
      .at-icon {
        transform: rotate(-225deg);
      }
    }
    .fab-menu-item {
      opacity: 1;
    }
  }
}
</style>
