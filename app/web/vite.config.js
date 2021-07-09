import vue from "@vitejs/plugin-vue"

export default {
  base: "./",
  plugins: [vue()],
  optimizeDeps: {
    include: ["schart.js"]
  },
  build: {
    manifest: true,
    rollupOptions: {
      // 覆盖默认的 .html 入口
      input: "/src/main.js"
    }
  }
}
