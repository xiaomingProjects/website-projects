<!--
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2021-09-20 10:15:35
 * @LastEditTime: 2021-09-21 21:44:15
 * @LastEditors: wangXiaoMing
-->
<template>
  <div class="header">
    <div class="title">{{ $t('header.title') }}</div>
    <div class="introduce">
      <img src="@/assets/header/place.png" >
      <div>
        <div>{{ $t('header.place') }}</div>
        <div>TEL 0721-26-6662 / FAX 0721-25-6613</div>
        <div>{{ $t('header.mobile') }} 080-2458-7188 080-4649-1198</div>
      </div>
    </div>
    <div class="buttons">
      <PopWindowBut></PopWindowBut>
      <div>
        <el-dropdown @command="handleCommand">
          <img class="img" src="@/assets/header/china.png" v-if="'zh' === $i18n.locale">
          <img class="img" src="@/assets/header/japanese.png" v-else-if="'japanese' === $i18n.locale">
          <img class="img" src="@/assets/header/usa.png" v-else>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="japanese">日本語</el-dropdown-item>
            <el-dropdown-item command="zh">中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import PopWindowBut from './PopWindowBut.vue'
export default {
  name: 'Header',
  components: { PopWindowBut },
  methods: {
    handleCommand(lang) {
      this.$i18n.locale = lang // 设置给本地的i18n插件
      this.$message.success('success')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  // background: url(~@/assets/header/title.jpeg) no-repeat;
  background-size: 100% 100%;
  .title {
    width: 45%;
    height: 50px;
    font-size: 40px;
    font-weight: bold;
    font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    text-align: center;
  }
  .introduce {
    width: 35%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    > div {
      font-weight: bold;
    }
  }
  .buttons {
    width: 15%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .img {
      width: 40px;
      height: 30px;
      cursor: pointer;
    }
  }
}
</style>