import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingleCard from '../views/SingleCard.vue'
import About from '../views/AboutView.vue'
import Tr from '@/i18n/translation'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/:locale?',
      component: RouterView,
      beforeEnter: Tr.routeMiddleware,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'about',
          name: 'about',
          component: About
        },
        {
          path: '/:locale?/images/:imageId',
          name: 'singleCard',
          component: SingleCard,
          props: true
        }
      ]
    }
  ]
})


export default router
