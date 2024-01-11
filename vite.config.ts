import { defineConfig } from "vite"
import path, { resolve } from "path"
import vue from "@vitejs/plugin-vue"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import svgLoader from "vite-svg-loader"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    /** 将 SVG 静态图转化为 Vue 组件 */
    svgLoader({ defaultImport: "url" }),
    /** SVG */
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/icons/svg")],
      symbolId: "icon-[dir]-[name]"
    }),
  ],
  resolve: {
    alias: {
      /** @ 符号指向 src 目录 */
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    /** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */
    host: true, // host: "0.0.0.0"
    /** 端口号 */
    port: 3333,
    /** 是否自动打开浏览器 */
    open: false,
    /** 跨域设置允许 */
    cors: true,
    /** 端口被占用时，是否直接退出 */
    strictPort: false,
    /** 接口代理 */
    proxy: {
      "/api/v1": {
        target: "https://www.fastmock.site/mock/761e2dda2b8890ab86c928a74e8f6538",
        ws: true,
        /** 是否允许跨域 */
        changeOrigin: true
      }
    },
  },
});
