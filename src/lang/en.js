/*
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2021-09-19 14:36:30
 * @LastEditTime: 2021-09-26 20:27:26
 * @LastEditors: wangXiaoMing
 */
// 默认导出
export default {
  header: {
    title: '天棋国際株式会社',
    place: 'dabanfu',
    mobile: 'mobile'
  },
	menu: ['Home','Company Profile','Used Purchase','Scrap Purchase','Bussiness Trip/Communication Purchase'],
  alert:  {
    title: 'NOTIFY',
    content: window.enAlert
  },
  SecondHandPurchaseList: {
    title: `
      All purchase prices include tax.
      The purchase price is constantly changing. We are constantly updating our website, but the actual purchase price may differ.
      Please contact us by phone for the latest information.
      
      TEL 072-933-0068`,
      list: window.SecondHandPurchaseList
  }
}