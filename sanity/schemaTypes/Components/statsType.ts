import { defineField, defineType } from "sanity";

export const statsType = defineType({
  name: "stats",
  title: "Stats",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "members",
      type: "number",
      title: "Members",
    }),
    defineField({
      name: "countries",
      type: "number",
      title: "Countries",
    }),
    defineField({
      name: "institutes",
      type: "number",
      title: "Institutes",
    }),
    defineField({
      name: "professionals",
      type: "number",
      title: "Professionals",
    })
  ]
});
