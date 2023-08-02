import {
  createRouter,
  createWebHistory
} from 'vue-router'
import PanelView from '../views/PanelView.vue'
import ProjectsView from '../views/ProjectsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'panel',
      component: PanelView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    }
  ]
})

export default router