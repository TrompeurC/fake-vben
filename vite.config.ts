import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const pathResolve = (pathname) => path.resolve(__dirname, pathname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": pathResolve("./src")
    }
  }
});
