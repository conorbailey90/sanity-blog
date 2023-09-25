import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'nigels-blog',

  projectId: 's7aujfns',
  dataset: 'production',
  basePath: '/studio',
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

// export default defineConfig({
//   name: process.env.SANITY_STUDIO_NAME,
//   title: process.env.SANITY_STUDIO_TITLE,
//   projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
//   dataset: process.env.SANITY_STUDIO_DATASET!,
//   basePath: '/studio',
//   plugins: [deskTool(), visionTool()],

//   schema: {
//     types: schemaTypes,
//   },
// })
