import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import ArticlesView from "../views/ArticlesView.vue";
import DocsView from "../views/DocsView.vue";
import GalleryView from "../views/GalleryView.vue";
import TemplatesView from "../views/TemplatesView.vue";
import GamesView from "../views/GamesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: PortfolioView,
    },
    {
      path: "/articles",
      name: "articles",
      component: ArticlesView,
    },
    {
      path: "/docs",
      name: "docs",
      component: DocsView,
    },
    {
      path: "/gallery",
      name: "gallery",
      component: GalleryView,
    },
    {
      path: "/templates",
      name: "templates",
      component: TemplatesView,
    },
    {
      path: "/games",
      name: "games",
      component: GamesView,
    },
  ],
});

export default router;
