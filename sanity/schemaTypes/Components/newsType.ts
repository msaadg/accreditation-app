import { defineField, defineType } from "sanity";

export const newsType = defineType({
  name: "news",
  title: "News",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: 'title',
        maxLength: 50,
      },
    }),
    defineField({
      name: "preview",
      type: "text",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        }
      ]
    })
  ]
})