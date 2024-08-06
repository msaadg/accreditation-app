import { defineType, defineField } from "sanity";

export const bioDataType = defineType({
  name: "bioData",
  title: "BioData",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "email",
      type: "email",
      title: "Email",
    }),
    defineField({
      name: "phone",
      type: "string",
      title: "Phone",
    }),
    defineField({
      name: "address",
      type: "string",
      title: "Address",
    })
  ]
});
