import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';
import Works from '../components/Works.vue';
import Essays from '../components/Essays.vue';
import Photos from '../components/Photos.vue';

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