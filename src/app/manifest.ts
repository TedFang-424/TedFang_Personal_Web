import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dazheng Ted Fang",
    short_name: "Dazheng Fang",
    description:
      "Portfolio website for Dazheng Ted Fang covering robotics, real-time systems, production software, and applied AI.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
