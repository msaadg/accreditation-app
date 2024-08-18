import { defineField, defineType } from "sanity";

export const criteriaEducationalPageType = defineType({
  name: "criteriaEducationalPage",
  title: "Criteria Educational Page",
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
      name: "description1",
      type: "text",
    }),
    defineField({
      name: "description2",
      type: "text",
    }),
    defineField({
      name: "attributes",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "bgCriteriaEducationalImg",
      type: "reference",
      to: [{ type: "bgImg" }],
    }),
    defineField({
      name: "management",
      type: "text",
    }),
    defineField({
      name: "progress",
      type: "text",
    }),
    defineField({
      name: "implications",
      type: "text",
    }),
    defineField({
      name: "standard1",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "text",
        }
      ]
    }),
    defineField({
      name: "standard2",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "text",
        }
      ]
    }),
    defineField({
      name: "standard3",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "text",
        }
      ]
    }),
    defineField({
      name: "standard4",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "text",
        }
      ]
    }),
    defineField({
      name: "standard5",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "text",
        }
      ]
    }),
    defineField({
      name: "standard6",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "text",
        }
      ]
    }),
    defineField({
      name: "standard7",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "text",
        }
      ]
    }),
    defineField({
      name: "standard8",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "text",
        }
      ]
    }),
    defineField({
      name: "standard9",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "text",
        }
      ]
    }),
  ]
});