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
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (Rule: Rule) =>
            Rule.required().error("Alt text is required"),
        },
      ],
    },
    {
      name: "links",
      title: "Links",
      type: "object",
      fields: [
        {
          name: "playing",
          title: "Playing",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "text",
                  title: "Text",
                  type: "string",
                },
                {
                  name: "url",
                  title: "URL",
                  type: "url",
                },
              ],
            },
          ],
        },
        {
          name: "listening",
          title: "Listening",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "artist",
                  title: "Artist",
                  type: "string",
                },
                {
                  name: "trackname",
                  title: "Track Name",
                  type: "string",
                },
                {
                  name: "url",
                  title: "URL",
                  type: "url",
                },
              ],
            },
          ],
        },
        {
          name: "watching",
          title: "Watching",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "text",
                  title: "Text",
                  type: "string",
                },
                {
                  name: "url",
                  title: "URL",
                  type: "url",
                },
              ],
            },
          ],
        },
      ],
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
                  name: "alt",
                  title: "Alt text",
                  type: "string",
                  validation: (Rule: Rule) =>
                    Rule.required().error("Alt text is required"),
                },
              ],
            },
            {
              name: "heading",
              title: "Heading",
              type: "string",
              validation: (Rule: Rule) =>
                Rule.max(50).error("Max 50 characters"),
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
            },
          ],
        },
      ],
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule: Rule) => Rule.max(5),
      description: "Rate the week",
    },
    {
      name: 'symbol',
      title: 'Symbol',
      type: 'iconPicker',
      options: {
        storeSvg: true,
        providers: ["fa"],
    },
      description: "Select the symbol that represents your rating",
      validation: (Rule: Rule) =>
        Rule.custom((value, { document }) => {
          // Check if rating is present and if so, symbol should also be present
          const rating = document && document.rating;
          if (rating !== undefined && rating !== null) {
            return value !== undefined && value !== null
              ? true
              : "Symbol is required when rating is chosen.";
          }
          // If rating is not chosen, no validation needed for symbol
          return true;
        }),
    },
    {
      name: "ratingblurb",
      title: "Rating blurb",
      type: "text",
      validation: (Rule: Rule) => Rule.max(200).error("Max 200 characters"),
    },
  ],
};
