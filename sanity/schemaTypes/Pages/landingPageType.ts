import { defineField, defineType } from "sanity";

export const landingPageType = defineType({
  name: "landingPage",
  title: "LandingPage",
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
      name: "Slider",
      type: "array",
      of: [{ type: "reference", to: [{ type: "imgContainer" }] }],
      validation: Rule => Rule.length(4).required(),
    }),
    defineField({
      name: "aboutUs",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "text",
        },
        {
          name: "accreditations",
          type: "array",
          of: [{ type: "reference", to: [{ type: "accreditation" }] }],
          validation: Rule => Rule.length(2).required(),
        }
      ]
    }),
    defineField({
      name: "StatsInfo",
      type: "reference", 
      to: [{ type: "stats" }],
      title: "Stats Info"
    }),
    defineField({
      name: "howAccreditationHelps",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "Q1",
          type: "string",
        },
        {
          name: "Q2",
          type: "string",
        },
        {
          name: "text",
          type: "text",
        }
      ] 
    }),
    defineField({
      name: "chapterMembers",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "text"
        },
        {
          name: 'mainImage',
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
        }
      ]
    }),
    defineField({
      name: "news",
      type: "array",
      of: [{ type: "reference", to: [{ type: "news" }] }],
      validation: Rule => Rule.length(2).required(),
    }),
    defineField({
      name: "events",
      type: "array",
      of: [{ type: "reference", to: [{ type: "event" }] }],
      validation: Rule => Rule.length(4).required(),
    })
  ]
})