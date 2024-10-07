import {defineField, defineType} from 'sanity'

export const testeType = defineType({
  name: 'event',
  title: 'Nome',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      type: 'string',
    }),
   
  ],
})