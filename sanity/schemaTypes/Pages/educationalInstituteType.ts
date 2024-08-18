import { defineField, defineType } from "sanity";

export const educationalInstituteType = defineType({
  name: "educationalInstitute",
  title: "Educational Institute",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string"
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
      name: "bio",
      type: "text",
    }),
    defineField({
      name: "preview",
      type: "text",
    }),
    defineField({
      name: 'insImage',
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
      name: "insLogo",
      type: "reference",
      to: [{ type: "insLogos" }]
    }), 
    defineField({
      name: "stamp",
      type: "reference",
      to: [{ type: "stamps" }],
    }),
    defineField({
      name: "language",
      type: "string",
    }),
    defineField({
      name: "city",
      type: "string",
    }),
    defineField({
      name: "status",
      type: "string",
    }),
    defineField({
      name: "studentsCount",
      type: "string",
    }),
    defineField({
      name: "format",
      type: "string",
    }),
    defineField({
      name: "facultyCount",
      type: "string",
    }),
    defineField({
      name: "grantedYear",
      type: "number",
    }),
    defineField({
      name: "programsOffered",
      type: "string",
    }),
    defineField({
      name: "validationPeriod",
      type: "string",
    }),
    defineField({
      name: "educationLevel",
      type: "string",
    }),
    defineField({
      name: "program",
      type: "string",
    }),
    defineField({
      name: "deliveryMethod",
      type: "string",
    }),
    defineField({
      name: "membershipType",
      type: "string",
    }),
    defineField({
      name: "deliveryOption",
      type: "string",
    }),
    defineField({
      name: "membershipNumber",
      type: "string",
    }),
    defineField({
      name: "programFormat",
      type: "string",
    }),
    defineField({
      name: "schoolWeb",
      type: "url",
    }),
    defineField({
      name: "schoolContact",
      type: "url",
    }),
    defineField({
      name: "schoolFacebook",
      type: "url",
    }),
    defineField({
      name: "schoolTwitter",
      type: "url",
    }),
    defineField({
      name: "schooInsta",
      type: "url",
    }),
    defineField({
      name: "schoolLinkedIn",
      type: "url",
    }),
    defineField({
      name: "schoolYoutube",
      type: "url",
    }),
    defineField({
      name: "standardMetrics",
      type: "array",
      of: [{ 
        type: "number",
        validation: Rule => Rule.integer().min(1).max(5) // Ensure each number is an integer between 1 and 5
      }],
      validation: Rule => Rule.required().min(9).max(9) // Ensure exactly 9 entries
    }),
    defineField({
      name: 'insCert',
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
  ]
})