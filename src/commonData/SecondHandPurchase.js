/*
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2021-09-25 22:42:17
 * @LastEditTime: 2021-09-26 21:05:20
 * @LastEditors: wangXiaoMing
 */
const SecondHandPurchaseList = [
  {
    chinese: {
      title: 'PC机身小',
      picUrl: 0,
      price: '500元',
      unit: '个'
    },
    japanese: {
      title: 'パソコン本体 小',
      picUrl: 0,
      price: '500円',
      unit: '台'
    },
    english: {
      title: 'PC body small',
      picUrl: 0,
      price: '500 yen',
      unit: 'unit'
    }
  }
]

window.SecondHandPurchaseList = SecondHandPurchaseList;
console.log(window.SecondHandPurchaseList)
