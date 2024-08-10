import { defineField, defineType } from "sanity";

export const becomeChapterMemberPageType = defineType({
  name: "becomeChapterMemberPage",
  title: "Become Chapter Member Page",
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
      name: "bgBecomeChapterMemberImg",
      type: "reference",
      to: [{ type: "bgImg" }],
    }),
    defineField({
      name: "proof1",
      type: "text"
    }),
    defineField({
      name: "proof2",
      type: "text"
    }),
    defineField({
      name: "events",
      type: "string"
    }),
    defineField({
      name: "prospects",
      type: "string"
    }),
    defineField({
      name: "opportunity",
      type: "string"
    }),
    defineField({
      name: "publications",
      type: "string"
    }),
    defineField({
      name: "endingTitle",
      type: "string"
    }),
    defineField({
      name: "endingDescription",
      type: "string"
    })
  ]
})