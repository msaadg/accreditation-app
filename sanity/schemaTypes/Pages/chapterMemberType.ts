import { defineField, defineType } from "sanity";

export const chapterMemberType = defineType({
  name: "chapterMember",
  title: "Chapter Member",
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
      name: "bio",
      type: "text",
    }),
    defineField({
      name: 'memberImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    }),
    defineField({
      name: "profession",
      type: "string",
    }),
    defineField({
      name: "since",
      type: "string",
    }),
    defineField({
      name: "education",
      type: "string"
    }),
    defineField({
      name: "experience",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "designation",
              type: "string",
              title: "Designation"
            },
            {
              name: "employer",
              type: "string",
              title: "Employer"
            },
            {
              name: "industry",
              type: "string",
              title: "Industry"
            },
            {
              name: "resp",
              type: "text",
              title: "Responsibilities"
            }
          ],
        }
      ],
      validation: Rule => Rule.required().min(1)
    })
  ]
})