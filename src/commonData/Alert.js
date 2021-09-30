/*
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2021-09-21 21:48:33
 * @LastEditTime: 2021-09-22 21:05:08
 * @LastEditors: wangXiaoMing
 */
const zhAlert = {
  "2021/09/21 通知名称测试": '通知内容测试这是一段很长很长的测试通知内容啊啊啊啊啊'
}

const enAlert = {
  '2021/09/21 englishName': 'this is a part of test content and i need to input a long a long a long content aaaa'
}

const japaneseAlert = {
  '2021/09/21 通知名テスト': '通知内容テストこれは非常に長くて長いテスト通知内容ですahah ah ah'
}

window.zhAlert = zhAlert;
window.enAlert = enAlert;
window.japaneseAlert = japaneseAlert;
console.log(enAlert,zhAlert,japaneseAlert)