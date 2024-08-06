import { defineField, defineType } from "sanity";

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      type: "string",
    }),
    defineField({
      name: "bgImg",
      type: "reference",
      to: [{ type: "bgImg" }],
    }),
    defineField({
      name: "bioData",
      type: "reference", 
      to: [{ type: "bioData" }],
      title: "Bio Data"
    }),
    defineField({
      name: "StatsInfo",
      type: "reference", 
      to: [{ type: "stats" }],
      title: "Stats Info"
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "mission",
      type: "text"
    }),
    defineField({
      name: "vision",
      type: "text"
    }),
    defineField({
      name: "educationAccreditation",
      type: "text"
    }),
    defineField({
      name: "professionalAccreditation",
      type: "text"
    }),
    defineField({
      name: "chapterMembers",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "text"
        },
        {
          name: 'chapterImage',
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
        }
      ]
    }),
  ]
})