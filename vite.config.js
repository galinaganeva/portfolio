import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/portfolio-new/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        project1: resolve(__dirname, "project1/project1.html"),
      },
    },
  },
});
