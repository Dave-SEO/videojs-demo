import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import xigua from '@/components/xigua'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/xigua',
      name: 'xigua',
      component: xigua
    }
  ]
})
