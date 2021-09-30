<!--
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2021-09-21 22:01:53
 * @LastEditTime: 2021-09-22 21:51:14
 * @LastEditors: wangXiaoMing
-->
<template>
  <div class="alert-pane">
    <div class="title">{{ $t('alert.title') }}</div>
    <div class="pane">
      <div class="pane-item" v-for="(item,index) in alertList" :key="index" @click="jumpDetail(item)">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlertPane',
  data() {
    return {
      alertList: []
    }
  },
  mounted() {
    this.initAlertList()
  },
  watch: {
    '$i18n.locale'() {
      this.initAlertList()
    }
  },
  methods: {
    initAlertList() {
      this.alertList = []
      const alerts = this.$t('alert.content');
      if(JSON.stringify(alerts) !== {}) {
        for(let i in alerts) {
          this.alertList.push(i)
        }
      }
    },
    jumpDetail(item) {
      let alertItem = {};
      const alerts = this.$t('alert.content');
      for(let i in alerts) {
        if(i === item) {
          alertItem = {[i]: alerts[i]};
          break;
        }
      }
      this.$router.push({
        name: 'alertDetail',
        params: alertItem
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.alert-pane {
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
  .title {
    width: 100%;
    height: 25px;
    font-size: 18px;
    font-weight: bold;
    text-indent: 8px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 25px;
      background: #1b4f17;
      border-radius: 4px;
    }
  }
  .pane {
    width: 100%;
    height: 200px;
    margin-top: 20px;
    border: 1px solid #1b4f17;
    border-radius: 4px;
    overflow-y: auto;
    &-item {
      width: 90%;
      height: 50px;
      margin: 10px auto;
      line-height: 40px;
      border-bottom: 1px solid #1b4f17;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>