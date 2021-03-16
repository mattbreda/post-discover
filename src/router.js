import Vue from 'vue';
import Router from 'vue-router';

Vue.use (Router);

export default new Router ({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {path: '/', redirect: '/landing'},
    {
      path: '/landing',
      name: 'landing',
      component: () => import ('./views/Landing.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import ('./views/Home.vue'),
    },
    {
      path: '/album/:id',
      name: 'album',
      component: () => import ('./views/SingleAlbum.vue'),
    },
  ],
});
