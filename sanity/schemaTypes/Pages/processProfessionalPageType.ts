import { defineField, defineType } from "sanity";

export const processProfessionalPageType = defineType({
  name: "processProfessionalPage",
  title: "Process Professional Page",
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
      name: "bgProcessProfessionalImg",
      type: "reference",
      to: [{ type: "bgImg" }],
    }),
  ]
});
