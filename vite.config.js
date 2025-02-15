import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  base: "/portfolio-new",
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "project-template.html",
          dest: ".",
        },
        {
          src: "project1.html",
          dest: ".",
        },
        // Add other project HTML files here
      ],
    }),
  ],
});
