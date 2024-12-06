import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Editor",
    short_name: "Editor",
    description: "A collaborative editor built with Next.js :)",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/static/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/static/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
