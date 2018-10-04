import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/home'
import Categories from '@/components/page/categories'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path:'/categories',
      name:'categories',
      component:Categories
    }
  ]
})
