import { defineConfig } from "vite";

import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: [
      { find: "@api", replacement: resolve(__dirname, "src/api") },
      { find: "@assets", replacement: resolve(__dirname, "src/assets") },
      { find: "@atoms", replacement: resolve(__dirname, "src/atoms") },
      { find: "@components", replacement: resolve(__dirname, "src/common/components") },
      { find: "@utils", replacement: resolve(__dirname, "src/utils") },
      { find: "@", replacement: resolve(__dirname, "src/") },
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
        target: "http://localhost:8080/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
