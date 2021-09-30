<!--
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2021-09-21 00:25:43
 * @LastEditTime: 2021-09-21 22:12:20
 * @LastEditors: wangXiaoMing
-->
<template>
  <div class="home">
    <AlertPane></AlertPane>
  </div>
</template>

<script>
import AlertPane from '@/components/home/AlertPane.vue'
export default {
  name: 'Home',
  components: {AlertPane}
}
</script>

<style lang="scss" scoped>
.home {
  width: 90%;
  margin: 0 auto;
  padding-top: 60px;
}
</style>