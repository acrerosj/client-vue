import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    alias: "/clientes",
    name: "clientes",
    component: () => import("./components/ClientsList")
  },
  {
    path: "/clientes/:id",
    name: "client-detail",
    component: () => import("./components/ClientDetail")
  },
  {
    path: "/clientes/add",
    name: "client-add",
    component: () => import("./components/ClientAdd")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;