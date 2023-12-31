
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../Pages/HomePage.vue';
import AboutPage from '../Pages/AboutPage.vue';
import ContactPage from '../Pages/ContactPage.vue';
import ProjectsPage from '../Pages/ProjectsPage.vue';


const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
  { path: '/projects', component: ProjectsPage },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
