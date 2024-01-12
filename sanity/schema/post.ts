import { Rule } from "sanity";

export const post = {
  name: "post",
  title: "Post",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: (Rule: Rule) => Rule.max(200).error("Max 200 characters"),
    },
    {
        name: "body",
        title: "Body",
        type: "array",
        of: [
          { type: "block" },
          {
            type: "image",
            fields: [{ type: "text", name: "alt", title: "Alt" }],
          },
        ],
      },
      {
        name: "thumbnail",
        title: "Thumbnail",
        type: "image",
        options: {
          hotspot: true,
        },
        validation: (Rule: Rule) => Rule.required().error("Thumbnail is required"),
      
        fields: [
          {
            name: 'alt',
            title: 'Alt text',
            type: 'string',
            validation: (Rule: Rule) => Rule.required().error("Alt text is required"),
          }
        ]
      },
      {
        name: "tags",
        title: "Tags",
        type: "array",
        of: [{ type: "reference", to: [{ type: "tag" }] }],
      },
  ],
};