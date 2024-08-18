import { defineField, defineType } from "sanity";

export const processEducationalPageType = defineType({
  name: "processEducationalPage",
  title: "Process Educational Page",
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
      name: "bgProcessEducationalImg",
      type: "reference",
      to: [{ type: "bgImg" }],
    }),
  ]
});
