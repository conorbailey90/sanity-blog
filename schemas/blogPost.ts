import { defineField } from "sanity";

const blogPost = {
  name: "blogPost",
  title: "Blog Posts",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      description: "Click generate slug to use post tile.",
      validation: (Rule) => Rule.required()
    }),
    {
      name: 'author',
      title: 'Author',
      type: 'string'
    },
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'string',
      description: "Short summary of post.",
      validation: (Rule) => Rule.required().min(10).max(80)
    }),
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string'
        }
      ]
    },
    {
      name: 'content',
      tile: 'Content',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image'}
      ]
    }
    
  
  
 ],
};

export default blogPost;