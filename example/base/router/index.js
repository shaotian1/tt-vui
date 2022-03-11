import Vue from 'vue';
import Router from 'vue-router';

import Home from '../../Home';

Vue.use(Router);

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
    },
  ],
});

export default router;
