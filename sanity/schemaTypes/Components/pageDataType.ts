import { defineField } from "sanity";

export const pageDataType = defineField({
  name: "pageData",
  title: "Page Data",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "bioData",
      type: "reference", 
      to: [{ type: "bioData" }],
      title: "Bio Data"
    }),
    defineField({
      name: "StatsInfo",
      type: "reference", 
      to: [{ type: "stats" }],
      title: "Stats Info"
    }),
    defineField({
      name: "bgImg",
      type: "reference",
      to: [{ type: "bgImg" }],
    }),
    defineField({
      name: "facebook",
      type: "url",
    }),
    defineField({
      name: "twitter",
      type: "url",
    }),
    defineField({
      name: "insta",
      type: "url",
    }),
    defineField({
      name: "linkedIn",
      type: "url",
    }),
    defineField({
      name: "youtube",
      type: "url",
    }),
  ]
})