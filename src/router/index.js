import { createRouter, createWebHistory } from 'vue-router'
import Shop from '@/views/Shop.vue'
import Contact from '@/views/Contact.vue'
import About from '@/views/About.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/home',
      component:HomeView
    },
    {
      path:'/shop',
      component: Shop,
    },
    {
      path:'/contact',
      component:Contact,
    },
    {
      path:'/about',
      component: About,
    },
  ],
})

export default router
