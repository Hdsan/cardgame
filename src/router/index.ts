import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/Login.vue';
import Error from '../pages/Error.vue';
import Game from '../pages/Game.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/error', component: Error },
  { path: '/game', component: Game },
  { path: '/:pathMatch(.*)*', redirect: '/error' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;