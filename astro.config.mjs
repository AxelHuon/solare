// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import sanity from "@sanity/astro"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        "@sanity/visual-editing",
        "@sanity/visual-editing > react/compiler-runtime",
        "@sanity/visual-editing > @sanity/insert-menu > react/compiler-runtime",
        "@sanity/visual-editing > @sanity/insert-menu > @sanity/ui > react-is",
        "@sanity/visual-editing > @sanity/insert-menu > @sanity/ui > react-compiler-runtime",
        "@sanity/visual-editing > @sanity/insert-menu > @sanity/ui > styled-components",
        "@sanity/visual-editing > @sanity/ui > react-is",
        "@sanity/visual-editing > @sanity/ui > react-compiler-runtime",
        "@sanity/visual-editing > @sanity/ui > styled-components",
        "@sanity/visual-editing > styled-components",
        "@sanity/visual-editing > @sanity/mutate > lodash/groupBy.js",
        "@sanity/visual-editing > @sanity/mutate > lodash/isObject.js",
        "@sanity/visual-editing > @sanity/mutate > lodash/keyBy.js",
        "@sanity/visual-editing > @sanity/mutate > lodash/partition.js",
        "@sanity/visual-editing > @sanity/mutate > lodash/sortedIndex.js",
      ],
    },
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
