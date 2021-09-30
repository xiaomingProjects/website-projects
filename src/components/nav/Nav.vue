<!--
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2021-09-20 23:38:23
 * @LastEditTime: 2021-09-25 22:34:00
 * @LastEditors: wangXiaoMing
-->
<template>
  <div class="nav">
    <div class="nav-list">
      <div class="nav-list-item" v-for="(item,index) in NavList" :key="index" @click="handleSwitchNav(item,index)">
        {{ $t("menu")[index] }}
      </div>
    </div>
    <div class="nav-title">{{ $t("menu")[activeItemIndex] }}</div>
  </div>
</template>

<script>
import { NavList } from './Navigator'
export default {
  name: 'Nav',
  data() {
    return {
      NavList,
      activeItemIndex: 0 
    }
  },
  methods: {
    handleSwitchNav(item,index) {
      this.activeItemIndex = index
      this.$router.push({path: item.router})
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  .nav-list {
    width: 100%;
    height: 50px;
    background: #1b4f17;
    display: flex;
    justify-content: center;
    align-items: center;
    &-item{
      height: 40px;
      font-weight: bold;
      color: white;
      line-height: 40px;
      margin-right: 6px;
      cursor: pointer;
      padding: 0 8px;
      border-bottom: 2px solid transparent;
      &:hover {
        border-bottom: 2px solid white;
      }
    }
  }
  &-title {
    width: 100%;
    height: 160px;
    color: black;
    font-size: 34px;
    font-weight: 800;
    text-align: center;
    line-height: 160px;
    background: #fdf2de;
  }
}
</style>