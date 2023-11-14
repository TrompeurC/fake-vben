import type { App } from "vue";
import { createI18n } from 'vue-i18n'


export let i18n: ReturnType<typeof createI18n>;
export async function setupI18n (app: App) {
  // const options =
  // i18n = createI18n(options);
  app.use(i18n);
}
