import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  server: {
    port: 3002,
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "./src/index.ts", // 这里指定了入口文件
      name: "ElTableTreeDnd",
      fileName: (format) => `el-table-tree-dnd.${format}.js`,
    },
    minify: true, // 确保使用压缩器，默认是 'terser'
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue", "element-plus"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
          "element-plus": "ElementPlus",
        },
      },
    },
  },
});
