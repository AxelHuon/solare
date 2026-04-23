import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"
import { presentationTool, defineDocuments } from "sanity/presentation"
import { schemaTypes } from "./sanity/schemas"

export default defineConfig({
  name: "solare",
  title: "Solare",
  projectId: "vq2xrbjk",
  dataset: "production",
  plugins: [
    presentationTool({
      previewUrl: {
        origin:
          typeof location === "undefined"
            ? "http://localhost:4321"
            : location.origin,
        preview: "/",
      },
      resolve: {
        mainDocuments: defineDocuments([
          {
            route: "/",
            filter: `_type == "page" && slug.current == "home"`,
          },
          {
            route: "/:slug",
            filter: `_type == "page" && slug.current == $slug`,
          },
        ]),
        locations: {
          page: {
            select: { title: "title", slug: "slug.current" },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || "Page",
                  href: doc?.slug === "home" ? "/" : `/${doc?.slug ?? ""}`,
                },
              ],
            }),
          },
        },
      },
    }),
    structureTool(),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
