<!--
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2021-09-21 15:48:13
 * @LastEditTime: 2021-09-21 21:41:17
 * @LastEditors: wangXiaoMing
-->
<template>
  <div class="footer">
    <div>Copyright © {{ $t('header.title') }} All Rights Reserved.</div>
    <div>保留所有权利。</div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 100px;
  color: white;
  background: #1b4f17;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>