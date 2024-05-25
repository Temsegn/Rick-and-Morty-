import { createRouter, createWebHistory } from 'vue-router';
import character from '../components/character.vue';
import homePage from '../components/HomeView.vue';
import episode from '../components/episode.vue';
import location from '../components/location.vue';
import characterPage from '../views/characterPage.vue';
import locationPage from '../views/locationPage.vue';
import episodePage from '../views/episodePage.vue'
 const routes = [
  {
    path: '/',
    name:'home',
    component: homePage,
  },
  {
    path: '/episode/',
    name: 'episode',
    component: episode,
  },
  {
    path: '/location/',
    name: 'location',
    component: location,
    
  },
  {
    path: '/character/',
    name: 'character',
    component: character,
 
  },
  {
    path: '/character/:id',
    name: 'CharacterPage',
    component: characterPage,
    props:true,
   },
   {
    path: '/location/:id',
    name: 'locationPage',
    component: locationPage,
    props:true,
   },
   {
    path: '/episode/:id',
    name: 'episodePage',
    component: episodePage,
    props:true,
   },
    
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
