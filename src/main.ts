import "ant-design-vue/dist/reset.css";
import "virtual:svg-icons-register";
import "@/design/index.less";

import { createApp } from "vue";
import App from "./App.vue";
import { setupStore } from "./store";

function bootstrap() {
  const app = createApp(App);

  // 初始化 pinia
  setupStore(app);

  app.mount("#app");
}

bootstrap();
