import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "@api", replacement: resolve(__dirname, "src/api") },
      { find: "@assets", replacement: resolve(__dirname, "src/assets") },
      { find: "@atoms", replacement: resolve(__dirname, "src/atoms") },
      { find: "@components", replacement: resolve(__dirname, "src/components") },
      { find: "@containers", replacement: resolve(__dirname, "src/containers") },
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
});
