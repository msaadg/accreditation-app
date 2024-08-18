import { defineField, defineType } from "sanity";

export const educationalAccreditationPageType = defineType({
  name: "educationalAccreditationPage",
  title: "Educational Accreditation Page",
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
      name: "bgEducationalAccreditationImg",
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
      name: "funds",
      type: "text"
    }),
    defineField({
      name: "faculty",
      type: "text"
    }),
    defineField({
      name: "value",
      type: "text"
    }),
    defineField({
      name: "businesses",
      type: "text"
    }),
    defineField({
      name: "allocation",
      type: "text"
    }),
    defineField({
      name: "edge",
      type: "text"
    }),
    defineField({
      name: "study",
      type: "text"
    }),
    defineField({
      name: "markets",
      type: "text"
    }),
    defineField({
      name: "silver",
      type: "reference",
      to: [{ type: "certificationCard" }]
    }),
    defineField({
      name: "gold",
      type: "reference",
      to: [{ type: "certificationCard" }]
    }),
    defineField({
      name: "platinum",
      type: "reference",
      to: [{ type: "certificationCard" }]
    }),
    defineField({
      name: "diamond",
      type: "reference",
      to: [{ type: "certificationCard" }]
    }),
    defineField({
      name: "logos",
      type: "array",
      of: [{ type: "reference", to: [{ type: "insLogos" }] }],
    }),
  ]
})