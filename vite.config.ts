import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

const pathResolve = (pathname) => path.resolve(__dirname, pathname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(),"src/assets/icons")],
      symbolId: "icon-[dir]-[name]",
      inject:'body-last',
    })
  ],
  resolve: {
    alias: {
      "@": pathResolve("./src")
    }
  },
  server: {
    port: 3000
  }
});
