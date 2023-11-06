import type { App } from "vue";
import { createPinia } from "pinia";

const store = createPinia();

const setupStore = (app: App) => {
  app.use(store);
};

export { setupStore };
