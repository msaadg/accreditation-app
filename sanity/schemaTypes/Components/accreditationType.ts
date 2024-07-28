import { defineField, defineType } from "sanity";

export const accreditationType = defineType({
  name: "accreditation",
  title: "Accreditation",
  type: "document",
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})