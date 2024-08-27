import { defineField, defineType } from "sanity";

export const qualityPartnersPageType = defineType({
  name: "qualityPartnersPage",
  title: "Quality Partners Page",
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
      name: "partners",
      type: "array",
      of: [{
        type: "object",
        fields: [{
          name: "title",
          type: "string",
        }, {
          name: 'logoImage',
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
        }, {
          name: 'certImage',
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
        }, {
          name: "description",
          type: "text"
        }]
      }],
    })
  ]
})