import { defineField, defineType } from "sanity";

export const accreditedProfessionalType = defineType({
  name: "accreditedProfessional",
  title: "Accredited Professional",
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
      name: "stamp",
      type: "reference",
      to: [{ type: "stamps" }],
    }),
    defineField({
      name: "bio",
      type: "text",
    }),
    defineField({
      name: 'professionalImage',
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
    }),
    defineField({
      name: "registration",
      type: "string",
    }),
    defineField({
      name: "status",
      type: "string",
    }),
    defineField({
      name: "since",
      type: "string",
    }),
    defineField({
      name: "method",
      type: "string"
    }),
    defineField({
      name: "university",
      type: "string"
    }),
    defineField({
      name: "city",
      type: "string"
    }),
    defineField({
      name: "education",
      type: "string"
    }),
    defineField({
      name: "format",
      type: "string"
    }),
    defineField({
      name: 'certificate',
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
    }),
    defineField({
      name: 'businessCard',
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
  ]
});