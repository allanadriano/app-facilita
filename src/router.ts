import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Auth from './views/Auth.vue';
import Dash from './views/Dash.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/dash',
    name: 'Dash',
    component: Dash,
  },
  {
    path: '/',
    redirect: '/auth',
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
