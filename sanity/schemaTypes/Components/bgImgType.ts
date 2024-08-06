import { defineField, defineType } from "sanity";

export const bgImgType = defineType({
  name: "bgImg",
  title: "Background Image",
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