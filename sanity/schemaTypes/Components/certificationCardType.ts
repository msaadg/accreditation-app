import { defineField, defineType } from "sanity";

export const certificationCardType = defineType({
  name: "certificationCard",
  title: "Certification Card",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "stamp",
      type: "reference",
      to: [{ type: "stamps" }],
    }),
    defineField({
      name: "cardBenefits",
      title: "Card Benefits",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});