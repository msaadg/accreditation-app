import { defineField, defineType } from "sanity";

export const educationalInstitutePageType = defineType({
  name: "educationalInstitutePage",
  title: "Educational Institute Page",
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
      name: "educationalInstitutes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "educationalInstitute" }] }],
    })
  ]
})