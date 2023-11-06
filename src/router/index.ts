import type { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";

// 白名单 包含基本的静态路由
const WHITE_NAME_LIST: string[] = [];

const getRouteNames = (array: any[]) => {
  array.forEach((item) => {
    WHITE_NAME_LIST.push(item.name);
    getRouteNames(item.children || []);
  });
};

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: [],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

export function setRouter(app: App) {
  app.use(router);
}
