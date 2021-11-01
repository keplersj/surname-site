import { VitePWA } from "vite-plugin-pwa";
import compress from "vite-plugin-compress";
import { minifyHtml } from "vite-plugin-html";

export default {
  plugins: [
    VitePWA({
      includeAssets: ["**/*"],
      manifest: {
        name: "Sticka-Jones Website",
        short_name: "Sticka-Jones",
        description: "Sticka-Jones Landing Page",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#000000",
        display: "minimal-ui",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
    minifyHtml(),
    // compress(),
  ],
};
