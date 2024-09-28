import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue';
import About from '../view/About.vue';
import Contact from '../view/Contact.vue';
import Works from '../view/Works.vue';
import Essays from '../view/Essays.vue';
import Photos from '../view/Photos.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/works', component: Works },
  { path: '/essays', component: Essays },
  { path: '/photos', component: Photos },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;