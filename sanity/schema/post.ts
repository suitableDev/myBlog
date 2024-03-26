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
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },      
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
      name: "intro",
      title: "Intro",
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
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
    },
    {
      name: "paragraphs",
      title: "Paragraphs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
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
              name: "heading",
              title: "Heading",
              type: "string",
              validation: (Rule: Rule) => Rule.max(50).error("Max 50 characters"),
            },
            {
              name: "text",
              title: "Text",
              type: "array",
              of: [
                { type: "block" },
                {
                  type: "image",
                  fields: [{ type: "text", name: "alt", title: "Alt" }],
                },
              ],
            }
          ]
        }
      ]
    }
  ],
};
