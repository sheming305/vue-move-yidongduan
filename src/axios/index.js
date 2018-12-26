import Vue from 'vue'
//import {
//Message
//} from 'element-ui'
import axios from 'axios'
import router from '@/router'

// 如果服务器返回错误，Message弹出错误
axios.interceptors.response.use(res => {
  // console.log(res)
  if (res.data.status !== undefined) {
    if (res.data.status === 401) {
//    Message.error('登录以过期，请重新登录')
//    localStorage.removeItem('token')
//    sessionStorage.removeItem('token')
//    router.push({
//      name: 'login'
//    })
    }
    if (res.data.status === 1) {
      Message.error(res.data.msg)
      // console.log(res.data)
      return Promise.reject(res.data.msg)
      // return res.data
    } else {
      return res.data
    }
  } else {
    return res.data
  }
}, err => {
  return Promise.reject(err)
})

axios.interceptors.request.use(
  config => {
    // console.log(config)
    let token = localStorage.getItem('token') || sessionStorage.getItem('token')
    if (token) { // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
      config.headers.common['X-token'] = token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// const URL = 'http://e.com'
const URL = 'http://job.appclouds.cn'

// 请求的baseURL
axios.defaults.baseURL = URL

Vue.prototype.$axios = axios
Vue.prototype.$axiosURL = () => URL
Vue.prototype.$axiosMessage = res => Message({
  message: res.msg,
  type: res.status === 0 ? 'success' : 'error'
})
