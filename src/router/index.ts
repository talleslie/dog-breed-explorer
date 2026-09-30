import { createRouter, createWebHistory } from 'vue-router'
import ExplorerView from '../views/ExplorerView.vue'
import MyPackView from '../views/MyPackView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'explorer', component: ExplorerView },
    { path: '/my-pack', name: 'my-pack', component: MyPackView },
  ],
})

export default router
