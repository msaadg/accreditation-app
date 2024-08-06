import { defineField, defineType } from "sanity";

export const chapterMemberPageType = defineType({
  name: "chapterMemberPage",
  title: "Chapter Member Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      type: "string",
    }),
    defineField({
      name: "bgImg",
      type: "reference",
      to: [{ type: "bgImg" }],
    }),
    defineField({
      name: "bgChapterMemberImg",
      type: "reference",
      to: [{ type: "bgImg" }],
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
      name: "description",
      type: "text",
    }),
    defineField({
      name: "chapterMembers",
      type: "array",
      of: [{ type: "reference", to: [{ type: "chapterMember" }] }],
    })
  ]
})