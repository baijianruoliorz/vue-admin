'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //写自己的后端API localhost... 这里是开发环境 prod生产
 // BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"', 是这个地址再拼接方法的地址
   BASE_API: '"http://localhost:9001"',
})
