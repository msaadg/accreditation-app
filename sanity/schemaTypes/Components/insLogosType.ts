import { defineField, defineType } from "sanity";

export const insLogosType = defineType({
  name: "insLogos",
  title: "Ins Logos",
  type: "document",
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    })
  ],
})