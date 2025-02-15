import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  base: "/portfolio-new/",
  plugins: [
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          cssPath: "/portfolio-new/assets/style.css",
          jsPath: "/portfolio-new/assets/sectionGenerator.js",
        },
      },
    }),
    viteStaticCopy({
      targets: [
        {
          src: "project1.html",
          dest: ".",
        },
        // Add other project HTML files here
      ],
    }),
  ],
});
