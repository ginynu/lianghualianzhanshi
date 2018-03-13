import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Start from '../components/Start'
import Page1 from '../components/Page1'
import ItemPage from '../components/ItemPage'
import Swiper2 from '../components/Swiper2'
import Me from '../components/Me'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      component: Swiper2,
    },

    {
      path: '/page1',
      name: 'page1',
      component: Page1,
    },
    {
      path: '/item_page',
      name: 'item_page',
      component: ItemPage,
    },
    {
      path: '/start',
      name: 'start',
      component: Start,
    },
    {
      path: '/me',
      name: 'me',
      component: Me,
    },
    {
      path: '/*',
      redirect: '/item_page'
    },
  ]
})
