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
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      }
    }),
    defineField({
      name: "subtitle",
      type: "string",
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
      name: "logos",
      type: "array",
      of: [{ type: "reference", to: [{ type: "insLogos" }] }],
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