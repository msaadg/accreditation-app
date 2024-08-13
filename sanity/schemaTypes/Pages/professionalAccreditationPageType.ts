import { defineField, defineType } from "sanity";

export const professionalAccreditationPageType = defineType({
  name: "professionalAccreditationPage",
  title: "Professional Accreditation Page",
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
      name: "bgProfessionalAccreditationImg",
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
      name: "credibility",
      type: "string"
    }),
    defineField({
      name: "prospects",
      type: "string"
    }),
    defineField({
      name: "recognition",
      type: "string"
    }),
    defineField({
      name: "opportunities",
      type: "string"
    }),
    defineField({
      name: "reputation",
      type: "string"
    }),
    defineField({
      name: "resources",
      type: "string"
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
    })
  ]
})