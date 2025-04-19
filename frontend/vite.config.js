import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: {
    postcss: path.resolve(__dirname, "postcss.config.js"),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["tailwindcss", "postcss", "autoprefixer"],
  },
  assetsInclude: ['**/*.lottie','**/*.glb', '**/*.gltf'],
});
