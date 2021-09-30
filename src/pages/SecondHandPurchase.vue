<!--
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2021-09-25 21:24:12
 * @LastEditTime: 2021-09-26 21:07:19
 * @LastEditors: wangXiaoMing
-->
<template>
  <div class="second-hand-purchase">
    <div class="title">
      <pre>{{ $t('SecondHandPurchaseList.title') }}</pre>
    </div>
    <div class="list">
      <div v-for="(item,index) in list" :key="index" class="list-item">
        <div class="list-item-title">{{ item[localMap[$i18n.locale]].title }}</div>
        <div class="list-item-img"><img :src="SecondHandPicMap[item.chinese.picUrl]"></div>
        <div class="list-item-content"><span>{{item[localMap[$i18n.locale]].price}}</span>/{{item[localMap[$i18n.locale]].unit}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { SecondHandPicMap } from '@/utils/Constant.js'

export default {
  name: 'SecondHandPurchase',
  data() {
    return {
      list: [],
      localMap: {
        'zh': 'chinese',
        'en': 'english',
        'japanese': 'japanese'
      },
      SecondHandPicMap
    }
  },
  // watch: {
  //   '$i18n.locale'() {
  //     // this.initAlertList()
  //   }
  // },
  mounted() {
    this.list = this.$t('SecondHandPurchaseList.list')
    console.log(this.list[0].chinese)
    console.log(window.SecondHandPurchaseList)
    console.log(SecondHandPicMap[this.list[0].chinese.pic])
  }
}
</script>

<style lang="scss" scoped>
.second-hand-purchase {
  width: 100%;
  .title {
    width: 90%;
    height: 200px;
    margin: 20px auto;
    padding: 10px 0;
    background: rgba(255, 165, 0, 0.1);
    font-size: 14px;
    line-height: 24px;
    color: black;
  }
  .list {
    width: 90%;
    margin: 20px auto;
    &-item {
      width: 236px;
      height: 300px;
      display: inline-block;
      &-title {
        width: 100%;
        height: 16px;
        font-weight: bold;
        text-indent: 12px;
        margin-bottom: 10px;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 6px;
          height: 100%;
          background: orange;
        }
      }
      &-img {
        width: 100%;
        height: 234px;
        >img {
          width: 100%;
          height: 100%;
        }
      }
      &-content {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        >span{
          color: red;
          font-size: 18px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>