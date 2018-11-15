import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/page/root'
import Home from '@/page/home'
import Mine from '@/page/mine'
import Forum from '@/page/forum'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Root,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'mine',
          name: 'mine',
          component: Mine
        },
        {
          path: 'forum',
          name: 'forum',
          component: Forum
        }
      ]
    }
  ]
})
