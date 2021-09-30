/*
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2021-09-22 20:15:25
 * @LastEditTime: 2021-09-26 20:48:09
 * @LastEditors: wangXiaoMing
 */
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// var CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
          { from: path.join(__dirname,'./src/commonData/Alert.js'),
            to: '' 
          },
          { from: path.join(__dirname,'./src/commonData/SecondHandPurchase.js'),
            to: '' 
          }
        ])
    ]
  }
}