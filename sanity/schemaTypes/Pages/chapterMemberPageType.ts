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
      name: "bgChapterMemberImg",
      type: "reference",
      to: [{ type: "bgImg" }],
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