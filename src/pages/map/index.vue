<template>
  <map id="map" longitude="113.324520" latitude="23.099994" scale="14" :markers="markers" :polyline="polyline" show-location style="width: 100%; height: 300px;" @markertap="markertap" @regionchange="regionchange" />
</template>

<script>
import Taro from '@tarojs/taro'
import { getDataDemo } from '../../api/index'
export default {
  data () {
    return {
      markers: [{
        iconPath: "https://avatars2.githubusercontent.com/u/1782542?s=460&u=d20514a52100ed1f82282bcfca6f49052793c889&v=4",
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 50,
        height: 50
      }],
      polyline: [{
        points: [{
          longitude: 113.3245211,
          latitude: 23.10229
        }, {
          longitude: 113.324520,
          latitude: 23.21229
        }],
        color: "#FF0000DD",
        width: 2,
        dottedLine: true
      }]
    }
  },
  created () {
    getDataDemo().then(res => {

    }).catch(err => {

    })
    /* Taro.request({
      url: '/hn-wfs', //仅为示例，并非真实的接口地址
      success (res) {
        console.log(res.data)
      }
    }) */
  },
  methods: {
    regionchange (e) {
      console.log(e.type)
    },
    markertap (e) {
      console.log("markertap:", e.detail.markerId)
    }
  }
}
</script>
