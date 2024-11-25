import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CharactersView from '@/views/CharactersView.vue'
import AuthorView from '@/views/AuthorView.vue'
import WorldView from '@/views/WorldView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/Characters",
    name: "characters",
    component: CharactersView
  },
  {
    path: "/Author",
    name: "author",
    component: AuthorView
  },
  {
    path: "/World",
    name: "world",
    component: WorldView
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
});

export default router
