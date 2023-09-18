import { defineConfig } from "vite";

import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

import { resolve } from "path";

// https://vitejs.dev/config/s
export default defineConfig({
  resolve: {
    alias: [
      { find: "@api", replacement: resolve(__dirname, "src/api") },
      { find: "@assets", replacement: resolve(__dirname, "src/assets") },
      { find: "@atoms", replacement: resolve(__dirname, "src/atoms") },
      { find: "@components", replacement: resolve(__dirname, "src/components") },
      { find: "@containers", replacement: resolve(__dirname, "src/containers") },
      { find: "@hooks", replacement: resolve(__dirname, "src/hooks") },
      { find: "@lib", replacement: resolve(__dirname, "src/lib") },
      { find: "@pages", replacement: resolve(__dirname, "src/pages") },
      { find: "@utils", replacement: resolve(__dirname, "src/utils") },
      { find: "@helpers", replacement: resolve(__dirname, "src/helpers") },
    ],
  },
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    tsconfigPaths(),
  ],

  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },

  server: {
    proxy: {
      "/api": {
        target: "https://todo-list-server-7lb3dtbwq-contentlee.vercel.app",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
