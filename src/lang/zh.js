/*
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2021-09-19 14:36:38
 * @LastEditTime: 2021-09-26 20:44:04
 * @LastEditors: wangXiaoMing
 */
// 默认导出
export default {
  header: {
    title: '天棋国际株式会社',
    place: '大阪府福田林市梅林里4-2330',
    mobile: '行动电话'
  },
	menu: ['主页','公司介绍','二手购买','废品采购','出差/通讯采购'],
  alert: {
    title: '通知',
    content: window.zhAlert
  },
  SecondHandPurchaseList: {
    title: `
      所有购买价格均含税。
      购买价格是不断变化的。我们会不断更新我们的网站，但实际购买价格可能会有所不同。
      请通过电话与我们联系以获取最新信息。
      
      电话 `,
    list: window.SecondHandPurchaseList
  }
}