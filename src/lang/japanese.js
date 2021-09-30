/*
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2021-09-19 14:36:50
 * @LastEditTime: 2021-09-26 20:27:41
 * @LastEditors: wangXiaoMing
 */

// 默认导出
export default {
  header: {
    title: '天棋国際株式会社',
    place: '大阪府福田林市梅林里4-2330',
    mobile:'携带'
  },
	menu: ['家', '会社概要','中古購入','スクラップ購入','出張・通信調達'],
  alert: {
    title: '通知する',
    content: window.japaneseAlert
  },
  SecondHandPurchaseList: {
    title: `
      買取価格はすべて税込価格となります。
      買取価格は常に変動しております。ホームページの更新も常に行っておりますが、実際の買取価格と異なる場合がございます。
      最新の情報については、お手数ですがお電話にてお問い合わせください。
      
      TEL`,
      list: window.SecondHandPurchaseList
  }
}
