import { defineField, defineType } from "sanity"

export const hero = defineType({
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Surligne (petit texte au-dessus du titre)",
      type: "string",
    }),
    defineField({
      name: "headline",
      title: "Titre principal",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "headlineAccent",
      title: "Accent italique (partie en italique à la fin du titre)",
      type: "string",
    }),
    defineField({
      name: "subheadline",
      title: "Sous-titre",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "primaryCtaLabel",
      title: "Bouton principal · libellé",
      type: "string",
    }),
    defineField({
      name: "primaryCtaHref",
      title: "Bouton principal · lien",
      type: "string",
    }),
    defineField({
      name: "secondaryCtaLabel",
      title: "Bouton secondaire · libellé",
      type: "string",
    }),
    defineField({
      name: "secondaryCtaHref",
      title: "Bouton secondaire · lien",
      type: "string",
    }),
  ],
})
