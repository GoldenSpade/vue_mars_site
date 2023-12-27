import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingleCard from '../views/SingleCard.vue'
import NoDataMessage from '../components/NoDataMessage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/vue_mars_site/',
      component: RouterView,
      children: [
        {
          path: '/vue_mars_site/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/vue_mars_site/images/:imageId',
          name: 'singleCard',
          component: SingleCard,
          props: true
        },
        {
          path: '/vue_mars_site/:notFound(.*)',
          component: NoDataMessage
        }
      ]
    }
  ]
})

export default router
