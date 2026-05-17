import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/local-demo": {
        target: "http://127.0.0.1:7860",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/local-demo/, ""),
      },
      "/stream.mjpeg": {
        target: "http://127.0.0.1:7860",
        changeOrigin: true,
      },
      "/events": {
        target: "http://127.0.0.1:7860",
        changeOrigin: true,
      },
      "/prompt": {
        target: "http://127.0.0.1:7860",
        changeOrigin: true,
      },
      "/select_model": {
        target: "http://127.0.0.1:7860",
        changeOrigin: true,
      },
      "/start_demo": {
        target: "http://127.0.0.1:7860",
        changeOrigin: true,
      },
      "/stop_demo": {
        target: "http://127.0.0.1:7860",
        changeOrigin: true,
      },
    },
  },
});
