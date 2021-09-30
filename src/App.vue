<!--
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2021-09-19 14:24:09
 * @LastEditTime: 2021-09-21 16:39:51
 * @LastEditors: wangXiaoMing
-->
<template>
  <div id="app">
    <Header></Header>
    <Nav></Nav>
    <router-view></router-view>
    <Footer></Footer> 
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Nav from '@/components/nav/Nav.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  name: 'App',
  components: {Header,Nav,Footer}
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "-apple-system", BlinkMacSystemFont, "Helvetica Neue", Roboto, "Droid Sans", Arial, "Hiragino Kaku Gothic ProN", "Yu Gothic", YuGothic, Meiryo, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
