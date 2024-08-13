import { defineField, defineType } from "sanity";

export const stampsType = defineType({
  name: "stamps",
  title: "Stamps",
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