<!--
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2021-09-21 22:48:10
 * @LastEditTime: 2021-09-22 21:46:49
 * @LastEditors: wangXiaoMing
-->
<template>
  <div class="alert-detail">
    <div class="title">{{ title }}</div>
    <div class="content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: 'AlertDetail',
  data() {
    return {
      title: '',
      content: ''
    }
  },
  watch: {
    '$i18n.locale'() {
      // this.initAlertList()
    }
  },
  mounted() {
    console.log(this.$route)
    this.title = Object.keys(this.$route.params)[0]
    this.content = Object.values(this.$route.params)[0]
  }
}
</script>

<style lang="scss" scoped>
.alert-detail {
  width: 100%;
  height: 300px;
  background: #f1f9fd;
  .title {
    background: rgba(90, 197, 85, 0.05);
    width: 90%;
    height: 60px;
    margin: 20px auto 0;
    padding: 30px 20px 0 20px;
  }
  .content {
    background: rgba(90, 197, 85, 0.05);
    width: 90%;
    height: 100px;
    margin: 0 auto 20px;
    padding: 0 20px 30px 20px;
  }
}
</style>