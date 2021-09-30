<!--
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2021-09-20 20:13:52
 * @LastEditTime: 2021-09-20 21:15:13
 * @LastEditors: wangXiaoMing
-->
<template>
<el-popover
    placement="bottom"
    width="150"
    trigger="click">
    <img src="@/assets/header/wechat.jpg" class="img">
    <div class="show-pop-but" slot="reference"></div>
  </el-popover>
  
</template>

<script>
export default {
  name: 'PopWindowBut',
}
</script>

<style lang="scss" scoped>
.show-pop-but {
  width: 40px;
  height: 40px;
  cursor: pointer;
  background: url(~@/assets/header/wechat.jpg);
  background-size: 100% 100%;
}
.img {
  width: 150px;
  height: 150px;
}
</style>