import Vue from 'vue'
import Router from 'vue-router'
//import VueResource from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

//Vue.use(VueResource)
let router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

// 路由守卫，验证是否已登录，否则跳转到登陆页面

//router.beforeEach((to, from, next) => {
//if (to.meta.requiresAuth) {
//  if (localStorage.getItem('token') || sessionStorage.getItem('token')) {
//    next()
//  } else {
//    next({ name: 'login' })
//  }
//} else {
//  next()
//}
//})
export default router