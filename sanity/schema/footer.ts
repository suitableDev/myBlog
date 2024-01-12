import { defineType, Rule } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "words",
      title: "Words",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Alt text is required"),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
  ],
});