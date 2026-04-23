// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import sanity from "@sanity/astro"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sanity({
      projectId: "vq2xrbjk",
      dataset: "production",
      useCdn: false,
      studioBasePath: "/admin",
      studioRouterHistory: "hash",
      stega: {
        studioUrl: "/admin#",
      },
    }),
    react(),
  ],
})
