import { defineField, defineType } from "sanity";

export const signupPageType = defineType({
  name: "signupPage",
  title: "Signup Page",
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
  ]
})