import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import EstudiantePage from '../views/EstudiantePage.vue'
import ProfesorPage from '../views/ProfesorPage.vue';
import EmpleadoPage from '../views/EmpleadoPage.vue';  

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/estudiante',
    name: 'Estudiante',
    component: EstudiantePage
  },
  {
    path: '/profesor',
    name: 'Profesor',
    component: ProfesorPage
  },
  {
    path: '/empleado',
    name: 'Empleado',
    component: EmpleadoPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
