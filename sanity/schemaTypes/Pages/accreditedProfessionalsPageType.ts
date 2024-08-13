import { defineField, defineType } from "sanity";

export const accreditedProfessionalsPageType = defineType({
  name: "accreditedProfessionalsPage",
  title: "Accredited Professionals Page",
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
      name: "bgAccreditedProfessionalsImg",
      type: "reference",
      to: [{ type: "bgImg" }],
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "accreditedProfessionals",
      type: "array",
      of: [{ type: "reference", to: [{ type: "accreditedProfessional" }] }],
    })
  ]
})