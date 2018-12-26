// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'  //支持es6的语法
import Vue from 'vue'
import App from './App'
import router from './router'
import './axios'
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'
import 'lib-flexible/flexible.js'
import 'normalize.css' //为了使浏览器更加一致地呈现所有元素并符合现代标准
import fastclick from 'fastclick'  //延迟网页点击的300ms延迟
Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(mandMobile)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
