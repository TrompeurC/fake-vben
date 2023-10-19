import type { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";

// 白名单

const WHITE_NAME_LIST: string[] = [];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: [],
  scrollBehavior: () => ({ left: 0, top: 0 })
});

export function setRouter(app: App) {
  app.use(router);
}
