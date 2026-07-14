import vine from '@vinejs/vine'

export const createFormValidator = vine.create({
  name: vine.string().trim().minLength(1).maxLength(100),
  description: vine.string().trim().maxLength(255).nullable().optional(),
  fields: vine.record(vine.any()),
  isPrivate: vine.boolean().optional(),
  isClosed: vine.boolean().optional(),
  formThemeId: vine.number().positive().nullable().optional(),
})

export const updateFormValidator = vine.create({
  name: vine.string().trim().minLength(1).maxLength(100).optional(),
  description: vine.string().trim().maxLength(255).nullable().optional(),
  fields: vine.record(vine.any()).optional(),
  isPrivate: vine.boolean().optional(),
  isClosed: vine.boolean().optional(),
  formThemeId: vine.number().positive().nullable().optional(),
})
