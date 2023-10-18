import { createApp } from "vue";
import App from "./App.vue";
import { setupStore } from "./store";
import 'ant-design-vue/dist/reset.css';

function bootstrap() {
  const app = createApp(App);

  // 初始化 pinia
  setupStore(app);

  app.mount("#app");
}

bootstrap();
